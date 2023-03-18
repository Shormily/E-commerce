import React from 'react';
import { HiChevronDoubleRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
const Card = ({service}) => {
    const { _id, name, img,explain,description,dolr } = service;
    return (
        <>
          <div className="col-lg-3 col-md-6 col-12 mb-3 mt-5">
        <div className="card-containers rounded-2">
          <div className="">
            <div className="image-containers">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-center pragraph-weight mt-3 text-primary">
              {name}
            </h4>
            <div className="text-warning text-center">
              <AiFillStar size={28}/><AiFillStar size={28}/><AiFillStar size={28}/><AiFillStar size={28}/><AiFillStar size={28}/>
              </div>
              <p className='px-2 text-center'>{description}</p>
              <h4 className='text-center  text-primary'>$20</h4>
           <p className='text-center  mt-3 '>{explain}</p>
            <div className="btnservice p-2">
            <NavLink as={NavLink} to={`/checkout/${_id}`}
                 >
              <button
                className="btnsdesigns px-4 pragraph-weight text-light bg-primary rounded-2"
               
              >
                Details <HiChevronDoubleRight size={25}/>
              </button>
              </NavLink>
           
             
            </div>
          </div>
        </div>
       
      </div>   
     
        </>
    );
};

export default Card;