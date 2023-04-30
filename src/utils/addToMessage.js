import { useState, useEffect } from 'react';
import productList from './data/index';

function ProductsInMessage() {
  // Get the existing products array from local storage, or create a new one if it doesn't exist
  const [productListState, setProductListState] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  // Add the new product to the array
  function handleAddProduct(product) {
    setProductListState((prevProducts) => {
      return [...prevProducts, product];
    });
  }

  // Save the updated products array back to local storage and state
  useEffect(() => {
    setProductListState((prevProducts) => {
      localStorage.setItem('products', JSON.stringify(prevProducts));
      return prevProducts;
    });
  }, [productListState]);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {productListState.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <button onClick={() => handleAddProduct(productList[0])}>Add Product</button>
    </div>
  );
}

export default ProductsInMessage;
