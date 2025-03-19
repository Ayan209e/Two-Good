import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CartProductDetails.css";
import { CartTableSeparator } from "./CartTableSeparator";
import ArrowRight from "../../../assets/ArrowRight";
import { addGiftCard, removeGiftCard } from "../../../store/action";
import gsap from "gsap";
import { formatPrice } from "../../../utils/cart.utils";

export const CartTableSummary = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartStore);

  const [subTotal, setSubTotal] = useState(cart.totalAmount);
  const [cardAdded, setCardAdded] = useState(Boolean(cart.cards));
  const [cardAmount, setCardAmount] = useState(cart.cards * 5);

  const addCard = () => {
    setCardAdded(true);
    setCardAmount(cardAmount + 5);
    setSubTotal(subTotal + 5);
    dispatch(addGiftCard());
  };

  const removeCard = () => {
    setCardAdded(false);
    setCardAmount(0);
    dispatch(removeGiftCard());
  };

  useEffect(() => {
    setSubTotal(cart.totalAmount + cart.cards * 5);
  }, [cart]);

  const summaryRef = useRef(null);

  useEffect(() => {
    if (summaryRef.current) {
      gsap.fromTo(
        summaryRef.current,
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
    <div>
      <div className="cart-table-summary" ref={summaryRef}>
        <div className="cart-table-summary-text" onClick={addCard}>
          <p>Add a Personalized Card for that someone special for just $5.</p>
          <div className="cart-table-summary-arrow">
            <ArrowRight fill="rgba(0, 0, 0, 0.5)" />
          </div>
        </div>

        <div className="cart-table-summary-quantifier">
          <div className="cart-table-summary-content">
            {cardAdded && (
              <div className="cart-table-summary-content-row">
                <h1>Personalized Card X{cardAmount / 5}</h1>
                <h2>
                  ${cardAmount}
                  <span onClick={removeCard}>X</span>
                </h2>
              </div>
            )}

            <div className="cart-table-summary-content-row">
              <h1>Delivery</h1>
              <h2 className="shipping-message">
                Shipping calculated at check-out.
              </h2>
            </div>

            <div className="cart-table-summary-content-row">
              <h1>Subtotal</h1>
              <h2 className="subtotal">${formatPrice(subTotal)}</h2>
            </div>
          </div>

          <div
            className="cart-table-summary-checkout-cta"
            onClick={() => (window.location.href = "/checkout")}
          >
            Checkout
          </div>
        </div>
      </div>
      <CartTableSeparator />
    </div>
  );
};
