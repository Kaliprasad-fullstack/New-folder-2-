import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
    addDietChartDetails, addPrescriptionDetails, addMedicineDetails,
    getAllMedicines, getAllPrescriptions, getDietChartDetails,
    getPrescriptions,getPatientPrescription
} from '../controllers/prescriptionController.js'

const router = express.Router()

router.route('/add_dietchart').post(addDietChartDetails)
router.route('/add_prescription').post(addPrescriptionDetails)
router.route('/add_medicines').post(addMedicineDetails)
router.route('/get_medicines').get(getAllMedicines)
router.route('/get_prescription').get(getAllPrescriptions)
router.route('/get_dietchart').get(getDietChartDetails)
router.route('/getallPrescription').get(getPrescriptions)
router.route('/getpatientPrescription').get(getPatientPrescription)
export default router