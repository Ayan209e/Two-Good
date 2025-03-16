import React from "react";
import "./ShopHeader.css";
import { CaretUp, Underline } from "../../../assets";
import { ShopHeaderOverlay } from "./ShopHeaderOverlay";
import { useShopHeader } from "./useShopHeader";

export const ShopHeader = () => {
  const {
    headerText,
    headerTitle,
    headerOverlay,
    toggleOverlay,
    goodRef,
    titleRef,
    headerTextRef,
  } = useShopHeader();

  return (
    <div className="shop-header">
      <div className="shop-header-title">
        <div ref={goodRef}>Good</div>
        <div className="shop-header-overlay-trigger" ref={titleRef}>
          <div onClick={() => toggleOverlay()}>{headerTitle}</div>

          <div
            className={`caret-icon ${headerOverlay ? "flipped" : ""}`}
            onClick={() => toggleOverlay()}
          >
            <CaretUp stroke="black" />
          </div>

          {!headerOverlay && (
            <div className="shop-header-underline">
              <Underline fill="black" />
            </div>
          )}

          <ShopHeaderOverlay isOpen={headerOverlay} />
        </div>
      </div>

      <div className="shop-header-text" ref={headerTextRef}>
        {headerText}
      </div>
    </div>
  );
};
