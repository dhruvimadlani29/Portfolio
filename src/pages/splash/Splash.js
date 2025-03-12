import React, { useState, useEffect } from "react";
import "./Splash.css";
import { useNavigate } from "react-router-dom";  // Import useNavigate hook
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        <LoaderLogo id="logo" theme={props.theme} />
      </div>
    </div>
  );
}

function Splash(props) {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();  // Get navigate function from useNavigate

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 5500);

    return () => clearTimeout(timer);  // Cleanup the timer on component unmount
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate("/home");  // Navigate to '/home' when redirect state is true
    }
  }, [redirect, navigate]);

  return redirect ? null : <AnimatedSplash theme={props.theme} />;
}

export default Splash;
