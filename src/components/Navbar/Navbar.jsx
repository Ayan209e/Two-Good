import React, { useState } from "react";
import "./Navbar.css";
import { TwoGood, Logo, CartIcon } from "../../assets";
import useNavLogoAnimation from "../../hooks/useNavLogoAnimation";
import Overlay from "../Overlay/Overlay";

const Navbar = () => {
  const cartHasItem = false;
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateMenuOpen, setIsDonateMenuOpen] = useState(false);
  const [showDonationMenu, setShowDonationMenu] = useState(false);
  const [showSignInMenu, setShowSignInMenu] = useState(false);
  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDonateMenuOpen(false);
    setShowDonationMenu(false);
    setShowSignInMenu(false);
    toggleOverlay();
  };

  const toggleDonateMenu = () => {
    setIsDonateMenuOpen(!isMenuOpen);
    setShowDonationMenu(true);
    toggleOverlay();
  };

  const { twoGoodRef, logoRef, showLogo, navRef, navLinksRef } =
    useNavLogoAnimation();

  return (
    <div>
      <nav ref={navRef} className={isOverlayOpen ? "overlay-open" : ""}>
        <div>
          <a href="/">
            <div
              ref={twoGoodRef}
              style={{ display: showLogo ? "none" : "block" }}
            >
              <TwoGood />
            </div>
            <div ref={logoRef} style={{ display: showLogo ? "block" : "none" }}>
              <Logo />
            </div>
          </a>
        </div>
        <div className="nav-links">
          <div className="nav-links" ref={navLinksRef}>
            <div className="nav-item">
              Shop
              <div className="hover-line" />
            </div>
            <div className="nav-item">
              Catering
              <div className="hover-line" />
            </div>
            <div
              className={`menu nav-item ${isOverlayOpen ? "open" : ""}`}
              onClick={toggleDonateMenu}
            >
              Donate
              <div className="hover-line" />
            </div>
          </div>
          <div className={`nav-actions ${isOverlayOpen ? "open" : ""}`}>
            <div
              className={`menu ${isOverlayOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span className="upper"></span>
              <span className="lower"></span>
            </div>
            <div className="cart">
              <CartIcon cartHasItem={cartHasItem} />
            </div>
          </div>
        </div>
      </nav>
      <Overlay
        isOverlayOpen={isOverlayOpen}
        showDonationMenu={showDonationMenu}
        showSignInMenu={showSignInMenu}
        setShowDonationMenu={setShowDonationMenu}
        setShowSignInMenu={setShowSignInMenu}
      />
    </div>
  );
};

export default Navbar;
