import React, { createContext, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const isLoggedIn = ({ value = [], ...props }) => {
  const [state, dispatch] = ({
    items: [],
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCatalogContext = () => {
  return useContext(StoreContext);
};

export { CatalogProvider, useCatalogContext };
