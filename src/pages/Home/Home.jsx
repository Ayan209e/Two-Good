import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import { FeatureSection } from "./FeatureSection/FeatureSection";
import { QuoteSection } from "./QuoteSection/QuoteSection";
import { ProductsSection } from "./ProductsSection/ProductsSection";
import { TestimonialsSection } from "./TestimonialsSection/TestimonialsSection";
import { ImpactSection } from "./ImpactSection/ImpactSection";

export const Home = () => {
  return (
    <div className="App">
      <HeroSection />
      <FeatureSection />
      <QuoteSection />
      <ProductsSection />
      <TestimonialsSection />
      <ImpactSection />
    </div>
  );
};
