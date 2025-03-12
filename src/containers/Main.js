import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";  // Use Routes instead of Switch
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import Header from "../components/header/Header.js";

export default class Main extends Component {
  render() {
    return (
      <>
        <BrowserRouter basename="/">
          <Header /> {/* Add your Header component here if needed */}
          <Routes>
            {/* Replace Switch with Routes */}
            <Route
              path="/"
              element={settings.isSplash ? (
                <Splash theme={this.props.theme} />
              ) : (
                <Home theme={this.props.theme} />
              )}
            />
            <Route
              path="/home"
              element={<Home theme={this.props.theme} />}
            />
            <Route
              path="/experience"
              element={<Experience theme={this.props.theme} />}
            />
            <Route
              path="/education"
              element={<Education theme={this.props.theme} />}
            />
            <Route
              path="/opensource"
              element={<Opensource theme={this.props.theme} />}
            />
            <Route
              path="/contact"
              element={<Contact theme={this.props.theme} />}
            />
            {settings.isSplash && (
              <Route
                path="/splash"
                element={<Splash theme={this.props.theme} />}
              />
            )}
            <Route
              path="/projects"
              element={<Projects theme={this.props.theme} />}
            />
            <Route
              path="*"
              element={<Error404 theme={this.props.theme} />}
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
