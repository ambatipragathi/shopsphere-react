import "./Products.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Products() {
  const { products, loading } = useFetchProducts();

  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";

  const [productList, setProductList] = useState([]);

  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const [editingId, setEditingId] = useState(null);

  const allProducts =
    productList.length > 0 ? productList : products;

  const filteredProducts = allProducts
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category === "all"
        ? true
        : product.category === category
    );

  const handleAddProduct = () => {
    if (!newTitle || !newPrice) {
      alert("Please fill all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      title: newTitle,
      price: Number(newPrice),
      category: "electronics",
      image: "https://via.placeholder.com/150",
    };

    setProductList([newProduct, ...allProducts]);

    setNewTitle("");
    setNewPrice("");
  };

  const handleDelete = (id) => {
    const updated = allProducts.filter(
      (item) => item.id !== id
    );

    setProductList(updated);
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setNewTitle(product.title);
    setNewPrice(product.price);
  };

  const handleUpdate = () => {
    const updated = allProducts.map((item) =>
      item.id === editingId
        ? {
            ...item,
            title: newTitle,
            price: Number(newPrice),
          }
        : item
    );

    setProductList(updated);

    setEditingId(null);
    setNewTitle("");
    setNewPrice("");
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="products-container">
      <h1 className="products-title">
        Products Page
      </h1>

      {/* Search */}

      <div className="search-container">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      {/* Category Filter */}

      <div className="category-buttons">  
          <button
          onClick={() =>
            setSearchParams({ category: "all" })
          }
        >
          All
        </button>

        <button
          onClick={() =>
            setSearchParams({
              category: "electronics",
            })
          }
        >
          Electronics
        </button>

        <button
          onClick={() =>
            setSearchParams({
              category: "jewelery",
            })
          }
        >
          Jewellery
        </button>

        <button
          onClick={() =>
            setSearchParams({
              category: "men's clothing",
            })
          }
        >
          Men's
        </button>

        <button
          onClick={() =>
            setSearchParams({
              category: "women's clothing",
            })
          }
        >
          Women's
        </button>
      </div>

      {/* Add / Update Product */}

      <div className="product-form">

        <input
          placeholder="Product Title"
          value={newTitle}
          onChange={(e) =>
            setNewTitle(e.target.value)
          }
        />

        <input
          placeholder="Price"
          value={newPrice}
          onChange={(e) =>
            setNewPrice(e.target.value)
          }
        />

        {editingId ? (
          <button onClick={handleUpdate}>
            Update Product
          </button>
        ) : (
          <button onClick={handleAddProduct}>
            Add Product
          </button>
        )}
      </div>

      {/* Product Cards */}

      <div className="products-grid">
      
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <button
                  onClick={() =>
                    handleEdit(product)
                  }
                  style={{
                    background: "orange",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(product.id)
                  }
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2>No Products Found</h2>
        )}
      </div>
    </div>
  );
}

export default Products;