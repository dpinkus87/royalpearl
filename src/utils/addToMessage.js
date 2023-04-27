import React, { useState, useEffect, useContext } from 'react';
import {ProductList} from '../data/index';

const ProductsContext = React.createContext();

export function UseProducts() {
  return useContext(ProductsContext);
}

const MessageHandler = ({ children }) => {
  const [products, setProducts] = useState(ProductList);

  const messageFromLocalStorage = JSON.parse(localStorage.getItem('productsInMessage') || '[]');
  const [message, setMessage] = useState(messageFromLocalStorage);
  const [messageEmpty, setMessageEmpty] = useState(true);

  const addMessage = (product, e) => {
    e.preventDefault();
    const existingProductIndex = message.findIndex((item) => item.id === product.id);
    handleMessage(product);
    if (existingProductIndex < 0) {
      const updatedMessage = [...message, { ...product, quantity: 1, messaged: true }];
      setMessage(updatedMessage);
      localStorage.setItem('productsInMessage', JSON.stringify(updatedMessage));
    } else {
      const messageFromLocalStorage = [...message];
      messageFromLocalStorage.splice(existingProductIndex, 1);
      localStorage.setItem('productsInMessage', JSON.stringify(messageFromLocalStorage));
      setMessage(messageFromLocalStorage);
    }
  };

  function checkMessage(list, products) {
    if (list.length === 0) {
      return products.map((product) => ({ ...product, messaged: false }));
    } else {
      return products.map((product) => {
        if (list.some((item) => item.id === product.id)) {
          return { ...product, messaged: true };
        } else {
          return { ...product, messaged: false };
        }
      });
    }
  }

  const handleMessage = (product) => {
    setMessage((prevState) =>
      prevState.map((item) => {
        if (item.id === product.id) {
          return { ...item, messaged: !item.messaged };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    setProducts(checkMessage(message, products));
    localStorage.setItem('productsInMessage', JSON.stringify(message));
  }, [message, products]);

  useEffect(() => {
    setProducts(checkMessage(message, products));
  }, [message, products]);

  useEffect(() => {
    setMessageEmpty(message.length === 0);
  }, [message]);

  return (
    <ProductsContext.Provider value={{ products, message, messageEmpty, setMessage, setProducts, addMessage }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default MessageHandler;
