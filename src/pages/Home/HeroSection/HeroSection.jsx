import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroSection.css";
import { useHeroSectionAnimations } from "./useHeroSectionAnimations";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useHeroSectionAnimations();

  return (
    <div className="hero-container">
      <div className="hero-header">
        <h1>
          <span>Change</span>
        </h1>
        <h1>
          <span>The</span> <span>Course.</span>
        </h1>
      </div>
      <div className="teaser">
        <img src="/assets/teaser.avif" alt="teaser" />
      </div>
    </div>
  );
};

export default HeroSection;
