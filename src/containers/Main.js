import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom"; // Correct imports for V5
// import Home from "../pages/home/HomeComponent";
// import Splash from "../pages/splash/Splash";
// import Education from "../pages/education/EducationComponent";
// import Experience from "../pages/experience/Experience";
// import Opensource from "../pages/opensource/Opensource";
// import Contact from "../pages/contact/ContactComponent";
// import Projects from "../pages/projects/Projects";
// import { settings } from "../portfolio.js";
// import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <>
        {/* <Switch>
          <Route
            exact
            path="/"
            component={settings.isSplash ? Splash : Home} // Correct syntax
          />
          <Route path="/home" component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/opensource" component={Opensource} />
          <Route path="/contact" component={Contact} />
          {settings.isSplash && (
            <Route path="/splash" component={Splash} />
          )}
          <Route path="/projects" component={Projects} />
          <Route path="*" component={Error404} />
        </Switch> */}
      </>
    );
  }
}
