import { useReducer } from "react";
import "./Contact.css";

const initialState = {
  name: "",
  email: "",
  message: "",
  errors: {},
  success: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload,
        success: "",
      };

    case "SUCCESS":
      return {
        ...initialState,
        success:
          "✅ Message sent successfully! We'll contact you soon.",
      };

    default:
      return state;
  }
}

function Contact() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validate = () => {
    let errors = {};

    if (!state.name.trim()) {
      errors.name = "Name is required";
    }

    if (!state.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!state.message.trim()) {
      errors.message = "Message is required";
    } else if (state.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();

    if (Object.keys(errors).length > 0) {
      dispatch({
        type: "SET_ERRORS",
        payload: errors,
      });
      return;
    }

    dispatch({
      type: "SUCCESS",
    });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">📞 Contact Us</h1>

      {state.success && (
        <div className="success">
          {state.success}
        </div>
      )}

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={state.name}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "name",
              value: e.target.value,
            })
          }
        />

        {state.errors.name && (
          <p className="error">{state.errors.name}</p>
        )}

        <input
          type="email"
          placeholder="Enter your email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "email",
              value: e.target.value,
            })
          }
        />

        {state.errors.email && (
          <p className="error">{state.errors.email}</p>
        )}

        <textarea
          rows="5"
          placeholder="Enter your message"
          value={state.message}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "message",
              value: e.target.value,
            })
          }
        />

        {state.errors.message && (
          <p className="error">
            {state.errors.message}
          </p>
        )}

        <button
          className="contact-btn"
          type="submit"
        >
          Send Message
        </button>
      </form>

      <div className="contact-info">
        <h3>📍 ShopSphere</h3>
        <p>📧 support@shopsphere.com</p>
        <p>📞 +91 9876543210</p>
        <p>🌍 www.shopsphere.com</p>
      </div>
    </div>
  );
}

export default Contact;