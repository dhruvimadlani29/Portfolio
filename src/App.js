import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { blueTheme, materialDarkTheme } from "./theme";
import Header from "./components/header/Header";
import { GlobalStyles } from "./global";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? materialDarkTheme : blueTheme
  );

  useEffect(() => {
    localStorage.setItem("theme", theme === materialDarkTheme ? "dark" : "light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme(theme === blueTheme ? materialDarkTheme : blueTheme) }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Header />
          <Routes> {/* ✅ React Router v6 uses Routes instead of Switch */}
            <Route path="/" element={<Main />} /> {/* ✅ Correct v6 syntax */}
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
