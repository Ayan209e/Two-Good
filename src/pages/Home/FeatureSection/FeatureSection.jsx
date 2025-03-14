import React from "react";
import { SectionHeadingBar } from "../../../components/SectionHeadingBar/SectionHeadingBar";
import { FeatureProductCard } from "./FeatureProductCard";

export const FeatureSection = () => {
  return (
    <div className="feature-section">
      <SectionHeadingBar leftTitle="Buy Good" rightTitle="Do Good" />

      <div className="feature-products">
        <FeatureProductCard
          image="chocolate-box.png"
          href="/"
          heading="pantry"
          primaryColor="#DCC0B4"
          secondaryColor="#F3E9E5"
          leftImg="chocolate.avif"
          rightImg="book.avif"
          leftTitle="Beyond The Rocky Road Mega Block"
          rightTitle="Change the Course Cookbook"
          leftHref="/"
          rightHref="/"
          headerHref="/"
        />

        <FeatureProductCard
          image="apron-main.png"
          href="/"
          heading="pantry"
          primaryColor="#8AAAD6"
          secondaryColor="#EDF3FB"
          leftImg="apron1.avif"
          rightImg="apron2.avif"
          leftTitle="Alemais Cook in Colour Apron"
          rightTitle="Alemais Food Is Love Lunch Set"
          leftHref="/"
          rightHref="/"
          headerHref="/"
        />

        <FeatureProductCard
          image="soap-gallon.png"
          href="/"
          heading="pantry"
          primaryColor="#FFF"
          secondaryColor="#F3F3F3"
          leftImg="soap-bottle.avif"
          rightImg="soap-bottle.avif"
          leftTitle="Cleanse & Nourish Hand Wash"
          rightTitle="Cleanse & Nourish Body Wash"
          leftHref="/"
          rightHref="/"
          headerHref="/"
        />
      </div>
    </div>
  );
};
