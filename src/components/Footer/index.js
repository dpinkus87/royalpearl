// TODO: needs formatting
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container
        fluid="true"
        className="bg-white p-3 m-auto"
        style={{ alignItems: "center", textAlign: "center" }}
      >
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <h2>ROYAL PEARL</h2>
          <h4>17 N Wabash Ave Ste 420</h4>
          <h4>Chicago, IL 60602-4871</h4>
          <h4>312-236-9228</h4>
          <h4>
            <a href="mailto:royalpearlusa@gmail.com">royalpearlusa@gmail.com</a>
          </h4>
          <h5> Copyright ©2023 Royal Pearl</h5>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
