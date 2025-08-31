// server.js

import dotenv from 'dotenv';
dotenv.config(); // ✅ Load .env first!
import express from 'express';
import { fileURLToPath } from 'url';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';
import videoRoutes from './routes/videoRoutes.js';
import therapyRoutes from './routes/therapyRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import prescriptionRoutes from './routes/prescriptionRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import fs from 'fs';
import cors from 'cors';
import path from 'path';
import multer from 'multer';
import mutexify from 'mutexify';
import connectDB from './config/db.js'; 

const app = express(); // Declare the app once
connectDB()
// Initialize config file
// dotenv.config();

// Establish connection with MySQL database
// No need to call connectDB() here anymore, as the connection is already established

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Body parser to accept JSON data
app.use(express.json({ limit: '100mb' }));
app.use(cors());

// User routes
app.use('/api/users', userRoutes);
// Doctors route
app.use('/api/doctors', doctorRoutes);
// Video routes
app.get('/api/video', (req, res) => {
    res.sendFile('assets/video1.mp4', { root: __dirname });
});
app.use('/api/videos', videoRoutes);
// Patient Therapy
app.use('/api/therapy', therapyRoutes);
// Patient Inquiry
app.use('/api/inquiry', inquiryRoutes);
// Prescription Routes
app.use('/api/prescription', prescriptionRoutes);
// Dashboard Routes
app.use('/api/dashboard', dashboardRoutes);

const mutex = mutexify();

var upload = multer();
app.use(upload.array());
app.use(express.urlencoded({ limit: '100000000', extended: true, parameterLimit: 50000 }));

const PORT = 8000; // Explicitly setting port to 8000

app.use(express.static('../frontend/build'));
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('/*', (req, resp) => {
    resp.sendFile(path.resolve('../frontend', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`.green.bold
    );
});
