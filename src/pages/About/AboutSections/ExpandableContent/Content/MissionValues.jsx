import React, { useEffect } from "react";
import "./Content.css";
import gsap from "gsap";

export const MissionValues = () => {
  useEffect(() => {
    gsap.fromTo(
      ".mission-values-text",
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, duration: 0.4, delay: 0.1 }
    );

    gsap.fromTo(
      ".card-1",
      { opacity: 0, x: 300 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".card-1",
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      ".card-2",
      { opacity: 0, x: 300 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".card-2",
          start: "top 90%",
        },
      }
    );
    gsap.fromTo(
      ".card-3",
      { opacity: 0, x: 300 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".card-3",
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div className="mission-values">
      <div className="mission-values-text">
        Our Purpose, Vision & Values guide and inform our approach and
        decision-making at all levels of the organization. They provide the
        framework and behavioral approach that unites us around a common purpose
        and define our culture and approach to working with others.
      </div>

      <div className="mission-values-cards">
        <div className="mission-values-card black-card card-1">
          <h1>PURPOSE.</h1>
          <p>
            To demonstrate love and respect to vulnerable people by creating
            Good Food and Good Things.
          </p>
        </div>

        <div className="mission-values-card card-2">
          <h1>VISION.</h1>
          <p>That every person feels worthy of love and respect.</p>
        </div>

        <div className="mission-values-card card-3">
          <h1>VALUES.</h1>
          <p>
            We are a team, we take care of each other.
            <br />
            Small things matter most.
            <br />
            Everyone is equal at our table.
            <br />
            People before profit.
            <br />
            Connect with our community.
          </p>
        </div>
      </div>
    </div>
  );
};
