import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export const CircleStroke = () => {
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const pathLength = pathRef.current.getTotalLength();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              pathRef.current,
              { strokeDasharray: pathLength, strokeDashoffset: pathLength },
              {
                strokeDashoffset: 0,
                duration: 0.5,
                delay: 0.5,
                ease: "power2.inOut",
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(svgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 218 115"
      fill="none"
    >
      <path
        ref={pathRef}
        class="go4056963706"
        d="M183.031 40.8156C168.364 33.6489 133.531 20.8156 97.5308 21.8156C74.5308 21.8156 28.6308 28.7156 29.0308 52.3156C29.4308 75.9156 60.8642 87.4823 76.5308 90.3156C93.5308 94.4823 137.531 96.4156 177.531 70.8156C217.531 45.2156 183.531 23.1489 161.531 15.3156C142.697 8.48227 95.1755 -1.15535 54.0308 7.3156C20.0308 14.3156 4.95674 28.3156 4.03081 40.8156C3.69748 45.3156 5.93081 56.5156 17.5308 65.3156C32.0308 76.3156 66.5308 84.3156 99.5308 84.3156C132.531 84.3156 177.531 75.3156 202.031 77.8156"
        fill="none"
        stroke="black"
        stroke-width="2"
        style={{ strokeSDashoffset: "0px" }}
      ></path>
    </svg>
  );
};
