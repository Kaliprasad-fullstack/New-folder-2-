import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const inquirySchema = mongoose.Schema(
    {
        inquiryName: {
            type: String
        },
        inquirycontact: {
            type: String
        },
        inquiryemail: {
            type: String
        },
        inquirySubject: {
            type: String
        },
        inquiryreference:{
            type:String
        }
    }
)
const Inquiry = mongoose.model('Inquiry', inquirySchema)

export default Inquiry