import React from "react";
import wave2 from "../Image/wave2.png";
import logo from "../Image/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={wave2} className=" " alt="" />
        <div className="container">
          <div className="row">
            <div className=" col-lg-4 col-md-4 col-sm 12 footer-box">
              <img src={logo} className=" " alt="" />
              <p>
                Vero dolor no diam gubergren takimata dolores vero no. Duo
                gubergren kasd at tempor labore sit, invidunt justo amet diam.
              </p>
            </div>
            <div className=" col-lg-4 col-md-4 col-sm 12 footer-box">
             <p><b>CONTACT US</b></p>
            <p><i class="fa fa-location-dot"></i>World Trade Center, Bangalore</p>
            <p ><i className="fa fa-phone"></i>+1 0123456789</p>
            <p > <i class="fa fa-envelopes-bulk"></i>xyz@gmail.com</p>
            </div>
            <div className=" col-lg-4 col-md-4 col-sm 12 footer-box">
            <p><b>SUBBESCRIBE NEWLETTER</b></p>
            <input type="email" className="from-control p-2" placeholder="Your Email"/>
            <br/>
            <button type="button" className="btn btn-primary mt-3">Subscribe</button>
            </div>

          </div>
          <hr/>
          <p className="copyright text-center text-light">Website created by Shormily Raisa</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
