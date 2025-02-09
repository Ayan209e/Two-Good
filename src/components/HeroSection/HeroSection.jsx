import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero-header span", {
      y: 200,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    }).from(
      ".teaser img",
      {
        scale: 1.1,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );

    gsap.to(".hero-header", {
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".teaser img", {
      yPercent: 70,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

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
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default HeroSection;
