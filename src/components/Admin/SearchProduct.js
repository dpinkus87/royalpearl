import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export const SearchProduct = ({ handleNameChange }) => {

    const [searchText, setSearchText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNameChange(searchText);
    };

    return (
        <>

            <Form className="d-flex m-3" onSubmit={handleSubmit}>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 rounded-0"
                    aria-label="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value.toUpperCase())}
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
}


