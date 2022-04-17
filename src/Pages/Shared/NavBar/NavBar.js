import React from "react";
import "./NavBar.css";
import logo from '../../../Images/logo.webp'
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  // let location = useLocation();
  // if (location.key !== "default") {
  return (
    <>
      <Navbar bg="light" variant="dark">
        <Container>
          <NavLink to="/">
            <img
              alt=""
              src={logo}
              width="auto"
              height="50"
              className="d-inline-block align-top"
            />
          </NavLink>
          <Nav className="ms-auto">
            <NavLink className="link" to="/home">
              Home
            </NavLink>
            <NavLink className="link" to="/features">
              Features
            </NavLink>
            <NavLink className="link" to="/programs">
              Programs
            </NavLink>
            <NavLink className="link" to="/blogs">
              Blogs
            </NavLink>
            <NavLink className="link" to="/register">
              Register
            </NavLink>
            <NavLink className="link" to="/login">
              Login
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
  // }
};

export default NavBar;
