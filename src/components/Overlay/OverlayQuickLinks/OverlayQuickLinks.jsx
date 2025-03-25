import React from "react";
import "./OverlayQuickLinks.css";

const OverlayQuickLinks = ({ toggleNavbarOverlay }) => {
  const handleRedirection = (href) => {
    toggleNavbarOverlay();
    // window.location.href = href;
  };

  return (
    <div className="quick-links">
      <div className="link-col">
        <div className="link-header">CONNECT WITH US</div>
        <a href="https://www.facebook.com/TwoGoodCo">Facebook</a>
        <a href="https://www.instagram.com/twogoodco/">Instagram</a>
        <a href="https://x.com/twogoodco">Twitter</a>
        <a href="https://au.linkedin.com/company/twogoodco">Linkedin</a>
        <a href="https://www.youtube.com/channel/UCCfo4CF8hmDUQdcO5_MWONw">
          Youtube
        </a>
      </div>
      <div className="link-col">
        <div className="link-header">Nitty Gritties</div>
        <a className="item" href="/about" onClick={handleRedirection}>
          About
        </a>
        <a className="item" href="/impact" onClick={handleRedirection}>
          Impact
        </a>
        <a className="item" href="/catering" onClick={handleRedirection}>
          Catering
        </a>
      </div>
      <div className="link-col">
        <div className="link-header">Get Started</div>
        <a className="item" href="/career" onClick={handleRedirection}>
          Careers
        </a>
        <a className="item" href="/contact" onClick={handleRedirection}>
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default OverlayQuickLinks;
