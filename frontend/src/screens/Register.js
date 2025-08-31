import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux'
import '../demoreg.css'
import '../register.css'
import { register } from '../actions/userActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Image, Form, InputGroup, Row, Col } from 'react-bootstrap';


const Register = () => {
  const RegisterData = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    date: new Date(),
    age: "",
    weight: "",
    gender: "",
    reference: "",
    profilePictureURL: "",
    isAdmin: false,
  }
  const [registrationForm, setRegistrationForm] = useState(RegisterData)
  const [message, setMessage] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  // Get user login info from Redux state
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const registrationResponse = useSelector(s => s.userRegisterReducer)

  const submitHandler = async (e) => {
    e.preventDefault();
    if (registrationForm.password !== registrationForm.confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      try {
        dispatch(
          register(
            registrationForm.name,
            registrationForm.email,
            registrationForm.phone,
            registrationForm.password,
            registrationForm.address,
            registrationForm.age,
            registrationForm.gender,
            registrationForm.weight,
            registrationForm.reference,
            registrationForm.date,
            registrationForm.isAdmin,
            registrationForm.profilePictureURL,
            registrationForm.registrationFor
          )
        ).then((e) => {
          // console.log("Register DAta",registrationForm);
          if (e.payload.success) {
            toast.success(
              `Registration Successfully!\nPatient RegistrationNo: ${e.payload.patientRegistrationNo}`,
              {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-message'
              }
            );

          }
        })
        localStorage.setItem("isLogin", true);
        setRegistrationForm(RegisterData);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <h1 style={{ marginLeft: "-69px" }}>Registration</h1>
      <Form onSubmit={submitHandler} className='registerform' >
        <Row>
          <Col md={6}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Full Name'
                value={registrationForm.name}
                onChange={(e) => setRegistrationForm({ ...registrationForm, name: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='Date'>
              <Form.Label>Date</Form.Label>
              <div className='date-input'>
                <DatePicker
                  selected={registrationForm.date}
                  onChange={(date) => setRegistrationForm({ ...registrationForm, date: date })}
                  peekNextMonth
                  showMonthDropdown
                  dropdownMode="select"
                  placeholderText="Date"
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>
            </Form.Group>
          </Col>

        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Email'
                value={registrationForm.email}
                onChange={(e) => setRegistrationForm({ ...registrationForm, email: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='phone'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='tel'
                placeholder='Phone Number'
                maxLength="10"
                value={registrationForm.phone}
                onChange={(e) => setRegistrationForm({ ...registrationForm, phone: e.target.value })}
              // required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId='Age'>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type='text'
                placeholder='Age'
                value={registrationForm.age}
                onChange={(e) => setRegistrationForm({ ...registrationForm, age: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='gender'>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as='select'
                value={registrationForm.gender}
                onChange={(e) => setRegistrationForm({ ...registrationForm, gender: e.target.value })}
                required
              >
                <option value=''>Choose...</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='Weight'>
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type='text'
                placeholder='Weight in Kg'
                value={registrationForm.weight}
                onChange={(e) => setRegistrationForm({ ...registrationForm, weight: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                type='text'
                placeholder='Address'
                value={registrationForm.address}
                onChange={(e) => setRegistrationForm({ ...registrationForm, address: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={registrationForm.password}
                onChange={(e) => setRegistrationForm({ ...registrationForm, password: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm Password'
                value={registrationForm.confirmPassword}
                onChange={(e) => setRegistrationForm({ ...registrationForm, confirmPassword: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId='reference' >
              <Form.Label>Reference for vaidya manager?</Form.Label>
              <Form.Control
                as="select"
                type='text'
                placeholder='Reference for vaidya manager?'
                value={registrationForm.reference}
                onChange={(e) => setRegistrationForm({ ...registrationForm, reference: e.target.value })}
              >
                <option value="">Reference</option>
                <option value="Newspaper">Newspaper</option>
                <option value="Internet">Internet</option>
                <option value="Call Center">Call Center</option>
                <option value="Friend/Relative">Friend/Relative</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='registrationFor'>
              <Form.Label>Registration For?</Form.Label>
              <div>
                <Form.Check
                  inline
                  type='radio'
                  label='Therapy'
                  name='registrationFor'
                  id='therapy'
                  value='Therapy'
                  // checked={registrationForm.registrationFor === 'therapy'}
                  onChange={(e) => setRegistrationForm({ ...registrationForm, registrationFor: e.target.value })}
                  required
                />
                <Form.Check
                  inline
                  type='radio'
                  label='Inquiry'
                  name='registrationFor'
                  id='inquiry'
                  value='Inquiry'
                  // checked={registrationForm.gender === 'female'}
                  onChange={(e) => setRegistrationForm({ ...registrationForm, registrationFor: e.target.value })}
                  required
                />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Button type='submit' variant='primary' className='mb-1'>
          Sign Up
        </Button>
        <ToastContainer autoClose={10000} />
      </Form>
    </>
  )
}

export default Register