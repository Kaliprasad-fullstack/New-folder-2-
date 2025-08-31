import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPrescriptionDetail, getPatientDetail } from '../actions/prescriptionActions'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PrescriptionWindow2 from './PrescriptionWindow2';
import dayjs from 'dayjs'
import * as _ from 'lodash'

const OldPatientTab = ({ choosePatient }) => {
  const dispatch = useDispatch();

  const prescription = useSelector((state) => state.getPrescripionList)
  const { loading, error, prescriptionData } = prescription;
  // console.log("Prescription is", prescriptionData);

  const prescriptionDetail = useSelector((state) => state.getPatientPrescriptionList)
  const { loadingp, errorp, patientPrescriptionData } = prescriptionDetail;


  const uniqueData = Array.from(new Set(patientPrescriptionData?.map(item => item.Patient[0]?._id))).map(id => {
    return patientPrescriptionData?.filter(dataItem => dataItem.Patient[0]?._id === id)[0];
  });



  useEffect(() => {
    dispatch(getPrescriptionDetail());
    dispatch(getPatientDetail());
  }, [dispatch])

  const setPatientDetail = (e) => {
    choosePatient(e.target.id);
    // console.log("setpatient id",e.target.id);
    // console.log("holg")
  };


  const searchPatient = (e) => {
    var input, filter, table, tr, td, i, txtValue;
    input = e.target.value;
    // console.log("input",input)
    filter = input.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const [open, setOpen] = React.useState(false);
  const [previousPrescription, setPreviousPrescription] = useState([]);
  console.log(previousPrescription);

  const handleClickOpen = (id) => {
    setOpen(true);
    // console.log("patientPrescriptionData",patientPrescriptionData);
    const oldPrescription = patientPrescriptionData?.filter(p => p.Patient[0]?._id === id)
    // console.log("oldPrescription",oldPrescription)
    const sortedPrescriptions = _.orderBy(oldPrescription, [item => item.createdAt], ['desc']);
    // const sortedPrescriptions = oldPrescription.sort((a, b) => a.createdAt - b.createdAt);
    // console.log("sortedPrescriptions",sortedPrescriptions)
    setPreviousPrescription(sortedPrescriptions.slice(0, 2))
  };

  const handleClose = () => {
    setOpen(false);
    setPreviousPrescription([])
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));


  return (
    <div>
      {/* table Starts */}
      <table className="table table-borderless" bordercolor="#6caaa8" id="myTable">
        <tbody>
          <tr>
            <td>
              <Form.Control
                type="search"
                placeholder="Search  Patient here"
                className="me-2"
                aria-label="Search"
                onChange={searchPatient}
              />
            </td>
            <td >
              Contact
            </td>
            <td>
              Add Prescription
            </td>
            <td >
              Full Detail
            </td>
          </tr>
          {uniqueData?.map((data, index) => (
            <tr key={index}>
              <>
                <td> {data.Patient[0]?.name}</td>
                <td>{data.Patient[0]?.phone}</td>
                <td>
                  <div>
                    <Button variant="outlined" onClick={() => handleClickOpen(data.Patient[0]?._id)}>
                      Add
                    </Button>
                    <Dialog
                      fullScreen={fullScreen}
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="responsive-dialog-title"
                      sx={{
                        "& .MuiDialog-container": {
                          "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "950px",  // Set your width here
                          },
                        },
                      }}
                    >
                      <DialogTitle id="responsive-dialog-title">Prescription</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          <br />
                        </DialogContentText>
                        <table className="striped bordered visiting" bordercolor="#6caaa8">
                          <thead>
                            <tr>
                              <th>
                                No
                              </th>
                              <th>
                                Visit Date
                              </th>
                              <th> Symptoms </th>
                              <th>Medicines</th>
                            </tr>
                          </thead>
                          <tbody>
                            {previousPrescription?.map((v, index) => {
                              return (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{dayjs(v.createdAt).format('DD/MM/YYYY')}</td>
                                  <td>{v.Symptoms?.join(', ')}</td>
                                  <td>
                                    <ul>
                                      {v.medicineData?.map((medicine) => (
                                        <li key={medicine._id}>
                                          <p>Name: {v.PatientMedicines?.find((el) => el._id === medicine.medicineDetails)?.medicineName}</p>
                                          <p>Dose: {medicine.dose}</p>
                                        </li>
                                      ))}
                                    </ul>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <div>
                          <PrescriptionWindow2 previousPrescription={previousPrescription} />
                        </div>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Submit</Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </td>
                <td>
                  <div>
                    <Button onClick={setPatientDetail} id={data.Patient[0]?._id} >View</Button>
                  </div>
                  <div style={{ display: "none" }}>
                  </div>
                </td>
              </>
            </tr>
          ))}
        </tbody>
      </table>
      {/* table End */}
    </div>
  )
}

export default OldPatientTab