import React from "react";
import { Col, Image, Navbar } from "react-bootstrap";
import Logo from "../Images/Michelin-logo.png";
import Dhanu from "../Images/dhanu.jpeg";

export default function Nav() {
  const navbarStyle = {
    backgroundColor: "#f5e838",
  };
  return (
    <Navbar style={navbarStyle}>
      <Navbar.Brand href="/" className="d-flex justify-content-between align-items-center bg">
        <img
          alt=""
          src={Logo}
          width="200"
          height="65"
          className="d-inline-block align-top ml-6"
          style={{ marginLeft: "20px" }}
        />{' '}
        <Col xs={6} md={4} className="text-end" style={{ position: "absolute", center: 0, right: 20 }}>
          <Image src={Dhanu} roundedCircle style={{ width: "50px", height: "50px" }} />
        </Col>
      </Navbar.Brand>
      {/* Add navigation links */}
      <ul>
        
        {/* Add other navigation links as needed */}
      </ul>
    </Navbar>
  )
}
