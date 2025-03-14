import React from "react";
import "./Footer.css";
import { FooterHeader } from "./FooterHeader/FooterHeader";
import { FooterContent } from "./FooterContent";
import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
  return (
    <div className="footer">
      <FooterHeader />
      <FooterContent />
      <FooterBottom />
    </div>
  );
};
