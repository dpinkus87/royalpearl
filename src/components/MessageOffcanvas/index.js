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
  const [isEmailValid, setIsEmailValid] = useState(false);


  /* start Example of item being added to local storage array*/
  
  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsEmailValid(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEmailValid) {
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, products: myProducts }),
      });

      if (response.ok) {
        console.log("Email submitted:", email);
        setEmail("");
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
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
      top:'25rem',
      right: "30px",
      backgroundColor: '#d9d9d9',
      color: 'black',
      border: 'none',
      width: 'auto'
    }
  };

  return (
    <>
      <Button variant="light" style={styles.button} onClick={handleShow}>
        Contact Us
      </Button>

      <Offcanvas style={styles.offcanvas} show={show} onHide={handleClose} backdrop={false} scroll={true} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Us</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={{handleSubmit}}>
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
              onChange={handleEmailChange}
            />
            <br />
            <label>Phone Number:</label>
            <input
              type="tel"
              name="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <input type='text' value={myProducts}
              disabled='true'
            />
            {!isEmailValid && <p>Please enter a valid email address</p>}
            <button type="submit">Submit</button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
 export default MessageOffcanvas