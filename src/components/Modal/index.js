
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomepageModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow();
    }, []);

    const styles = {
        body: {
            background: "black",
            textSize: "50px",
            color: "white",
            radius: "5%",
            width: "50rem",
           maxWidth: '100%',
            borderColor: 'black',
            fontFamily: 'Bona Nova',
            display: "flex"
        }
    };

    return (
        <>
            <Modal
                size="lg" display= "flex" centered="true" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Body style={styles.body}>
                    <Row xxl={2} xl={2} lg={2} md={1} sm={1} xs={1} style={{ display: "flex" }} >
                        <Col>
                            <Row style={{ display: "flex", minHeight: "10vh", alignItems: "center", justifyContent: "center" }} className="bg-black border-right-1 border-color-white" >
                                <div className="d-flex justify-content-center w-100">
                                    <h3>Royal Pearl</h3>
                                </div>
                                <br></br>
                                <br></br>
                            </Row>
                            <Row style={{ display: "flex", minHeight: "30vh", textAlign: 'center' }}>
                                <p>
                                    Royal Pearl has blended a visionary design approach with the
                                    innovative application of state-of-the-art technology to
                                    create a unique high quality collection of jewelry.
                                </p>
                            </Row>

                            <Row style={{ alignItems: "center", justifyContent: "center" }}>
                                <div className="d-flex justify-content-center w-100">
                                    <Link to="/">
                                        <Button variant="secondary" onClick={handleClose} centered="true">
                                            Royal Pearl
                                        </Button>
                                    </Link>
                                </div>

                            </Row>

                        </Col>

                        <Col>
                            <Row
                                style={{ display: "flex", minHeight: "10vh", alignItems: "center", justifyContent: "center", }}
                                className="bg-black">
                                <div className="d-flex justify-content-center w-100">
                                    <h3>Regal</h3>
                                </div>

                                <br></br>
                                <br></br>
                            </Row>
                            <Row style={{ display: "flex", minHeight: "30vh", textAlign: 'center' }}>
                                <div className="d-flex justify-content-center w-100">

                                    <p>
                                        Regal Jewelry Manufacturing provides virtually limitless
                                        production capabilities in all aspects of the jewelry
                                        industry.
                                    </p>
                                </div>
                            </Row>

                            <Row>
                                <div className="d-flex justify-content-center w-100">
                                    <Link to="/Regal">
                                        <Button centered="true" variant="secondary" onClick={handleClose}>
                                            Regal
                                        </Button>
                                    </Link>
                                </div>

                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default HomepageModal;
