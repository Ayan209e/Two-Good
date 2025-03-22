import React, { useEffect, useRef } from "react";
import "./Catering.css";
import gsap from "gsap";
import { LinkButton } from "../../components/LinkButton/LinkButton";

export const CateringQuote = ({ quote, showLink }) => {
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
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
            trigger: quoteRef.current,
            start: "top 95%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="catering-quote" ref={quoteRef}>
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
