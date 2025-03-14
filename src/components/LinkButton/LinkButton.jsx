import React from "react";
import "./LinkButton.css";

export const LinkButton = ({ title = "", href = "/" }) => {
  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <div className="link-button">
      <button onClick={handleClick}>
        {title}
        <div className="link-button-hover-line" />
      </button>
    </div>
  );
};
