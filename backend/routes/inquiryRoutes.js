import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
    addInquiryDetails
  } from '../controllers/inquiryController.js'

const router = express.Router()
// Get all Method

router.route('/').post(addInquiryDetails)

export default router