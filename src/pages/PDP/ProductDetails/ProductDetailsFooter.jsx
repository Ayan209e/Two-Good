import React from "react";

export const ProductDetailsFooter = ({ price, highlight }) => {
  return (
    <div className="product-details-footer">
      <div className="product-details-footer-border" />
      <div className="product-details-footer-content">
        <div>${price}</div>
        <div>{highlight}</div>
      </div>
    </div>
  );
};
