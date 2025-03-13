import React, { useState, useEffect } from "react";
import "./TopButton.css";
import { blueTheme, materialDarkTheme } from "../../theme";

export default function TopButton() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? materialDarkTheme : blueTheme
  );

  useEffect(() => {
    function scrollFunction() {
      const topButton = document.getElementById("topButton");
      if (!topButton) return;

      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        topButton.style.visibility = "visible";
      } else {
        topButton.style.visibility = "hidden";
      }
    }

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const onMouseEnter = (color, bgColor) => {
    const topButton = document.getElementById("topButton");
    const arrow = document.getElementById("arrow");
    if (topButton) {
      topButton.style.color = color;
      topButton.style.backgroundColor = bgColor;
    }
    if (arrow) {
      arrow.style.color = color;
      arrow.style.backgroundColor = bgColor;
    }
  };

  const onMouseLeave = (color, bgColor) => {
    const topButton = document.getElementById("topButton");
    const arrow = document.getElementById("arrow");
    if (topButton) {
      topButton.style.color = color;
      topButton.style.backgroundColor = bgColor;
    }
    if (arrow) {
      arrow.style.color = color;
      arrow.style.backgroundColor = bgColor;
    }
  };

  return (
    <div
      onClick={GoUpEvent}
      id="topButton"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
        visibility: "hidden",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "visibility 0.3s ease-in-out",
      }}
      title="Go up"
      onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
      onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
}
