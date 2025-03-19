import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AddToCartCTA.css";
import { addProductToCart } from "../../store/action";
import { formatPrice } from "../../utils/cart.utils";

export const AddToCartCTA = ({ price, highlight, ref, productId }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartStore);
  const [quantity, setQuantity] = useState(1);
  const [productAdded, setProductAdded] = useState(false);

  console.log("cart -", cart);

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
    setProductAdded(true);
    const product = { id: productId, quantity, price };
    dispatch(addProductToCart(product));
  };

  return (
    <div className="add-to-cart-cta-wrapper" ref={ref}>
      <div className="add-to-cart-cta">
        <div className="qty-picker">
          <div onClick={() => toggleQuantity(false)}>-</div>
          <div>{quantity}</div>
          <div onClick={() => toggleQuantity(true)}>+</div>
        </div>

        <div className="price">${formatPrice(price)}</div>

        <div className="cta-button" onClick={handleAddToCart}>
          {productAdded ? "Added" : "Add to cart"}
        </div>
      </div>

      <div className="slide-in-component">
        {Array.from({ length: 10 }, (_, index) => (
          <h1 key={index}>
            <div className="bullet" />
            {highlight}
          </h1>
        ))}
      </div>
    </div>
  );
};
