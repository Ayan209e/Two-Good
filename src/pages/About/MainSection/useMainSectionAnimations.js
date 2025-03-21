import { useEffect } from "react";
import gsap from "gsap";

export const useMainSectionAnimations = () => {
  useEffect(() => {
    // Top Animation
    gsap.fromTo(
      ".main-section-top",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Bottom Animation
    gsap.fromTo(
      ".main-section-bottom",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".main-section-bottom",
          start: "top 90%",
        },
      }
    );

    // Mid Left Animation
    gsap.fromTo(
      ".main-section-mid-left .exist",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        delay: 0.1,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".main-section-mid-left .so-far",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".main-section-mid-left .so-far",
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      ".main-section-mid-left-content",
      { opacity: 0, x: -500 },
      {
        opacity: 1,
        x: 0,
        delay: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Mid Right Animation
    gsap.fromTo(
      ".main-section-mid-right img",
      { opacity: 0, x: 300 },
      {
        opacity: 1,
        x: 0,
        delay: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);
};
