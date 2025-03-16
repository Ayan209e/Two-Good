import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProductsSection.css";

gsap.registerPlugin(ScrollTrigger);

export const ProductSectionCards = ({ imgSrc, title, price, href = "/" }) => {
  const handleClick = () => {
    window.location.href = `/product${href}`;
  };

  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="product-section-cards" onClick={handleClick} ref={cardRef}>
      <img src={imgSrc} alt={title} />

      <div className="product-section-cards-info">
        <div>{title}</div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};
