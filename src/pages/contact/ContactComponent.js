import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    localStorage.setItem(
      "theme",
      theme === materialDarkTheme ? "dark" : "light"
    );
  }, [theme]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    const { name, email, subject, message } = formData;

    // Ensure all fields are filled out
    if (!name || !email || !subject || !message) {
      alert("All fields are required.");
      return; // Stop execution if any field is missing
    }

    // Prepare the WhatsApp message
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;

    // Encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Replace with your phone number
    const phoneNumber = "6135324949"; // Include the country code (e.g., +1234567890)

    // Construct the WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappLink, "_blank");
  };

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

          {/* Contact Form Section */}
          {/* <div className="contact-form">
            <h2 className="contact-form-heading" style={{ color: theme.text }}>
              Contact Me
            </h2>
            <form className="contact-form-container" onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="contact-form-input"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="contact-form-input"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="contact-form-input"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="contact-form-textarea"
                required
              />
              <button type="submit" className="contact-form-button">
                Send Message
              </button>
            </form>
          </div> */}
        </Fade>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Contact;
