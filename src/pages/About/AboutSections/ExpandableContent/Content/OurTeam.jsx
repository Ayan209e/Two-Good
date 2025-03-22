import React, { useEffect, useMemo, useState } from "react";
import "./Content.css";
import { ourTeam } from "../../../../../constants/about";
import gsap from "gsap";

export const OurTeam = () => {
  useEffect(() => {
    gsap.fromTo(
      ".our-team-text",
      { opacity: 0, x: 300 },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        delay: 0.1,
        scrollTrigger: {
          trigger: ".our-team-text",
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div className="our-team">
      <div className="our-team-text">
        It takes a special type of human to be a Two Gooder. Meet the people
        making change happen.
      </div>

      <TeamCardGrid />
    </div>
  );
};

export const TeamCardGrid = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 6, ourTeam.length));
  };

  const visibleItems = useMemo(
    () => ourTeam.slice(0, visibleCount),
    [visibleCount]
  );

  useEffect(() => {
    gsap.fromTo(
      ".load-more-button",
      { opacity: 0, scale: 0.2 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".load-more-button",
          start: "top 90%",
        },
      }
    );
  }, []);

  useEffect(() => {
    const newElements = document.querySelectorAll(
      `.team-card-wrapper:nth-child(n+${visibleCount - 5})`
    );

    gsap.fromTo(
      newElements,
      { opacity: 0, scale: 0.4 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
      }
    );
  }, [visibleCount]);

  return (
    <div className="our-team-grid-wrapper">
      <div className="our-team-grid">
        {visibleItems.map((member, index) => (
          <div className="team-card-wrapper" key={index}>
            <TeamCard {...member} />
          </div>
        ))}
      </div>
      {visibleCount < ourTeam.length && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export const TeamCard = ({ name, title, image }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{title}</h3>
    </div>
  );
};
