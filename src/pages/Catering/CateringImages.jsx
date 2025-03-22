import React, { useEffect } from "react";
import "./Catering.css";
import gsap from "gsap";

export const CateringImages = () => {
  useEffect(() => {
    gsap.fromTo(
      ".cateringImg1",
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        delay: 0.2,
        duration: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cateringImg1",
          start: "top 90%", // Start animation when 80% of card is in view
        },
      }
    );

    gsap.fromTo(
      ".cateringImg2",
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        delay: 0.3,
        duration: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cateringImg2",
          start: "top 90%", // Start animation when 80% of card is in view
        },
      }
    );
    
    gsap.fromTo(
      ".cateringImg3",
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        delay: 0.2,
        duration: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cateringImg3",
          start: "top 90%", // Start animation when 80% of card is in view
        },
      }
    );
  }, []);

  return (
    <div className="catering-images">
      <div className="catering-images-top">
        <div className="cateringImg1">
          <img
            src="https://cdn.sanity.io/images/w8f1ak3c/production/eafc93495dc8c67f15a2bed5de6decdd1b0e13c1-3881x2572.png/3%20copy.png?rect=0,27,3881,2545&fp-x=0.5&fp-y=0.5051731986922153&w=1024&h=770&fit=crop&crop=focalpoint&auto=format"
            alt="top1"
          />
        </div>
        <div className="cateringImg2">
          <img
            src="https://cdn.sanity.io/images/w8f1ak3c/production/dc313a32993dbffda121e923efab4f8245e75e1f-3881x2576.png/5%20copy.png?rect=0,20,3881,2556&fp-x=0.5&fp-y=0.5038740469844418&w=1024&h=770&fit=crop&crop=focalpoint&auto=format"
            alt="top2"
          />
        </div>
      </div>

      <div className="catering-images-bottom cateringImg3">
        <img
          src="https://cdn.sanity.io/images/w8f1ak3c/production/9378d4f2f62ce71e8f3040c7e1dd25635fbf9b13-3300x2200.jpg/Purpose_Conference_2023_Elin_Bandmann-254.jpg?rect=1,0,3299,2200&w=1600&h=1067&auto=format"
          alt="bottom1"
        />
      </div>
    </div>
  );
};
