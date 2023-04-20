import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'
import "../../App.css";


const Header = () => {
return (
<header>
 
        <div>
          <h1 className="header">ROYAL PEARL</h1>
        </div>
        <Navbar className="justify-content-center" bg="black" variant='dark' expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
      </header>
)
};


export default Header;
