
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';



const Footer = () => {

  return (
    <div display="flex">
    <Container fluid display="flex" className='bg-white' style={{alignItems:'center', justifyContent: 'space-around'}}>

      <Row className="justify-content-space-around!">
        <Col sm={8} md={4} lg={2} fluid>
          <ul >
            <li >
              test
            </li>
            <li>
              test2
            </li>
          </ul></Col>
        <Col sm={8} md={4} lg={2} fluid>Royal Pearl All rights reserved 2023</Col>
        <Col sm={8} md={4} lg={2} fluid>
          <ul>
            <li>
              Follow Us
            </li>
            <li>
              Instagram
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Footer;