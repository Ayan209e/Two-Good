import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { testimonials } from "../../constants/testimonials";
import "./Testimonials.css";

export const TestimonialDescription = ({ selectedTestimonial }) => {
  const descRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    if (descRef.current) {
      const words = descRef.current.querySelectorAll("span");
      gsap.fromTo(
        words,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.05 }
      );
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.3, delay: words.length * 0.05 }
      );
    }
  }, [selectedTestimonial]);

  const renderTestimonialText = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} style={{ display: "inline-block" }}>
        {word}&nbsp;
      </span>
    ));
  };
  
  return (
    <div className="testimonial-description">
      <div className="testimonial-desc" ref={descRef}>
        <p>
          {renderTestimonialText(testimonials[selectedTestimonial].testimonial)}
        </p>
      </div>
      <div className="name" ref={nameRef}>
        {testimonials[selectedTestimonial].name}
      </div>
    </div>
  );
};
