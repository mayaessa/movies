import SearchBar from "./SearchBar";

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">

      <div className="container-fluid">

        <h3 className="text-white m-0">
          🎬 Movie Browser
        </h3>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

      </div>

    </nav>
  );
}

export default Navbar;