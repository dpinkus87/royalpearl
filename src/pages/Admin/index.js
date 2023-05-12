// TODO: revise useState for user login access - should only show admin page when a user is logged in
// TODO: add mapping for adding items

import React, { useState } from "react";
import { Row, Container, Table, Button } from "react-bootstrap";
import '../../App.css';
import AddItem from "../../components/Admin/AddProduct";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
// import SignIn from "../../components/Admin/signin";
import { AuthProvider } from "../../utils/authContext";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../utils/authContext"
import { Link } from 'react-router-dom'

function Admin() {
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState("")
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/admin")
    } catch {
      setError("Failed to log out")
    }
  }
 
  return (
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
        <AddItem />
        <br />
        <Row>
          Current Products
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Image</th>
              <th>Date Updated</th>
            </tr>
          </thead>
          <tbody>
            {/* {product.map((product) =>(
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.image}</td>
                <button type='button'
                  onClick={() => removeItem(product.id)}
                >
                  <span role='img' aria-label="delete">
                    ✖️
                  </span>
                </button>
              </tr>
            ))} */}
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
  );
}


export default Admin;