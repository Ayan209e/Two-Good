import React, { useEffect, useRef } from "react";
import { donateContent } from "../../../../constants/impact";
import { useDispatch } from "react-redux";
import {
  toggleOverlay,
  toggleShowDonationMenu,
} from "../../../../store/action";
import gsap from "gsap";

export const Donate = () => {
  const dispatch = useDispatch();

  const showDonationMenu = () => {
    dispatch(toggleShowDonationMenu(true));
    dispatch(toggleOverlay(true));
  };

  const headerRef = useRef(null);
  const imgRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, x: 300 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 95%",
          },
        }
      );
    }

    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: 300, scale: 0.4 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.3,
          delay: 0.2,
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 95%",
          },
        }
      );
    }

    if (descRef.current) {
      const paragraphs = descRef.current.querySelectorAll("p");
      gsap.fromTo(
      paragraphs,
      { opacity: 0, x: 700 },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        delay: 0.1,
        stagger: 0.1,
        scrollTrigger: {
        trigger: descRef.current,
        start: "top 95%",
        },
      }
      );
    }

    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.4 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 95%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="impact-donate-wrapper">
      <div className="impact-donate">
        <h2 ref={headerRef}>
          Each dollar we spend is a vote for the kind of world we want to live
          in.
        </h2>

        <div className="donate-img" ref={imgRef}>
          <img
            src="https://cdn.sanity.io/images/w8f1ak3c/production/f9be0a173cab3565a903b422a0dc0ef8d7d25d12-1600x1067.jpg/Donations-Two-Good-Co.jpg?rect=1,0,1599,1067&w=1280&h=854&auto=format"
            alt="donate"
          />
        </div>

        <div className="donate-content" ref={descRef}>
          {donateContent.map((content) => (
            <p>{content}</p>
          ))}
        </div>

        <button onClick={() => showDonationMenu()} ref={ctaRef}>
          Donate today
        </button>
      </div>
    </div>
  );
};
