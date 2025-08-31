import asyncHandler from 'express-async-handler'
import Doctor from '../models/doctorsModel.js'
import mongoose from 'mongoose'
// const multer = require('multer')
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error('Invalid file type. Only JPEG and PNG image files are allowed.'), false)
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

const addDoctors = asyncHandler(async (req, res) => {
    const {
        name,
        speciality,
        licenseNumber,
        experience,
        email_id,
        phone_no,
        consultation_fee,
        profilePictureURL
    } = req.body

    const doctor = new Doctor({
        name,
        speciality,
        licenseNumber,
        experience,
        email_id,
        phone_no,
        consultation_fee,
        profilePictureURL
    })
    const createdDoctor = await doctor.save()
    res.status(201).json(createdDoctor)
    // try {
    //     const createdDoctor = await doctor.save();
    //     res.status(201).json(createdDoctor);
    //   } catch (error) {
    //     console.log(error);
    //     res.status(500).json({ message: 'Server Error' });
    //   }
})


// get doctors
const getDoc = asyncHandler(async (req, res) => {
    //  Get all the doctors from MongoDB
    const doctors = await Doctor.find({});
    res.json(doctors);
})

// add the consultant dates into db
const updateDoctor = asyncHandler(async (req, res) => {
    // Get data from DB
    const doctor = await Doctor.findById(req.params.id);
    // const date = doctor.consultant_date.find((a) => a._id === req.params.dateid)
    if (doctor) {
        doctor.name = req.body.name
        doctor.speciality = req.body.speciality,
        doctor.licenseNumber = req.body.licenseNumber,
        doctor.experience = req.body.experience
        doctor.email_id = req.body.email_id
        doctor.phone_no = req.body.phone_no
        doctor.consultation_fee = req.body.consultation_fee

        const updateDoctors = await doctor.save();
        // Send back updated doctors
        res.json(updateDoctors)
    } else {
        res.status(404)
        throw new Error('Could not update doctor')
    }
})


//update the consultant_date of doctor
const updateAppointmentDate = asyncHandler(async (req, res) => {

    var userid = mongoose.Types.ObjectId(req.params.id)
    var dateId = mongoose.Types.ObjectId(req.params.dateid)
    const doctor = await Doctor.updateOne(
        { _id: userid, "consultant_date._id": dateId },
        {
            $set: {
                "consultant_date.$.from": req.body.from,
                "consultant_date.$.to": req.body.to,
            }
        }
    )

    if (doctor) {
        // Send back updated doctors
        const updatedoctor = await Doctor.findById(req.params.id)
        // const updateDoctors = await doctor.save()
        res.json(updatedoctor)
    } else {
        res.status(404)
        throw new Error('Could not update doctor')
    }

})


//delete the appointment from doctor side
const cancelAppointmentDoctor = asyncHandler(async (req, res) => {

    // const doctors = await Doctor.findById(req.params.id)

    var userId = mongoose.Types.ObjectId(req.params.id)
    // console.log("user id", userId)
    var deleteId = mongoose.Types.ObjectId(req.params.deleteid)
    // console.log("delete id", deleteId)
    // console.log("cancel appointment")
    const cancelDate = await Doctor.updateOne(
        { _id: userId },
        {
            $pull: {
                "consultant_date": {
                    //  "consultant_date._id": deleteId,
                    "_id": deleteId,
                }
            }
        },
        { multi: true }

    )

    if (cancelDate) {
        const deleteConsultantDate = await Doctor.findById(req.params.id)
        res.json(deleteConsultantDate);
    }
    else {
        res.status(404)
        throw new Error('Could not found consultant')
    }
})


export { getDoc, addDoctors, updateDoctor, updateAppointmentDate, cancelAppointmentDoctor }