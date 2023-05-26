import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%"}}>
      <Container
        fluid="true"
        className="bg-white p-3 m-auto"
        style={{ alignItems: "center", textAlign: "center", width:"100%", position: 'absolute'  
}}
      >
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <h2>ROYAL PEARL</h2>
          <br></br>
          <br></br>
          <h5>17 N Wabash Ave Ste 420</h5>
          <h5>Chicago, IL 60602-4871</h5>
          <h5>312-236-9228</h5>
          <h5>
            <a href="mailto:royalpearlusa@gmail.com">royalpearlusa@gmail.com</a>
          </h5>
          <br></br>
          <br></br>
          <br></br>
          <h6> Copyright ©2023 Royal Pearl</h6>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
