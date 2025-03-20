import React, { useEffect, useRef, useState } from "react";
import "./Checkout.css";
import { CheckoutRightSection } from "./CheckoutRightSection/CheckoutRightSection";
import { CheckoutLeftSection } from "./CheckoutLeftSection/CheckoutLeftSection";
import { useSelector } from "react-redux";
import gsap from "gsap";

export const Checkout = () => {
  const cart = useSelector((state) => state.cartStore);
  if (!cart.products.length > 0) {
    window.location.href = "/shop";
  }

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [customerName, setCustomerName] = useState("");

  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      gsap.fromTo(
        messageRef.current,
        { opacity: 0, x: -400 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="checkout-wrapper">
      <div className="checkout-header" ref={messageRef}>
        {isOrderPlaced ? `Thank you ${customerName}!` : "Checkout"}
      </div>

      <div className="checkout-content">
        <CheckoutLeftSection
          setIsOrderPlaced={setIsOrderPlaced}
          setCustomerName={setCustomerName}
        />
        <CheckoutRightSection isOrderPlaced={isOrderPlaced} />
      </div>
    </div>
  );
};
