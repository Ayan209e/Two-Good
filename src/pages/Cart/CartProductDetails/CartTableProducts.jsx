import React, { useEffect, useRef, useState } from "react";
import { CartTableSeparator } from "./CartTableSeparator";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../../../utils/product.utils";
import { removeProductFromCart, updateProductQuantity } from "../../../store/action";
import gsap from "gsap";

export const CartTableProducts = () => {
  const cart = useSelector((state) => state.cartStore);
  const cartProducts = cart.products;

  const products = cartProducts.map((product) => {
    return { ...getProductBySlug(product.id), quantity: product.quantity, id: product.id };
  });

  return products.map((product) => {
    return (
      <div className="cart-table-products-wrapper">
        <CartTableProductCard product={product} />
        <CartTableSeparator />
      </div>
    );
  });
};

export const CartTableProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);
  const [amount, setAmount] = useState(product.price);

  const toggleQuantity = (increment) => {
    if (increment && quantity < 99) {
      setQuantity(quantity + 1);
      dispatch(updateProductQuantity(product.id, quantity+1));
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
        dispatch(updateProductQuantity(product.id, quantity - 1));
      }
    }
  };

  useEffect(() => {
    setAmount(product.price * quantity);
  }, [product.price, quantity]);

  const removeProduct = () => {
    dispatch(removeProductFromCart(product.id));
  };

  const productRef = useRef(null);

  useEffect(() => {
    if (productRef.current) {
      gsap.fromTo(
        productRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="cart-table-products" ref={productRef}>
      <div>{product.name}</div>

      <div className="cart-table-header-quantifier">
        <div className="qty-picker">
          <div onClick={() => toggleQuantity(false)}>-</div>
          <div>{quantity}</div>
          <div onClick={() => toggleQuantity(true)}>+</div>
        </div>

        <div className="min-width">${product.price}</div>

        <div className="min-width amount">${amount}</div>

        <div className="cross-icon" onClick={removeProduct}>
          X
        </div>
      </div>
    </div>
  );
};
