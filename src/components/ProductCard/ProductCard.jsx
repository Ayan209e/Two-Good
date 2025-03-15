import React, { useEffect, useRef } from "react";
import "./ProductCard.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProductCard = ({ product, quote = "" }) => {
  const cardRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    // Product Card Animation
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%", // Start animation when 90% of card is in view
            toggleActions: "play none none none", // Only play once
          },
        }
      );
    }

    // Quote Animation
    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return quote ? (
    <div className="quote" ref={quoteRef}>
      {quote}
    </div>
  ) : (
    <a href={`/product${product.href}`}>
      <div className="product-card" ref={cardRef}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </a>
  );
};
