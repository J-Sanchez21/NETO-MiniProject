import { useState, useEffect } from "react";
import "./DarkModeButton.css";

const DarkModeButton: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("darkMode");
    return storedTheme === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      <span className="material-symbols-outlined">
        {darkMode ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
};

export default DarkModeButton;
