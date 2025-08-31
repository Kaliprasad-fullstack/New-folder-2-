import Prescription from '../models/PrescriptionModel.js'
import Medicine from '../models/medicineModel.js'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import DietChart from '../models/DietchartModel.js';
import crypto from 'crypto';


//add diet chart details
const addDietChartDetails = asyncHandler(async (req, res) => {
    const {
        pateientDietChart,
        wtodo,
        wto_dont
    } = req.body
    const DietChartData = new DietChart({
        pateientDietChart,
        wtodo,
        wto_dont
    })
    const createdDietchart = await DietChartData.save();
    res.status(201).json(createdDietchart)

})

//add prescription
const addPrescriptionDetails = asyncHandler(async (req, res) => {
    const {
        prescriptionUser,
        diet_chart,
        Symptoms,
        medicineData,
        prescriptiondays,
        ayurveda_diagnosis,
        modernSystem,
        mDiagnosis,
        prescriptionTreatment,
        treatmentdays,
        ayurveda,
        panchkarma,
        Image,
        Video,
        report,
        payment,
        Remark,
     

    } = req.body

    const PrescripionData = new Prescription({
        prescriptionUser,
        diet_chart,
        Symptoms,
        medicineData,
        prescriptiondays,
        ayurveda_diagnosis,
        modernSystem,
        mDiagnosis,
        prescriptionTreatment,
        treatmentdays,
        ayurveda,
        panchkarma,
        Image,
        Video,
        report,
        payment,
        Remark,


    }
    )
    
    const createdPrescription = await PrescripionData.save();
    // console.log("suceess")
    res.status(201).json(createdPrescription)

})

//add medicines
const addMedicineDetails = asyncHandler(async (req, res) => {
    const {
        medicineName,
        Qty,
        Unit,
        Gram,
        supplierName,
        contactNo,
        amount,
        medicine_reciver_name,
    } = req.body

      // Check if the medicine already exists
      const existingMedicine = await Medicine.findOne({ medicineName })

      if (existingMedicine) {
          res.status(400).json({ message: 'Medicine name already exists' })
      } else {
          const MedicineData = new Medicine({
              medicineName,
              Qty,
              Unit,
              Gram,
              supplierName,
              contactNo,
              amount,
              medicine_reciver_name,
          })
          const createdMedicine = await MedicineData.save();
          res.status(201).json(createdMedicine)
       
      }

})

//get all medicines
const getAllMedicines = asyncHandler(async (req, res) => {
    const allmedicines = await Medicine.find({})
    res.json(allmedicines)
})

//get latest prescription
const getAllPrescriptions = asyncHandler(async (req, res) => {
    const allprescriptions = await Prescription.find({}).sort({ _id: -1 }).limit(1);
    res.json(allprescriptions)
})

//get latest prescription
const getPrescriptions = asyncHandler(async (req, res) => {
    const prescriptionData = await Prescription.find({})
    res.json(prescriptionData)
})

//get  Diet Chart Data
const getDietChartDetails = asyncHandler(async (req, res) => {
    const DietchartList = await DietChart.find({}).sort({ _id: -1 }).limit(1);
    res.json(DietchartList)
})

//get  patient and prescription
const getPatientPrescription = asyncHandler(async (req, res) => {
    const patient = await Prescription.aggregate([

        {
            $lookup: {
                from: "users",
                localField: "prescriptionUser",
                foreignField: "_id",
                as: "Patient"
            }
        },
        {
            $lookup:
            {
                from: "medicines",
                localField: "medicineData.medicineDetails",
                foreignField: "_id",
                as: "PatientMedicines"
            }
        },
        {
            $lookup:
            {
                from: "dietcharts",
                localField: "diet_chart",
                foreignField: "_id",
                as: "Diet_Chart"
            }
        }

    ])

    res.json(patient)
})



export {
    addDietChartDetails, addPrescriptionDetails, addMedicineDetails,
    getAllMedicines, getAllPrescriptions, getDietChartDetails, getPrescriptions, getPatientPrescription
}