import React, { useState } from "react";
import { Toast, Form, Input } from "react-bootstrap";

// Import local storage:

const getProductsFromLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    return products ? products : [];
};


// add DELETE option for products not needed to be added


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

        // Send the email to test@email.com
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "mailto:dylanpinkus@gmail.com");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
          name,
          email,
          products
        }));

        // Handle the response
        xhr.onload = function () {
            if (xhr.status === 200) {
                // The email was sent successfully
                alert("Message sent successfully!");
            } else {
                // There was an error sending the email
                alert("There was an error sending the message.");
            }
        };
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
                                    newProducts[newProducts.indexOf(product)].isAdded = e.target.checked;
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
