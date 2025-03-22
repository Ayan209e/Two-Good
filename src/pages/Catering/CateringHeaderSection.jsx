import React, { useEffect } from "react";
import "./Catering.css";
import gsap from "gsap";

export const CateringHeaderSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".catering-header span", {
      y: 200,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    }).from(
      ".catering-header img",
      {
        scale: 1.1,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );

    gsap.to(".catering-header", {
      ease: "none",
      scrollTrigger: {
        trigger: ".catering",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="catering-header">
      <h1>
        <span>Good</span>
      </h1>
      <h1>
        <span>Food.</span>
      </h1>

      <img
        src="https://cdn.sanity.io/images/w8f1ak3c/production/6a6d17288493bcbef54d9aa5548fb7a9bd46ffb7-1500x1125.jpg/AB5I2197_NikkiTo.jpg?w=1280&h=960&auto=format"
        alt="catering"
      />
    </div>
  );
};
