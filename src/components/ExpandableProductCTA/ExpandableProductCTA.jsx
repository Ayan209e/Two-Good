import React, { useState } from "react";
import { CaretRight } from "../../assets";
import "./ExpandableProductCTA.css";
import { Popover } from "./Popover";

export const ExpandableProductCTA = ({
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
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.location.href = headerHref;
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="expandable-product-cta-container"
      onClick={handleClick}
    >
      <div
        className="expandable-product-cta-bar"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="dot" />

        <div className="text">SHOP</div>
        <div className="text heading">{heading}</div>

        <CaretRight />
      </div>

      <Popover
        isHovered={isHovered}
        secondaryColor={secondaryColor}
        leftImg={leftImg}
        leftTitle={leftTitle}
        leftHref={leftHref}
        rightImg={rightImg}
        rightTitle={rightTitle}
        rightHref={rightHref}
      />
    </div>
  );
};
