import React, { useState, useEffect } from "react";
import { Row, Container, Table, Button, Alert } from "react-bootstrap";
import "../../App.css";
import AddItem from "../../components/Admin/AddProduct";
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
  doc
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
  
  
  // READ
  
  const displayItems = () => {
    const colRef = collection(db, "products");
    let q = query(colRef, orderBy("name", "asc"));
    onSnapshot(q, (snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
        );
      });
    };
    console.warn(JSON.stringify(products));
    
    useEffect(() => {
      displayItems();
    }, []);
    
    const handleResetItems = (name, description) => {
      displayItems();
    };
    
    // DELETE
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

              <AddItem resetItems={handleResetItems} />

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
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
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
                        <Button
                          variant="danger"
                          onClick={() => removeItem(product.id)}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
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
