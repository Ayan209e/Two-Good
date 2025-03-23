import React from "react";
import { MainSectionVideo } from './MainSectionVideo';
import { ImpactParameters } from "./ImpactParameters";

export const MainSection = () => {
  return (
    <div className="impact-main-section">
      <ImpactParameters />
      <MainSectionVideo />
    </div>
  );
};
