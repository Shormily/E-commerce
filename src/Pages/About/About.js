import React from "react";
import service1 from "../Image/service1.png";
import service2 from "../Image/service2.png";
import service3 from "../Image/service3.png";
import network from "../Image/network.png";
import { HiChevronDoubleRight } from "react-icons/hi";

import "./About.css";
import Testimonials from "../Testimonials/Testimonials";
import { NavLink } from "react-router-dom";
import Header from "../Headers/Header";
import { Button } from "react-bootstrap";

const About = () => {
  return (
    <>
     {/* <Header/> */}
      <div className="about-section">
        <div className="container">
          <h1 className="title text-center">WHAT WE DO ?</h1>
          <div className="row ">
            <div className="col-lg-4 col-md-4 col-sm-12 about">
              <img src={service1} className="about-img mb-2" alt="" />
              <h4>Growth Marketing</h4>
              <p>
                Diam amet diam dolor eirmod et ea et. et diam dolor eirmod et ea
                et. Sit justo et dolores clita no eirmod. Et takimata amet
                sadipscing duo.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 about">
              <img src={service2} className="about-img mb-2" alt="" />
              <h4>Online Brands</h4>
              <p>
                Diam amet diam doloet diam dolor eirmod et ea et. r eirmod et ea
                et. Sit justo et dolores clita no eirmod. Et takimata amet
                sadipscing duo.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 about">
              <img src={service3} className="about-img mb-2" alt="" />
              <h4>Animated Ads</h4>
              <p>
                Diam amet diam dolor eirmod et ea et.et diam dolor eirmod et ea
                et. Sit justo et dolores clita no eirmod. Et takimata amet
                sadipscing duo.
              </p>
            </div>
          </div>
          <button type="button" className="btn btn-primary ">
            All Services
          </button>
        </div>
      </div>

      <div className="banner2 p-5 mt-5 mb-5">
              <div className='container '>
                  <div className='row '>
                      <div className=' text-light'>
                      <h1 className=" display-3 mt-5">Top Electronic Gadgets</h1>
                      <h4 className=" w-50 mt-4 mb-4">Explore latest selection of Laptops, Tablets, Cameras & More</h4>
                      <Button
                className="btnsdesigns px-5 p-2 pragraph-weight text-light bg-primary rounded-2"
               
              >
                Details <HiChevronDoubleRight size={28}/>
              </Button>
                      </div>
                      
                     
                  </div>
              </div>
          </div>
      <div className="about-us">
        <div className="container">
        <h1 className="title text-center">WHY CHOOSE US ?</h1>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 about-us">
                    <p className="about-title">Why we're different</p>
                    <ul>
                    <li>Belive in doing business with honesty</li>
                    <li>Belive in doing business with honesty</li>
                    <li>Belive in doing business with honesty</li>
                    <li>Belive in doing business with honesty</li>
                    <li>Belive in doing business with honesty</li>
                    <li>Belive in doing business with honesty</li>
                    <li>Belive in doing business with honesty</li>
                    </ul>
                    
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 about-us ">
                <img src={network} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
        <Testimonials/>
      </div>
     
    </>
  );
};

export default About;
