import React, { useEffect, useRef } from "react";
import "./ImpactSection.css";
import { LinkButton } from "../../../components/LinkButton/LinkButton";
import gsap from "gsap";

export const ImpactSection = () => {
  const contentRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -200 },
        {
          opacity: 1,
          x: 0,
          delay: 0.2,
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

    if (image1Ref.current) {
      gsap.fromTo(
        image1Ref.current,
        { opacity: 0, x: 500, scale: 0.5 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image1Ref.current,
            start: "top 100%", // Start animation when 100% of card is in view
            toggleActions: "play none none none", // Only play once
          },
        }
      );
    }

    if (image2Ref.current) {
      gsap.fromTo(
        image2Ref.current,
        { opacity: 0, x: 700, scale: 0.5 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image2Ref.current,
            start: "top 100%", // Start animation when 100% of card is in view
            toggleActions: "play none none none", // Only play once
          },
        }
      );
    }
  }, []);

  return (
    <div className="impact-section">
      <div className="impact-section-content" ref={contentRef}>
        <div className="impact-heading">OUR IMPACT.</div>
        <div className="impact-desc">The thing is, we don't save anyone.</div>
        <div className="impact-desc">
          What we do is provide a safe space for women to change the course of
          their own lives.
        </div>
        <div className="impact-desc">
          After many years of living in crisis, abuse and complex trauma,
          restoring self-worth is foundational for independence. We believe that
          through experiences that promote love and respect, we can spark and
          nurture a sense of self-worth for those on the path of healing.
        </div>

        <LinkButton href="/impact" title="Here's how we do it" />
      </div>

      <div className="impact-section-img">
        <div className="impact-image" ref={image1Ref}>
          <img src="/assets/ladies2.avif" alt="impact1" />
        </div>
        <div className="impact-image" ref={image2Ref}>
          <img src="/assets/lady1.avif" alt="impact1" />
        </div>
      </div>
    </div>
  );
};
