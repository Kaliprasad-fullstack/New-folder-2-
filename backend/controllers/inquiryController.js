import Inquiry from '../models/inquiryModel.js'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'


const addInquiryDetails = asyncHandler(async(req,res)=>{
    const {
        inquiryName,
        inquirycontact,
        inquiryemail,
        inquirySubject,
        inquiryreference
    } = req.body

    const inquiryData = new Inquiry({
        // _id: req.params.id,
        inquiryName,
        inquirycontact,
        inquiryemail,
        inquirySubject,
        inquiryreference

    })
    const createdInquiry = await inquiryData.save();
    // console.log("success  Inquiry Data");
    res.status(201).json(createdInquiry)

})

export {addInquiryDetails}