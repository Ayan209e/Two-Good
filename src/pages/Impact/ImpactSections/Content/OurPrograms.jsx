import React, { useEffect, useRef } from "react";
import "./Content.css";
import { ourPrograms } from "../../../../constants/impact";
import gsap from "gsap";

export const OurPrograms = () => {
  return (
    <div className="our-programs">
      {ourPrograms.map((program, index) => (
        <OurProgramsCard key={index} program={program} />
      ))}
    </div>
  );
};

export const OurProgramsCard = ({ program }) => {
  const { image, header, content } = program;
  const imgRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.2 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.2,
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 90%",
          },
        }
      );
    }

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
          },
        }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 300 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, [program]);

  return (
    <div className="our-programs-card">
      <div className="our-programs-card-image" ref={imgRef}>
        <img src={image} alt={header} />
      </div>

      <h1 ref={headerRef}>{header}</h1>

      <div className="our-programs-card-content" ref={contentRef}>
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
