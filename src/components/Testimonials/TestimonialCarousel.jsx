import React, { useState } from "react";
import "./Testimonials.css";
import { testimonials } from "../../constants/testimonials";
import { Underline } from "../../assets";

export const TestimonialCarousel = ({
  selectedTestimonial,
  setSelectedTestimonial,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="testimonial-carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`testimonial-item ${isHovered ? "paused" : ""}`}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-content"
            onClick={() => setSelectedTestimonial(index % testimonials.length)}
          >
            <div
              className={`radio ${
                selectedTestimonial === index % testimonials.length
                  ? "selected"
                  : ""
              }`}
            />
            <div>
              {testimonial.name}

              <div
                className={`underline ${
                  selectedTestimonial === index % testimonials.length
                    ? "selected"
                    : ""
                }`}
              >
                <Underline fill="#000" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
