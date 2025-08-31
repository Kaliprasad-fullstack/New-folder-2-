import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import{
    updateDoctorReducer,
    updateAppointmentReducer,
    cancelAppointmentDateReducer,
    createDoctorDataReducer,
    doctorListReducer,
}from './reducers/doctorReducers'

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userInfoDetailsReducer,
    userResetPasswordReducer,
    userInfoDescReducer,
    userUpdateStatusReducer
} from './reducers/userReducers'

import{
    createTherapyReducer
} from './reducers/therapyReducers'

import {medicinesListReducer,dietChartDetailReducer,prescriptionDetailReducer,
    getPrescriptionDataReducer,getDietChartDataReducer,getPrescriptionDetailsReducer,
    getPatientPrescriptionDetailReducer,medicinesDetailsDetailReducer} from './reducers/prescriptionReducer'
import {createInquiryReducer} from './reducers/inquiryReducers'


import {createDashboardAppointmentReducer,getPatientAppointmentDetailsReducer} from './reducers/dashboardReducers'

const reducer = combineReducers({
    doctorList: doctorListReducer,
    updateDoctor:updateDoctorReducer,
    createDoctorData:createDoctorDataReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userInfoDetails:userInfoDetailsReducer,
    userResetPassword:userResetPasswordReducer,
    updateAppointments:updateAppointmentReducer,
    cancelAppointmentDates:cancelAppointmentDateReducer,
    createTherapy:createTherapyReducer,
    createInquiry:createInquiryReducer,
    getLatestUSer:userInfoDescReducer,
    getallMedicineList:medicinesListReducer,
    addPatientDietChart:dietChartDetailReducer,
    addPatientPrescription:prescriptionDetailReducer,
    getPrescriptionDetails:getPrescriptionDataReducer,
    getDietData:getDietChartDataReducer,
    getPrescripionList:getPrescriptionDetailsReducer,
    getPatientPrescriptionList:getPatientPrescriptionDetailReducer,
    patientAppointment:createDashboardAppointmentReducer,
    getAppointmentPatients:getPatientAppointmentDetailsReducer,
    updateUserStatus:userUpdateStatusReducer,
    addMedicines:medicinesDetailsDetailReducer

})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

// Load initial state when the application is loaded
const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
