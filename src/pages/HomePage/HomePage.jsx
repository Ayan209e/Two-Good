import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import { FeatureSection } from "./FeatureSection/FeatureSection";
import { QuoteSection } from "./QuoteSection/QuoteSection";
import { ProductsSection } from "./ProductsSection/ProductsSection";

export const HomePage = () => {
  return (
    <div className="App">
      <HeroSection />
      <FeatureSection />
      <QuoteSection />
      <ProductsSection />
    </div>
  );
};
