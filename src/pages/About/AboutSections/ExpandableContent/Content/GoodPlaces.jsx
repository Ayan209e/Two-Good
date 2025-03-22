import React, { useEffect } from "react";
import { goodPlaces } from "../../../../../constants/about";
import gsap from "gsap";

export const GoodPlaces = () => {
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
          When we wheeled over our BBQ to the roadside for an ad-hoc Kings Cross
          cook-out for the area’s less fortunate, we never could have imagined
          it would become all that Two Good Co is today. We didn’t mean to grow
          like we have; we didn’t mean to have this much impact. We just wanted
          to feed some hungry people. But grow we have; from our kitchens and
          cafe, to all Soaps For Hope buildings and office spaces. Here's a
          couple of Good Places you can find us:
        </p>
      </div>

      <div className="good-places-list">
        {goodPlaces.map((place, index) => (
          <GoodPlacesItem key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export const GoodPlacesItem = ({ place }) => {
  const { image, name, content, openingHours, address, location } = place;

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
      ".good-places-item-content-left",
      { opacity: 0, y: 300 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".good-places-item-content-left",
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      ".good-places-item-content-right",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".good-places-item-content-right",
          start: "top 85%",
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

      <div className="good-places-item-content">
        <div className="good-places-item-content-left">
          {content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <div className="good-places-item-content-right">
          <div className="good-places-item-opening">
            Opening Hours
            {openingHours.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>

          <div className="good-places-item-address">
            Address
            {address.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>

          <a className="good-places-item-location-cta" href={location}>
            How to find us
          </a>
        </div>
      </div>
    </div>
  );
};
