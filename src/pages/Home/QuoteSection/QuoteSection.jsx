import React, { useEffect, useRef } from "react";
import "./QuoteSection.css";
import { LinkButton } from "../../../components/LinkButton/LinkButton";
import gsap from "gsap";

export const QuoteSection = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 100%", // Start animation when 100% of card is in view
            toggleActions: "play none none none", // Only play once
          },
        }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          delay: 0.3,
          duration: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 100%", // Start animation when 80% of card is in view
            toggleActions: "play none none none", // Only play once
          },
        }
      );
    }
  }, []);

  return (
    <div className="quote-section">
      <div className="heading" ref={headingRef}>
        We believe in people, until they believe in themselves again.
      </div>

      <div className="content" ref={contentRef}>
        <div>
          Everything we do is designed to rebuild self worth and independence,
          in order to break free from the cycle of disadvantage.
        </div>
        <div>
          With every purchase you make with us, you're helping to change the
          course of someone's life; you're walking alongside vulnerable women as
          they find their way home again.
        </div>

        <LinkButton title="Shop to support" href="/shop" />
      </div>
    </div>
  );
};
