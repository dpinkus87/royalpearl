import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import CatalogItem from "../../components/CatalogItem";
import hero from '../../Images/sabrianna-CCpQ12CZ2Pc-unsplash.jpg'
import '../../App.css'
import Header from "../../components/Navigation";
import { productList } from "../../data";
import { useCatalogContext } from '../../utils/CatalogState'
import MessageOffcanvas from "../../components/MessageOffcanvas/index"


function Catalog() {
  const [state, dispatch] = useCatalogContext();
  const { currentCategory } = state;

  const filteredProducts = currentCategory ?
    state.products.filter(product => product.category._id === currentCategory) :
    state.products;

  return (
    <>
    <Header />
    
    <MessageOffcanvas />
    <Container fluid='true' className='m-0 p-0'>
      <Row>
        <Image src={hero}  style={{objectFit: "cover", height:'500px'}} fluid='true'/>
      </Row>
    </Container>
      <h2 className="align-items-center text-white p-2">Catalog</h2>
      <Row lg={3} md={2} sm={1} xs={1} className="g-3 p-3">
      
      
      {filteredProducts.map((item => (
        <CatalogItem 
        key={item._id}
        _id={item._id}
        image={item.image}
       />
      )))}
      </Row>
    </>
  );
}

export default Catalog;
