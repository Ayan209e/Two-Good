import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export const OurTheory = () => {
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.2, x: 300 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.4,
          delay: 0.1,
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 90%",
          },
        }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -300 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          delay: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="our-theory">
      <div className="our-theory-content" ref={contentRef}>
        <h1>
          To understand what we do, why we do it and how it works, we must first
          understand the Theory of Change.
        </h1>

        <p>
          After many years of living in crisis, abuse and complex trauma,
          restoring self-worth is foundational for independence.
        </p>
        <p>
          We believe that through experiences that promote love and respect, we
          can spark and nurture a sense of self-worth for those on the path of
          healing.
        </p>
      </div>

      <div className="our-theory-image" ref={imgRef}>
        <img
          src="https://cdn.sanity.io/images/w8f1ak3c/production/270eb7f9406972b67627d5e5ee62325610fed14d-1920x1080.png/Impact%20Report%20Designs.png?w=1280&h=720&auto=format"
          alt="our theory"
        />
      </div>
    </div>
  );
};
