import React from "react";
import "./Cart.css";
import { EmptyCart } from "./EmptyCart/EmptyCart";
import { CartPageMessage } from "./CartPageMessage";
import { CartProductDetails } from "./CartProductDetails/CartProductDetails";
import { useSelector } from "react-redux";

export const Cart = () => {
  const cart = useSelector((state) => state.cartStore);
  const cartProducts = cart.products;

  if (cartProducts.length === 0) return <EmptyCart />;
  return (
    <div className="cart-page">
      <CartProductDetails />
      <CartPageMessage />
    </div>
  );
};
