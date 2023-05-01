import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CatalogItem from "../../components/CatalogItem";

import { productList } from "../../data";

function Catalog() {
  
  return (
    <>
      <h2>Catalog</h2>
      <Row lg={3} sm={1} className="g-3">
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
