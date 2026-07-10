function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search movies..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ width: "250px" }}
    />
  );
}

export default SearchBar;