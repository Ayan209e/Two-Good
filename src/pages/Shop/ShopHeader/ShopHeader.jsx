import React, { useState } from "react";
import "./ShopHeader.css";
import { CaretUp, Underline } from "../../../assets";
import { ShopHeaderOverlay } from "./ShopHeaderOverlay";
import { getShopHeaderTextByPath } from "../../../utils/shop.utils";

export const ShopHeader = () => {
  const pathName = window.location.pathname;
  let headerTitle = pathName.replace("/shop/", "").toUpperCase();
  if (headerTitle === "/SHOP" || headerTitle === "/SHOP/")
    headerTitle = "THINGS";
  const headerText = getShopHeaderTextByPath(pathName);

  const [headerOverlay, setHeaderOverlay] = useState(false);

  const toggleOverlay = () => {
    setHeaderOverlay(!headerOverlay);
    document.body.classList.toggle("shop-header-overlay-open", !headerOverlay);
  };

  return (
    <div className="shop-header">
      <div className="shop-header-title">
        <div>Good</div>
        <div className="shop-header-overlay-trigger">
          <div>{headerTitle}</div>
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

      <div className="shop-header-text">{headerText}</div>
    </div>
  );
};
