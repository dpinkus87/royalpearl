import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import "../../App.css";
import hero from "../../Images/scott-webb-_7G_R_IWt1U-unsplash.jpeg";
import bracelet from "../../Images/bracelet.jpeg"
import earrings from "../../Images/earrings.jpeg"

const Regal = () => {
  return (
    <div>
    <h1 className='header'>Regal Jewelry</h1>
        <Container fluid>
                <Row>
                    <Col className="m-0 p-0 ">
                        <Image className='heroImage' src={hero} fluid />
                    </Col>

                </Row>

                <Row className='hero-text'>TEST</Row>
            </Container>

<br></br>

<Container fluid>
                <Row>
                    <Col className="m-0 p-0 ">
                        <Image className='heroImage' src={bracelet} fluid />
                    </Col>

                </Row>

                <Row className='hero-text'>TEST</Row>
            </Container>

  <br></br>

  <Container fluid>
                <Row>
                    <Col className="m-0 p-0 ">
                        <Image className='heroImage' src={earrings} fluid />
                    </Col>

                </Row>

                <Row className='hero-text'>TEST</Row>
            </Container>
    </div>
  )
}

export default Regal