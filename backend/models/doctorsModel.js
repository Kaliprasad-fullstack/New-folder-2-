import mongoose from 'mongoose'

const doctorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        speciality: { 
            type: String, 
            required: true
        },
        licenseNumber: { 
            type: String, 
            required: true, 
            unique: true },
        experience: {
            type: String,

        },
        email_id: {
            type: String,
            required: true,
        },
        phone_no: {
            type: String,
            required: true,
        },
        consultation_fee:{
            type: String,
        },
        profilePictureURL: {
            type: String
        },

    },
    {
        timestamps: true,
    }
)

const Doctor = mongoose.model('Doctors', doctorSchema)



export default Doctor
