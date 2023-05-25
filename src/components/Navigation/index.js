// TODO: update links accordingly

import React from "react";
import { Navbar, Nav, Container,  } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../App.css";


const Header = () => {
return (
<header>
 
        <div >
          <h1 className="header">ROYAL PEARL</h1>
        </div>
        <Navbar className="justify-content-center" bg="black" variant='dark' expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <NavDropdown title="Product Categories" menuVariant='dark' id="basic-nav-dropdown">
              <NavDropdown.Item href="/catalog?category=bracelet">Bracelets</NavDropdown.Item>
              <NavDropdown.Item href="/catalog?category=cufflink">Cufflinks</NavDropdown.Item>
              <NavDropdown.Item href="/catalog?category=earring">Earrings</NavDropdown.Item>
              <NavDropdown.Item href="/catalog?category=pendant">Pendants</NavDropdown.Item>
              <NavDropdown.Item href="/catalog?category=ring">Rings</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="/catalog?category=new_arrival">New Arrivals</Nav.Link>
            <Nav.Link href="/catalog?category=best_seller">Best Sellers</Nav.Link>
            <Nav.Link href="/catalog?category=prior">Prior Pieces</Nav.Link>
            <Nav.Link href="./">Upcoming Shows</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
      </header>
)
};


export default Header;
