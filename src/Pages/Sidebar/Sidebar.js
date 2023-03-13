import React, { useState } from "react";
import "./Sidebar.css";
import logos from "../Image/logos.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Dashoard/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { IoLogInSharp } from "react-icons/io5";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import useFirebase from "../Hook/useFirebase";

const Sidebar = () => {
  const { user, logout } = useFirebase()
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
       

       <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content bg-colors ">
          <CDBSidebarMenu className="bg-colors">
        
          
      
            <Nav.Link >
            <CDBSidebarMenuItem icon="columns" className="fnt">Dashboard</CDBSidebarMenuItem>
            </Nav.Link>
            <Nav.Link as={NavLink}  to="/tables" >
            <CDBSidebarMenuItem icon="shop" className="fnt">Order</CDBSidebarMenuItem>
            </Nav.Link>
            <Nav.Link  >
              <CDBSidebarMenuItem icon="table" className="fnt">Tables</CDBSidebarMenuItem>
            </Nav.Link>
           
            <Nav.Link as={NavLink}  to="/analytics" >
              <CDBSidebarMenuItem icon="chart-line" className="fnt">Analytics</CDBSidebarMenuItem>
            </Nav.Link>
            <Nav.Link  as={NavLink} to="/" >
              <CDBSidebarMenuItem icon="home" className="fnt">Profile page</CDBSidebarMenuItem>
            </Nav.Link>
            <Nav.Link  as={NavLink} to="/service" >
              <CDBSidebarMenuItem icon="shop" className="fnt">Services</CDBSidebarMenuItem>
            </Nav.Link>
            <Nav.Link  as={NavLink} to="/contact"  >
              <CDBSidebarMenuItem icon="user" className="fnt">Contact</CDBSidebarMenuItem>
            </Nav.Link>
            <Nav.Link  as={NavLink} to="/sign"  >
              <CDBSidebarMenuItem icon="sign" className="fnt"> SignIn</CDBSidebarMenuItem>
            </Nav.Link>
           
          </CDBSidebarMenu>
        </CDBSidebarContent>

       
      </CDBSidebar>
    </div>


      {/* <Navbar.Toggle className="bars px-3" style={expanded?{left: '85%'}:{left: '2%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </Navbar.Toggle>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      logos
      <div className="logo">
        <img src={logos} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      <div className="menu">
     

        {SidebarData.map((item, index) => {
          return (
            <Navbar
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}

            >
              <item.icon />
              <span className="fnt">{item.heading}</span>
            </Navbar>
          );
        })}
        signoutIcon
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </motion.div> */}
    </>
  );
};

export default Sidebar;