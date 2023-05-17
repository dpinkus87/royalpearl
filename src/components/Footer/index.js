// TODO: needs formatting
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';



const Footer = () => {

  return (
    <div display="flex">
      <Container fluid='true' className='bg-white p-3 m-auto justify-content-center' style={{ alignItems: 'center' }} >

        <Row sm={1} md={3} lg={3}  style={{ alignItems: 'center'}} >
          <Col >
            <ul >
              <li >
                test
              </li>
              <li>
                test2
              </li>
            </ul></Col>
          <Col>Royal Pearl All rights reserved 2023</Col>
          <Col>
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