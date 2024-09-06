import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ProductDetails from "./components/productDetails/ProductDetails";
import Cart from "./components/cart/Cart";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          /* I'm' not using dynamic routing because it is just a simple UI to
          showcase so i'm trying to make it simple */
          <Route index element={<Home />} />
          <Route path="shop/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<h1> 404 : NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
