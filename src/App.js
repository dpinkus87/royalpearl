import "./App.css";
import hero from "./Images/scott-webb-_7G_R_IWt1U-unsplash.jpeg";
import archives from "./Images/anna-stampfli-7GxPOMH2Mh4-unsplash.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row, Col, Image } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header bg='black'>
        <div>
          <h1 className="header">ROYAL PEARL</h1>
        </div>
        <Navbar className="Nav" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  Home
                </Nav.Link>
                <Nav.Link href="#link">
                  Link
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        {/* Hero cover image */}
        <Container>
          <Row>
            <Col className="m-0 p-0">
              <Image src={hero} fluid />
            </Col>
          </Row>
        </Container>

        {/* Previous collections image / link */}
        <Container>
          <Row className="m-0 p-0">
            <Col>
              <Image className="m-0 p-0" src={archives} fluid />
            </Col>
          </Row>
        </Container>
        {/* New arrivals & Best of the best cards / links */}
        <Row className="px-4 my-5">
          <Col sm={8}>sm=8</Col>
          <Col sm={4}>sm=4</Col>
        </Row>

        {/* About us section */}
        <Container>
          <Row className="px-4 my-5">
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
