import React, { useEffect, useState } from "react";
import ScrollToTop from 'react-scroll-to-top';
import Slidebarone from '../Slidebarone/Slidebarone';
import "./Order.css"
import Orders from "../Orders/Orders";

const Order = () => {
 
    return (
        <>
           <div className="apps ">
        <div className="appGlasss">
     <Slidebarone/>
     
    <Orders/>
        </div>
      </div>
     
      <ScrollToTop smooth />
        </>
    );
};

export default Order;