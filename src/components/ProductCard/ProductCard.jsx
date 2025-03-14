import React from "react";
import "./ProductCard.css";

export const ProductCard = ({ product, quote = "" }) => {
  return quote ? (
    <div className="quote">{quote}</div>
  ) : (
    <a href={product.href}>
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </a>
  );
};
