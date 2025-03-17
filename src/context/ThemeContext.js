import React, { createContext, useState, useEffect } from "react";
import { blueTheme, materialDarkTheme } from "../theme";

// Create the context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to light
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? materialDarkTheme : blueTheme
  );

  // Sync theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "theme",
      theme === materialDarkTheme ? "dark" : "light"
    );
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === blueTheme ? materialDarkTheme : blueTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
