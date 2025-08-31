import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import nodemailer from 'nodemailer'
import sendgridTransport from 'nodemailer-sendgrid-transport'
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import mutexify from 'mutexify';
import { ok } from 'assert';
// @desc Auth user & get token
// @route POST /api/users/login
// @access Public


const transporter = nodemailer.createTransport(sendgridTransport({
    // auth object
    auth: {
        api_key: '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'
    }
}))


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // Find a user by email
    const user = await User.findOne({ email })
    // console.log("Users",user)
    // If the user exists and the password matches the one store return the details with JSON web token signature
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            isAdmin: user.isAdmin,
            isSubscriber: user.isSubscriber,
            isSuperAdmin: user.isSuperAdmin,
            token: generateToken(user._id),
        })
        // console.log("Successfully Done!")
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc Register a new user
// @route POST /api/users
// @access Public
// Create a mutex
// const mutex = mutexify();
// const registerUser = asyncHandler(async (req, res) => {
//     const { name, email, phone,
//         password, address, Date, weight,
//         illness, duration, treatment, reference,
//         age, gender, isAdmin, registrationFor } = req.body;
//     try {
//         // Acquire the mutex to ensure only one request can access the patient ID counter at a time
//         await mutex.lock();

//         let lastPatientRegistrationNo = 0;

//         // Get the last patient registration number from the database
//         const lastPatient = await User.findOne().sort({ patientRegistrationNo: -1 });
//         if (lastPatient && lastPatient.patientRegistrationNo) {
//             lastPatientRegistrationNo = lastPatient.patientRegistrationNo + 1;
//         }

//         // Create a new user with the next available patient registration number
//         const user = await User.create({
//             name,
//             email,
//             phone,
//             password,
//             address,
//             Date,
//             age,
//             weight,
//             gender,
//             illness,
//             treatment,
//             duration,
//             reference,
//             isAdmin,
//             patientRegistrationNo: lastPatientRegistrationNo,
//             registrationFor
//         });

//         // If the user is successfully created then send back user details in response
//         if (user) {
//             res.status(201).json({
//                 _id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 phone: user.phone,
//                 address:user.address,
//                 age: user.age,
//                 gender: user.gender,
//                 isAdmin: user.isAdmin,
//                 patientRegistrationNo:user.patientRegistrationNo,
//                 isSubscriber: user.isSubscriber,
//                 isSuperAdmin:user.isSuperAdmin,
//                 token: generateToken(user._id),
//                 registrationFor,
//                 success:true
//             })
//         } else {
//             res.status(400)
//             throw new Error('Invalid user data')
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to create user' });
//     } finally {
//         // Release the mutex
//         mutex.unlock();
//     }
// })

const mutex = mutexify();
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, phone,
        password, address, Date, weight,
        illness, duration, treatment, reference,
        age, gender, isAdmin, registrationFor } = req.body;

        let lastPatientRegistrationNo = 0;
        
        // Get the last patient registration number from the database
        const lastPatient = await User.findOne().sort({ patientRegistrationNo: -1 });
        if (lastPatient && lastPatient.patientRegistrationNo) {
            lastPatientRegistrationNo = lastPatient.patientRegistrationNo + 1;
        }

        // Create a new user with the next available patient registration number
        const user = await User.create({
            name,
            email,
            phone,
            password,
            address,
            Date,
            age,
            weight,
            gender,
            illness,
            treatment,
            duration,
            reference,
            isAdmin,
            patientRegistrationNo: lastPatientRegistrationNo,
            registrationFor
        });

        // If the user is successfully created then send back user details in response
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address:user.address,
                age: user.age,
                gender: user.gender,
                isAdmin: user.isAdmin,
                patientRegistrationNo:user.patientRegistrationNo,
                isSubscriber: user.isSubscriber,
                isSuperAdmin:user.isSuperAdmin,
                token: generateToken(user._id),
                registrationFor,
                success:true
            })
        } else {
            res.status(400)
            throw new Error('Invalid user data')
        }
})


const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            isAdmin: user.isAdmin,
            isSubscriber: user.isSubscriber,
            isSuperAdmin: user.isSuperAdmin,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        // Check which fields were sent in the request else just keep them the same
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.phone = req.body.phone || user.phone
        user.isSubscriber = req.body.isSubscriber || user.isSubscriber
        // Check if password was sent with request
        if (req.body.password) {
            user.password = req.body.password
        }
        const updateUser = await user.save()

        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            phone: updateUser.phone,
            isAdmin: updateUser.isAdmin,
            isSubscriber: updateUser.isSubscriber,
            isSuperAdmin: updateUser.isSuperAdmin,
            token: generateToken(updateUser._id),
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})


const getUserInfoDetails = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.json(users)
})

//reset password
const resetPassword = asyncHandler(async (req, res) => {
    crypto.randomBytes(32, (error, buffer) => {
        if (error) {
            console.log(error)
        }
        const token = buffer.toString("hex")
        User.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    return res.status(422).json({ error: "User dont exists with that email" })
                }
                user.resetToken = token
                // one hour will be there to reset the password
                user.expireToken = Date.now() + 3600000
                user.save().then((result) => {
                    const htmlContent = `<p>You requested for password reset</p>
                <h5>click in this <a href="http://localhost:3000/reset/${token}">link</a> to reset password</h5>`
                    // console.log("Link",htmlContent)
                    transporter.sendMail({
                        to: user.email,
                        from: "info@vaidya.com",
                        subject: "Password Reset",
                        html: htmlContent
                    })
                    // console.log("User Email",user.email)

                    res.json({ message: "check your email" })
                })
            })
    })
})


//new password method
const newPassword = asyncHandler(async (req, res) => {
    const newPassword = req.body.password
    const sentToken = req.body.token
    // console.log("new pasword")
    User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
        .then(user => {
            if (!user) {
                return res.status(422).json({ error: "Try again session expired" })
            }
            else {
                user.password = newPassword
                user.resetToken = undefined
                user.expireToken = undefined
                user.save().then((saveduser) => {
                    res.json({ message: "password updated success" })
                })
            }
            // bcrypt.hash(newPassword,12).then(hashedpassword=>{

            // })
        }).catch(err => {
            console.log(err)
        })
})

//get users in descending order
const getUserDesc = asyncHandler(async (req, res) => {
    const userDesc = await User.find({}).sort({ _id: -1 }).limit(1);
    // console.log(userDesc)
    res.json(userDesc)
})

//update the status of the user
const updateStatus = asyncHandler(async (req, res) => {
    const userStaff = await User.findById(req.params.id)
    if (userStaff) {
        userStaff.name = req.body.name,
            userStaff.email = req.body.email,
            userStaff.phone = req.body.phone,
            userStaff.password = req.body.password,
            userStaff.isAdmin = req.body.isAdmin,
            userStaff.isSuperAdmin = req.body.isSuperAdmin

        const updatedStaffStatus = await userStaff.save()
        res.json(updatedStaffStatus)
    }

    else {
        res.status(404)
        throw new Error('Could not update status')
    }
})



export { authUser, getUserProfile, registerUser, updateUserProfile, getUserInfoDetails, resetPassword, newPassword, getUserDesc, updateStatus }
