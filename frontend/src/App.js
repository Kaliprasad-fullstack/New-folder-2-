import React from 'react';
import { Container } from 'react-bootstrap'
// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Screens
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import ProfileScreen from './screens/Profile'
import Reset from './screens/Reset'
import NewPassword from './screens/NewPassword'
import PrescriptionTemplate from './screens/PrescriptionTemplate'

// History
import history from './utils/history'
import RefundPolicy from './screens/RefundPolicy'
import PrivacyPolicy from './screens/PrivacyPolicy'
import TermsAndConditions from './screens/TermsAndConditions'
import ContactUs from './screens/ContactUs'
import Role from './screens/Role'
import DemoRegistration from './screens/DemoRegistration'
import Therapy from './screens/Therapy'
import Inquiry from './screens/Inquiry'
import TabComponent from './components/TabComponent'
import MasterTab from './components/MasterTab'
import Banner from './components/Banner'
import CarouselBanner from './components/CarouselBanner'
import Breadcrumb from './components/Breadcrumb'
import About from './screens/Abouts'
import MedicineCards from './components/MedicineCards'
import SearchSymptom from './screens/SearchSymptom'
import OldMasterTab from './components/OldMasterTab'
import Inventory from './components/Inventory'
import OldPrescriptions from './components/OldPrescriptions'
import Dashboard from './screens/Dashboard'
import Analytics from './screens/Analytics'
import Setting from './screens/Setting'
import VisitingCards from './screens/VisitingCards'
import MainPage from './screens/MainPage'
import PrescriptionData from './screens/PrescriptionData'
import Signup from './screens/Signup'
import PrescriptionLists from './components/PrescriptionLists'
import Doctors from './screens/Doctors';
import SuccessStories from './components/SuccessStories';

const App = () => {

    return (
        <BrowserRouter history={history}>
            <Header />
            <main className='py-0'>
            <Route path='/'component={HomeScreen} exact />
                <Route path='/demoReg' component={DemoRegistration} />
                <Route path='/register' component={RegisterScreen} />
                <Route path='/therapy' component={Therapy} />
                <Route path='/doctor' component={Doctors}/>
                <Route path='/inquiry' component={Inquiry} />
                <Route path='/breadcrumb' component={Breadcrumb} />
                <Route path='/about' component={About} />
                <Route path='/contact-us' component={ContactUs} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/mainpage'  component={MainPage} />
                <Route path='/signup'  component={Signup} />
                <Container>
                <Route path='/patientPrescription'component={PrescriptionLists}/>
                    <Route path='/tab' component={TabComponent} />
                    <Route path='/mastertab' component={MasterTab} />
                    <Route path='/old-mastertab' component={OldMasterTab} />
                    <Route path='/inventory' component={Inventory} />
                    <Route path='/analytics' component={Analytics} />
                    <Route path='/oldprescription' component={OldPrescriptions} />
                    <Route path='/terms-condition' component={TermsAndConditions} />
                    <Route path='/privacy-policy' component={PrivacyPolicy} />
                    <Route path='/refund-policy' component={RefundPolicy} />
                    <Route path='/profile' component={ProfileScreen} />
                    <Route path='/login' component={LoginScreen} />
                    <Route exact path='/reset' component={Reset} />
                    <Route path='/reset/:token' component={NewPassword} />
                    <Route path='/prescribetemplate' component={PrescriptionTemplate} />
                    <Route path='/Role' component={Role} />
                    <Route path='/banner' component={Banner} />
                    <Route path='/carosel' component={CarouselBanner} />
                    <Route path='/medicinecards' component={MedicineCards} />
                    <Route path='/seach' component={SearchSymptom} />
                    <Route path='/settings' component={Setting} />
                    <Route path='/visitingcard' component={VisitingCards} />
                    <Route path='/receptionist' component={PrescriptionData} />
                </Container>
            </main>
            <Footer />
        </BrowserRouter>

    )
}

export default App
