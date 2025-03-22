import React, { useEffect } from "react";
import { sustainability } from "../../../../../constants/about";
import gsap from "gsap";

export const Sustainability = () => {
  useEffect(() => {
    gsap.fromTo(
      ".good-places-text",
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 0.5, delay: 0.2 }
    );
  }, []);

  return (
    <div className="good-places">
      <div className="good-places-text">
        <p>
          Two Good exists to make the most powerful social impact we can, with
          the least impact upon the earth. We continue to build on improving our
          sustainability, whether it is environmental, financial or social.
        </p>
      </div>

      <div className="good-places-list">
        {sustainability.map((item, index) => (
          <SustainabilityItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export const SustainabilityItem = ({ item }) => {
  const { image, name, desc } = item;

  useEffect(() => {
    gsap.fromTo(
      ".good-places-item-image",
      { opacity: 0, scale: 0.3 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".good-places-item-image",
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      ".good-places-item-name",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".good-places-item-name",
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      ".sustainability-content",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".sustainability-content",
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <div className="good-places-item">
      <div className="good-places-item-image">
        <img src={image} alt={name} />
      </div>

      <div className="good-places-item-name">{name}</div>

      <div className="sustainability-content">
        {desc}
      </div>
    </div>
  );
};
