import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../assets/img/AlivStudio.png';



export default function Navigation() {
  return (
    <>





    {/* ======= Header ======= */}
    <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center justify-content-between">
    <a href="/" className="logo"><img src={logo} alt="" className="img-fluid" /></a>

   
    <Navbar id="navbar" className="navbar"  expand="lg">
      <Container className="container d-flex align-items-center justify-content-between">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link scrollto"  href="#home">Home</Nav.Link>
            <Nav.Link className="nav-link scrollto"  href="#about">About</Nav.Link>
            <Nav.Link className="nav-link scrollto"  href="#services">Services</Nav.Link>
            <Nav.Link className="nav-link scrollto"  href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className="nav-link scrollto"  href="#team">Team</Nav.Link>
            <Nav.Link className="nav-link scrollto"  href="#contact">Contact</Nav.Link>
            <Nav.Link className="getstarted scrollto"  href="#about">Get Started</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </header>{/* End Header */}
    {/* ======= Hero Section ======= */}

    </>
  )
}
