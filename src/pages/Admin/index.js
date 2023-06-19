import React, { useState, useEffect } from "react";
import { Row, Container, Table, Button, Alert, Form } from "react-bootstrap";
import "../../App.css";
import AddItem from "../../components/Admin/AddProduct";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { AuthProvider } from "../../utils/authContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/authContext";
import { Link } from "react-router-dom";
import {
  collection,
  orderBy,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import firebase from "firebase/compat/app";

function Admin() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [insertedName, setInsertedName] = useState("");
  const [insertedDescription, setInsertedDescription] = useState("");
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(true);
  const [expandedRows, setExpandedRows] = useState([]);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [searchText, setSearchText] = useState("");

  firebase.auth().onAuthStateChanged(function (user) {
    setIsLoggedIn(!!user);
  });

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  }

  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/admin");
    } catch {
      setError("Failed to log out");
    }
  }

  const displayItems = () => {
    const colRef = collection(db, "products");
    let q = query(colRef, orderBy("name", "asc"));
  
    if (searchText) {
      q = query(q, where("name", ">=", searchText), where("name", "<=", searchText + "\uf8ff"));
    }
  
    onSnapshot(q, (snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };
  

  useEffect(() => {
    displayItems();
  }, [searchText]);

  const removeItem = async (itemId) => {
    const confirmed = window.confirm("Are you sure you want to remove this item?");
    if (!confirmed) {
      return;
    }

    try {
      await deleteDoc(doc(db, "products", itemId));
    } catch (error) {
      console.error("Error removing item: ", error);
    }
  };

  const toggleRow = (rowId) => {
    if (expandedRows.includes(rowId)) {
      setExpandedRows(expandedRows.filter((id) => id !== rowId));
    } else {
      setExpandedRows([...expandedRows, rowId]);
    }
  };

  const handleUpdate = async (itemId) => {
    try {
      const itemRef = doc(db, "products", itemId);
      await updateDoc(itemRef, {
        name: updatedName,
        description: updatedDescription,
      });
      setUpdatedName("");
      setUpdatedDescription("");
    } catch (error) {
      console.error("Error updating item: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    displayItems();
  };

  return (
    <div>
      {isLoggedin ? (
        <>
          <AuthProvider>
            <br />
            <br />
            <Container
              className="justify-content-center align-items-center bg-light"
              style={{}}
            >
              <Row fluid="true">
                <h2>Admin Panel</h2>
                <div>
                  <Link to="/">RoyalPearlUSA.com</Link>
                </div>
              </Row>
              <Form className="d-flex m-3" onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 rounded-0"
                  aria-label="Search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value.toUpperCase())}
                />
                <Button variant="outline-success" className="rounded-0" type="submit">
                  Search
                </Button>
              </Form>
              <AddItem resetItems={displayItems} />

              <br />

              <Row>Current Products</Row>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Images</th>
                    <th>Category</th>
                    <th>Date Updated</th>
                    <th>Delete</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <React.Fragment key={product.id}>
                      <tr>
                        <td>{product.data.name}</td>
                        <td>{product.data.description}</td>
                        <td>[{product.data.image}]</td>
                        <td>{product.data.category}</td>
                        <td>
                          {product.data.timestamp
                            ? formatDate(product.data.timestamp)
                            : "n/a"}
                        </td>
                        <td>
                          <button
                            type="button"
                            onClick={() => removeItem(product.id)}
                          >
                            <span role="img" aria-label="delete">
                              ✖️
                            </span>
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            onClick={() => toggleRow(product.id)}
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                      {expandedRows.includes(product.id) && (
                        <tr>
                          <td colSpan="7">
                            <input
                              type="text"
                              value={updatedName}
                              onChange={(e) => setUpdatedName(e.target.value)}
                            />
                            <input
                              type="text"
                              value={updatedDescription}
                              onChange={(e) =>
                                setUpdatedDescription(e.target.value)
                              }
                            />
                            <button
                              type="button"
                              onClick={() => handleUpdate(product.id)}
                            >
                              Save
                            </button>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </Table>
              <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                  Log Out
                </Button>
              </div>
            </Container>
          </AuthProvider>

          <br />
          <br />
        </>
      ) : (
        <Alert show={show} variant="danger">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>You need to log in first!</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Log in again!
            </Button>
          </div>
        </Alert>
      )}
    </div>
  );
}

export default Admin;
