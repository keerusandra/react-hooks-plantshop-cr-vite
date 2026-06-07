function Search({ search, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Search plants..."
      value={search}
      onChange={handleChange}
    />
  );
}

export default Search;