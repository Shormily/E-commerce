import React from "react";
import user1 from "../Image/user1.jpg";
import user2 from "../Image/user2.jpg";
import so from "../Image/so.png";
import so4 from "../Image/so4.jpg";
import so1 from "../Image/so1.png";
import so2 from "../Image/so2.png";
import so3 from "../Image/so3.jpg";
import facebookicon from "../Image/facebookicon.png";
import instagramicon from "../Image/instagramicon.png";
import snapchaticon from "../Image/snapchaticon.png";
import twittericon from "../Image/twittericon.png";
import whatsappicon from "../Image/whatsappicon.png";
import linkedinicon from "../Image/linkedinicon.png";
import "./Testimonials.css";
import { Carousel } from "react-bootstrap";

const Testimonials = () => {
  return (
    <>
     
<div className="bgtsc pt-5">
<h1 className="title text-center mt-5">WHAT CLIENTS SAY</h1>
<Carousel >
      <Carousel.Item>
      <div className="testimonials bgc2 text-dark">
        <div className="container">
        
          <div className="row offset-1">
            <div className="col-lg-5 col-md-5 testimonials">
              <p className="text-dark">
                Et erat eirmod gubergren ut consetetur est lorem lorem lorem
                sea, ea sanctus voluptua amet est labore ipsum sed takimata..
              </p>
              <img src={so} className=" " alt="" />
              <p className="user-details ">
                <b>Agelina</b>
                <br />
                Co-founder at xyz
              </p>
            </div>
            <div className="col-lg-5 col-md-5 testimonials">
              <p className="text-dark">
                Et erat eirmod gubergren ut consetetur est lorem lorem lorem
                sea, ea sanctus voluptua amet est labore ipsum sed takimata..
              </p>
              <img src={user2} className=" " alt="" />
              <p className="user-details ">
                <b>Johan Doe</b>
                <br />
                Director at xyz
              </p>
            </div>
          </div>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="testimonials bgc1">
        <div className="container">
          
          <div className="row offset-1">
            <div className="col-lg-5 col-md-5 testimonials">
              <p className="text-dark">
                Et erat eirmod gubergren ut consetetur est lorem lorem lorem
                sea, ea sanctus voluptua amet est labore ipsum sed takimata..
              </p>
              <img src={so1} className=" " alt="" />
              <p className="user-details ">
                <b>Agelina</b>
                <br />
                Co-founder at xyz
              </p>
            </div>
            <div className="col-lg-5 col-md-5 testimonials">
              <p className="text-dark">
                Et erat eirmod gubergren ut consetetur est lorem lorem lorem
                sea, ea sanctus voluptua amet est labore ipsum sed takimata..
              </p>
              <img src={so2} className=" " alt="" />
              <p className="user-details ">
                <b>Johan Doe</b>
                <br />
                Director at xyz
              </p>
            </div>
          </div>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="testimonials bgc">
        <div className="container">
         
          <div className="row offset-1">
            <div className="col-lg-5 col-md-5 testimonials">
              <p className="text-dark">
                Et erat eirmod gubergren ut consetetur est lorem lorem lorem
                sea, ea sanctus voluptua amet est labore ipsum sed takimata..
              </p>
              <img src={so3} className=" " alt="" />
              <p className="user-details ">
                <b>Agelina</b>
                <br />
                Co-founder at xyz
              </p>
            </div>
            <div className="col-lg-5 col-md-5 testimonials">
              <p className="text-dark">
                Et erat eirmod gubergren ut consetetur est lorem lorem lorem
                sea, ea sanctus voluptua amet est labore ipsum sed takimata..
              </p>
              <img src={so4} className=" " alt="" />
              <p className="user-details ">
                <b>Johan Doe</b>
                <br />
                Director at xyz
              </p>
            </div>
          </div>
        </div>
      </div>
      </Carousel.Item>
    </Carousel>
</div>
      <div className="social-media">
<div className="container text-center">
<p>FIND US ON SOCIAL MEDIA</p>
<div className="social-icon">
    <a href="#">  <img src={facebookicon} className=" decoeations" alt="" /></a>
    <a href="#">  <img src={snapchaticon} className="decoeations " alt="" /></a>
    <a href="#">  <img src={twittericon} className=" decoeations" alt="" /></a>
    <a href="#">  <img src={whatsappicon} className=" decoeations" alt="" /></a>
    <a href="#">  <img src={linkedinicon} className=" decoeations" alt="" /></a>
    <a href="#">  <img src={instagramicon} className=" decoeations" alt="" /></a>
</div>
</div>
      </div>
     
    </>
  );
};

export default Testimonials;
