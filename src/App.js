import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Regal from "./pages/Regal";
import Catalog from "./pages/Catalog";
import Header from "./components/Navigation/index";

import Footer from "./components/Footer/index";

import MessageOffcanvas from "./components/MessageOffcanvas/index"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route 
          path="/" 
          element={<Home />}
          />
          <Route 
          path="/regal" 
          element={<Regal />} 
          />
          <Route 
          path="/catalog" 
          element={<Catalog />}
          />
        </Routes>

        <MessageOffcanvas className="message-offcanvas" />
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
