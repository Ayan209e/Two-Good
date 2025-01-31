import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./OverlayMenu.css";
import { Underline } from "../../../assets";
import { useSelector } from "react-redux";

const OverlayMenu = ({ isOverlayOpen, handleClick, setShowDonationMenu }) => {
  const menuItemsRef = useRef([]);
  const isLoggedIn = useSelector((state) => state.userStore.isLoggedIn);

  useEffect(() => {
    if (isOverlayOpen) {
      gsap.from(menuItemsRef.current, {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        delay: 0.3,
        ease: "power3.out",
      });
    }
  }, [isOverlayOpen]);

  return (
    <div className="overlay-menu">
      {[
        "Shop",
        "Catering",
        "Impact",
        "Stories",
        "About",
        "Contact",
        "Donate",
        isLoggedIn ? "Log Out" : "Sign In",
      ].map((item, index) => (
        <div
          className="menu-item"
          key={index}
          ref={(el) => (menuItemsRef.current[index] = el)}
          onClick={() => handleClick(item)}
        >
          {item}
          <Underline />
        </div>
      ))}
    </div>
  );
};

export default OverlayMenu;
