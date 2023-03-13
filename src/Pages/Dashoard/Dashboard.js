import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import MainDash from '../MainDash/MainDash';
import RightSide from '../RightSide/RightSide';
import Sidebar from '../Sidebar/Sidebar';
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <>
        
    <div className="app ">
      <div className="appGlass">
        <Sidebar/>
        <MainDash/>
    <RightSide/>
    
      </div>
    </div>
    <ScrollToTop smooth />
        </>
    );
};

export default Dashboard;