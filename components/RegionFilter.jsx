import { useState } from "react";
import { useGlobalContext } from "../src/Context";

function RegionFilter({ allRegions }) {
  const { changeFilterRegion, isDarkMode } = useGlobalContext();
  const [isRegionFilterOpen, setIsRegionFilterOpen] = useState(false);

  function handleIsRegionFilterOpen() {
    setIsRegionFilterOpen(!isRegionFilterOpen);
  }

  return (
    <section className="region-container">
      <div
        style={{
          background: isDarkMode ? "var(--very-dark-blue)" : "var(--white)",
          boxShadow: isDarkMode ? undefined : "1px 1px 5px hsl(0deg 0% 85.97%)",
        }}
        onClick={handleIsRegionFilterOpen}
      >
        <h4
          style={{
            color: isDarkMode ? "var(--white)" : "var(--very-dark-blue-2)",
          }}
        >
          Filter by Region
        </h4>
        {isDarkMode ? (
          <img src="images/chevron-down-solid-white.svg" alt="" />
        ) : (
          <img src="images/chevron-down-solid-black.svg" alt="" />
        )}
      </div>
      <ul
        style={{
          display: isRegionFilterOpen && "block",
          background: isDarkMode ? "var(--very-dark-blue)" : "var(--white)",
          boxShadow: isDarkMode ? undefined : "1px 1px 5px hsl(0deg 0% 85.97%)",
          color: isDarkMode ? "var(--white)" : "var(--very-dark-blue-2)",
        }}
      >
        {allRegions.map((region, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                changeFilterRegion(region);
              }}
            >
              {region}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default RegionFilter;
