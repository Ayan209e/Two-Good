import React from "react";
import { AnimatedLogo } from "../../assets";

export const FooterContent = () => {
  return (
    <div className="footer-content">
      <div className="connect">
        <div className="head">Connect with us</div>
        <div className="item">Facebook</div>
        <div className="item">Instagram</div>
        <div className="item">Twitter</div>
        <div className="item">LinkedIn</div>
        <div className="item">YouTube</div>
      </div>

      <div className="logo">
        <AnimatedLogo />
      </div>

      <div className="gritty">
        <div className="head">The nitty gritties</div>
        <div className="item">Good Things FAQs</div>
        <div className="item">Good Food FAQs</div>
        <div className="item">Good Places</div>
        <div className="item">Careers</div>
        <div className="item">Wholesale</div>
      </div>
    </div>
  );
};
