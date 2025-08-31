import {
    MEDICINE_SUCCESS,
    MEDICINE_FAIL,
    PRESCRIPTION_REQUEST,
    PRESCRIPTION_SUCCESS,
    PRESCRIPTION_FAIL,
    DIETCHART_REQUEST,
    DIETCHART_SUCCESS,
    DIETCHART_FAIL,
    GET_PRESCRIPTION_SUCCESS,
    GET_PRESCRIPTION_FAIL,
    GET_DIETCHART_SUCCESS,
    GET_DIETCHART_FAIL,
    DATA_PRESCRIPTION_SUCCESS,
    DATA_PRESCRIPTION_FAIL,
    PATIENT_PRESCRIPTION_SUCCESS,
    PATIENT_PRESCRIPTION_FAIL,
    ADD_MEDICINE_REQUEST,
    ADD_MEDICINE_SUCCESS,
    ADD_MEDICINE_FAIL,


}
    from '../constants/prescriptionConstants'
import axios from 'axios'

//getting medicines list
export const getMedicines = () => async (dispatch) => {

    try {
        dispatch({
            type: MEDICINE_SUCCESS,
        })
        const { data } = await axios.get('/api/prescription/get_medicines')

        dispatch({
            type: MEDICINE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: MEDICINE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//Add Medicines

export const addMedicineDetails = (medicineData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_MEDICINE_REQUEST,
        }) 
        // Make request to server and get the response data
        const { data } = await axios.post(`/api/prescription/add_medicines`, medicineData)

        // Dispatch  success after making the request
        dispatch({
            type: ADD_MEDICINE_SUCCESS,
            payload: data,
        })
        alert("Medicine added Successfully");

        return data
        
    } catch (error) {
        dispatch({
            type: ADD_MEDICINE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
        alert("Medicine cannot be Added")
    }
}

//ADD PRESCRIPTION
export const addPrescriptionUser = (prescriptionData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRESCRIPTION_REQUEST,
        })

        // Make request to server and get the response data
        const { data } = await axios.post(`/api/prescription/add_prescription`, prescriptionData)

        // Dispatch  success after making the request
        dispatch({
            type: PRESCRIPTION_SUCCESS,
            payload: data,
        })
        // console.log("prescription added")
        alert("Prescription added Successfully");
        return data
    } catch (error) {
        dispatch({
            type: PRESCRIPTION_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//add Dietchart
export const addDietChart = (diet) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DIETCHART_REQUEST,
        })

        // Make request to server and get the response data
        const { data } = await axios.post(`/api/prescription/add_dietchart`, diet)

        // Dispatch  success after making the request
        dispatch({
            type: DIETCHART_SUCCESS,
            payload: data,
        })
        // console.log("Diet chart data entered sucessfully",diet)
        return data

    } catch (error) {
        dispatch({
            type: DIETCHART_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//getting prescription list
export const getPrescription = () => async (dispatch) => {

    try {
        dispatch({
            type: GET_PRESCRIPTION_SUCCESS,
        })
        const { data } = await axios.get('/api/prescription/get_prescription')

        dispatch({
            type: GET_PRESCRIPTION_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_PRESCRIPTION_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//getting DietChart list
export const getDietChartList = () => async (dispatch) => {

    try {
        dispatch({
            type: GET_DIETCHART_SUCCESS,
        })
        const { data } = await axios.get('/api/prescription/get_dietchart')

        dispatch({
            type: GET_DIETCHART_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_DIETCHART_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//getting prescription Details
export const getPrescriptionDetail = () => async (dispatch) => {

    try {
        dispatch({
            type: DATA_PRESCRIPTION_SUCCESS,
        })
        const { data } = await axios.get('/api/prescription/getallPrescription')

        dispatch({
            type: DATA_PRESCRIPTION_SUCCESS,
            payload: data,
        })
        // console.log("sucess data")
    } catch (error) {
        dispatch({
            type: DATA_PRESCRIPTION_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//getting prescription Details
export const getPatientDetail = () => async (dispatch) => {

    try {
        dispatch({
            type: PATIENT_PRESCRIPTION_SUCCESS,
        })
        const { data } = await axios.get('/api/prescription/getpatientPrescription')

        dispatch({
            type: PATIENT_PRESCRIPTION_SUCCESS,
            payload: data,
        })
        // console.log("sucess patient")
    } catch (error) {
        dispatch({
            type: PATIENT_PRESCRIPTION_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}