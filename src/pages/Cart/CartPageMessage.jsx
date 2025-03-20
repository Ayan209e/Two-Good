import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export const CartPageMessage = () => {
  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      gsap.fromTo(
        messageRef.current,
        { opacity: 0, y: 200 },
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
    <div className="cart-page-message" ref={messageRef}>
      Thank you for walking alongside vulnerable women as they find their way
      home again.
    </div>
  );
};
