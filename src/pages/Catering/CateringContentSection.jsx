import gsap from "gsap";
import React, { useEffect, useRef } from "react";
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
  const contentRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: -200,
        },
        {
          opacity: 1,
          x: 0,
          delay: 0.2,
          duration: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 95%",
          },
        }
      );
    }

    if (image1Ref.current) {
      gsap.fromTo(
        image1Ref.current,
        {
          opacity: 0,
          scale: 0.5,
          x: 700,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          delay: 0.4,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image1Ref.current,
            start: "top 95%",
          },
        }
      );
    }

    if (image2Ref.current) {
      gsap.fromTo(
        image2Ref.current,
        {
          opacity: 0,
          scale: 0.5,
          x: 500,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          delay: 0.2,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image2Ref.current,
            start: "top 95%",
          },
        }
      );
    }
  }, [heading]);

  return (
    <div className="impact-section">
      <div className="impact-section-content" ref={contentRef}>
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
        <div className="impact-image catering1" ref={image1Ref}>
          <img src={image1} alt="catering1" />
        </div>
        <div className="impact-image catering2" ref={image2Ref}>
          <img src={image2} alt="catering2" />
        </div>
      </div>
    </div>
  );
};
