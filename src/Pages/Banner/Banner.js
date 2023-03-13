import React from 'react';
import play from "../Image/play.png";
import home2 from "../Image/b12.png";
import wave1 from "../Image/wave1.png";


const Banner = () => {
    return (
        <>
         <section className="banner">
        <div className="container ">
          <div className="row about-text">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h1 className="text-light mt-5">This is a Gradient page</h1>
              <p className="text-light">
                Dolor et rebum justo labore aliquyam labore. Eos invidunt tempor
                voluptua amet diam ipsum clita elitr. Dolor takimata ea erat.
              </p>
              <a href="/#">
                <img src={play} className="playbtn" alt="" />
                Watch Tutorial
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
              <img src={home2} className="w-100" alt="" />
            </div>
          </div>
        </div>
        <img src={wave1} className="bottom-img" alt="" />
      </section> 
        </>
    );
};

export default Banner;