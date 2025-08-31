import React from 'react'
import '../footer2.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="pa-footer-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="pa-foot-box">
                <h2 className="pa-foot-title">Legal Information</h2>
                <ul>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact us</a>
                  </li>
                  <li>
                    <a href="/refund-policy">Return Policy</a>
                  </li>
                  <li>
                    <a href="/terms-condition">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

            <div className='row'>
              <div className="col-md-6 offset-md-5">
                <div >
                  <a href="https://www.facebook.com/story.php?story_fbid=pfbid0Gvgv1EvvLCVjJYUCpvuSSYbqgKt7yJgfAzSJ92u4zUZFv2YG7B3B6Jz1GUC4tCDkl&id=100076816459208&mibextid=Nif5oz&_rdr" target="_blank">
                    <img style={{ marginRight: "15px" }}
                      src="images/facebook.svg"
                      // src={"http://localhost:2000/images/facebook.svg"}
                    />
                  </a>
                  <a href="" target="_blank">
                    <img style={{ marginRight: "15px" }}
                      src="images/instagram.svg" 
                      // src={"http://localhost:2000/images/instagram.svg"}
                    />
                  </a>
                   <a href="" target="_blank">
                    <img style={{ marginRight: "15px" }}
                      src="images/linkedin.svg" 
                      // src={"http://localhost:2000/images/linkedin.svg"}
                    />
                  </a> 
                   <a href="" target="_blank">
                    <img style={{ marginRight: "15px" }}
                      src="images/twitter.svg" 
                      // src={"http://localhost:2000/images/twitter.svg"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pa-copyright pa-copyright-two">
          <div className="container">
            <p>Copyright © {currentYear}. All right reserved. <a href=""></a></p>
          </div>
        </div>
      </>
   
  )
};

export default Footer;

