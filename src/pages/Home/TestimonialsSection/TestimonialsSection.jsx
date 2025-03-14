import React from "react";
import "./TestimonialsSection.css";
import { Testimonials } from "../../../components/Testimonials/Testimonials";
import { SectionHeadingBar } from "../../../components/SectionHeadingBar/SectionHeadingBar";

export const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
      <SectionHeadingBar
        leftTitle="Words of goodness"
        rightTitle="Messages of love & support"
      />

      <Testimonials />
    </div>
  );
};
