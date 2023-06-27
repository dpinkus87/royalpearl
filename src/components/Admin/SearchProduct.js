import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

 const SearchProduct = ({ handleNameChange }) => {

    const [adminSearchText, setAdminSearchText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNameChange(adminSearchText);
    };


    return (
        <>

            <Form className="d-flex m-3" onSubmit={handleSubmit}>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 rounded-0"
                    aria-label="Search"
                    value={adminSearchText}
                    onChange={(e) => setAdminSearchText(e.target.value.toUpperCase())}
                />
                <Button
                    variant="outline-success"
                    className="rounded-0"
                    type="submit"
                >
                    Search
                </Button>
            </Form>

        </>
    )
};

export default SearchProduct;


