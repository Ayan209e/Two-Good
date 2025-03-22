import gsap from "gsap";
import React, { useEffect } from "react";
import { foundationBoard } from "../../../../../constants/about";
import "./Content.css";

export const FoundationBoard = () => {
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
        <p>
          Two Good has come a long way in a short space of time, thanks in part
          to the incredible support of our Board members who share our vision
          for the kind of world we want to live in.
        </p>
      </div>

      <TeamCardGrid />
    </div>
  );
};

export const TeamCardGrid = () => {
  useEffect(() => {
    gsap.fromTo(
      ".team-card-wrapper",
      { opacity: 0, scale: 0.4 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className="foundation-grid">
      {foundationBoard.map((member) => (
        <TeamCard {...member} />
      ))}
    </div>
  );
};

export const TeamCard = ({ name, title, image, about }) => {
  useEffect(() => {
    gsap.fromTo(
      ".team-card",
      { opacity: 0, scale: 0.4 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".team-card",
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <div className="team-card">
      <div className="foundation-about-card-image">
        <img src={image} alt={name} />
        <div className="foundation-about-slide-in">{about}</div>
      </div>
      <h2>{name}</h2>
      <h3>{title}</h3>
    </div>
  );
};
