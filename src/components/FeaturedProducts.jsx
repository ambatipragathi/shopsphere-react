import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data.slice(0, 4));
    });
  }, []);

  return (
    <section
      style={{
        padding: "70px 20px",
        background: "#f8fcff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#023e8a",
          marginBottom: "40px",
        }}
      >
        🔥 Featured Products
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              width: "240px",
              background: "white",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
              }}
            />

            <h3
              style={{
                fontSize: "16px",
                height: "50px",
                overflow: "hidden",
              }}
            >
              {product.title}
            </h3>

            <h2 style={{ color: "#0077b6" }}>
              ${product.price}
            </h2>

            <Link
              to={`/product/${product.id}`}
              style={{
                display: "inline-block",
                marginTop: "10px",
                background: "#0077b6",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              View Product
            </Link>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <Link
          to="/products"
          style={{
            background: "#023e8a",
            color: "white",
            padding: "14px 30px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          View All Products →
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProducts;