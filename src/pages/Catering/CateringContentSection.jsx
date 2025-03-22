import gsap from "gsap";
import React, { useEffect } from "react";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import "./Catering.css";

export const CateringContentSection = ({
  heading,
  content = [],
  ctaTitle,
  ctaHref,
  image1,
  image2,
}) => {
  useEffect(() => {
    gsap.fromTo(
      ".impact-section-content",
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        delay: 0.2,
        duration: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".impact-section-content",
          start: "top 90%", // Start animation when 80% of card is in view
        },
      }
    );

    gsap.fromTo(
      ".catering1",
      { opacity: 0, x: 500, scale: 0.5 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.6,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".catering1",
          start: "bottom 95%", // Start animation when 100% of card is in view
        },
      }
    );

    gsap.fromTo(
      ".catering2",
      { opacity: 0, x: 700, scale: 0.5 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.6,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".catering2",
          start: "top 95%", // Start animation when 100% of card is in view
        },
      }
    );
  }, []);

  return (
    <div className="impact-section">
      <div className="impact-section-content">
        <div className="impact-heading">{heading}</div>

        {content &&
          content.map((contentItem, index) => (
            <div key={index} className="impact-desc">
              {contentItem}
            </div>
          ))}

        {ctaTitle && (
          <div className="catering-content-cta">
            <LinkButton href={ctaHref} title={ctaTitle} />
          </div>
        )}
      </div>

      <div className="impact-section-img">
        <div className="impact-image catering1">
          <img src={image1} alt="catering1" />
        </div>
        <div className="impact-image catering2">
          <img src={image2} alt="catering2" />
        </div>
      </div>
    </div>
  );
};
