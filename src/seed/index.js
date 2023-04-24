import React, { useState } from "react";

const ProductList = ({ category }) => {
  const [products] = useState([
    {
      name: "AA01",
      category: "ring",
      image: "",
    },
    {
      name: "AA02",
      category: "ring",
      image: "",
    },
    {
      name: "BB01",
      category: "necklaces",
      image: "",
    },
    {
      name: "BB02",
      category: "necklaces",
      image: "",
    },
    {
      name: "CC01",
      category: "bracelets",
      image: "",
    },
    {
      name: "CC02",
      category: "bracelets",
      image: "",
    },
  ]);

  const currentProducts = products.filter((product) => product.category === category);

  // const [currentProduct, setCurrentProduct] = useState(false);

  return (
    <div>
      <div className="flex-row">
        {currentProducts.map((product, i) => (
          <img
            src={require(`../../src/Images/${category}/${i}.jpeg`).default}
            alt={product.name}
            className="img-thumbnail mx-1"
            key={product.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;


