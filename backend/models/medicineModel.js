import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const medicineSchema = mongoose.Schema(
    {
        medicineName: {
            type: String
        },
        Qty: {
            type: String
        },
        Unit: {
            type: String
        },
        Gram: {
            type: String
        },
        supplierName: {
            type: String
        },
        contactNo: {
            type: String
        },
        amount: {
            type: String
        },
        medicine_reciver_name:{
            type: String
        },

    },
    {
        timestamps: true,
    }

)
const Medicine = mongoose.model('Medicine', medicineSchema)

export default Medicine