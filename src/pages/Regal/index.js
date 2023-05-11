import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "../../App.css";
import hero from "../../Images/scott-webb-_7G_R_IWt1U-unsplash.jpeg";
import bracelet from "../../Images/bracelet.jpeg";
import earrings from "../../Images/earrings.jpeg";

const Regal = () => {
    return (
        <div>
            <br></br>
            <h1 className="header">Regal Jewelry</h1>
            <br></br>

            <div className="justify-content-center align-items-center m-auto">
                <a href="../" style={{ textDecoration: "none", color: "white", justifyContent: "center", display: 'flex' }}>
                    <h5>Royal Pearl</h5>
                </a>
            </div>

            <br></br>
            <Container fluid="true">
                <Row>
                    <Col className="m-0 p-0 ">
                        <Image
                            className="heroImage"
                            src={hero}
                            fluid="true"
                            style={{ objectFit: "cover", height: "500px" }}
                        />
                    </Col>
                </Row>

                <Row
                    className="hero-text mt-5"
                    style={{
                        position: "absolute",
                        top: "10rem",
                        right: "3rem",
                        bottom: "15rem",
                        height: "10rem",
                    }}
                >
                    TEST
                </Row>
            </Container>

            <br></br>
            <br></br>

            <Container fluid="true">
                <Row>
                    <Col className="m-0 p-0 ">
                        <Image
                            className="heroImage"
                            src={bracelet}
                            fluid="true"
                            style={{ objectFit: "cover", height: "500px" }}
                        />
                    </Col>
                    <Col xs={4}>
                        <h2 className="text-white text-center py-8">TEST</h2>
                    </Col>
                </Row>
            </Container>

            <br></br>
            <br></br>

            <Container fluid="true">
                <Row>
                    <Col xs={4}>
                        <h2 className="text-white text-center py-8">TEST</h2>
                    </Col>
                    <Col className="m-0 p-0 ">
                        <Image
                            className="heroImage"
                            src={earrings}
                            fluid="true"
                            style={{ objectFit: "cover", height: "500px" }}
                        />
                    </Col>
                </Row>
                <br></br>
                <br></br>
            </Container>
        </div>
    );
};

export default Regal;
