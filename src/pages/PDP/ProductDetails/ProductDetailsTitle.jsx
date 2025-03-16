import React, { useEffect, useRef } from "react";
import { AddToCartCTA } from "../../../components/AddToCartCTA/AddToCartCTA";
import gsap from "gsap";

export const ProductDetailsTitle = ({ price, highlight, name }) => {
  const titleRef = useRef(null);
  const cartRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }

    if (cartRef.current) {
      gsap.fromTo(
        cartRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.4,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="product-details-title">
      <h1 ref={titleRef}>{name}</h1>
      <AddToCartCTA price={price} highlight={highlight} ref={cartRef} />
    </div>
  );
};
