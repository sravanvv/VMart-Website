import DiscountProducts from "./Components/DiscountProducts";
import "./index.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6 text-center p-2">V Mart</h1>
      <DiscountProducts />
    </div>
  );
}

export default App;
