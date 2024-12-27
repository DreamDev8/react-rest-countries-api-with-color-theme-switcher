import { useGlobalContext } from "../src/Context";

function Header() {
  const { handleIsDarkMode, isDarkMode } = useGlobalContext();

  return (
    <header
      style={{
        background: isDarkMode ? "var(--very-dark-blue)" : "var(--white)",
        boxShadow: isDarkMode ? undefined : "1px 1px 5px hsl(0deg 0% 85.97%)",
      }}
    >
      <nav>
        <h1
          style={{
            color: isDarkMode ? "var(--white)" : "var(--very-dark-blue-2)",
          }}
        >
          Where in the world?
        </h1>
        <div onClick={handleIsDarkMode}>
          {isDarkMode ? (
            <img src="images/icon-moon.svg" alt="" />
          ) : (
            <img src="images/icon-sun.svg" alt="" />
          )}
          <h3
            style={{
              color: isDarkMode ? "var(--white)" : "var(--very-dark-blue-2)",
            }}
          >
            Dark Mode
          </h3>
        </div>
      </nav>
    </header>
  );
}

export default Header;
