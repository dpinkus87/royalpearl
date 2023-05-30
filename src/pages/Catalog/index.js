import React, { useState, useEffect } from "react";
import { Row, Image, Container, Col } from "react-bootstrap";
import CatalogItem from "../../components/CatalogItem";
import hero from "../../Images/sabrianna-CCpQ12CZ2Pc-unsplash.jpg";
import "../../App.css";
import Header from "../../components/Navigation";
import Footer from "../../components/Footer";

import MessageOffcanvas from "../../components/MessageOffcanvas/index";
import { db } from "../../config/firebase";
import { collection, query, onSnapshot, orderBy, where } from "firebase/firestore";

import CategoryMenu from "../../components/Filters/categoryMenu"
import ColorMenu from "../../components/Filters/colorMenu";
import GemMenu from "../../components/Filters/gemMenu";
import MaterialMenu from "../../components/Filters/materialMenu";
import { useLocation, useNavigate } from "react-router-dom";

function Catalog() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  const selectedCategory = queryParams.get("category") || "";
  const selectedGem = queryParams.get("gem") || "";
  const selectedColor = queryParams.get("color") || "";
  const selectedMaterial = queryParams.get("material") || "";

  const handleCategoryChange = (category) => {
    navigate(`/catalog?category=${category}`);
  };

  const handleGemChange = (gem) => {
    navigate(`/catalog?gem=${gem}`);
  };

  const handleColorChange = (color) => {
    navigate(`/catalog?color=${color}`);
  };

  const handleMaterialChange = (material) => {
    navigate(`/catalog?material=${material}`);
  };

  const [products, setProducts] = useState([]);


  const displayItems = () => {
    const colRef = collection(db, "products");
    let q = query(colRef, orderBy("name", "asc"));
  
    if (selectedCategory && selectedCategory !== "All") {
      q = query(colRef, where("category", "==", selectedCategory));
    }
  
    if (selectedGem && selectedGem !== "All") {
      q = query(colRef, where("gem", "==", selectedGem));
    }
  
    if (selectedColor && selectedColor !== "All") {
      q = query(colRef, where("color", "==", selectedColor));
    }
  
    if (selectedMaterial && selectedMaterial !== "All") {
      q = query(colRef, where("material", "==", selectedMaterial));
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
  }, [selectedCategory]);

  return (
    <>
      <Header />
      <MessageOffcanvas />

      <Container fluid className="m-0 p-0">
        <Row>
          <Image src={hero} style={{ objectFit: "cover", height: "500px" }} fluid />
        </Row>
      </Container>
      <h2 className="align-items-center text-white p-2">Catalog</h2>

      <Container>
        <Row xxl={5} md={4} sm={1} xs={1}>
          <Col>
            <CategoryMenu
              selectedCategory={selectedCategory}
              handleCategoryChange={handleCategoryChange}
            />
          </Col>
          <Col>
            <ColorMenu selectedColor={selectedColor}
              handleColorChange={handleColorChange} />

          </Col>
          <Col>
            <GemMenu selectedGem={selectedGem}
              handleGemChange={handleGemChange} />

          </Col>
          <Col>
            <MaterialMenu selectedMaterial={selectedMaterial}
              handleMaterialChange={handleMaterialChange} />

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
            />
          ))}
        </Row>
      </Container>

      <br />

      <Footer />
    </>
  );
}

export default Catalog;
