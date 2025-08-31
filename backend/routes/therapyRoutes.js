import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { addTherapyDetail } from '../controllers/therapyController.js'

const router = express.Router()
// Get all Method

router.route('/').post(addTherapyDetail)

export default router