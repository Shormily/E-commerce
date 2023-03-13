import React from 'react';
import c1 from "../Image/w1.jpg"
import m1 from "../Image/m2.png"
import p2 from "../Image/p3.jpg"
import h1 from "../Image/h1.jpg"
import "./Gallery.css"
import { NavLink } from "react-router-dom";
import { HiChevronDoubleRight } from "react-icons/hi";
import { Button } from 'react-bootstrap';

const Gallary = () => {
    return (
        <>
        <div className='container '>
            <div className='row'>
            <h1 className="title text-center ">Our Service </h1>
            <div className="col-lg-3 col-md-6 col-12 mb-3 mt-5">
        <div className="card-containers rounded-2">
          <div className="">
            <div className="image-containers">
              <img src={c1} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-center pragraph-weight mt-3 text-primary">
             Watch
            </h3>
           <p className='text-center px-4 mt-3 mb-1'>No sea sit takimata diam sed ut, accusam clita dolor ipsum ipsum, dolor et consetetur aliquyam accusam sed at eos.</p>
            <div className="btnservice p-3">
              <Button
                className="btnsdesign  px-4 pragraph-weight text-light bg-primary rounded-2"
                as={NavLink} to="/service"
              >
                Details <HiChevronDoubleRight size={25}/>
              </Button>
           
              
            </div>
          </div>
        </div>
      </div>
            <div className="col-lg-3 col-md-6 col-12 mb-3 mt-5">
        <div className="card-containers rounded-2">
          <div className="">
            <div className="image-containers">
              <img src={p2} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-center pragraph-weight mt-3 text-primary">
             Watch
            </h3>
           <p className='text-center px-4 mt-3 mb-1'>No sea sit takimata diam sed ut, accusam clita dolor ipsum ipsum, dolor et consetetur aliquyam accusam sed at eos.</p>
            <div className="btnservice p-3">
            <Button
                className="btnsdesigns px-4 pragraph-weight text-light bg-primary rounded-2"
                as={NavLink} to="/service"
              >
                Details <HiChevronDoubleRight size={25}/>
              </Button>
           
              
            </div>
          </div>
        </div>
      </div>
            <div className="col-lg-3 col-md-6 col-12 mb-3 mt-5">
        <div className="card-containers rounded-2">
          <div className="">
            <div className="image-containers">
              <img src={m1} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-center pragraph-weight mt-3 text-primary">
             Mouse
            </h3>
           <p className='text-center px-4 mt-3 mb-1'>No sea sit takimata diam sed ut, accusam clita dolor ipsum ipsum, dolor et consetetur aliquyam accusam sed at eos.</p>
            <div className="btnservice p-3">
            <Button
                className="btnsdesigns px-4 pragraph-weight text-light bg-primary rounded-2"
                as={NavLink} to="/service"
              >
                Details <HiChevronDoubleRight size={25}/>
              </Button>
           
              
            </div>
          </div>
        </div>
      </div>
            <div className="col-lg-3 col-md-6 col-12 mb-3 mt-5">
        <div className="card-containers rounded-2">
          <div className="">
            <div className="image-containers">
              <img src={h1} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-center pragraph-weight mt-3 text-primary">
              Headphone
            </h3>
           <p className='text-center px-4 mt-3 mb-1'>No sea sit takimata diam sed ut, accusam clita dolor ipsum ipsum, dolor et consetetur aliquyam accusam sed at eos.</p>
            <div className="btnservice p-3">
            <Button
                className="btnsdesigns px-4 pragraph-weight text-light bg-primary rounded-2"
                as={NavLink} to="/service"
              >
                Details <HiChevronDoubleRight size={25}/>
              </Button>
           
              
            </div>
          </div>
        </div>
      </div>
            </div>
        </div>
          
        </>
    );
};

export default Gallary;