import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SectionHeadingBar.css";

gsap.registerPlugin(ScrollTrigger);

export const SectionHeadingBar = ({ leftTitle, rightTitle }) => {
  const bottomBarRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bottomBarRef.current,
      { width: "0%" },
      {
        width: "100%",
        duration: 0.4,
        scrollTrigger: {
          trigger: bottomBarRef.current,
          start: "top 100%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="heading-bar">
      <div className="heading">
        <div>{leftTitle}</div>
        <div>{rightTitle}</div>
      </div>
      <div className="bottom-bar" ref={bottomBarRef} />
    </div>
  );
};
