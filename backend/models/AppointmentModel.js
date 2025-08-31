import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const appointmentSchema = mongoose.Schema(
    {
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        appointmentDate: {
            type: String
        },
        appointmentTime: {
            type: String
        },
        patientName: {
            type: String
        },
        patientContact: {
            type: String
        }
    },
    {
        timestamps: true,
    }
)

const Appointment = mongoose.model('Appointment', appointmentSchema)

export default Appointment