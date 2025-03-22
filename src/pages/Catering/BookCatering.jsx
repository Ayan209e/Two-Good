import React, { useEffect } from "react";
import { SectionHeadingBar } from "../../components/SectionHeadingBar/SectionHeadingBar";
import "./Catering.css";
import gsap from "gsap";

export const BookCatering = () => {
  useEffect(() => {
    gsap.fromTo(
      ".book-catering",
      {
        y: 200,
        opacity: 0,
        scale: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".book-catering",
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <div className="book-catering-wrapper">
      <SectionHeadingBar
        leftTitle="Make an order,"
        rightTitle="Make a difference."
      />

      <div className="book-catering">
        <h1>BOOK TWO GOOD CATERING TODAY.</h1>
        <a href="https://twogoodcatering.foodstorm.com/">
          Browse two good catering
        </a>
      </div>
    </div>
  );
};
