import React from "react";
import { useSelector } from "react-redux";
import { getProductBySlug } from "../../../utils/product.utils";
import { formatPrice } from "../../../utils/cart.utils";

export const CheckoutRightSectionProducts = () => {
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
        <CheckoutRightSectionProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export const CheckoutRightSectionProductCard = ({ product }) => {
  const { name, image, price, quantity } = product;

  return (
    <div className="checkout-right-section-product-card">
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
