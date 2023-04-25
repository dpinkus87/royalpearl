
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const styles = {
  Container: {
    background: '#EDEDED',
    height: '100px',
    justifyContent: 'center',
    display: 'flex',
    maxWidth: '100%',
    flexWrap: 'none'
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'green',
  },
  h1: {
    fontSize: '12pt',
    color: 'black',
  },
  icon: {

  },
  li: {
    listStyle: 'none'
  }
}

const Footer = () => {

  return (
    <div>
    <Container style={styles.Container} fluid >

      <Row style={styles.row}>
        <Col sm={8} md={4} lg={2} fluid>
          <ul style={styles.li}>
            <li >
              test
            </li>
            <li>
              test2
            </li>
          </ul></Col>
        <Col sm={8} md={4} lg={2} fluid>Royal Pearl All rights reserved 2023</Col>
        <Col sm={8} md={4} lg={2} fluid>
          <ul style={styles.li}>
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