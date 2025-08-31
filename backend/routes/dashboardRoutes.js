import express from 'express'

import {addAppointmentDetails,getAppointmentDetails} from '../controllers/dashboardController.js'
import { protect } from '../middleware/authMiddleware.js'


const router = express.Router()
// Get all Method


router.route('/appointment').post(addAppointmentDetails)
router.route('/getappointment').get(getAppointmentDetails)


export default router