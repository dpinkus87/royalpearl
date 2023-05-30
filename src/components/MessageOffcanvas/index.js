// TODO: Clear values onSubmit

import React, { useState, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../App.css";
import emailjs from "@emailjs/browser";

const MessageOffcanvas = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [itemInMessage, setItemInMessage] = useState();

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setInfo("");
    localStorage.removeItem("items");
  };

  const form = useRef();

  useEffect(() => {
    const storedItems = () => {
      setItems(JSON.parse(localStorage.getItem("items")));
    };
    window.addEventListener("storage", storedItems);
    return () => window.removeEventListener("storage", storedItems);
  }, []);


  const handleEmailChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setEmail(value);
    setIsEmailValid(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
  };

  // emailJS send email handler
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dby0q1f",
        "template_54brgfh",
        form.current,
        "JEjSNvfLzH0NMTIyH"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your Message has been sent");
          resetForm();
          setShow(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const styles = {
    button: {
      position: "fixed",
      bottom: "20px",
      right: "30px",
      zIndex: "99",
      fontSize: "1.8rem",
    },
    offcanvas: {
      position: "fixed",
      bottom: "10px",
      top: "25rem",
      right: "15px",
      backgroundColor: "black",
      color: "white",
      border: "2",
      borderColor: "white",
      maxHeight: "calc(100vh - 5rem)",
      overflowY: "auto",
      maxWidth: "calc(100vw - 10rem)",
      fontFamily: "Bona Nova",
    },
    formControl: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      height: "100%",
      width: "100%",
    },
    test: {

    },
  };

  return (
    <>
      <Button
        variant="light"
        style={styles.button}
        onClick={handleShow}
        data-testid="message-offcanvas"
      >
        Contact Us
        <div
          className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
          style={{
            color: "white",
            width: "2rem",
            height: "2rem",
            position: "absolute",
            top: 0,
            right: 0,
            transform: "translate(25%, -25%",
          }}
        ></div>
      </Button>

      <Offcanvas
        style={styles.offcanvas}
        show={show}
        onHide={handleClose}
        backdrop={false}
        scroll={true}
        placement="end"
      >
        <Offcanvas.Header closeButton className="btn-close-white" style={{ color: "white!" }}>
          <Offcanvas.Title style={{ color: "#FFFFFF !important" }} variant='white' className="whitTxt">Contact Us</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form style={styles.formControl} onSubmit={handleSubmit} ref={form}>
            <label>Name:</label>
            <input
              type="text"
              name="Name"
              style={{ width: "100%" }}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Email:</label>
            <input type="email" name="Email" style={{ width: "100%" }} onChange={handleEmailChange} />
            <br />
            <label>Phone Number:</label>
            <input
              type="tel"
              name="Phone Number"
              style={{ width: "100%" }}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <label>Products:</label>
            <input type="hidden" name="Products" value={items.join(",")} />
            <label>Additional Information:</label>
            <input
              type="text"
              as="textarea"
              rows={3}
              name="Info"
              style={{ width: "100%" }}
              onChange={(e) => setInfo(e.target.value)}
            />
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {!isEmailValid && <p>Please enter a valid email address</p>}
            <button type="submit">Submit</button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default MessageOffcanvas;
