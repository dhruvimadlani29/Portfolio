import React, { useContext } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import { ThemeContext } from "../../context/ThemeContext";
import { blueTheme, materialDarkTheme } from "../../theme.js";

const onMouseEnter = (event, color) => {
  event.target.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  event.target.style.backgroundColor = "transparent";
};

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const link = settings.isSplash ? "/splash" : "/"; // Fixed default route

  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <div>
        <header className="header">
          {/* Logo */}
          <NavLink to={link} className="logo">
            <span style={{ color: theme.text }}> &lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>

          {/* Mobile Menu Toggle */}
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn" aria-label="Toggle navigation">
            <span className="navicon"></span>
          </label>

          {/* Navigation Menu */}
          <ul className="menu" style={{ backgroundColor: theme.body }}>
            {[
              { path: "/home", label: "Home" },
              { path: "/education", label: "Education" },
              { path: "/experience", label: "Experience" },
              { path: "/projects", label: "Projects" },
              { path: "/opensource", label: "Open Source" },
              { path: "/contact", label: "Contact Me" },
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active-link" : "")} // Fixed active style
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={onMouseOut}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* Dark/Light Mode Toggle */}
            <li className="theme-toggle">
              <button
                onClick={toggleTheme}
                className="theme-button"
                style={{
                  backgroundColor: theme.highlight,
                  color: theme.text,
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                {theme === materialDarkTheme ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
};

export default Header;
