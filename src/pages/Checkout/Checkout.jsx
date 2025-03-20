import React, { useState } from "react";
import "./Checkout.css";
import { CheckoutRightSection } from "./CheckoutRightSection/CheckoutRightSection";
import { CheckoutLeftSection } from "./CheckoutLeftSection/CheckoutLeftSection";
import { useSelector } from "react-redux";

export const Checkout = () => {

  const cart = useSelector((state) => state.cartStore);
  if (!cart.products.length > 0) {
    window.location.href = "/shop";
  }

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [customerName, setCustomerName] = useState("");

  return (
    <div className="checkout-wrapper">
      <div className="checkout-header">
        {isOrderPlaced ? `Thank you ${customerName}!` : "Checkout"}
      </div>

      <div className="checkout-content">
        <CheckoutLeftSection
          setIsOrderPlaced={setIsOrderPlaced}
          setCustomerName={setCustomerName}
        />
        <CheckoutRightSection />
      </div>
    </div>
  );
};
