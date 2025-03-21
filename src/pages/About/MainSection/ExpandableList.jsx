import gsap from "gsap";
import ArrowRight from "../../../assets/ArrowRight";
import { useEffect } from "react";

export const ExpandableList = () => {
  useEffect(() => {
    const triggerAnimation = () => {
      gsap.fromTo(
        ".expandable-list-slide-in-component a",
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.15,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
    };

    const handleMouseEnter = () => {
      triggerAnimation();
    };

    const triggerElement = document.querySelector(".expandable-list-trigger");

    if (triggerElement) {
      triggerElement.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      if (triggerElement) {
        triggerElement.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, []);

  return (
    <div className="expandable-list">
      <div className="expandable-list-trigger">
        Jump To Section
        <span className="trigger-arrow">
          <ArrowRight fill="white" />
        </span>
      </div>

      <div className="expandable-list-slide-in-component">
        <a href="#who-we-are">Who we are</a>
        <a href="#mission-values">Mission & Values</a>
        <a href="#our-team">Our team</a>
        <a href="#good-places">Good places</a>
        <a href="#good-people">Good people</a>
        <a href="#sustainability">Sustainability</a>
        <a href="#two-good-foundation-board">Two Good Foundation Board</a>
      </div>
    </div>
  );
};
