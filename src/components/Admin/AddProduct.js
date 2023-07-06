import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { getTimestamp } from "../../utils/getTimestamp";
import { storage } from "../../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Col, Dropdown, Row } from "react-bootstrap";

const AddItem = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageAsFile, setImageAsFile] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [category, setCategory] = useState("");
  const [category2, setCategory2] = useState([]);

  const [imageAsURL, setImageAsURL] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleParentReset = (name, description) => {
    props.resetItems();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), {
        name: name,
        description: description,
        image: imageAsURL,
        timestamp: getTimestamp(),
        category: category,
        category2: category2,
      });
      handleClose();
      handleParentReset(name, description);
    } catch (err) {
      alert(err);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    try {
      const storageRef = ref(storage, `/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        },
        (error) => {
          alert("Error uploading file: ", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              const tokenIndex = downloadURL.indexOf("&token");
              const cleanedURL =
                tokenIndex !== -1
                  ? downloadURL.substring(0, tokenIndex)
                  : downloadURL;

              const fileName = image.name;
              const fileTypeIndex = fileName.lastIndexOf(".");
              const fileType = fileName.substring(fileTypeIndex);
              const fileNameWithoutType = fileName.substring(0, fileTypeIndex);

              const modifiedFileName = `${fileNameWithoutType}_200x200${fileType}`;
              const storageURL =
                "https://storage.googleapis.com/royal-pearl-e3254.appspot.com/";
              const finalURL = storageURL + modifiedFileName + "?alt=media";

              setImageAsURL(finalURL);

              console.warn("Download URL:", finalURL);
            })
            .catch((error) => {
              alert("Error retrieving download URL: ", error);
            });
        }
      );
    } catch (error) {
      alert("Error uploading file: ", error);
    }
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

          <Form.Group className="mb-3 p-2" controlId="formBasicName">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Item Name"
              onChange={(e) => setName(e.target.value.toUpperCase())}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3 p-2">
            <Form.Label>Images</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <Button onClick={handleUpload}>Upload</Button>
            {uploadProgress > 0 && (
              <div>Upload Progress: {uploadProgress}%</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3 p-2" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              as="textarea"
              placeholder="Enter Item Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 p-2" controlId="formBasicDescription">
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Select a Category</option>
              <option value="Bracelet">Bracelet</option>
              <option value="Earring">Earring</option>
              <option value="Necklace">Necklace</option>
              <option value="Ring">Ring</option>
              <option value="Strands">Strands</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 p-2" controlId="formBasicDescription">
<Row>
<Col>
   <Form.Check
              type="switch"
              id="custom-switch-NewItem"
              label="New Item"
              value="NewItem"
              onChange={(e) => {
                if (e.target.checked) {
                  setCategory2([...category2, e.target.value]);
                } else {
                  setCategory2(
                    category2.filter((item) => item !== e.target.value)
                  );
                }
              }}
            />
</Col>
<Col>
    <Form.Check
              type="switch"
              id="custom-switch-BestSeller"
              label="Best Seller"
              value="BestSeller"
              onChange={(e) => {
                if (e.target.checked) {
                  setCategory2([...category2, e.target.value]);
                } else {
                  setCategory2(
                    category2.filter((item) => item !== e.target.value)
                  );
                }
              }}
            />
</Col>
<Col>
     <Form.Check
              type="switch"
              id="custom-switch-OldFriend"
              label="Old Friend"
              value="OldFriend"
              onChange={(e) => {
                if (e.target.checked) {
                  setCategory2([...category2, e.target.value]);
                } else {
                  setCategory2(
                    category2.filter((item) => item !== e.target.value)
                  );
                }
              }}
            />
</Col>
</Row>
           

          

         
          </Form.Group>

          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              width: "100%",
            }}
            className="pb-2"
          >
            <Button
              variant="primary"
              type="submit"
              className="align-items-center justify-content-center"
            >
              Add Item
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AddItem;
