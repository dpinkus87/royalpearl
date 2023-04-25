import "./App.css";

import Home from "./pages/Home";
// import ProductListing from "./pages/ProductListing";
// import Regal from "./pages/Regal";
// import NoMatch from './pages/NoMatch'

import Header from "./components/Navigation/index";
import Footer from "./components/Footer/index";

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
