import { useEffect } from 'react';
import { useState } from 'react';

export const useLocalStorage = (componentName, products, setProducts) => {
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem(componentName)) || [];
    setProducts(storedProducts);
  }, [componentName, setProducts]);

  // Save the updated products array back to local storage
  useEffect(() => {
    localStorage.setItem(componentName, JSON.stringify(products));
  }, [componentName, products]);

  // Get a product by name
  function getItemByName(name) {
    return products.find((product) => product.name === name);
  }

  // Return the getItemByName function and the stored products
  return {
    getItemByName,
    myProducts,
  };
};

export default useLocalStorage;
