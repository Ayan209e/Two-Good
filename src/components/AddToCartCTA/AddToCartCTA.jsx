import React, { useState } from "react";
import "./AddToCartCTA.css";

export const AddToCartCTA = ({ price, highlight, ref }) => {
  const [quantity, setQuantity] = useState(1);
  const toggleQuantity = (increment) => {
    if (increment && quantity < 99) {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  const handleAddToCart = () => {
    // Add To Cart Logic
  };

  return (
    <div className="add-to-cart-cta-wrapper" ref={ref}>
      <div className="add-to-cart-cta">
        <div className="qty-picker">
          <div onClick={() => toggleQuantity(false)}>-</div>
          <div>{quantity}</div>
          <div onClick={() => toggleQuantity(true)}>+</div>
        </div>

        <div className="price">${price}</div>

        <div onClick={handleAddToCart}>Add to cart</div>
      </div>

      <div className="slide-in-component">
        {Array(10).fill(
          <h1>
            <div className="bullet" />
            {highlight}
          </h1>
        )}
      </div>
    </div>
  );
};
