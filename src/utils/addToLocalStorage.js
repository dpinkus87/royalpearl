import React, {useEffect, useState, createContext, useContext} from "react"

const CatalogProductsContext = createContext();

export function useProducts() {
  return useContext(CatalogProductsContext);
}

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  // Add or update a product in the array
  function handleAddProduct(product) {
    const index = products.findIndex((p) => p.id === product.id);
    if (index === -1) {
      // product not found, add it to the array
      setProducts([...products, product]);
    } else {
      // product found, update it in the array
      const updatedProducts = [...products];
      updatedProducts[index] = product;
      setProducts(updatedProducts);
    }
  }

  // Save the updated products array back to local storage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const value = {
    products,
    handleAddProduct
  };

  return (
    <CatalogProductsContext.Provider value={value}>
      {children}
    </CatalogProductsContext.Provider>
  );
}

