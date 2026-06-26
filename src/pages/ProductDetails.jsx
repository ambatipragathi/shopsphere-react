import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { CartContext } from "../context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { dispatch } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product)
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Loading Product...
      </h2>
    );

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

    toast.success("Product added to cart!");
  };

  return (
    <div className="product-details">
      <div className="product-card-details">
        <div className="product-image">
          <img
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="product-info">
          <span className="category">
            {product.category}
          </span>

          <h1>{product.title}</h1>

          <div className="rating">
            ⭐ {product.rating.rate} ({product.rating.count} Reviews)
          </div>

          <div className="price">
            ${product.price}
          </div>

          <p className="description">
            {product.description}
          </p>

          <div className="buttons">
            <button
              className="cart-btn"
              onClick={addToCart}
            >
              🛒 Add to Cart
            </button>

            <button
              className="buy-btn"
              onClick={() =>
                toast.success(
                  "Buy Now feature coming soon!"
                )
              }
            >
              ⚡ Buy Now
            </button>

            <Link
              to="/products"
              className="back-btn"
            >
              ⬅ Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;