
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
              <NavDropdown.Item href="/catalog?category=Cuff Link">Cufflinks</NavDropdown.Item>
              <NavDropdown.Item href="/catalog?category=Earring">Earrings</NavDropdown.Item>
              <NavDropdown.Item href="/catalog?category=Necklace">Necklaces</NavDropdown.Item>
              <NavDropdown.Item href="/catalog?category=Ring">Rings</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="../Catalog">New Arrivals</Nav.Link>
            <Nav.Link href="../Catalog">Best Sellers</Nav.Link>
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
