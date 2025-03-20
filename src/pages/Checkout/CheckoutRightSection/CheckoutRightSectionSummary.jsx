import React from "react";
import "./CheckoutRightSection.css";
import { useSelector } from "react-redux";
import { formatPrice } from "../../../utils/cart.utils";

export const CheckoutRightSectionSummary = () => {
  const cart = useSelector((state) => state.cartStore);
  const totalAmount = cart.totalAmount;
  const tax = totalAmount * 0.18;
  const shipping = totalAmount > 200 ? 0 : 15;
  const total = totalAmount + tax + shipping;

  return (
    <div className="checkout-right-section-summary">
      <div className="subtotal">
        <div className="head">
          <span>Subtotal</span>
          <span>${formatPrice(totalAmount)}</span>
        </div>

        <div className="cont">
          <span>Shipping</span>
          <span>{shipping === 0 ? "--" : "$50"}</span>
        </div>
      </div>

      <div className="tax">
        <div>
          <span>Tax Included in Total:</span>
          <br />
          <span>GST</span>
        </div>
        <h1>${formatPrice(tax)}</h1>
      </div>

      <div className="total">
        <p>Total (AUD)</p>
        <h1>${formatPrice(total)}</h1>
      </div>
    </div>
  );
};
