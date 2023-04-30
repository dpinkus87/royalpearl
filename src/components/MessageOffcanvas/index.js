import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../App.css";


const MessageOffcanvas = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [myProducts, setMyProducts] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("customerProducts")) || [];
    setMyProducts(JSON.stringify(products));
  }, []);
  
  const styles = {
    button: {
      position: "fixed",
      bottom: "20px",
      right: "30px",
      zIndex: "99",
      fontSize: "1.8rem"
    },
    offcanvas: {
      position: "fixed",
      bottom: "20px",
      right: "30px"
    }
  };

  return (
    <>
      <Button variant="light" style={styles.button} onClick={handleShow}>
        Contact Us
      </Button>

      <Offcanvas style={styles.offcanvas} show={show} onHide={handleClose} backdrop={false} scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <label>Name:</label>
            <input
              type="text"
              name="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Email:</label>
            <input
              type="email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Phone Number:</label>
            <input
              type="tel"
              name="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <button type="submit">Submit</button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
 export default MessageOffcanvas