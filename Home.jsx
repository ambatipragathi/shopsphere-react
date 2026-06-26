import { Link } from "react-router-dom";
import FeaturedProducts from "../components/FeaturedProducts";

function Home() {
  return (
    <>
      {/* Hero Section */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#0077b6,#0096c7,#00b4d8,#48cae4)",
          color: "white",
          textAlign: "center",
          padding: "90px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "58px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          🛍 Welcome to ShopSphere
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "750px",
            margin: "auto",
            lineHeight: "35px",
          }}
        >
          Shop the latest fashion, electronics, jewellery and lifestyle
          products with exciting offers, secure payments and lightning-fast
          delivery.
        </p>

        <div style={{ marginTop: "40px" }}>
          <Link
            to="/products"
            style={{
              background: "#fff",
              color: "#0077b6",
              padding: "15px 35px",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            🛒 Shop Now
          </Link>

          <Link
            to="/categories"
            style={{
              background: "#023e8a",
              color: "white",
              padding: "15px 35px",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            📂 Browse Categories
          </Link>
        </div>
      </section>

      {/* Stats */}

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "70px",
          flexWrap: "wrap",
          padding: "50px 20px",
          background: "#f4fbff",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#0077b6" }}>10K+</h1>
          <p>Happy Customers</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#0077b6" }}>500+</h1>
          <p>Products</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#0077b6" }}>24/7</h1>
          <p>Customer Support</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#0077b6" }}>99%</h1>
          <p>Positive Reviews</p>
        </div>
      </section>

      {/* Features */}

      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "50px", color: "#023e8a" }}>
          Why Shop With Us?
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "260px",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h1>🚚</h1>
            <h3>Fast Delivery</h3>
            <p>
              Get your favourite products delivered safely within a few days.
            </p>
          </div>

          <div
            style={{
              width: "260px",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h1>🔒</h1>
            <h3>Secure Payments</h3>
            <p>
              Pay securely using multiple payment methods with complete
              protection.
            </p>
          </div>

          <div
            style={{
              width: "260px",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h1>⭐</h1>
            <h3>Premium Quality</h3>
            <p>
              Every product is carefully selected to ensure the best quality.
            </p>
          </div>

          <div
            style={{
              width: "260px",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
            }}
          >
            <h1>🎁</h1>
            <h3>Special Offers</h3>
            <p>
              Enjoy exciting discounts and exclusive deals every week.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}

      <section
        style={{
          background: "#eaf8ff",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#023e8a", marginBottom: "40px" }}>
          What Our Customers Say
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "300px",
              background: "white",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            ⭐⭐⭐⭐⭐
            <p>
              Amazing shopping experience. Fast delivery and excellent quality.
            </p>
            <strong>- Rahul</strong>
          </div>

          <div
            style={{
              width: "300px",
              background: "white",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            ⭐⭐⭐⭐⭐
            <p>
              Beautiful UI and very easy to browse products. Loved it!
            </p>
            <strong>- Priya</strong>
          </div>

          <div
            style={{
              width: "300px",
              background: "white",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            ⭐⭐⭐⭐⭐
            <p>
              Best prices and secure checkout. Highly recommended.
            </p>
            <strong>- David</strong>
          </div>
        </div>
      </section>

      {/* Newsletter */}

      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#023e8a" }}>Stay Updated</h1>

        <p>Subscribe to receive the latest offers and new arrivals.</p>

        <input
          type="email"
          placeholder="Enter your email"
          style={{
            padding: "15px",
            width: "320px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />

        <button
          style={{
            padding: "15px 25px",
            background: "#0077b6",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </section>
    </>
  );
}

export default Home;