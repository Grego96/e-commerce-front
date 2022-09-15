import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:slug" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      {/* Privadas */}
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Privadas */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
