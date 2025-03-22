import React from "react";
import { CateringHeaderSection } from "./CateringHeaderSection";
import "./Catering.css";
import { CateringQuote } from "./CateringQuote";
import { CateringContentSection } from "./CateringContentSection";
import { cateringContent, cateringQuotes } from "../../constants/catering";

export const Catering = () => {
  return (
    <div className="catering">
      <CateringHeaderSection />

      <CateringQuote quote={cateringQuotes[0]} showLink />

      <CateringContentSection {...cateringContent[0]} />
    </div>
  );
};
