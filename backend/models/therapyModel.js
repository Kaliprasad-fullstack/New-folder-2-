import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const therapySchema = mongoose.Schema(
    {
        patientName: {
            type: String
        },
        therapycontact: {
            type: String
        },
        therapyemail: {
            type: String
        },
        therapyName: {
            type: String
        },
        therapyFees: {
            type: String
        },
        patientReview: {
            type: String
        },
        therapistName: {
            type: String
        },
        therapyreference:{
            type:String
        }
    }
)
const Therapy = mongoose.model('Therapy', therapySchema)

export default Therapy