import "./SearchBar.css";

function SearchBar({
  search,
  setSearch,
 locations,
  selectedLocation,
  setSelectedLocation,
}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search hotels..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        <option value="">All Locations</option>

        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;