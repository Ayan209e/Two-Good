import React from "react";
import { ExpandableContent } from "./ExpandableContent";

export const ImpactSections = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 24px",
        marginBottom: "80px",
        transition: "all 0.3s ease",
        borderTop: " 1px solid #00000050",
      }}
    >
      <ExpandableContent />
    </div>
  );
};
