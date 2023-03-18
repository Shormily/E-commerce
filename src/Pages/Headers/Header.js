import React from "react";
import "./style.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../Image/logo.png";
import { IoLogInSharp } from "react-icons/io5";
import useFirebase from "../Hook/useFirebase";
// import useFirebase from "../Hook/useFirebase";

const Header = () => {
  const { user, logout } = useFirebase();
  return (
    <>
      <section>
        <Navbar className="sticky-top bg-colors" expand="lg">
          <Navbar.Brand className="animate__animated animate__backInLeft p-2">
            <img className=" navimg" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav "
            className="nav-toggle "
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto d-flex align-items-center animate__animated animate__backInRight mx-5 fnt">
              <Nav.Link as={NavLink} to="/" className="textcolor ">
               Home
              </Nav.Link>
              {/* <Nav.Link as={NavLink} to="/about" className="textcolor">
                About US
              </Nav.Link> */}
              {/* <Nav.Link  className="textcolor"  to="/addservice">
                AddService
              </Nav.Link> */}

              <Nav.Link className="textcolor" as={NavLink} to="/service ">
                Services
              </Nav.Link>
              <Nav.Link className="textcolor" as={NavLink} to="/dashboard ">
                Dashboard
              </Nav.Link>
             

              <Nav.Link as={NavLink} className="textcolor" to="/contact">
                Contact US
              </Nav.Link>

              {!user?.email && (
                <Nav.Link
                  as={NavLink}
                  className="nav-link textcolor animate__animated animate__fadeInDownBig text-light"
                  to="/sign  "
                >
                  SignIn <IoLogInSharp />
                </Nav.Link>
              )}

              {user?.email && (
                <Nav.Link
                  onClick={logout}
                  className="nav-link animate__animated animate__fadeInDownBig text-light"
                  to="/sign  "
                  as={NavLink}
                >
                  LogOut
                  <IoLogInSharp />
                  <span>
                    {user?.photoURL ? (
                      <img className="user-img" src={user.photoURL} alt="" />
                    ) : (
                      <small className="text-light ms-3">
                        {user?.displayName}
                      </small>
                    )}
                  </span>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </>
  );
};

export default Header;
