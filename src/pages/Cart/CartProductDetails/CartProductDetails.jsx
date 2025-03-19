import React from "react";
import "./CartProductDetails.css";
import { CartTableHeader } from "./CartTableHeader";
import { CartTableProducts } from "./CartTableProducts";
import { CartTableSummary } from "./CartTableSummary";

export const CartProductDetails = () => {
  return (
    <div className="cart-page-product-details">
      <CartTableHeader />

      <CartTableProducts />

      <CartTableSummary />
    </div>
  );
};
