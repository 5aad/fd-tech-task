import { FC, memo, useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header: FC = memo(() => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Dark and light theme toggle functionality
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (isDarkMode || storedTheme === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <header className="p-4 bg-secondary text-white font-semibold flex justify-between items-center">
      <div className="text-start">Leaflet Map</div>
      <div
        onClick={() => {
          localStorage.setItem("theme", `${!isDarkMode}`);
          setIsDarkMode(!isDarkMode);
        }}
        className="focus:outline-none cursor-pointer"
      >
        {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
      </div>
    </header>
  );
});

export default Header;
