import React, { useState } from "react";
import "./Testimonials.css";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { TestimonialDescription } from "./TestimonialDescription";
import { GetMessageForm } from "./GetMessageForm/GetMessageForm";

export const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  return (
    <div className="testimonials">
      <TestimonialCarousel
        selectedTestimonial={selectedTestimonial}
        setSelectedTestimonial={setSelectedTestimonial}
      />

      <TestimonialDescription selectedTestimonial={selectedTestimonial} />

      <GetMessageForm />
    </div>
  );
};
