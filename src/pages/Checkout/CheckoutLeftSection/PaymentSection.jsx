import React, { useEffect, useRef } from "react";
import "./CheckoutLeftSection.css";
import gsap from "gsap";

export const PaymentSection = ({ open, placeOrder }) => {
  const paymentRef = useRef(null);
  useEffect(() => {
    if (paymentRef.current) {
      gsap.fromTo(
        paymentRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, [open]);

  return (
    <div className="customer-form-wrapper" ref={paymentRef}>
      <div className="checkout-content-heading">
        <h1>Payment</h1>
      </div>

      {open && (
        <div className="payment-form">
          <div className="payment-message">
            *Currently we only accept cash on delivery*
          </div>
          <button onClick={placeOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};
