import React, { useEffect, useRef } from "react";
import "./EmptyCart.css";
import gsap from "gsap";

export const EmptyCart = () => {
  const titleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }

    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="empty-cart-wrapper">
      <div className="empty-cart">
        <div className="empty-cart-content" ref={titleRef}>
          <div className="desc">Oops! Your cart is empty.</div>

          <div
            className="cta"
            ref={ctaRef}
            onClick={() => (window.location.href = "/shop")}
          >
            <a href="/shop">See all good things</a>
          </div>
        </div>

        <section className="empty-cart-scroll-wrapper">
          <div className="empty-cart-scroll">
            {Array(30).fill().map((_, index) => (
              <h1 key={`cart-${index}`}>Cart</h1>
            ))}
          </div>
          <div className="empty-cart-scroll bottom">
            {Array(30).fill().map((_, index) => (
              <h1 key={`empty-${index}`}>Empty</h1>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
