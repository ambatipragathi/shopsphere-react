import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Categories from "./pages/Categories/Categories";
import Electronics from "./pages/Categories/Electronics";
import Jewellery from "./pages/Categories/Jewellery";
import MenClothing from "./pages/Categories/MenClothing";
import WomenClothing from "./pages/Categories/WomenClothing";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderSuccess />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/categories" element={<Categories />}>
          <Route path="electronics" element={<Electronics />} />
          <Route path="jewelery" element={<Jewellery />} />
          <Route path="men" element={<MenClothing />} />
          <Route path="women" element={<WomenClothing />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
      />
    </>
  );
}

export default App;