import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import "./MainDash.css"


const MainDash = () => {
    // fetc - localhost /users/email
    // email will come from firebase and you will get it from 
    // 
    return (
        <>
            <div className="MainDash">
              
<Cards/>
<Table/>       
   
    </div>
    <ScrollToTop  smooth/>   
        </>
    );
};

export default MainDash;