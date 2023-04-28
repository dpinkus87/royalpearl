import { useState, useEffect } from 'react';

function productsInMessage() {
  // Get the existing products array from local storage, or create a new one if it doesn't exist
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  function handleAddProduct(product) {
    // Add the new product to the array
    setProducts([...products, product]);
  }

  // Save the updated products array back to local storage and state
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);
}

  export default productsInMessage