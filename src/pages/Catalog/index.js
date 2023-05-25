import React, { useState, useEffect, useRef } from "react";
import { Row, Image, Container, Col } from "react-bootstrap";
import CatalogItem from "../../components/CatalogItem";
import hero from "../../Images/sabrianna-CCpQ12CZ2Pc-unsplash.jpg";
import "../../App.css";
import Header from "../../components/Navigation";
// import { productList } from "../../data";
import Footer from "../../components/Footer";

import MessageOffcanvas from "../../components/MessageOffcanvas/index";
import { db } from "../../config/firebase";
import { collection, query, onSnapshot, orderBy, where } from "firebase/firestore";


import CategoryMenu from "../../components/Filters/categoryMenu"
import ColorMenu from "../../components/Filters/colorMenu";
import GemMenu from "../../components/Filters/gemMenu";
import MaterialMenu from "../../components/Filters/materialMenu";

function Catalog(selectedCategory) {
  const [products, setProducts] = useState([]);

  const displayItems = () => {
    const colRef = query(
      collection(db, "products"),
      orderBy("name", "asc")
    );

    const q = query(colRef, where("category", "==", 'Earring'))

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

  console.warn(products)

  return (
    <>
      <Header />
      <MessageOffcanvas />

      <Container fluid="true" className="m-0 p-0">
        <Row>
          <Image
            src={hero}
            style={{ objectFit: "cover", height: "500px" }}
            fluid
          />
        </Row>
      </Container>
      <h2 className="align-items-center text-white p-2">Catalog</h2>

      <Container >
        <Row xxl={5} md={4} sm={1} xs={1} >
          <Col >
            <CategoryMenu />
          </Col>
          <Col>
            <ColorMenu />
          </Col>
          <Col>
            <GemMenu />
          </Col>
          <Col>
            <MaterialMenu />
          </Col>
        </Row>

        <Row xxl={4} xl={3} lg={2} md={2} sm={1} xs={1} className="gx-0 p-1 m-4">
          {products.map((product) => (
            <CatalogItem
              key={product.id}
              name={product.data.name}
              description={product.data.description}
              category={product.data.category}
              image={product.data.image}
            // selectedCategory={selectedCategory}

            />
          ))}

        </Row>



      </Container>


      <br></br>

      <Footer />
    </>
  );
}

export default Catalog;
