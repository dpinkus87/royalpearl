import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../App.css";
import { transform } from "framer-motion";


const Header = ({ handleNameChange }) => {

  const [searchText, setSearchText] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNameChange(searchText);
  };

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999, background: 'black', color: 'white' }}>
      <div>
        <h1 className="header">ROYAL PEARL</h1>
      </div>
      <Container className="m-0 align-content-between" fluid={true} >
        <Navbar className="justify-content-center" bg="black" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto justify-content-end" style={{ paddingLeft: '14rem'}}>
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Product Categories" menuVariant="dark" id="basic-nav-dropdown">
                <NavDropdown.Item href="/catalog?category=Bracelet">Bracelets</NavDropdown.Item>
                <NavDropdown.Item href="/catalog?category=Earring">Earrings</NavDropdown.Item>
                <NavDropdown.Item href="/catalog?category=Necklace">Necklaces</NavDropdown.Item>
                <NavDropdown.Item href="/catalog?category=Pendant">Pendants</NavDropdown.Item>
                <NavDropdown.Item href="/catalog?category=Ring">Rings</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/catalog?category2=NewItem">New Arrivals</Nav.Link>
              <Nav.Link href="/catalog?category2=BestSeller">Best Sellers</Nav.Link>
              {/* <Nav.Link href="/OldFriends?category2=OldFriend">Old Friends</Nav.Link> */}

              <NavDropdown
                title="Upcoming Shows"
                menuVariant="dark"
                id="basic-nav-dropdown"
                className="hover-dropdown"
             style={{borderRadius: '0'}}
                

              >
              <Container style={{ width: '50vw', minWidth: '25%', transform: 'translateX(-20rem)', background: 'black', textAlign: 'center' }}>
<br style={{background: 'white'}}></br>
                <NavDropdown.ItemText style={{ width: '100%'}}>
                <span style={{ paddingLeft: '2rem' }}>&#8226;</span> 
                  Select Jewelry Show: Ritz Carlton in McLean Virginia August 13th - 14th, 2023
                </NavDropdown.ItemText>

                <NavDropdown.ItemText style={{ width: '100%' }}>
                <span style={{ paddingLeft: '2rem' }}>&#8226;</span> 
                  Select Jewelry Show: Dallas Texas - September 10th - 11th, 2023
                </NavDropdown.ItemText>
              </Container>
              </NavDropdown>


            </Nav>
            <Form className="d-flex mb-3" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 rounded-0"
                aria-label="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value.toUpperCase())}
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
