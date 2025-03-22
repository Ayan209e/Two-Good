import React, { useEffect } from "react";
import "./Catering.css";
import gsap from "gsap";
import { LinkButton } from "../../components/LinkButton/LinkButton";

export const CateringQuote = ({ quote, showLink }) => {
  useEffect(() => {
    gsap.fromTo(
      ".catering-quote",
      {
        y: 200,
        opacity: 0,
        scale: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".catering-quote",
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <div className="catering-quote">
      {quote}

      {showLink && (
        <div className="catering-quote-cta">
          <LinkButton
            href="https://twogoodcatering.foodstorm.com/"
            title="Book catering today"
          />
        </div>
      )}
    </div>
  );
};
