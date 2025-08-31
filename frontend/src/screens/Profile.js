import React, { useState, useEffect } from 'react'
// Bootstrap Components
import { Form, Button, Row, Col} from 'react-bootstrap'
// Redux
import { useDispatch, useSelector } from 'react-redux'
// UI Components
import Message from '../components/Message'
import Loader from '../components/Loader'
// Redux Actions
import { getUserDetails, updateUserProfile } from '../actions/userActions'


const Profile = ({ history }) => {
    // State to hold email and password
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    // Get user details from Redux store
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    // Get user token from Redux store
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    // Get update status on user info
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile



    useEffect(() => {
        // If there is NO user info then redirect to login page
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
                setPhone(user.phone)
            }
        }
    }, [history, userInfo, dispatch, user])

    // Handler that logs in the user
    const submitHandler = (e) => {
        e.preventDefault()
        // Check if passwords are the same
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            // Dispatch update profile reducer
            dispatch(updateUserProfile({ id: user._id, name, email, phone, password }))
        }
    }

    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
                {error && <Message variant='danger'>{error}</Message>}
                {message && <Message variant='danger'>{message}</Message>}
                {success && (
                    <Message variant='success'>Profile Updated</Message>
                )}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='email@example.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='phone'>
                        <Form.Label>Phone </Form.Label>
                        <Form.Control
                            type='phone'
                            placeholder='10 digit mobile no'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Confirm password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>
                        Update
                    </Button>
                </Form>
            </Col>
            <Col md={9}>
                <Button
                    className='btn-sm'
                    variant='light'
                >
                    Details
                </Button>
            </Col>
        </Row>
    )
}

export default Profile
