import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import '../demoreg.css'
import '../register.css'
import { Button, Form } from 'react-bootstrap';
import { addMedicineDetails } from '../actions/prescriptionActions'


const Medicine = () => {
    const defaultData = {
        medicineName: "",
        Qty: "",
        Unit: "",
        Gram: "",
        supplierName: "",
        contactNo: "",
        amount: "",
        medicine_reciver_name: ""
    }

    const [medicineform, setMedicineform] = useState(defaultData);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    //redux state for the medicines
    const submitHandler = (e) => {
        e.preventDefault();
        // const addNewMedicine = () => {
        // const newMedicine = {
        //     medicineName: medicineform.medicineName,
        //     Qty: medicineform.Qty,
        //     Unit: medicineform.Unit,
        //     Gram: medicineform.Gram,
        //     supplierName: medicineform.supplierName,
        //     contactNo: medicineform.contactNo,
        //     amount: medicineform.amount,
        //     medicine_reciver_name: medicineform.medicine_reciver_name,
        // };
        console.log(medicineform)
        dispatch(addMedicineDetails(medicineform))
            .then(() => {
                setMedicineform(defaultData);
                setErrorMessage(null); // clear error message if the submission was successful
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage('Medicine name already exists'); // set error message if there was an error

            });
        // };
        // addNewMedicine();
    };

    const resetHandler = (e) => {
        setMedicineform(defaultData);
        setErrorMessage(null); // clear error message if the form was reset
    };

    return (

        <div className='col-md-8'>
            <h1 style={{ marginLeft: "44px" }}>Medicine Form</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <Form onSubmit={submitHandler} className='registerform'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label> Medicine Name</label>
                            </td>
                            <td>
                                <Form.Group controlId='medicinename' >
                                    <Form.Control
                                        type='text'
                                        placeholder='Medicine Name'
                                        value={medicineform.medicineName}
                                        onChange={(e) => setMedicineform({ ...medicineform, medicineName: e.target.value })}
                                    ></Form.Control>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Qty
                                </label>
                            </td>
                            <td >
                                <Form.Group controlId='Qty'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Qty'
                                        value={medicineform.Qty}
                                        onChange={(e) => setMedicineform({ ...medicineform, Qty: e.target.value })}
                                    ></Form.Control>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Unit</label>
                            </td>
                            <td >
                                <Form.Group controlId='unit'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Unit'
                                        value={medicineform.Unit}
                                        onChange={(e) => setMedicineform({ ...medicineform, Unit: e.target.value })}
                                    ></Form.Control>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Gram</label>
                            </td>
                            <td >
                                <Form.Group controlId='gram' >
                                    <Form.Control
                                        type='text'
                                        placeholder='Gram'
                                        value={medicineform.Gram}
                                        onChange={(e) => setMedicineform({ ...medicineform, Gram: e.target.value })}

                                    ></Form.Control>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Supplier Name</label>
                            </td>
                            <td >
                                <Form.Group controlId='supplierName'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Supplier Name'
                                        value={medicineform.supplierName}
                                        onChange={(e) => setMedicineform({ ...medicineform, supplierName: e.target.value })}

                                    ></Form.Control>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Contact No
                                </label>
                            </td>
                            <td >
                                <Form.Group controlId="contactNo">
                                    <Form.Control
                                        type='text'
                                        placeholder='Contact No'
                                        maxLength={10}
                                        value={medicineform.contactNo}
                                        onChange={(e) => setMedicineform({ ...medicineform, contactNo: e.target.value })}

                                    ></Form.Control>

                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Amount</label>
                            </td>
                            <td >
                                <Form.Group controlId='amount'>
                                    <Form.Control
                                        type='text'
                                        placeholder='0.00'
                                        value={medicineform.amount}
                                        onChange={(e) => setMedicineform({ ...medicineform, amount: e.target.value })}

                                    ></Form.Control>
                                </Form.Group>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Medicine Receiver Name
                                </label>
                            </td>
                            <td>
                                <Form.Group controlId='reciever name' >
                                    <Form.Control
                                        type='text'
                                        placeholder='Receiver name'
                                        value={medicineform.medicine_reciver_name}
                                        onChange={(e) => setMedicineform({ ...medicineform, medicine_reciver_name: e.target.value })}

                                    ></Form.Control>
                                </Form.Group>
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
                                </Button></td>
                        </tr>
                    </tbody>
                </table>
            </Form >
        </div>

    )
}

export default Medicine