import { useState, useEffect } from "react";
import { useGlobalContext } from "../src/Context";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import RegionFilter from "../components/RegionFilter";
import Countries from "../components/Countries";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

function App() {
  const { countriesData, getData, isDarkMode } = useGlobalContext();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => getData(data));
  }, []);

  const allRegions = [
    "All",
    ...new Set(
      countriesData.map((country) => {
        return country.region;
      })
    ),
  ];

  return (
    <div
      className="app-container"
      style={{
        background: isDarkMode
          ? "var(--very-dark-blue-2)"
          : "var(--very-light-gray)",
      }}
    >
      <Header />
      <main>
        <div className="filter-container">
          <SearchFilter searchText={searchText} setSearchText={setSearchText} />
          <RegionFilter allRegions={allRegions} />
        </div>
        <Countries searchText={searchText} />
        <Modal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
