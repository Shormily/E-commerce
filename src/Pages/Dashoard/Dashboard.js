import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import MainDash from "../MainDash/MainDash";
import RightSide from "../RightSide/RightSide";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="app ">
        <div className="appGlass">
          <Sidebar />
          {/* <div
          id="outlet-scroll"
          className="h-100% scroll-smooth overflow-y-auto w-100%"
        >
          <Outlet />
        </div> */}
          <MainDash />
          <RightSide />
        </div>
      </div>
      <ScrollToTop smooth />
    </>
  );
};

export default Dashboard;
