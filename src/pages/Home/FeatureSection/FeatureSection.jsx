import React from "react";
import { SectionHeadingBar } from "../../../components/SectionHeadingBar/SectionHeadingBar";
import { FeatureProductCard } from "./FeatureProductCard";
import { getFeaturedProducts } from "../../../utils/home.utils";

export const FeatureSection = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="feature-section">
      <SectionHeadingBar leftTitle="Buy Good" rightTitle="Do Good" />

      <div className="feature-products">
        {featuredProducts.map((product, index) => (
          <FeatureProductCard
            key={index}
            image={product.image}
            href={product.href}
            heading={product.heading}
            primaryColor={product.primaryColor}
            secondaryColor={product.secondaryColor}
            leftImg={product.leftImg}
            rightImg={product.rightImg}
            leftTitle={product.leftTitle}
            rightTitle={product.rightTitle}
            leftHref={product.leftHref}
            rightHref={product.rightHref}
          />
        ))}
      </div>
    </div>
  );
};
