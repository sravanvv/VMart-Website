import DiscountProducts from "./Components/DiscountProducts";
import "./index.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<DiscountProducts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
