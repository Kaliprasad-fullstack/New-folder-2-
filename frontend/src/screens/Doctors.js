import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../demoreg.css'
import '../register.css'
import { Button, Form } from 'react-bootstrap';
import { createDoctorData } from '../actions/doctorActions'

const Doctors = () => {
    const [imageFile, setImageFile] = useState();
    const DoctorData = {
        name: "",
        speciality: "",
        licenseNumber: "",
        experience: "",
        email_id: "",
        phone_no: "",
        consultation_fee: "",
        profilePictureURL: ""
    }
    const [doctorForm, setDoctorForm] = useState(DoctorData);
    const dispatch = useDispatch();

    const addDoctors = useSelector((state) => state.createDoctorData)
    const { loadingdoctordata, doctordata, success, errordoctordata } = addDoctors

    const resetHandler = (e) => {
        setDoctorForm(DoctorData)
    }

    const handleImageUpload = (file) => {
        if (file.size <= 15 * 1024) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                console.log(file)
                setImageFile(file.name)
                setDoctorForm({ ...doctorForm, profilePictureURL: fileReader.result })
            };
            alert("Image is selected");
        } else {
            alert("File size exceeded the limit of 15KB");

        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("doctors", doctorForm);
        dispatch(createDoctorData(doctorForm))
        setDoctorForm(DoctorData)
    }

    return (
        <>
            <div className='col-md-8'>
                <h1 style={{ marginLeft: "44px" }}>Doctor Form</h1>
                <Form onSubmit={submitHandler} className='registerform'>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label> Doctor Name</label>
                                </td>
                                <td>
                                    <Form.Group controlId='doctorname'>
                                        <Form.Control
                                            type='text'
                                            placeholder='Doctor Name'
                                            value={doctorForm.name}
                                            onChange={(e) => setDoctorForm({ ...doctorForm, name: e.target.value })}
                                        ></Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Speciality
                                    </label>
                                </td>
                                <td >
                                    <Form.Group controlId='speciality'>
                                        <Form.Control
                                            type='text'
                                            placeholder=''
                                            value={doctorForm.speciality}
                                            onChange={(e) => setDoctorForm({ ...doctorForm, speciality: e.target.value })}
                                        ></Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>LicenseNumber</label>
                                </td>
                                <td >
                                    <Form.Group controlId='licenseNumber'>
                                        <Form.Control
                                            type='text'
                                            placeholder='DR0001'
                                            value={doctorForm.licenseNumber}
                                            onChange={(e) => setDoctorForm({ ...doctorForm, licenseNumber: e.target.value })}
                                        ></Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label> Experience</label>
                                </td>
                                <td>
                                    <Form.Group controlId='experience'>
                                        <Form.Control
                                            type='text'
                                            placeholder='years'
                                            value={doctorForm.experience}
                                            onChange={(e) => setDoctorForm({ ...doctorForm, experience: e.target.value })}>
                                        </Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label> Email Id</label>
                                </td>
                                <td >
                                    <Form.Group controlId='emailid'>
                                        <Form.Control
                                            type='email'
                                            placeholder='xyz@gmail.com'
                                            value={doctorForm.email_id}
                                            onChange={(e) => setDoctorForm({ ...doctorForm, email_id: e.target.value })}
                                        ></Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Phone No</label>
                                </td>
                                <td>
                                    <Form.Group controlId='phone_no'>
                                        <Form.Control
                                            type='text'
                                            maxLength={10}
                                            placeholder='Number'
                                            value={doctorForm.phone_no}
                                            onChange={(e) => setDoctorForm({ ...doctorForm, phone_no: e.target.value })}>
                                        </Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Consultation Fee
                                    </label>
                                </td>
                                <td>
                                    <Form.Group controlId='consultation_fee'>
                                        <Form.Control
                                            type='number'
                                            placeholder='00'
                                            value={doctorForm.consultation_fee}
                                            onChange={(e) => setDoctorForm({ ...doctorForm, consultation_fee: e.target.value })}>
                                        </Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Profile Picture
                                    </label>
                                </td>
                                <td>
                                    <div className="image-upload">
                                        <img src='images/upload.png' />
                                        <input id="file-input" type="file" className='p-input'
                                            onChange={(e) => handleImageUpload(e.target.files[0])} />
                                            <h3>{imageFile}</h3>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <Button type='submit' variant='primary'>
                                        Save
                                    </Button>
                                    <Button style={{ marginLeft: "5px" }} onClick={resetHandler} variant='primary'>
                                        Reset
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Form >
            </div>
        </>
    )
}

export default Doctors;