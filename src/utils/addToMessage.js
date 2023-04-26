import React, { useState, useEffect } from 'react';
import { ProductList } from '../seed/index';

const ProductsContext = React.createContext();
export function UseProducts() {
  return UseProducts(ProductsContext);
}

const messageHandler = ({ children }) => {
  const [products, setProducts] = useState(ProductList);
  const [message, setMessage] = useState([]);
  const [messageEmpty, setMessageEmpty] = useState(true);

  const addMessage = (product, e) => {
    e.preventDefault();
    const existingProductIndex = message.findIndex(item => item.id === product.id);
    handleMessage(product);
    if (existingProductIndex < 0) {
      const updatedMessage = [...message, { ...product, quantity: 1, messaged: true }];
      setMessage(updatedMessage);
      localStorage.setItem('productsInMessage', JSON.stringify(updatedMessage));
    } else {
      if (message.length === 1) {
        localStorage.setItem('productsInMessage', JSON.stringify([]));
        const updatedMessage = JSON.parse(localStorage.getItem('productsInMessage'));
        setMessage(updatedMessage);
      } else {
        message.splice(existingProductIndex, 1);
        localStorage.setItem('productsInMessage', JSON.stringify(message));
        const updatedMessage = JSON.parse(localStorage.getItem('productsInMessage'));
        setMessage(updatedMessage);
      }
    }
  };


  function checkMessage(list, products) {
    if(list.length === 0){
        products.forEach(product => product.messaged = false)
    }else{
        for (let i = 0, i < products.length; i++){
            for (let j = 0; j < list.length; j++) {
                if (products[i].id === list[j].id) {
                    products[i].messaged = true;
                    break;
                }else{
                    products[i].messaged = false 
                }
            }
        }
    }
  }
  return([...products])

}

  const handleMessage = (product) => {
    setMessage(prevState => prevState.map(item => {
      if (item.id === product.id) {
        return { ...item, messaged: !item.messaged};
      }
      return item;
    }));
  };

  return (
    <ProductsContext.Provider value={{ products, message, messageEmpty, setMessage, setProducts, addMessage }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default messageHandler;
