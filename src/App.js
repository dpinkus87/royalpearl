import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import Regal from "./pages/Regal";

import Header from "./components/Navigation/index";
import Footer from "./components/Footer/index";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regal" element={<Regal />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
