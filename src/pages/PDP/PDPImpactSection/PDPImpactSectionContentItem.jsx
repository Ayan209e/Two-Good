import gsap from "gsap";
import { useEffect, useRef } from "react";

export const PDPImpactSectionContentItem = ({ title, desc }) => {
  const descRef = useRef(null);

  useEffect(() => {
    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 80%", // Start animation when 90% of card is in view
            toggleActions: "play none none none", // Only play once
          },
        }
      );
    }
  }, []);

  return (
    <div className="pdp-impact-section-content-item" ref={descRef}>
      <h1>{title}</h1>
      <div>{desc}</div>
    </div>
  );
};
