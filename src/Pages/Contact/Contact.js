import React from 'react';
import { Container } from 'react-bootstrap';
import "./Contact.css"
import { HiChevronDoubleRight } from "react-icons/hi"; 
import Header from '../Headers/Header';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <>
        <Header/>
            <section className='p-5'>
       
        <div className="container card  shadow mt-5 mb-5">
          <div className="row">
            <div
              className="col-12 col-md-6 col-lg-6 p-5 mt-5 "
             
            >
              <p className="text-primary">GET IN TOUCH</p>
              <h1 className="mb-4 text-dark">Contact Details</h1>
              <p>
                If you are interested in working with us then please drop us a
                line, we would love to hear from you.
              </p>
              <p>
                <span>
                  <i className=" fa fa-solid fa-location-dot mx-2 mt-2 fa-2x  "></i>
                </span>
                121 Wallstreet Street, New York , USA
              </p>
              <p>
                <span>
                  <i className=" fa fa-solid fa-envelope mx-2 mt-2 fa-2x  "></i>
                </span>
                Shormilyrais@gmail.com
              </p>
              <p>
                <span>
                  <i className="fa fa-solid fa-phone mx-2 mt-2 fa-2x "></i>
                </span>
                + 013-121-55566{" "}
              </p>
            </div>
            <div
              className="col-12 col-md-12 col-lg-6 p-5"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-easing="ease-in-sine"
            >
              <p className="text-primary">CONTACT US</p>
              <h1 className="text-dark">Drop Us A Line</h1>
              <input
                className="mt-5 mb-3 p-3 col-lg-6 col-md-6 col-12 w-100 shadow"
                placeholder="Name*"
                type="text"
              />
              
              <br />
              <input
                className="mt-5 mb-3 p-3 col-lg-6 col-md-6 col-12 w-100 shadow"
                placeholder="E-mail*"
                type="text"
              />
              <br />
              <textarea
                className="mt-5 p-4 col-lg-6 col-md-6 col-12 w-100 shadow"
                placeholder="Message"
                type="text"
              />
              <br/>
               <button
                className="btnsdesigns px-4 pragraph-weight text-light bg-primary rounded-2 shadow mt-3"
               
              >
                Send <HiChevronDoubleRight size={25}/>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        
        {/* <Container fluid className="footer-map p-0 map-container">
          <div className="map-container d-none d-md-block col-lg-12 col-md-12 col-12 pb-0 mt-5">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.544153666492!2d-74.01101428500574!3d40.70603607933263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sWall%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649877573625!5m2!1sen!2sbd"
              width="100%"
              height="600"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Container> */}
     
    </section>  
    <Footer/> 
        </>
    );
};

export default Contact;