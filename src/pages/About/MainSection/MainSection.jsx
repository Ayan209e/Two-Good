import React from "react";
import "./MainSection.css";
import { ExpandableList } from "./ExpandableList";
import { MainSectionVideo } from "./MainSectionVideo";
import { useMainSectionAnimations } from "./useMainSectionAnimations";

export const MainSection = () => {
  useMainSectionAnimations();

  return (
    <div className="main-section">
      <div className="main-section-top hide-for-small">Why we</div>
      <div className="main-section-top show-for-small">Why we Exist</div>

      <div className="main-section-mid">
        <div className="main-section-mid-left">
          <div>
            <h1 className="hide-for-small exist">Exist</h1>

            <div className="main-section-mid-left-content">
              <ExpandableList />

              <p>
                Two Good Co is a business for good. Through the creation of
                beautiful, high quality food and products, we support, empower
                and employ women with lived experience of homelessness, domestic
                violence and complex trauma. By supporting Two Good Co, you are
                creating opportunities for someone to change their life and
                rebuild their self-worth and independence, in order to break
                free from the cycle of homelessness and disadvantage.
              </p>
            </div>
          </div>
          <h2 className="hide-for-small so-far">So Far</h2>
        </div>

        <div className="main-section-mid-right">
          <img
            src="https://cdn.sanity.io/images/w8f1ak3c/production/c8fa865c47d95c569b1c13c3b6dc2f24e32447e4-5504x8256.jpg/LMO_7569.jpg?rect=0,0,4733,7673&fp-x=0.4280303030303031&fp-y=0.3057499999999996&w=1280&h=2075&fit=crop&crop=focalpoint&auto=format"
            alt="about-main"
          />
        </div>
      </div>

      <div className="main-section-bottom hide-for-small">Two Good.</div>
      <div className="main-section-bottom show-for-small">So Far Two Good.</div>

      <MainSectionVideo />
    </div>
  );
};
