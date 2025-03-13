import React, { useContext } from "react";
import "./LoaderLogo.css";
import { ThemeContext } from "../../context/ThemeContext";

const LogoLoader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <svg
        width="400"
        height="200"
        viewBox="0 0 400 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Hexagon */}
        <polygon
          points="200,25 280,75 280,125 200,175 120,125 120,75"
          className="outer-hexagon"
        />
        {/* Inner Hexagon */}
        <polygon
          points="200,35 270,75 270,125 200,165 130,125 130,75"
          className="inner-hexagon"
        />
        {/* DM Text */}
        <text x="50%" y="52%" textAnchor="middle" className="dm">
          DM
        </text>
        {/* Full Name */}
        <text x="50%" y="75%" textAnchor="middle" className="name">
          Dhruvi Madlani
        </text>
      </svg>
    </div>
  );
};

export default LogoLoader;
