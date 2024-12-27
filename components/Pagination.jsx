import { useGlobalContext } from "../src/Context";

function Pagination({ filteredCountriesSearch }) {
  const {
    currentPage,
    minBtnPerPage,
    maxBtnPerPage,
    itemsPerPage,
    paginate,
    handlePrevBtn,
    handleNextBtn,
    isDarkMode,
  } = useGlobalContext();

  const pages = [];

  for (
    let i = 1;
    i <= Math.ceil(filteredCountriesSearch.length / itemsPerPage);
    i++
  ) {
    pages.push(i);
  }

  return (
    <section className="pagination-container">
      <button
        className="prev-btn"
        onClick={handlePrevBtn}
        disabled={currentPage === pages[0]}
      >
        {isDarkMode ? (
          <img src="images/chevron-left-solid-white.svg" alt="" />
        ) : (
          <img src="images/chevron-left-solid.svg" alt="" />
        )}
      </button>
      <div>
        {pages.map((btn, index) => {
          return (
            btn > minBtnPerPage &&
            btn <= maxBtnPerPage && (
              <button
                key={index}
                className={
                  isDarkMode ? "button-dark-mode" : "button-light-mode"
                }
                style={{
                  background:
                    currentPage === btn
                      ? "var(--very-dark-blue)"
                      : "var(--white)",
                  color:
                    currentPage === btn
                      ? "var(--white)"
                      : "var(--very-dark-blue-2)",
                  boxShadow: isDarkMode
                    ? undefined
                    : "rgb(103 97 97) 1px 1px 5px",
                }}
                onClick={() => paginate(btn)}
              >
                {btn}
              </button>
            )
          );
        })}
      </div>
      <button
        className="next-btn"
        onClick={handleNextBtn}
        disabled={currentPage === pages[pages.length - 1]}
      >
        {isDarkMode ? (
          <img src="images/chevron-right-solid-white.svg" alt="" />
        ) : (
          <img src="images/chevron-right-solid.svg" alt="" />
        )}
      </button>
    </section>
  );
}

export default Pagination;
