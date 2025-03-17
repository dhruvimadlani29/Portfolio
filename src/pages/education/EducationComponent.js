import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import "./Experience.css";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import EducationImg from "./EducationImg";
import { blueTheme, materialDarkTheme } from "../../theme.js";

const Experience = () => {
  const [theme] = useState(
    localStorage.getItem("theme") === "dark" ? materialDarkTheme : blueTheme
  );

  // Update theme in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "theme",
      theme === materialDarkTheme ? "dark" : "light"
    );
  }, [theme]);

  return (
    <div className="education-main">
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
              {/* <img
                src={require("../../assets/images/experienceImage.webp")}
                alt=""
              /> */}
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              {/* <h3
                className="heading-sub-text"
                style={{ color: theme.text }}
              >
                {experience["subtitle"]}
              </h3> */}
              <p
                className="header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I hold a Bachelor of Engineering in Computer Engineering from
                Marwadi University and a Diploma in Computer Engineering from
                Government Polytechnic Porbandar. My education has provided me
                with a strong foundation in software development, algorithms,
                and database management.{" "}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <Educations theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Experience;
