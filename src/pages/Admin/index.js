// TODO: revise useState for user login access - should only show admin page when a user is logged in
// TODO: add mapping for adding items

import React, { useState, useEffect } from "react";
import { Row, Container, Table, Button, Alert } from "react-bootstrap";
import '../../App.css';
import AddItem from "../../components/Admin/AddProduct";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
// import SignIn from "../../components/Admin/SignIn";
import { AuthProvider } from "../../utils/authContext";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../utils/authContext"
import { Link } from 'react-router-dom'
import { collection, addDoc, orderBy, query, onSnapshot } from 'firebase/firestore'
import {db} from '../../config/firebase'
import firebase from 'firebase/compat/app';




function Admin() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [insertedName, setInsertedName] = useState('');
  const [insertedDescription, setInsertedDescription] = useState('');
  const [isLoggedin, setIsLoggedIn] = React.useState(false);
  const [show, setShow] = useState(true);

  firebase.auth().onAuthStateChanged(function (user) {
    setIsLoggedIn(!!user);
  });

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return formattedDate;
  }
  
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout()
      navigate("/admin")
    } catch {
      setError("Failed to log out")
    }
  }

  // READ
  const displayItems = () => {
    const queryRef = query(collection(db, 'products'), orderBy('timestamp', 'desc'));
    onSnapshot(queryRef, (snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      })));
    });
  };
  console.warn(JSON.stringify(products));

  useEffect(() => {
    displayItems();
  }, []);
  
  
  // Reset to display new values

  const handleResetItems = (name, description) => {
    displayItems();
  };

  return (
    <div>
      {isLoggedin ? (
        <>
    
    <AuthProvider>
      <br />
      <br />
      <Container className="justify-content-center align-items-center bg-light" style={{height: '100vh'}}>
        <Row fluid="true">
          <h2>Admin Panel</h2>
          <div>
                      <Link to='/'>RoyalPearlUSA.com</Link>

          </div>
        </Row>

        <AddItem resetItems={handleResetItems}/>

        <br />

        <Row>
          Current Products
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Images</th>
              <th>Category</th>
              <th>Date Updated</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) =>(
              <tr key={product.id}>
                <td>{product.data.name}</td>
                <td>{product.data.description}</td>
                <td>{product.data.image}</td>
                <td>{product.data.category}</td>
                <td>{product.data.timestamp ? (formatDate(product.data.timestamp)):('n/a')}</td>
                {/* <button type='button'
                  // onClick={() => removeItem(product.id)}
                >
                  <span role='img' aria-label="delete">
                    ✖️
                  </span>
                </button> */}
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
      ) : ( <Alert show={show} variant="danger">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
         You need to log in first!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Log in again!
          </Button>
        </div>
      </Alert>)}

    </div>
  )

 
}


export default Admin;