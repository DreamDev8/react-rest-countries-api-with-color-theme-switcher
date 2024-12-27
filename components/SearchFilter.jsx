import { useGlobalContext } from "../src/Context";

function SearchFilter({ searchText, setSearchText }) {
  const { isDarkMode } = useGlobalContext();

  function handleSearch(e) {
    setSearchText(e.target.value);
  }

  return (
    <section
      style={{
        boxShadow: isDarkMode ? undefined : "1px 1px 5px hsl(0deg 0% 85.97%)",
      }}
      className="search-container"
    >
      <div
        style={{
          background: isDarkMode ? "var(--very-dark-blue)" : "var(--white)",
        }}
      >
        {isDarkMode ? (
          <img src="images/magnifying-glass-solid-white.svg" alt="" />
        ) : (
          <img src="images/magnifying-glass-solid.svg" alt="" />
        )}
        <input
          style={{
            background: isDarkMode ? "var(--very-dark-blue)" : "var(--white)",
            color: isDarkMode ? "var(--white)" : "var(--very-dark-blue-2)",
          }}
          type="text"
          placeholder="Search for a country..."
          value={searchText}
          onChange={handleSearch}
        />
      </div>
    </section>
  );
}

export default SearchFilter;
