import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const prescriptionSchema = mongoose.Schema(
    {
        prescriptionUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        diet_chart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'DietChart'
        },
        Symptoms: [{
            type: String
        }],
        medicineData: [{
            dose: {
                type: String
            },
            medicineDetails: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Medicine'
            }
        }],
        prescriptiondays: {
            type: String,
        },
        ayurveda_diagnosis: {
            type: String
        },
        modernSystem: {
            type: String
        },
        mDiagnosis: {
            type: String
        },
        prescriptionTreatment: {
            type: String
        },
        treatmentdays: {
            type: String
        },
        ayurveda: {
            type: String
        },
        panchkarma: [{
            panchkarma_name: {
                type: String
            },
            panchkarma_days: {
                type: String
            }

        }],
        Image: {
            type: String
        },
        Video: {
            type: String
        },
        report: {
            type: String
        },
        payment: {
            Consulting: {
                type: String
            },
            medicine: {
                type: String
            },
            paid: {
                type: Number
            },
            Debit_Credit: {
                type: Number
            },
            discount: {
                type: String
            },
            paymentmode:
            {
                type: String
            },
            paymentRemark: {
                type: String
            },
           
        },
        Remark: {
            type: String
        },
    },
    {
        timestamps: true,
    }
)

const Prescription = mongoose.model('Prescription', prescriptionSchema)

export default Prescription
