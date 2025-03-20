import React from "react";
import "./CheckoutLeftSection.css";

export const PaymentSection = ({ open, placeOrder, toggleEdit }) => {
  return (
    <div className="customer-form-wrapper">
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
