import React from "react";
import { Container } from "react-bootstrap";
import ProductCard from "../../components/ProdCard";
import { productList } from "../../data";

function ProductListing() {
  const productCards = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <Container>
      <div>{productCards}</div>
    </Container>
  );
}

export default ProductListing;
