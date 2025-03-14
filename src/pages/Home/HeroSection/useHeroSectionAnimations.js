import gsap from "gsap";
import { useEffect } from "react";

export const useHeroSectionAnimations = () => {
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
};
