import React from "react";
import { Row, Col } from "react-bootstrap";
import CatalogItem from "../../components/CatalogItem";

import { productList } from "../../data";

function Catalog() {
  
  return (
    <>
      <h2 className="align-items-center text-white p-2">Catalog</h2>
      <Row lg={3} md={2} sm={1} className="g-3">
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
