import React, { useEffect, useRef } from "react";
import { Underline } from "../../../assets";
import gsap from "gsap";
import { getFilteredMenuItems } from "../../../utils/shop.utils";

export const ShopHeaderOverlay = ({ isOpen }) => {
  const pathName = window.location.pathname;
  const shopItems = getFilteredMenuItems(pathName);

  const overlayRef = useRef(null);
  const listItemsRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        y: 0,
        opacity: 1,
        backdropFilter: "blur(10px)",
        duration: 0.3,
        ease: "power3.out",
        zIndex: 100,
      });

      gsap.fromTo(
        listItemsRef.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.2,
          stagger: 0.05,
          ease: "power3.in",
        }
      );
    } else {
      gsap.to(overlayRef.current, {
        y: -50,
        opacity: 0,
        backdropFilter: "blur(0px)",
        duration: 0.4,
        ease: "power3.in",
        zIndex: -10,
      });
      gsap.to(listItemsRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  const handleItemClick = (href) => {
    window.location.href = `/shop${href}`;
  };

  return (
    <div className="shop-header-overlay" ref={overlayRef}>
      <div className="shop-header-overlay-content">
        <ul>
          {shopItems.map((item, index) => (
            <li
              key={index}
              ref={(el) => (listItemsRef.current[index] = el)}
              onClick={() => handleItemClick(item.href)}
            >
              {item.title}
              <div className="overlay-underline">
                <Underline fill="black" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
