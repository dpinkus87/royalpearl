import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Regal from "./pages/Regal";
import Catalog from "./pages/Catalog";
import ForgotPassword from "./components/Admin/ForgotPassword";
import SignIn from "./components/Admin/SignIn";
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
          path="/Regal" 
          element={<Regal />} 
          />
          <Route 
          path="/Catalog" 
          element={<Catalog />}
          />
         <Route
         path="/Admin"
         Component={SignIn}
         />
        <Route
        path="/Adminpanel"
        element={<Admin />}
        />
         <Route
         path="/Forgot-password"
         Component={ForgotPassword}
         />
        </Routes>        
      
      </div>
    </BrowserRouter>
  );
}

export default App;
