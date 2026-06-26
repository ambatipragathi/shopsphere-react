import { NavLink, Outlet } from "react-router-dom";

function Categories() {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1 style={{ fontSize: "50px" }}>Categories</h1>

      <p style={{ color: "gray", marginBottom: "30px" }}>
        Browse products by category
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <NavLink
          to="electronics"
          style={{
            padding: "12px 22px",
            background: "#0d6efd",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          💻 Electronics
        </NavLink>

        <NavLink
          to="jewelery"
          style={{
            padding: "12px 22px",
            background: "#198754",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          💍 Jewellery
        </NavLink>

        <NavLink
          to="men"
          style={{
            padding: "12px 22px",
            background: "#fd7e14",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          👔 Men's Clothing
        </NavLink>

        <NavLink
          to="women"
          style={{
            padding: "12px 22px",
            background: "#d63384",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          👗 Women's Clothing
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default Categories;