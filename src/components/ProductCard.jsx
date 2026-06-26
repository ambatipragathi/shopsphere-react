import { Link } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

    toast.success("✅ Product added to cart!");
  };

  return (
    <div
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow =
          "0 8px 20px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 2px 8px rgba(0,0,0,0.1)";
      }}
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "0.3s",
        cursor: "pointer",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />

      <h3
        style={{
          fontSize: "18px",
          minHeight: "60px",
        }}
      >
        {product.title}
      </h3>

      <h2 style={{ color: "green" }}>
        ${product.price}
      </h2>

      <p
        style={{
          color: "#f39c12",
          fontWeight: "bold",
        }}
      >
        ⭐ {product.rating.rate} ({product.rating.count} Reviews)
      </p>

      <button
        onClick={addToCart}
        style={{
          background: "green",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Add to Cart
      </button>

      <br />

      <Link
        to={`/product/${product.id}`}
        style={{
          display: "inline-block",
          background: "#0d6efd",
          color: "#fff",
          textDecoration: "none",
          padding: "10px 18px",
          borderRadius: "6px",
        }}
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;