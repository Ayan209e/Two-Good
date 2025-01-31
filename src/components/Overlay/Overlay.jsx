import React from "react";
import "./Overlay.css";
import OverlayQuickLinks from "./OverlayQuickLinks/OverlayQuickLinks";
import OverlayMenu from "./OverlayMenu/OverlayMenu";
import MenuJourney from "./MenuJourney/MenuJourney";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setUserEmail } from "../../store/action";

const Overlay = ({
  isOverlayOpen,
  showDonationMenu,
  showSignInMenu,
  setShowDonationMenu,
  setShowSignInMenu,
}) => {
  const dispatch = useDispatch();
  const handleDonationFlow = () => {
    setShowDonationMenu(true);
  };
  const handleSignInFlow = () => {
    setShowSignInMenu(true);
  };

  const handleLogOut = () => {
    dispatch(setIsLoggedIn(false));
    dispatch(setUserEmail(""));
    window.location.href = "/";
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
      "log out": handleLogOut,
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
            setShowDonationMenu={setShowDonationMenu}
            setShowSignInMenu={setShowSignInMenu}
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
