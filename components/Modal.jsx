import { useGlobalContext } from "../src/Context";

function Modal() {
  const {
    selectedCountryModal,
    isModal,
    handleCloseModal,
    isDarkMode,
    handleBorderModal,
  } = useGlobalContext();

  return (
    <section>
      {isModal && (
        <div
          style={{
            background: isDarkMode
              ? "var(--very-dark-blue-2)"
              : "var(--very-light-gray)",
          }}
          className="modal-overlay"
        >
          <div>
            <div
              style={{
                background: isDarkMode
                  ? "var(--very-dark-blue)"
                  : "var(--white)",
                boxShadow: isDarkMode
                  ? "1px 1px 5px black"
                  : "1px 1px 5px hsl(0deg 0% 85.97%)",
                color: isDarkMode ? "var(--white)" : "var(--very-dark-blue-2)",
              }}
              className="modal-back"
              onClick={handleCloseModal}
            >
              {isDarkMode ? (
                <img src="images/arrow-left-long-solid-white.svg" alt="" />
              ) : (
                <img src="images/arrow-left-long-solid.svg" alt="" />
              )}
              <span>Back</span>
            </div>
            <div className="modal-container">
              <img
                src={selectedCountryModal.flags.png}
                alt=""
                className="modal-image"
              />
              <div
                style={{
                  color: isDarkMode
                    ? "var(--white)"
                    : "var(--very-dark-blue-2)",
                }}
                className="modal-text-container"
              >
                <h2>{selectedCountryModal.name.common}</h2>
                <div className="modal-text">
                  <div>
                    <h3>
                      Native Name:{" "}
                      <span>
                        {
                          Object.values(selectedCountryModal.name.nativeName)[0]
                            .common
                        }
                      </span>
                    </h3>
                    <h3>
                      Population:{" "}
                      <span>
                        {selectedCountryModal.population.toLocaleString()}
                      </span>
                    </h3>
                    <h3>
                      Region: <span>{selectedCountryModal.region}</span>
                    </h3>
                    <h3>
                      Sub Region: <span>{selectedCountryModal.subregion}</span>
                    </h3>
                    <h3>
                      Capital: <span>{selectedCountryModal.capital}</span>
                    </h3>
                  </div>
                  <div>
                    <h3>
                      Top Level Domain: <span>{selectedCountryModal.tld}</span>
                    </h3>
                    <h3>
                      Currencies:{" "}
                      <span>
                        {Object.values(selectedCountryModal.currencies)[0].name}
                      </span>
                    </h3>
                    <h3>
                      Languages:{" "}
                      {Object.keys(selectedCountryModal.languages).map(
                        (language, index) => {
                          return (
                            <span key={index}>
                              {selectedCountryModal.languages[language]},{" "}
                            </span>
                          );
                        }
                      )}
                    </h3>
                  </div>
                </div>
                <div className="modal-button-container">
                  <h3>Border Countries: </h3>
                  <div>
                    {selectedCountryModal &&
                      selectedCountryModal.borders &&
                      selectedCountryModal.borders.length > 0 &&
                      selectedCountryModal.borders.map((border, index) => {
                        return (
                          <button
                            key={index}
                            onClick={() => handleBorderModal(border)}
                            style={{
                              background: isDarkMode
                                ? "var(--very-dark-blue)"
                                : "var(--white)",
                              boxShadow: isDarkMode
                                ? "1px 1px 5px black"
                                : "1px 1px 5px hsl(0deg 0% 85.97%)",
                              color: isDarkMode
                                ? "var(--white)"
                                : "var(--very-dark-blue-2)",
                            }}
                          >
                            {border}
                          </button>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Modal;
