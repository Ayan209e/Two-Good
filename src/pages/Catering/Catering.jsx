import React from "react";
import { CateringHeaderSection } from "./CateringHeaderSection";
import "./Catering.css";
import { CateringQuote } from "./CateringQuote";
import { CateringContentSection } from "./CateringContentSection";
import { cateringContent, cateringQuotes } from "../../constants/catering";
import { CateringImages } from "./CateringImages";
import { TestimonialsSection } from "../Home/TestimonialsSection/TestimonialsSection";
import { BookCatering } from "./BookCatering";

export const Catering = () => {
  return (
    <div className="catering">
      <CateringHeaderSection />

      <CateringQuote quote={cateringQuotes[0]} showLink />

      <CateringContentSection {...cateringContent[0]} />

      <CateringImages />

      <CateringContentSection {...cateringContent[1]} />

      <CateringQuote quote={cateringQuotes[1]} />

      <CateringContentSection {...cateringContent[2]} />

      <CateringQuote quote={cateringQuotes[2]} />

      <CateringContentSection {...cateringContent[3]} />

      <CateringQuote quote={cateringQuotes[3]} />

      <CateringContentSection {...cateringContent[4]} />

      <TestimonialsSection />

      <BookCatering />
    </div>
  );
};
