import React, { useState, useEffect } from "react";
import "./testimonials.css";

export default function Testimonials({ theme }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "I had the pleasure of working with Dhruvi, and she is an exceptional React.js developer. Her expertise in React, JavaScript, AWS, Mongo, and front-end technologies is impressive, and she consistently delivers clean, maintainable code while keeping performance and user experience top of mind.",
      name: "Pradip Vadher",
      position:
        "Software Engineer | MERN | React | Next | Node | Express | GCP | AWS",
    },
    {
      quote:
        "I had the privilege of working with Dhruvi, and I can confidently say she is an asset to any team. As a hardworking, focused individual, Dhruvi consistently showed her enthusiasm for learning and achieving high standards in her work. She's a proactive team player who brings positivity and joy to the workplace, creating a collaborative and vibrant atmosphere.",
      name: "Riddhi Bhade",
      position: "Senior Software Engineer",
    },
    {
      quote:
        "Dhruvi is an outstanding React developer with 4 years of solid experience. Their technical expertise, attention to detail, and problem-solving skills consistently elevate our projects. Beyond their technical skills, they are a collaborative team player who readily shares knowledge and supports others. I highly recommend Dhruvi for any team seeking a skilled and dedicated developer!",
      name: "Priya Bapodra",
      position: "Software Engineer - Cross Platform Apps Developer",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonials-container">
      <h2 style={{ color: theme.text }}>What People Are Saying</h2>
      <div className="testimonials-slider">
        <div className="testimonial-item">
          <p
            className="testimonial-text"
            style={{ color: theme.secondaryText }}
          >
            "{testimonials[currentIndex].quote}"
          </p>
          <div className="testimonial-author" style={{ color: theme.text }}>
            <p className="author-name">{testimonials[currentIndex].name}</p>
            <p className="author-position">
              {testimonials[currentIndex].position}
            </p>
          </div>
        </div>
      </div>

      {/* Updated Slider Buttons */}
      <div className="slider-buttons">
        <button onClick={prevTestimonial} className="prev-button">
          &#8592;
        </button>
        <button onClick={nextTestimonial} className="next-button">
          &#8594;
        </button>
      </div>

      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
