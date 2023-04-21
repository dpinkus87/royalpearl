import { Route, Router, Routes } from "react-router";
import "./App.css";

import Home from "./pages/Home";
// import ProductListing from "./pages/ProductListing";
// import Regal from "./pages/Regal";

import Header from "./components/Navigation/index";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">

      <Header />

      <Home />

     <Footer />

    </div>


  );
}

export default App;
