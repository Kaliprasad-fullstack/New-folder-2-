import React from 'react';
import { Container } from 'react-bootstrap';
import '../banner.css';

function Banner() {
    return (
        <>
            <div className='pa-banner'>
                <Container>
                    <div className='row'>
                        <div className="col-lg-6 offset-lg-6">
                            <div className="pa-banner-text">
                                <h3 className="pa-banner-category">Health Care </h3>
                                <h2> The Heart Clinic</h2>
                                {/* <p>Panchkarma, Vidhakarma</p> */}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Banner