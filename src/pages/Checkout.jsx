import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

function Checkout() {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const totalPrice = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = () => {
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode
    ) {
      toast.error("Please fill all fields");
      return;
    }

    dispatch({ type: "CLEAR_CART" });

    toast.success("Order placed successfully!");

    setTimeout(() => {
      navigate("/success");
    }, 1500);
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "30px",
        boxShadow: "0 0 10px #ddd",
        borderRadius: "10px",
      }}
    >
      <h1>Checkout</h1>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        style={inputStyle}
      />

      <textarea
        name="address"
        placeholder="Address"
        onChange={handleChange}
        style={{
          ...inputStyle,
          height: "80px",
        }}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        onChange={handleChange}
        style={inputStyle}
      />

      <select
        name="payment"
        onChange={handleChange}
        style={inputStyle}
      >
        <option>Cash on Delivery</option>
        <option>UPI</option>
        <option>Credit Card</option>
      </select>

      <h2>Total: ${totalPrice.toFixed(2)}</h2>

      <button
        onClick={placeOrder}
        style={{
          background: "green",
          color: "white",
          padding: "15px",
          border: "none",
          width: "100%",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Place Order
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

export default Checkout;