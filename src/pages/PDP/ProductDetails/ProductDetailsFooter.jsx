import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { formatPrice } from "../../../utils/cart.utils";

export const ProductDetailsFooter = ({ price, highlight }) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 300 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }
    if (borderRef.current) {
      gsap.fromTo(
        borderRef.current,
        { opacity: 0, width: 0 },
        {
          opacity: 1,
          width: "100%",
          duration: 0.6,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="product-details-footer">
      <div className="product-details-footer-border" ref={borderRef} />
      <div className="product-details-footer-content">
        <div ref={leftRef}>${formatPrice(price)}</div>
        <div ref={rightRef}>{highlight}</div>
      </div>
    </div>
  );
};
