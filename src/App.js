import "./App.css";
import hero from "./Images/scott-webb-_7G_R_IWt1U-unsplash.jpeg";
import archives from "./Images/anna-stampfli-7GxPOMH2Mh4-unsplash.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";

function App() {
  return (
    <div className="App">

          <Header />    
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
    </div>
  );
}

export default App;
