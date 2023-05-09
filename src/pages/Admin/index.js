import React from "react";
import { Row, Container, Table, Button } from "react-bootstrap";
import '../../App.css'
import AddItem from "../../components/Admin/AddProduct";

// 22-01-06 S

function Admin() {

    return (
        <>
       <br></br>
       <br></br>
            <Container className="adminpanel">
            <Row fluid='true'>
                Admin Panel
            </Row>
            <AddItem />
            <br></br>
            <Row>
                Current Products
            </Row>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item</th>
          <th>Description</th>
          <th>Image</th>
          <th>Date Upadted</th>
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

        </Container> 
        <br></br>
        <br></br>
        </>
 

    )

}

export default Admin;