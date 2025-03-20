import React from "react";
import "./CheckoutRightSection.css";
import { CheckoutRightSectionProducts } from "./CheckoutRightSectionProducts";
import { CheckoutRightSectionSummary } from "./CheckoutRightSectionSummary";

export const CheckoutRightSection = () => {
  return (
    <div className="checkout-right-section">
      <div className="checkout-content-heading">
        <div>Order Summary</div>
        <span onClick={() => (window.location.href = "/cart")}>Edit Cart</span>
      </div>

      <CheckoutRightSectionProducts />

      <CheckoutRightSectionSummary />
    </div>
  );
};
