import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Regal from "./pages/Regal";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
         <Route
         path="/admin"
         element={<Admin />}
         />
        </Routes>        
      
      </div>
    </BrowserRouter>
  );
}

export default App;
