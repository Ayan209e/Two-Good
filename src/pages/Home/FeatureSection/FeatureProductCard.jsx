import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FeatureSection.css";
import { ExpandableProductCTA } from "../../../components/ExpandableProductCTA/ExpandableProductCTA";
import { useFeatureSectionAnimation } from "./useFeatureSectionAnimation";

gsap.registerPlugin(ScrollTrigger);

export const FeatureProductCard = ({
  image,
  href = "/",
  heading,
  primaryColor,
  secondaryColor,
  leftImg,
  rightImg,
  leftTitle,
  rightTitle,
  leftHref = "/",
  rightHref = "/",
  headerHref = "/",
}) => {
  const handleClick = () => {
    window.location.href = href;
  };

  const { containerRef, imgRef, ctaRef } = useFeatureSectionAnimation();

  return (
    <div
      className="feature-product-card"
      onClick={handleClick}
      ref={containerRef}
    >
      <img src={`/assets/${image}`} alt="product" ref={imgRef} />

      <div className="cta" ref={ctaRef}>
        <ExpandableProductCTA
          heading={heading}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          leftImg={leftImg}
          rightImg={rightImg}
          leftTitle={leftTitle}
          rightTitle={rightTitle}
          leftHref={leftHref}
          rightHref={rightHref}
          headerHref={headerHref}
        />
      </div>
    </div>
  );
};
