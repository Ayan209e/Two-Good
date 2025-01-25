import React from "react";
import "./OverlayQuickLinks.css";

const OverlayQuickLinks = () => {
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
        <a href="/good-things-faqs">Good Things FAQs</a>
        <a href="/good-food-faqs">Good Food FAQs</a>
        <a href="/good-places">Good Places</a>
      </div>
      <div className="link-col">
        <div className="link-header">Get Started</div>
        <a href="https://twogood.com.au/pathways">Pathways</a>
        <a href="https://twogood.com.au/careers">Careers</a>
      </div>
    </div>
  );
};

export default OverlayQuickLinks;
