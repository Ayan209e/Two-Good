import React from "react";
import { MainSection } from "./MainSection/MainSection";
import { Report } from "./Report";
import { ImpactSections } from "./ImpactSections/ImpactSections";

export const Impact = () => {
  return (
    <div className="impact">
      <MainSection />
      <Report />
      <ImpactSections />
    </div>
  );
};
