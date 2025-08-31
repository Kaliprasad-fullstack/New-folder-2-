import React from 'react';
import '../about.css';
import Breadcrumb from '../components/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Abouts = () => {
    return (
        <>
            <Breadcrumb />
            <div className="pa-about spacer-top spacer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="pa-about-img">
                                <img src={"images/yoga2_08.jpg"} alt="image" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pa-about-content">
                                <div className="pa-heading">

                                    <h5>about us</h5>
                                </div>
                                <p align="justify">Welcome to Heart Ayurvedic Chikitsalaya, Agnikarma Viddhakarma Research Center. We specialize in providing a holistic approach to healthcare using traditional Ayurvedic practices. We at Heart offer a range of services, including agnikarma viddhakarma, Panchkarma, and a complete Ayurvedic practice.

                                    Agnikarma viddhakarma is a specialized Ayurvedic treatment that involves using heat to promote healing and relieve pain with different shalaka (stick with specific measurements) made up of metals like Suvarna,Tamra, Rajat, Loh, Panchdhatu, etc. In "Viddha-karma" we use insulin needle on a specific point for management of different diseases like musculoskeletal conditions such as arthritis and back pain, knee joint pain, cervical spondylitis, lumbar spondylitis, sciatica, AVN, allergic rhinitis, infertility, headache, insomnia any many more.

                                    Pancha-karma is a detoxification process that aims to eliminate toxins from the body and restore balance. This procedure is also useful for disease management like asthama, eczema, psoriasis, alopecia, etc. Panchkarma includes Vaman, Virechan, Basti, Nasya, Raktamokshan. Upkarma includes agnikarma, viddhakarma, pracchan karma, etc. Treatment  involves a combination of therapies, including massage, herbal steam therapy, and nasal cleansing, to cleanse the body of impurities.

                                    At our Heart Ayurved clinic, we offer a complete Ayurvedic practice that includes consultation, diagnosis, and treatment. Our experienced Vaidya Dr Megha Akshay Pendkar takes a personalized approach to healthcare, considering each individual's unique constitution, lifestyle, and health goals to develop a customized treatment plan.

                                   </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pa-team">
                <div className="container">
                    <div className="pa-heading">
                    </div>
                    <div>
                        <img src={"images/ayurved2.jpg"} style={{
                            width: "100%",
                            margin: " 0 0 0 15px"
                        }} className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="pa-counter spacer-top spacer-bottom">
                <div className="container">
                    <div className="pa-heading">
                        <img src={"images/herbal.svg"} alt="image" className="img-fluid" />
                        <h1>Benefit from choosing the best</h1>
                    </div>

                    <div>
                        <Row className='Heart-about'>
                            <Col>
                                <Row className='Heart-about'>
                                    <img className='imgSmall img-fluid' src="images/ayurvedbaneer2.jpg" />
                                </Row>
                                <Row className='Heart-about'>
                                    <img className='imgSmall img-fluid' src="images/oil.webp" />
                                </Row>
                            </Col>
                            <Col>
                                <img className='imgSmall img-fluid' style={{ height: '810px' }} src="images/medical.avif" />
                            </Col>
                        </Row>
                        <Row className='Heart-about'> 
                            <Col>
                            <img className='imgSmall img-fluid' style={{ height: '400px' }} src="images/10.jpg" />
                            </Col>
                            <Col>
                            <img className='imgSmall img-fluid' style={{ height: '400px' }} src="images/8.jpg" />
                            </Col>
                        </Row>
                        <Row className='Heart-about'>
                            <Col>
                            <img className='imgSmall img-fluid' style={{ height: '400px' }} src="images/7.jpg" />
                            </Col>
                            <Col>
                            <img className='imgSmall img-fluid' style={{ height: '400px' }} src="images/9.jpg" />
                            </Col>
                        </Row>
                        <Row className='Heart-about'>
                            <img className='imgPanchkarmaback img-fluid' src="images/Ayurvedic-PCD-Company-In-Aurangabad.jpg" />
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Abouts