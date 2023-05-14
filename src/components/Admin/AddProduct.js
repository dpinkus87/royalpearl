// TODO: Add mapping to product and db instance

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const AddItem = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Fill each field to add a new item</Modal.Body>
        <Form>

          <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
            <Form.Label>Item Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Item Name" />
          </Form.Group>

      

          <Form.Group controlId="formFile" className="mb-3 p-2">
            <Form.Label>Images</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Group className="mb-3 p-2" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Item Description" />
          </Form.Group>

          <Form.Group className="mb-3 p-2" controlId="formBasicDescription">
            <Form.Label>Category</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select A Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>


          <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', width: '100%' }} className='pb-2'>
            <Button variant="primary" type="submit" className='align-items-center justify-content-center'>
              Add Item
            </Button>
          </div>

        </Form>
      </Modal>
    </>
  )
}

export default AddItem;