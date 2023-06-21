import React, { useState, useEffect } from "react";
import { Row, Container, Table, Button, Alert, Form } from "react-bootstrap";
import "../../App.css";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { AuthProvider } from "../../utils/authContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/authContext";
import { Link } from "react-router-dom";
import {
  collection,
  orderBy,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  where,
  startAt,
  endAt,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import firebase from "firebase/compat/app";
import EditProduct from "../../components/Admin/EditProduct";
import AddItem from "../../components/Admin/AddProduct"
import TopButton from "../../components/Admin/TopButton";
import { SearchProduct } from "../../components/Admin/SearchProduct";

function Admin({searchText}) {
  const location = useLocation();
  const navigate = useNavigate();

  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [insertedName, setInsertedName] = useState("");
  const [insertedDescription, setInsertedDescription] = useState("");
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(true);

  const queryParams = new URLSearchParams(location.search);
  const selectedName = queryParams.get("name") || searchText;

  let handleNameChange = (selectedName) => {
    navigate(`/adminpanel?name=${selectedName}`);
  };

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

    if (selectedName && selectedName !== "All") {
      const startAtName = selectedName;
      const endAtName = selectedName + "\uf8ff";
      q = query(q, orderBy("name"), startAt(startAtName), endAt(endAtName));
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
  }, [selectedName]);

  const removeItem = async (itemId, name) => {
    const confirmed = window.confirm(`Are you sure you want to remove ${name}?`);
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

              <TopButton />

         <SearchProduct handleNameChange={handleNameChange}/>
              <AddItem resetItems={displayItems} />  

              <br />

              <Row>Current Products</Row>
              <Table striped bordered hover>
              <thead>
                  <tr>
                    <th>Item</th>
                    <th>ID</th>
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
                    <tr key={product.id}>
                      <td>{product.data.name}</td>
                      <td>{product.id}</td>
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
                          onClick={() => removeItem(product.id, product.data.name)}
                        >
                          <span role="img" aria-label="delete">
                            ✖️
                          </span>
                        </button>
                      </td>
                      <td>
                        <EditProduct product={product} />
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
