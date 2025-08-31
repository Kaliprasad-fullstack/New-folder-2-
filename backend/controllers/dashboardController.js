
import Appointment from '../models/AppointmentModel.js'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import crypto from 'crypto';
import dayjs from 'dayjs'

//add details
const addAppointmentDetails = asyncHandler(async (req, res) => {
    const {
        patient,
        appointmentDate,
        appointmentTime,
        patientName,
        patientContact
        
    } = req.body
    const AppointmentData = new Appointment({
        patient,
        appointmentDate,
        appointmentTime,
        patientName,
        patientContact
    })
    const createAppointment = await AppointmentData.save();
    // console.log("date",appointmentDate)
    // console.log("date",appointmentTime)
    res.status(201).json(createAppointment)

})


const getAppointmentDetails = asyncHandler(async (req, res) => {
    const allAppointments = await Appointment.find({})
    res.json(allAppointments)
    // console.log(today.toDate(),tomorrow.toDate())
})

export {addAppointmentDetails,getAppointmentDetails}