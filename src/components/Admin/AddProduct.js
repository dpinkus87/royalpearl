// TODO: Add mapping to product and db instance

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {db} from '../../config/firebase'
import { collection, addDoc, storage } from 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/storage'
import {getTimestamp} from '../../utils/getTimestamp'


const AddItem = (props) => {


  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('')
  const [image, setImage] =useState([])
  const [insertedName, setInsertedName] = useState('');
  const [insertedDescription, setInsertedDescription] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleParentReset = (name, description) => {
    props.resetItems();
  
  }

  // POST route - new item
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'product'), {
        name: name,
        description: description,
        image: image,
        timestamp: getTimestamp()

      })
      handleClose();
      handleParentReset(name, description);
    } catch (err) {
      alert(err)
    }
  }

  const uploadImage = () => {
    const ref = firebase.storage().ref();
    const file = document.querySelector('#image').files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
      contentType: file.type
    };
    const task = ref.child(name).put(file, metadata);
    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
        console.log(url);
        alert('image uploaded successfully');
        document.querySelector('#image').src = url;
      })
      .catch(console.error);
  };
  



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
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
            <Form.Label>Item Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter Item Name" 
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

      
{/* TODO: Add image path to storage: src="gs://royal-pearl-e3254.appspot.com/" */}
          <Form.Group controlId="formFile" className="mb-3 p-2">
            <Form.Label>Images</Form.Label>
            <Form.Control  type="file" onChange={(e) => uploadImage(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3 p-2" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control required type="text" placeholder="Enter Item Description" 
              onChange={(e) => setImage(e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-3 p-2" controlId="formBasicDescription">
            <Form.Label>Category</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select A Category</option>
              {/* <option {category.map((category => (
                id={category.id},
                key={category.id}
              )))}>onChange = </option> */}
             
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