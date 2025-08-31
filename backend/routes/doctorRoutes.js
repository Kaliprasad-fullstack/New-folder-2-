import express from 'express'
import {getDoc,addDoctors,updateDoctor,updateAppointmentDate,cancelAppointmentDoctor} from '../controllers/doctorController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()
// Get all Method
router.route('/add_doc').post(addDoctors)
router.route('/doc').get(getDoc)
router.route('/:id/doc').put(updateDoctor)
router.route('/:id/doc/:dateid').put(updateAppointmentDate)
router.route('/:id/deleteappointment/:deleteid').delete(cancelAppointmentDoctor)


export default router