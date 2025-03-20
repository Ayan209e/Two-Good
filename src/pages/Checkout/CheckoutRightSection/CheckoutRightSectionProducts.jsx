import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getProductBySlug } from "../../../utils/product.utils";
import { formatPrice } from "../../../utils/cart.utils";
import gsap from "gsap";

export const CheckoutRightSectionProducts = ({ isOrderPlaced }) => {
  const cart = useSelector((state) => state.cartStore);
  const cartProducts = cart.products;

  const products = cartProducts.map((product) => {
    return {
      ...getProductBySlug(product.id),
      quantity: product.quantity,
      id: product.id,
    };
  });

  return (
    <div className="checkout-right-section-products">
      {products.map((product) => (
        <CheckoutRightSectionProductCard
          key={product.id}
          product={product}
          isOrderPlaced={isOrderPlaced}
        />
      ))}
    </div>
  );
};

export const CheckoutRightSectionProductCard = ({ product, isOrderPlaced }) => {
  const { name, image, price, quantity } = product;

  const productRef = useRef(null);

  useEffect(() => {
    if (productRef.current) {
      gsap.fromTo(
        productRef.current,
        { opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, [isOrderPlaced]);

  return (
    <div className="checkout-right-section-product-card" ref={productRef}>
      <div className="checkout-right-section-product-card-content">
        <div className="checkout-right-section-product-card-image">
          <img src={image} alt={name} />
        </div>

        <div className="checkout-right-section-product-card-desc">
          <span>{quantity}</span>
          <span>x</span>
          <span>{name}</span>
        </div>
      </div>

      <div className="checkout-right-section-product-card-price">
        ${formatPrice(price * quantity)}
      </div>
    </div>
  );
};
