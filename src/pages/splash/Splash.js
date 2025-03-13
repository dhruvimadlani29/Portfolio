import React, { useState, useEffect } from "react";
import "./Splash.css";
import { useHistory } from "react-router-dom"; // ✅ Correct import
import LoaderLogo from "../../components/Loader/LoaderLogo.js";
import { blueTheme, materialDarkTheme } from "../../theme.js";

function AnimatedSplash() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? materialDarkTheme : blueTheme
  );

  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: theme.splashBg }}>
        <LoaderLogo id="logo" theme={theme} />
      </div>
    </div>
  );
}

function Splash(props) {
  const [redirect, setRedirect] = useState(false);
  const history = useHistory(); // ✅ Correct: Get history object

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 5500);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  useEffect(() => {
    if (redirect) {
      history.push("/home");
    }
  }, [redirect, history]);

  return redirect ? null : <AnimatedSplash theme={props.theme} />;
}

export default Splash;
