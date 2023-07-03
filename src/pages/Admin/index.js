import React, { useState, useEffect, Suspense } from "react";
import { Row, Container, Table, Button, Alert } from "react-bootstrap";
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
  startAt,
  endAt,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import firebase from "firebase/compat/app";
import EditProduct from "../../components/Admin/EditProduct";
import AddItem from "../../components/Admin/AddProduct";
import TopButton from "../../components/Admin/TopButton";
import SearchProduct from "../../components/Admin/SearchProduct";

function Admin({ adminSearchText }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(true);

  const queryParams = new URLSearchParams(location.search);

  const selectedName = queryParams.get("name") || adminSearchText;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      setIsLoggedIn(!!user);
    });
  }, []);

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString("en-US", {
      minute: "numeric",
      hour: "numeric",
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
      navigate("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  let handleNameChange = (selectedName) => {
    navigate(`/admin?name=${selectedName}`);
  };

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

  console.log("I AM HERE !!!!!!!!!!");
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
              <Row fluid="true" style={{ textAlign: "center" }}>
                <h2>Admin Panel</h2>
                <div>
                  <Link to="/">RoyalPearlUSA.com</Link>
                </div>
              </Row>

              <TopButton />

              <SearchProduct handleNameChange={handleNameChange} />

              <AddItem resetItems={displayItems} />

              <br />

              <Row style={{ textAlign: "center" }}>
                <h2>Current Products</h2>
              </Row>

              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Images</th>
                    <th>Category</th>
                    <th>Other</th>
                    <th>Date Updated</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                  <Suspense fallback={<div>Loading...</div>}>
                    {products.map((product) => {
                      if (!product.data.category2) {
                        product.data.category2 = [];
                      } else if (typeof product.data.category2 === "string") {
                        product.data.category2 = [product.data.category2];
                      }

                      return (
                        <tr key={product.id}>
                          <td>{product.data.name}</td>
                          <td>{product.id}</td>
                          <td>{product.data.description}</td>
                          <td>{product.data.image}</td>
                          <td>{product.data.category}</td>
                          <td>{product.data.category2.join(", ")}</td>
                          <td>
                            {product.data.timestamp
                              ? formatDate(product.data.timestamp)
                              : "n/a"}
                          </td>

                          <td>
                            <EditProduct product={product} />
                          </td>
                        </tr>
                      );
                    })}
                  </Suspense>
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
