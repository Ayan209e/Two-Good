import React, { useEffect, useState } from "react";
import "./ExpandableContent.css";
import CaretUp from "../../../../assets/CaretUp";
import { aboutSections } from "../../../../constants/about";
import gsap from "gsap";

export const ExpandableContent = () => {
  return aboutSections.map(({ index, title, content }) => (
    <ExpandableContentItem index={index} title={title} content={content} />
  ));
};

export const ExpandableContentItem = ({ index, title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    gsap.fromTo(
      ".expandable-content-wrapper",
      { opacity: 0, x: 500 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.4,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".expandable-content-wrapper",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="expandable-content-wrapper">
      <div className="expandable-content-trigger" onClick={toggleExpand}>
        <div>{index}</div>
        <div>{title}</div>
        <div className={`caret-up ${isExpanded ? "rotate-180" : ""}`}>
          <CaretUp />
        </div>

        {/* This empty div is used to align the title to center using justify-between */}
        <div className="empty-div" />
      </div>

      {isExpanded && <div className="expandable-content">{content}</div>}
    </div>
  );
};
