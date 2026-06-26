function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "300px",
        padding: "10px",
        margin: "20px auto",
        display: "block",
      }}
    />
  );
}

export default SearchBar;