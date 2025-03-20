import React, { useEffect, useRef } from "react";
import "./CheckoutRightSection.css";
import { CheckoutRightSectionProducts } from "./CheckoutRightSectionProducts";
import { CheckoutRightSectionSummary } from "./CheckoutRightSectionSummary";
import gsap from "gsap";

export const CheckoutRightSection = ({ isOrderPlaced }) => {
  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      gsap.fromTo(
        messageRef.current,
        { opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, [isOrderPlaced]);

  return (
    <div className="checkout-right-section">
      <div className="checkout-content-heading" ref={messageRef}>
        <div>Order Summary</div>
        <span onClick={() => (window.location.href = "/cart")}>Edit Cart</span>
      </div>

      <CheckoutRightSectionProducts />

      <CheckoutRightSectionSummary />
    </div>
  );
};
