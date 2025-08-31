import Therapy from '../models/therapyModel.js'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'


const addTherapyDetail = asyncHandler(async(req,res)=>{
    const {
        patientName,
        therapycontact,
        therapyemail,
        therapyName,
        therapyFees,
        patientReview,
        therapistName,
        therapyreference
    } = req.body

    const therapyData = new Therapy({
        // _id: req.params.id,
        patientName,
        therapycontact,
        therapyemail,
        therapyName,
        therapyFees,
        patientReview,
        therapistName,
        therapyreference

    })
    const createdTherapyData = await therapyData.save();
    // console.log("success Therapy Data");
    res.status(201).json(createdTherapyData)
})



export {addTherapyDetail}