import React, { useState, useEffect, lazy, Suspense } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Image, Container, Col } from "react-bootstrap";
import hero from "../../Images/sabrianna-CCpQ12CZ2Pc-unsplash.jpg";
import "../../App.css";
import Header from "../../components/Navigation";
import Footer from "../../components/Footer";
import MessageOffcanvas from "../../components/MessageOffcanvas/index";
import { db } from "../../config/firebase";
import { collection, query, onSnapshot, orderBy, where, startAt, endAt } from "firebase/firestore";
import CategoryMenu from "../../components/Filters/categoryMenu";
import ColorMenu from "../../components/Filters/colorMenu";
import GemMenu from "../../components/Filters/gemMenu";
import MaterialMenu from "../../components/Filters/materialMenu";

const styles = {
  parallax: {
    backgroundImage: `url(${hero})`,
    minHeight: "500px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

function Catalog({ searchText }) {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category") || "";
  const selectedCategory2 = queryParams.get("category2") || "";
  const selectedGem = queryParams.get("gem") || "";
  const selectedColor = queryParams.get("color") || "";
  const selectedMaterial = queryParams.get("material") || "";
  const selectedName = queryParams.get("name") || searchText;


  const handleCategoryChange = (category) => {
    navigate(`/catalog?category=${category}`);
  };

  // const handleCategoryChange2 = (category2) => {
  //   navigate(`/catalog?category2=${category2}`);
  // };

  const handleGemChange = (gem) => {
    navigate(`/catalog?gem=${gem}`);
  };

  const handleColorChange = (color) => {
    navigate(`/catalog?color=${color}`);
  };

  const handleMaterialChange = (material) => {
    navigate(`/catalog?material=${material}`);
  };

  let handleNameChange = (selectedName) => {
    navigate(`/catalog?name=${selectedName}`);
  };

  const [products, setProducts] = useState([]);

  const displayItems = () => {
    const colRef = collection(db, "products");
    let q = query(colRef, orderBy("name", "asc"));
  
    if (selectedCategory && selectedCategory !== "All") {
      q = query(q, where("category", "==", selectedCategory));
    }

    if (selectedCategory2 && selectedCategory2 !== "All" && selectedCategory2 !== "OldFriend") {
      q = query(q, where("category2", "==", selectedCategory2));
    }
    
 
    if (selectedGem && selectedGem !== "All") {
      q = query(q, where("gem", "==", selectedGem));
    }
  
    if (selectedColor && selectedColor !== "All") {
      q = query(q, where("color", "==", selectedColor));
    }
  
    if (selectedMaterial && selectedMaterial !== "All") {
      q = query(q, where("material", "==", selectedMaterial));
    }
  
    if (selectedName && selectedName !== "All") {
      const startAtName = selectedName;
      const endAtName = selectedName + "\uf8ff";
      q = query(q, orderBy("name"), startAt(startAtName), endAt(endAtName));
    }
  
    onSnapshot(q, (snapshot) => {
      const filteredProducts = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
        .filter((product) => product.data.category2 !== "OldFriend");
      setProducts(filteredProducts);
    });
  };

  
  useEffect(() => {
    displayItems();
  }, [selectedCategory, selectedCategory2, selectedColor, selectedGem, selectedMaterial, selectedName ]);

  const CatalogItem = lazy(() => import("../../components/CatalogItem"));


  
  return (
    <>
      <Header handleNameChange={handleNameChange} />
      
      <MessageOffcanvas />

      <Container fluid className="m-0 p-0" style={styles.parallax} />


      <h2 className="align-items-center text-white p-2">Catalog</h2>

      <Container>
        <Row xxl={4} xl={4} l={4} md={1} sm={1} xs={1}>
          <Col>
            <CategoryMenu selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
          </Col>
          <Col>
            <ColorMenu selectedColor={selectedColor} handleColorChange={handleColorChange} />
          </Col>
          <Col>
            <GemMenu selectedGem={selectedGem} handleGemChange={handleGemChange} />
          </Col>
          <Col>
            <MaterialMenu selectedMaterial={selectedMaterial} handleMaterialChange={handleMaterialChange} />
          </Col>
        </Row>

        <Row xxl={4} xl={3} lg={2} md={1} sm={1} xs={1} className="gx-0 p-1 m-4">
          <Suspense fallback={<div>Loading...</div>}>
            {products.map((product) => (
              
              <CatalogItem
                key={product.id}
                name={product.data.name}
                description={product.data.description}
                category={product.data.category}
                category2={product.data.category2}
                image={product.data.image}
              />
            ))}
          </Suspense>
        </Row>
      </Container>
      <br />

      <Footer />
    </>
  );
}

export default Catalog;
