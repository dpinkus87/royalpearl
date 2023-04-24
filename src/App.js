import { Route, Router, Routes } from "react-router";
import "./App.css";

import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import Regal from "./pages/Regal";
import noMatch from './pages/NoMatch'

import Header from "./components/Navigation/index";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
          path='/regal'
          element={<Regal />}
          />
          <Route
            path='/ProductListing'
            element={<ProductListing />}
          />
          <Route
          path='*'
          element={<NoMatch />}
/>
        </Routes>


        <Footer />
      </Router>


    </div>


  );
}

export default App;
