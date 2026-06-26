import { Link } from "react-router-dom";

function OrderSuccess() {
  const orderId = `SP${Math.floor(Math.random() * 100000)}`;

  return (
    <div
      style={{
        minHeight: "calc(100vh - 140px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fb",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "450px",
          maxWidth: "100%",
          background: "#fff",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            fontSize: "65px",
            marginBottom: "15px",
          }}
        >
          ✅
        </div>

        <h1
          style={{
            color: "#28a745",
            marginBottom: "10px",
          }}
        >
          Order Placed Successfully!
        </h1>

        <p
          style={{
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Thank you for shopping with <strong>ShopSphere</strong>.
          <br />
          Your order has been placed successfully.
        </p>

        <div
          style={{
            background: "#f8f9fa",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "25px",
          }}
        >
          <p
            style={{
              margin: "8px 0",
              fontWeight: "bold",
            }}
          >
            Order ID: #{orderId}
          </p>

          <p
            style={{
              margin: "8px 0",
              color: "#555",
            }}
          >
            🚚 Expected Delivery
          </p>

          <p
            style={{
              color: "#28a745",
              fontWeight: "600",
            }}
          >
            Within 3–5 Business Days
          </p>
        </div>

        <Link
          to="/products"
          style={{
            display: "inline-block",
            background: "#0d6efd",
            color: "#fff",
            padding: "12px 30px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            transition: "0.3s",
          }}
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;