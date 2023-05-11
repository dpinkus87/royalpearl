import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Regal from "./pages/Regal";
import Catalog from "./pages/Catalog";
import ForgotPassword from "./components/Admin/ForgotPassword";
import SignIn from "./components/Admin/signin";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route 
          exact path="/" 
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
         Component={SignIn}
         />
        <Route
        path="/adminpanel"
        element={<Admin />}
        />
         <Route
         path="/forgot-password"
         Component={ForgotPassword}
         />
        </Routes>        
      
      </div>
    </BrowserRouter>
  );
}

export default App;
