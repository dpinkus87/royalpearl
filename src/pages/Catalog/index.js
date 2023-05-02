import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import CatalogItem from "../../components/CatalogItem";
import hero from '../../Images/sabrianna-CCpQ12CZ2Pc-unsplash.jpg'
import '../../App.css'

import { productList } from "../../data";

function Catalog() {
  
  return (
    <>
    <Container fluid className='m-0'>
      <Row>
        <Image src={hero} fluid style={{objectFit: "cover", height:'500px'}}/>
      </Row>
    </Container>
      <h2 className="align-items-center text-white p-2">Catalog</h2>
      <Row lg={3} md={2} sm={1} xs={1} className="g-3 p-3">
      {productList.map(item => (
        <Col key={item.id}>
        <CatalogItem {...item} />
        </Col>
      ))}
      </Row>
    </>
  );
}

export default Catalog;
