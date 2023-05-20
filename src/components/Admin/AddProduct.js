// TODO: Add mapping to product and db instance
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { db } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { getTimestamp } from '../../utils/getTimestamp'
import { storage } from "../../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";




const AddItem = (props) => {

  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState([]);
  const [imgUrl, setImgUrl] = useState(null);


  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

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
        image: imgUrl,
        timestamp: getTimestamp()

      })
      handleClose();
      handleParentReset(name, description);
      setImage([...imgUrl, setImage]);
    } catch (err) {
      alert(err)
    }
  }


  const [file, setFile] = useState("");

  const [percent, setPercent] = useState(0);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImgUrl(url)
          console.log(url);
        });
      }
    );
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


          {/* TODO: Add image to storage */}
          <Form.Group onSubmit={handleUpload} controlId="formFile" className="mb-3 p-2">
            <Form.Label>Images</Form.Label>
            <Form.Control type="file" onChange={handleChange} />
            {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}

          </Form.Group>



          <Form.Group className="mb-3 p-2" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control required type="text" placeholder="Enter Item Description"
              onChange={(e) => setDescription(e.target.value)}
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