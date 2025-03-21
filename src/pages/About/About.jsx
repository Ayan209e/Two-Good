import React from "react";
import { MainSection } from "./MainSection/MainSection";
import { AboutSections } from "./AboutSections/AboutSections";

export const About = () => {
  return (
    <div className="about">
      <MainSection />
      <AboutSections />
    </div>
  );
};
