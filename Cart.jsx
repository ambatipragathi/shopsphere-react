import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
        <div
  style={{
    padding: "30px",
    maxWidth: "1200px",
    margin: "auto",
    minHeight: "80vh",
  }}
>

      <h1 style={{ marginBottom: "20px" }}>🛒 Shopping Cart</h1>

      {state.cart.length === 0 ? (
<div
  style={{
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }}
>
            <h2>Your Cart is Empty 😔</h2>

          <p>Add some amazing products to start shopping.</p>

          <Link
            to="/products"
            style={{
              background: "#0d6efd",
              color: "#fff",
              padding: "12px 25px",
              textDecoration: "none",
              borderRadius: "8px",
            }}
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <h3>Total Items: {totalItems}</h3>

            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>

          {state.cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                }}
              />

              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>

                <h4 style={{ color: "green" }}>
                  ${item.price.toFixed(2)}
                </h4>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "15px",
                  }}
                >
                  <button
                    onClick={() =>
                      dispatch({
                        type: "DECREASE_QUANTITY",
                        payload: item.id,
                      })
                    }
                    style={{
                      padding: "6px 12px",
                      cursor: "pointer",
                    }}
                  >
                    -
                  </button>

                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      dispatch({
                        type: "INCREASE_QUANTITY",
                        payload: item.id,
                      })
                    }
                    style={{
                      padding: "6px 12px",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>

                <p
                  style={{
                    marginTop: "10px",
                    color: "#555",
                  }}
                >
                  Subtotal: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item.id,
                  })
                }
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <div
            style={{
              marginTop: "40px",
              background: "#f8f9fa",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>Order Summary</h2>

            <hr />

            <p>
              <strong>Total Items:</strong> {totalItems}
            </p>

            <p>
              <strong>Total Amount:</strong> $
              {totalPrice.toFixed(2)}
            </p>

            <button
              onClick={() => navigate("/checkout")}
              style={{
                marginTop: "20px",
                background: "green",
                color: "white",
                border: "none",
                padding: "15px 30px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;