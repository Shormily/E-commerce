import React from 'react';
import Nav from "react-bootstrap/Nav";

import { NavLink } from "react-router-dom";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
const Slidebarone = () => {
    return (
        <>
            <div div className="sidebar">
      <div
      className="position-sticky sticky-left "
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CDBSidebar textColor="#fff" >
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href=""
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Sidebar
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content bg-colors ">
            <CDBSidebarMenu className="bg-colors">
              {/* <Nav.Link>
                <CDBSidebarMenuItem icon="columns" className="fnt">
                  Dashboard
                </CDBSidebarMenuItem>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/order">
                <CDBSidebarMenuItem icon="shop" className="fnt">
                  Order
                </CDBSidebarMenuItem>
              </Nav.Link> */}
              <Nav.Link as={NavLink} to="/dashboard">
                <CDBSidebarMenuItem icon="columns" className="fnt">
                Dashboard
                </CDBSidebarMenuItem>
              </Nav.Link>
             
            
              <Nav.Link>
                <CDBSidebarMenuItem icon="table" className="fnt">
                  Tables
                </CDBSidebarMenuItem>
              </Nav.Link>

              <Nav.Link >
                <CDBSidebarMenuItem icon="chart-line" className="fnt">
                  Analytics
                </CDBSidebarMenuItem>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/">
                <CDBSidebarMenuItem icon="home" className="fnt">
                  Profile page
                </CDBSidebarMenuItem>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/service">
                <CDBSidebarMenuItem icon="shop" className="fnt">
                  Services
                </CDBSidebarMenuItem>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                <CDBSidebarMenuItem icon="user" className="fnt">
                  Contact
                </CDBSidebarMenuItem>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/sign">
                <CDBSidebarMenuItem icon="sign" className="fnt">
                  {" "}
                  SignIn
                </CDBSidebarMenuItem>
              </Nav.Link>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </div>   
        </>
    );
};

export default Slidebarone;