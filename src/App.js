import './App.css';
import hero from './Images/scott-webb-_7G_R_IWt1U-unsplash.jpeg'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown, Row, Col, Image } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="title">
        <div>
          <h1 c>ROYAL PEARL</h1>
        </div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <Container>
          <Row>
            <Col>
              <Image className='m-0 p-0' src={hero} fluid />
            </Col>
          </Row>

          <Row className='px-4 my-5'>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
