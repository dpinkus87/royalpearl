import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../App.css";


const Header = ({ handleNameChange }) => {
  
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNameChange(searchText);
  };

  console.warn(handleNameChange)

  return (
    <header>
      <div>
        <h1 className="header">ROYAL PEARL</h1>
      </div>
      <Container className="m-0 align-content-between" fluid={true}>
        <Navbar className="justify-content-center" bg="black" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto justify-content-end">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Product Categories" menuVariant="dark" id="basic-nav-dropdown">
                <NavDropdown.Item href="/catalog?category=bracelet">Bracelets</NavDropdown.Item>
                <NavDropdown.Item href="/catalog?category=Cuff Link">Cufflinks</NavDropdown.Item>
                <NavDropdown.Item href="/catalog?category=Earring">Earrings</NavDropdown.Item>
                <NavDropdown.Item href="/catalog?category=Necklace">Necklaces</NavDropdown.Item>
                <NavDropdown.Item href="/catalog?category=Ring">Rings</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/catalog">New Arrivals</Nav.Link>
              <Nav.Link href="/catalog">Best Sellers</Nav.Link>
              <Nav.Link href="/catalog">Prior Pieces</Nav.Link>
              <Nav.Link href="/">Upcoming Shows</Nav.Link>
            </Nav>
            <Form className="d-flex m-3" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 rounded-0"
          aria-label="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="outline-success" className="rounded-0" type="submit">
          Search
        </Button>
      </Form>
          </Navbar.Collapse>
          
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
