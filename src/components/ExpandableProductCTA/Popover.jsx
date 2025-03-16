import React from "react";
import "./ExpandableProductCTA.css";

export const Popover = ({
  isHovered,
  secondaryColor,
  leftImg,
  rightImg,
  leftTitle,
  rightTitle,
  leftHref,
  rightHref,
}) => {
  const handleRightItemClick = () => {
    window.location.href = `/product${rightHref}`;
  };
  
  const handleLeftItemClick = () => {
    window.location.href = `/product${leftHref}`;
  };

  return (
    <div
      className={`popover ${isHovered ? "active" : ""}`}
      style={{ backgroundColor: secondaryColor }}
    >
      <div className="popover-item" onClick={handleLeftItemClick}>
        <img src={leftImg} alt={leftTitle} />
        <div>{leftTitle}</div>
      </div>
      <div className="popover-item" onClick={handleRightItemClick}>
        <img src={rightImg} alt={leftTitle} />
        <div>{rightTitle}</div>
      </div>
    </div>
  );
};
