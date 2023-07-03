import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { db } from "../../config/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Col, Row } from "react-bootstrap";

export default function EditProduct(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.product.data.name || "");
  const [description, setDescription] = useState(
    props.product.data.description || ""
  );
  const [category, setCategory] = useState(props.product.data.category || "");
  const [category2, setCategory2] = useState(props.product.data.category2 || []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleParentReset = () => {
    props.resetItems();
  };

  const handleSubmit = async (event, itemId) => {
    event.preventDefault();

    try {
      const itemRef = doc(db, "products", itemId);

      await updateDoc(itemRef, {
        name,
        description,
        category,
        category2,
      });

      handleClose();
      handleParentReset();
    } catch (err) {
      console.log(err);
    }
  };

  const removeItem = async (itemId, name) => {
    const confirmed = window.confirm(
      `Are you sure you want to remove ${name}?`
    );
    if (!confirmed) {
      return;
    }

    try {
      await deleteDoc(doc(db, "products", itemId));
    } catch (error) {
      console.error("Error removing item: ", error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Item</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e, props.product.id)}>
          <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3 p-2">
            <Form.Label>Images</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Group className="mb-3 p-2" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 p-2" controlId="formBasicDescription">
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>{props.product.data.category}</option>
              <option value="Bracelet">Bracelet</option>
              <option value="Earring">Earring</option>
              <option value="Necklace">Necklace</option>
              <option value="Ring">Ring</option>
              <option value="Pendant">Pendant</option>
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
  checked={category2.includes("NewItem")}

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
  checked={category2.includes("BestSeller")}

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
  checked={category2.includes("OldFriend")}

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
              type="button"
              variant="danger"
              onClick={() => removeItem(props.product.id, props.product.data.name)}
            >
           REMOVE ITEM
            </Button>

            <Button
              variant="primary"
              type="submit"
              className="align-items-center justify-content-center"
            >
              Update Item
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}
