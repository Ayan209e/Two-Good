import React from "react";
import "./ImpactSection.css";
import { LinkButton } from "../../../components/LinkButton/LinkButton";

export const ImpactSection = () => {
  return (
    <div className="impact-section">
      <div className="impact-section-content">
        <div className="impact-heading">OUR IMPACT.</div>
        <div className="impact-desc">The thing is, we don't save anyone.</div>
        <div className="impact-desc">
          What we do is provide a safe space for women to change the course of
          their own lives.
        </div>
        <div className="impact-desc">
          After many years of living in crisis, abuse and complex trauma,
          restoring self-worth is foundational for independence. We believe that
          through experiences that promote love and respect, we can spark and
          nurture a sense of self-worth for those on the path of healing.
        </div>

        <LinkButton href="/" title="Here's how we do it" />
      </div>

      <div className="impact-section-img">
        <div className="impact-image">
          <img src="/assets/ladies2.avif" alt="impact1" />
        </div>
        <div className="impact-image">
          <img src="/assets/lady1.avif" alt="impact1" />
        </div>
      </div>
    </div>
  );
};
