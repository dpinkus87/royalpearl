import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomepageModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow(); // call handleShow on component mount
    }, []);

    const styles = {
        body: {
            background: 'black',
            textSize: "50px",
            color: 'white',
            radius: '5%',
            height: '50rem',
            width: '50rem'
        },
        col1: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRight: '5px',
            borderColor: 'white'
        },
        col2: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        modal: {
            alignItems: 'center',
            padding: '0 !important'
        }
    }

    return (
        <>


            <Modal style={styles.modal} show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                centered>

                <Modal.Body style={styles.body}>
                    <Row>
                        <Col style={styles.col1}>
                            <div>
                                About Royal Pearl
                            </div>
                            <Button variant="secondary" onClick={handleClose}>
                                Royal Pearl
                            </Button>
                        </Col>

                        <Col style={styles.col2}>
                            <div>
                                About Regal Regal
                            </div>
                            <Link to='/Regal'>
                                <Button variant="secondary" onClick={handleClose}>
                                    Regal           </Button>
                            </Link>

                        </Col>
                    </Row>

                </Modal.Body>


            </Modal>
        </>
    );
}

export default HomepageModal;
