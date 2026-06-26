import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { state } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2 className="logo">🛍 ShopSphere</h2>

      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>

        <NavLink to="/categories" className="nav-link">
          Categories
        </NavLink>

        <NavLink to="/cart" className="nav-link">
          Cart ({state.cart.length})
        </NavLink>

        <NavLink to="/about" className="nav-link">
          About
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;