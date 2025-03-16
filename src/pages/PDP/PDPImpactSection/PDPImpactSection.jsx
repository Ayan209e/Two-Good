import React, { useEffect, useRef } from "react";
import { LinkButton } from "../../../components/LinkButton/LinkButton";
import "./PDPImpactSection.css";
import { PDPImpactSectionContentItem } from "./PDPImpactSectionContentItem";
import gsap from "gsap";

export const PDPImpactSection = ({ category, name }) => {
  const isDonationProduct = category === "donations";
  const isPacksProduct = category === "gift-packs";

  const titleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 100%", // Start animation when 100% of card is in view
            toggleActions: "play none none none", // Only play once
          },
        }
      );
    }

    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%", // Start animation when 80% of card is in view
            toggleActions: "play none none none", // Only play once
          },
        }
      );
    }
  }, []);

  return (
    <div className="pdp-impact-section-wrapper">
      <div className="pdp-impact-section">
        <div className="pdp-impact-section-title" ref={titleRef}>
          With every purchase, you have the potential to change the course of
          someone's life.
        </div>

        {isPacksProduct && (
          <div className="pdp-impact-section-content">
            <PDPImpactSectionContentItem
              title="BUY 1, GIVE 1"
              desc="One for you, one for her. When you purchase a Buy 1, Give 1 care
                pack, you’re also donating an identical gift to a women’s
                refuge. Rest easy, knowing you're sharing the love with someone
                who needs it most."
            />

            <PDPImpactSectionContentItem
              title="WORK WORK."
              desc={`By purchasing our ${name}, you've created meaningful employment
                hours for our Work Work employment pathway program for women
                experiencing, or at risk of, homelessness.`}
            />

            <PDPImpactSectionContentItem
              title="DOING GOOD."
              desc="Every dollar you spend is a vote for a world you want to live
                in. With every single purchase made across Two Good Co, 50% of
                profits is reinvested into the Two Good Foundation, to support
                our donations and employment programs for women at risk of
                homelessness."
            />
          </div>
        )}

        {isDonationProduct && (
          <div className="pdp-impact-section-content">
            <PDPImpactSectionContentItem
              title="WORK WORK."
              desc="By purchasing a donated meal, you've created meaningful
                employment hours for our Work Work employment pathway program
                for women experiencing, or at risk of, homelessness."
            />

            <PDPImpactSectionContentItem
              title="STRAIGHT UP DONATION."
              desc="These meals are packed full of goodies to nourish and support
                vulnerable women as they rebuild their lives after crisis."
            />
          </div>
        )}

        {!isDonationProduct && !isPacksProduct && (
          <div className="pdp-impact-section-content">
            <PDPImpactSectionContentItem
              title="DOING GOOD."
              desc="Every dollar you spend is a vote for a world you want to live
                in. With every single purchase made across Two Good Co, 50% of
                profits is reinvested into the Two Good Foundation, to support
                our donations and employment programs for women at risk of
                homelessness."
            />
          </div>
        )}

        <div className="pdp-impact-section-cta" ref={ctaRef}>
          <LinkButton
            title="All the impact we've made so far."
            href="/impact"
          />
        </div>
      </div>
    </div>
  );
};
