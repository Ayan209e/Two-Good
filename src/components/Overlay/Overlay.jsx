import React, { useState } from "react";
import "./Overlay.css";
import OverlayQuickLinks from "./OverlayQuickLinks/OverlayQuickLinks";
import OverlayMenu from "./OverlayMenu/OverlayMenu";
import MenuJourney from "./MenuJourney/MenuJourney";

const Overlay = ({ isOverlayOpen }) => {
  const [showDonationMenu, setShowDonationMenu] = useState(false);
  const [showSignInMenu, setShowSignInMenu] = useState(false);
  const handleDonationFlow = () => {
    setShowDonationMenu(true);
  };
  const handleSignInFlow = () => {
    setShowSignInMenu(true);
  };

  const handleClick = (item) => {
    console.log(item);
    const lowerCaseItem = item.toLowerCase();
    const navigationMap = {
      shop: () => (window.location.href = "shop"),
      catering: () => (window.location.href = "catering"),
      impact: () => (window.location.href = "impact"),
      stories: () => (window.location.href = "stories"),
      about: () => (window.location.href = "about"),
      contact: () => (window.location.href = "contact"),
      donate: handleDonationFlow,
      "sign in": handleSignInFlow,
      default: () => (window.location.href = "/"),
    };

    (navigationMap[lowerCaseItem] || navigationMap.default)();
  };

  return (
    <div className={`overlay ${isOverlayOpen ? "open" : ""}`}>
      <div className="left-section">
        <OverlayQuickLinks />
      </div>
      <div className="right-section">
        {showDonationMenu || showSignInMenu ? (
          <MenuJourney
            showDonationMenu={showDonationMenu}
            showSignInMenu={showSignInMenu}
          />
        ) : (
          <OverlayMenu
            isOverlayOpen={isOverlayOpen}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default Overlay;
