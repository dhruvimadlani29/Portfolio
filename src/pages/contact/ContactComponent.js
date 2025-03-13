import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { blueTheme, materialDarkTheme } from "../../theme.js"; // Import themes

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

const Contact = () => {
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
    <div className="contact-main">
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                alt="Profile"
                style={{ height: "780px" }}
              />
            </div>

            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>

              <SocialMedia theme={theme} />

              <div className="resume-btn-div">
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>

              {/* <hr className="contact-divider" /> */}

              <h1
                className="address-heading-text"
                style={{ color: theme.text, marginTop: "60px" }}
              >
                {addressSection["title"]}
              </h1>
              <p
                className="contact-header-detail-text"
                style={{ color: theme.secondaryText, marginTop: "20px" }}
              >
                {addressSection["subtitle"]}
              </p>

              <h1
                className="address-heading-text"
                style={{ color: theme.text }}
              >
                {phoneSection["title"]}
              </h1>
              <p
                className="contact-header-detail-text"
                style={{ color: theme.secondaryText }}
              >
                {phoneSection["subtitle"]}
              </p>

              <div className="address-btn-div">
                <Button
                  text="Visit on Google Maps"
                  newTab={true}
                  href={addressSection.location_map_link}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Contact;
