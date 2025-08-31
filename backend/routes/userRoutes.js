import express from 'express'
import {
    authUser,
    getUserProfile,
    registerUser,
    updateUserProfile,
    getUserInfoDetails,
    resetPassword,
    newPassword , 
    getUserDesc,
    updateStatus
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser)
router.post('/login', authUser)
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

router.route('/userInfo').get(getUserInfoDetails)
router.route('/resetpassword').post(resetPassword)
router.route('/new-password').post(newPassword)
router.route('/latest-patient').get(getUserDesc)
router.route('/:id/updateStatus').put(updateStatus)


export default router
