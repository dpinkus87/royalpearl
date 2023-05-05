import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../App.css";
import emailjs from "@emailjs/browser"
import { useMessage } from "../../utils/messageContext";

// Offmessage Canvas
const MessageOffcanvas = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // React useState
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [itemInMessage, setItemInMessage] = useState()

  useEffect(() => {
    const storedItems = () => {
      setItems(JSON.parse(localStorage.getItem("items")));
    };
    window.addEventListener('storage', storedItems);
    return () => window.removeEventListener('storage', storedItems);
  }, []);

  // Function to show notification in contact button
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
        "process.env.SERVICEID",
        "process.env.TEMPLATEID",
        MessageOffcanvas.current,
        "process.env.PUBLICKEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
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
      bottom: "20px",
      top: "25rem",
      right: "30px",
      backgroundColor: "#d9d9d9",
      color: "black",
      border: "none",
      width: "auto",
    },
    formControl: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
      width: 'auto'
    }
  };

  return (
    <>
      <Button variant="light" style={styles.button} onClick={handleShow}>
        Contact Us

        <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color: "white", width: "2rem", height:"2rem", position: 'absolute', top: 0, right: 0, transform:'translate(25%, -25%'}}></div>
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
          <Form style={styles.formControl} onSubmit={{ handleSubmit }}>
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
export default MessageOffcanvas
