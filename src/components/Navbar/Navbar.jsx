import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { TwoGood, Logo, CartIcon } from "../../assets";
import useNavLogoAnimation from "../../hooks/useNavLogoAnimation";
import Overlay from "../Overlay/Overlay";
import {
  toggleOverlay,
  toggleNavbarMenuList,
  toggleShowDonationMenu,
} from "../../store/action";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isOverlayOpen, isNavMenuListOpen, showDonationMenu } = useSelector(
    (state) => state.brandStore
  );

  const cart = useSelector((state) => state.cartStore);
  const cartHasItem = cart.products.length > 0;
  const [showSignInMenu, setShowSignInMenu] = useState(false);

  const setShowDonationMenu = (val) => {
    dispatch(toggleShowDonationMenu(val));
  };

  const toggleNavbarOverlay = () => {
    dispatch(toggleOverlay(!isOverlayOpen));
  };

  const toggleMenu = () => {
    dispatch(toggleNavbarMenuList(!isNavMenuListOpen));
    setShowDonationMenu(false);
    setShowSignInMenu(false);
    toggleNavbarOverlay();
  };

  const toggleDonateMenu = () => {
    setShowDonationMenu(true);
    toggleNavbarOverlay();
  };

  const { twoGoodRef, logoRef, showLogo, navRef, navLinksRef } =
    useNavLogoAnimation();

  const handleNavItemClick = (item) => {
    if (item === "Shop") {
      window.location.href = "/shop";
    } else if (item === "Catering") {
      window.location.href = "/catering";
    }
  };

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
          <div className="nav-link-items" ref={navLinksRef}>
            <button
              className="nav-item"
              onClick={() => handleNavItemClick("Shop")}
            >
              Shop
              <div className="hover-line" />
            </button>
            <button
              className="nav-item"
              onClick={() => handleNavItemClick("Catering")}
            >
              Catering
              <div className="hover-line" />
            </button>
            <button
              className={`menu nav-item ${isOverlayOpen ? "open" : ""}`}
              onClick={toggleDonateMenu}
            >
              Donate
              <div className="hover-line" />
            </button>
          </div>
          <div className={`nav-actions ${isOverlayOpen ? "open" : ""}`}>
            <button
              className={`menu ${isOverlayOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span className="upper"></span>
              <span className="lower"></span>
            </button>
            <button className="cart" onClick={() => window.location.href = "/cart"}>
              <CartIcon cartHasItem={cartHasItem} />
            </button>
          </div>
        </div>
      </nav>
      <Overlay
        isOverlayOpen={isOverlayOpen}
        showDonationMenu={showDonationMenu}
        showSignInMenu={showSignInMenu}
        setShowDonationMenu={setShowDonationMenu}
        setShowSignInMenu={setShowSignInMenu}
        toggleNavbarOverlay={toggleNavbarOverlay}
      />
    </div>
  );
};

export default Navbar;
