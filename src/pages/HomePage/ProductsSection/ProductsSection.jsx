import React from "react";
import "./ProductsSection.css";
import { ProductSectionCards } from "./ProductSectionCards";

export const ProductsSection = () => {
  return (
    <div className="product-section">
      <ProductSectionCards
        imgSrc="teddy.avif"
        title="Two Hugs Bar 'n' Bear Set"
        price="$50"
      />
      <ProductSectionCards
        imgSrc="home-apron.avif"
        title="Alemais Cook in Colour Apron"
        price="$190"
      />
      <ProductSectionCards
        imgSrc="book.avif"
        title="Change the Course Cookbook"
        price="$45"
      />
      <ProductSectionCards
        imgSrc="candle.avif"
        title="Strawberry Gum Leaf, Coriander, Basil + Mint Candle"
        price="$59"
      />
    </div>
  );
};
