import React from "react";
import "./Overlay.css";
import OverlayQuickLinks from "./OverlayQuickLinks/OverlayQuickLinks";
import OverlayMenu from "./OverlayMenu/OverlayMenu";

const Overlay = ({ isOverlayOpen }) => {
  return (
    <div className={`overlay ${isOverlayOpen ? "open" : ""}`}>
      <div className="left-section">
        <OverlayQuickLinks />
      </div>
      <div className="right-section">
        <OverlayMenu isOverlayOpen={isOverlayOpen} />
      </div>
    </div>
  );
};

export default Overlay;
