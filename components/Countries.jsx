import { useGlobalContext } from "../src/Context";
import Pagination from "../components/Pagination";

function Countries({ searchText }) {
  const {
    countriesData,
    filteredCountries,
    currentPage,
    itemsPerPage,
    handleOpenModal,
    isDarkMode,
    // filteredRegions,
  } = useGlobalContext();

  //filter countries by region
  const filteredRegions = handleFilteredRegions();

  function handleFilteredRegions() {
    if (filteredCountries === "Africa") {
      return countriesData.filter((country) => country.region === "Africa");
    } else if (filteredCountries === "Americas") {
      return countriesData.filter((country) => country.region === "Americas");
    } else if (filteredCountries === "Asia") {
      return countriesData.filter((country) => country.region === "Asia");
    } else if (filteredCountries === "Europe") {
      return countriesData.filter((country) => country.region === "Europe");
    } else if (filteredCountries === "Oceania") {
      return countriesData.filter((country) => country.region === "Oceania");
    } else if (filteredCountries === "Antarctic") {
      return countriesData.filter((country) => country.region === "Antarctic");
    }

    return countriesData;
  }

  //filter countries by search

  const filteredCountriesSearch = filteredRegions.filter((country) => {
    return country.name.common.toLowerCase().includes(searchText.toLowerCase());
  });

  //pagination

  const lengthItemsPerPage = currentPage * itemsPerPage;

  const firstItemIndex = lengthItemsPerPage - itemsPerPage;

  const page = filteredCountriesSearch.slice(
    firstItemIndex,
    lengthItemsPerPage
  );

  return (
    <section>
      <div className="countries-container">
        {page.map((country, index) => {
          return (
            <div
              key={index}
              style={{
                background: isDarkMode
                  ? "var(--very-dark-blue)"
                  : "var(--white)",
                boxShadow: isDarkMode
                  ? undefined
                  : "1px 1px 5px hsl(0deg 0% 85.97%)",
              }}
              className="countries-individual"
              onClick={() => handleOpenModal(country.name.common)}
            >
              <img src={country.flags.png} alt="" />
              <div
                style={{
                  color: isDarkMode
                    ? "var(--white)"
                    : "var(--very-dark-blue-2)",
                }}
              >
                <h2>{country.name.common}</h2>
                <h3>
                  Population: <span>{country.population.toLocaleString()}</span>
                </h3>
                <h3>
                  Region: <span>{country.region}</span>
                </h3>
                <h3>
                  Capital: <span>{country.capital}</span>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination filteredCountriesSearch={filteredCountriesSearch} />
    </section>
  );
}

export default Countries;
