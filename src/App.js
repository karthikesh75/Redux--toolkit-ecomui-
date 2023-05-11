import logo from "./logo.svg";
import "./App.css";
import Leftbar from "./components/leftbar/Leftbar";
import ProductSold from "./components/rightbar/ProductSold";
import {BrowserRouter,Routes,Route} from "react-router-dom"


import Layouts from "./components/Layouts/Layouts";
import AddToCart from "./components/rightbar/AddToCart";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Layouts />}></Route>
          <Route path="/addtocart"  element={<AddToCart/>}></Route>
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
