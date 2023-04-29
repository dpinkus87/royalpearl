import React from "react";
import { Navbar, Nav, Container,  } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../App.css";


const Header = () => {
return (
<header>
 
        <div>
          <h1 className="header" href="./">ROYAL PEARL</h1>
        </div>
        <Navbar className="justify-content-center" bg="black" variant='dark' expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <NavDropdown title="Product Categories" menuVariant='dark' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Earrings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Strands</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">New Arrivals</Nav.Link>
            <Nav.Link href="#link">Best Sellers</Nav.Link>
            <Nav.Link href="#link">Prior Pieces</Nav.Link>
            <Nav.Link href="#link">Upcoming Shows</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
      </header>
)
};


export default Header;
