import { useState, useEffect } from 'react';
import { productList as initialProducts } from '../data';

function useProduct(componentName) {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem(`products-${componentName}`);
    return storedProducts ? JSON.parse(storedProducts) : initialProducts;
  });

  // Add a new product to the array
  function handleAddProduct(product) {
    setProducts((prevProducts) => {
      return [...prevProducts, product];
    });
  }

  // Save the updated products array back to local storage
  useEffect(() => {
    localStorage.setItem(`products-${componentName}`, JSON.stringify(products));
  }, [products, componentName]);

  // Get a product by name
  function getItemByName(name) {
    return products.find((product) => product.name === name);
  }

  // Return the products array, the handleAddProduct function, and the getItemByName function
  return {
    products,
    handleAddProduct,
    getItemByName,
  };
}

export default useProduct;
