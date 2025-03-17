import React, { useEffect, useRef } from "react";
import "./PDPImageSection.css";
import { LinkButton } from "../../../components/LinkButton/LinkButton";
import gsap from "gsap";

export const PDPQuote = () => {
  const quote = {
    title:
      "’’We’re like a little blooming garden. It's really beautiful to see.''",
    desc: "’’Everyone’s getting employment, new houses – one of us has even started her own café! We're all brighter…we’re shining diamond versions of ourselves.''",
    ctaText: "READ COURTNEY'S STORY.",
    ctaHref: "/stories/courtney",
  };

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll("span");
      gsap.fromTo(
        words,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
          },
        }
      );

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 90%",
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, [quote.title]);

  const renderTestimonialText = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} style={{ display: "inline-block" }}>
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <div className="pdp-image-section-quote">
      <div className="pdp-image-section-quote-title" ref={titleRef}>
        <p>{renderTestimonialText(quote.title)}</p>
      </div>

      <div className="pdp-image-section-quote-desc" ref={descRef}>
        {quote.desc}
      </div>

      <div className="pdp-image-section-quote-cta" ref={ctaRef}>
        <LinkButton title={quote.ctaText} href={quote.ctaHref} />
      </div>
    </div>
  );
};
