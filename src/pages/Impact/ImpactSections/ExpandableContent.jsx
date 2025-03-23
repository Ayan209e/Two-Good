import React from "react";
import { ExpandableContentItem } from "../../About/AboutSections/ExpandableContent/ExpandableContent";
import { impactSections } from "../../../constants/impact";

export const ExpandableContent = () => {
  return impactSections.map(({ index, title, content }) => (
    <ExpandableContentItem index={index} title={title} content={content} />
  ));
};
