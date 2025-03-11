import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import { FeatureSection } from "./FeatureSection/FeatureSection";

export const HomePage = () => {
  return (
    <div className="App">
      <HeroSection />
      <FeatureSection />
    </div>
  );
};
