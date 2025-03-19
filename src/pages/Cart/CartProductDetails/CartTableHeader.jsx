import React, { useEffect, useRef } from "react";
import { CartTableSeparator } from "./CartTableSeparator";
import gsap from "gsap";

export const CartTableHeader = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
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
    <div className="cart-table-header-wrapper">
      <div className="cart-table-header" ref={headerRef}>
        <div>Cart</div>
        <div className="cart-table-header-quantifier">
          <div>Quantity</div>
          <div>Price</div>
          <div className="amount-header">Amount</div>
        </div>
      </div>

      <CartTableSeparator />
    </div>
  );
};
