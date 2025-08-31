import React from 'react';
import { Container } from 'react-bootstrap';
// Redux
import AyurvedInfo from '../components/AyurvedInfo'
import Banner from '../components/Banner'
import MedicineCards from '../components/MedicineCards'

const Home = () => {
  const baseUrl = process.env.REACT_APP_API__BASE_URL;
  return (
    <>
        {/* <img className='center'
          src={"images/vaidyalogo3.png"} width="546px"
          height=" 425px" /> */}
        <div style={{ marginTop: "2rem" }}>
          <Banner />
          </div>
          <div >
          <MedicineCards />
          </div>
          <Container>
          <AyurvedInfo/>
          </Container>
    </>
  )
}


export default Home
