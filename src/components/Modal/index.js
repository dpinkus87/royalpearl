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
        handleShow(); 
    }, []);

    const styles = {
        body: {
            background: 'black',
            textSize: "50px",
            color: 'white',
            radius: '5%',
            height: '30rem',
            width: '50rem'
        },
        col1: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRight: '5px',
            borderColor: 'white',
            height: '100%'
        },
        col2: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
    }

    return (
        <>
            <Modal size='lg' centered show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Body style={styles.body}>
                    <Row >
                        <Col style={styles.col1}>
                            <Row>
                                <div>
                                    About Royal Pearl
                                </div>
                            </Row>
                            <Row>
                            <Col>

                            </Col>
                            <div className='border-right-3 border-color-white' >

                            </div>
                            </Row>
                        </Col>

                        <Col style={styles.col2}>
                            <div>
                                About Regal Regal
                            </div>

                        </Col>
                    </Row>
                </Modal.Body>
                {/* Add a new row for the button */}
                <Modal.Footer style={{display: 'flex'}} className='bg-black border-0'>
                    <Col style={{justifyContent: 'center', alignItems: 'center', display: 'flex', borderRight: '2', borderColor: 'white'}}>
                        <Button variant="secondary" onClick={handleClose} centered> Royal Pearl</Button>

                    </Col>
                    <Col style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <Link to='/Regal'>
                            <Button centered variant="secondary" onClick={handleClose}>
                                Regal
                            </Button>
                        </Link>
                    </Col>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default HomepageModal;
