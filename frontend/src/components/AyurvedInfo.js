import React from 'react'
import '../whyus.css'

const AyurvedInfo = () => {
    return (
        <>
            <div className="pa-why spacer-top spacer-bottom">
                <div className="container">
                    <div className="pa-heading">
                        <img src="/images/herbal.svg" alt="image" className="img-fluid" />
                        <h1>Many Problems One Solution</h1>
                        <h5>best for you</h5>
                    </div>
                    <div className="row">
                        {/* <img src={"images/whysukhayu.png"} alt="image" className="img-fluid"/> */}
                        <div className="col-md-4 col-sm-6 pr-0">
                            <div className="pa-why-ul pa-why-left">
                                <ul>
                                    <li>Joint Problems</li>
                                    <li>Viddhakarma</li>
                                    <li>Pediatric diseases</li>
                                    <li>Saundarya Chikitsa</li>
                                    <li>Hair Problems</li>
                                    <li>Eye-diseases</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 p-0">
                            <div className="pa-why-img">

                                <img src="images/herbal.svg" alt="image" className="img-fluid" />
                            </div>
                            <div className='whyImage'>
                            
                                <p>The Mother of all Healing</p>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-6 pl-0">
                            <div className="pa-why-ul pa-why-right">
                                <ul>
                                    <li>Ear-Nose-Throat Probelms</li>
                                    <li>Skin Problems</li>
                                    <li>Agnikarma</li>
                                    <li>Stree Vikar</li>
                                    <li>Infertility</li>
                                    <li>Panchkarma</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AyurvedInfo