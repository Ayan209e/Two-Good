import React, { useState } from "react";
import "./ExpandableContent.css";
import CaretUp from "../../../../assets/CaretUp";
import { WhoWeAre } from "./Content/WhoWeAre";

export const ExpandableContent = () => {
  const index = "01";
  const title = "Who we are";
  const content = <WhoWeAre />;

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="expandable-content-wrapper">
      <div className="expandable-content-trigger" onClick={toggleExpand}>
        <div>{index}</div>
        <div>{title}</div>
        <div className={`caret-up ${isExpanded ? "rotate-180" : ""}`}>
          <CaretUp />
        </div>

        {/* This empty div is used to align the title to center using justify-between */}
        <div />
      </div>

      {isExpanded && <div className="expandable-content">{content}</div>}
    </div>
  );
};
