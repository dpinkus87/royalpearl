import React, { useState } from "react";
import { Toast, Form, Input } from "react-bootstrap";
import nodemailer from "nodemailer";
require('dotenv').config()

// Import local storage:

const getProductsFromLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem("products"));
  return products ? products : [];
};



// TODO: add DELETE option for products not needed to be added

const ToastForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // Products from local storage:
  const [products, setProducts] = useState(getProductsFromLocalStorage());

  const handleSubmit = (e) => {
    e.preventDefault();

    // update alert to note what products were added:
    alert(`added ${products} to your message`);

    // Create a new transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      }
    });

    // Send the email
    const mailOptions = {
      from: process.env.USER,
      to: process.env.USER,
      subject: "Inquiry from Royal Pearl website",
      text: `
        ${name} added the following items to their request:
        ${products.join(", ")}
        Phone number: ${phone}
        Email: ${email}
      `
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Email sent successfully to ${email}`);
      }
    });
  };

  return (
    <Toast show={true} delay={2000} autohide={true}>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />


        {/* TODO: update section to show products from local storage */}
        <section>
          {products.map((product) => (
            <div key={product.id}>
              <input
                type="text"
                onChange={(e) => {
                  const newProducts = [...products];
                  newProducts[newProducts.indexOf(product)].isAdded = e.target.value;
                  setProducts(newProducts);
                }}
              />
              {product.name}
            </div>
          ))}
        </section>

        {/* button to submit email to Alan's email */}
        <button type="submit">Submit</button>
      </Form>
    </Toast>
  );
};

export default ToastForm;

// TODO: add localStorage.clear() after form submits 
