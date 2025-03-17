import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom"; // Keep only Switch and Route
import "./App.css";
// import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { blueTheme, materialDarkTheme } from "./theme";
import Header from "./components/header/Header";
import { GlobalStyles } from "./global";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./pages/home/HomeComponent";
import Experience from "./pages/experience/Experience";
import Education from "./pages/education/EducationComponent";
import Contact from "./pages/contact/ContactComponent";
import Projects from "./pages/projects/Projects";
import { settings } from "./portfolio";
import Splash from "./pages/splash/Splash";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? materialDarkTheme : blueTheme
  );

  useEffect(() => {
    localStorage.setItem(
      "theme",
      theme === materialDarkTheme ? "dark" : "light"
    );
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () =>
          setTheme(theme === blueTheme ? materialDarkTheme : blueTheme),
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Switch>
          {/* <Route exact path="/" component={Main} /> Keep route syntax for V5 */}
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={theme} />}
          />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          {settings.isSplash && <Route path="/splash" component={Splash} />}
        </Switch>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
