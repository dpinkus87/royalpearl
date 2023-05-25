// TODO: Clear values onSubmit
// TODO: get emailJS to send values in email

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

  // TODO: Add function to show notification in contact button
  // const { message } = useMessage()

  // useEffect(() => {
  //   hasItem()
  //   if (itemInMessage.length !== 0 ) {
  // setItemInMessage(false)
  //   }else{
  //     setItemInMessage(true)
  //   }
  // })

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
      backgroundColor: "#d9d9d9",
      color: "black",
      border: "none",
      maxHeight: "calc(100vh - 25rem)",
      overflowY: "auto", 
      maxWidth: "20vw",
      fontFamily: "Bona Nova"
    },
    formControl: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      height: "100%",
      width: "100%",
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
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Us</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form style={styles.formControl} onSubmit={handleSubmit} ref={form}>
            <label>Name:</label>
            <input
              type="text"
              name="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Email:</label>
            <input type="email" name="Email" onChange={handleEmailChange} />
            <br />
            <label>Phone Number:</label>
            <input
              type="tel"
              name="Phone Number"
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
