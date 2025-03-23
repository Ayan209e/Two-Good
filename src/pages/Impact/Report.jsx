import React, { useEffect } from "react";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import gsap from "gsap";

export const Report = () => {
  useEffect(() => {
    gsap.fromTo(
      ".impact-report",
      { opacity: 0, y: 200, scale: 0.4 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.2,
        scale: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".impact-report",
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div
      className="impact-report"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "32px",
        textAlign: "center",
        padding: "120px 0",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          maxWidth: "680px",
          fontFamily: "futura",
          letterSpacing: "-0.03em",
        }}
      >
        DOWNLOAD OUR FY2024 IMPACT REPORT.
      </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <LinkButton
          title="Download report."
          href="https://drive.google.com/file/d/16EQq__uq4XKP0IdAnNSV-MHXtAwsDI9O/view"
        />
      </div>
    </div>
  );
};
