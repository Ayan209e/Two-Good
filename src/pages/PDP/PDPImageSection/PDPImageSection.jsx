import React from "react";
import "./PDPImageSection.css";
import { PDPImage } from "./PDPImage";
import { PDPQuote } from "./PDPQuote";

export const PDPImageSection = ({ product }) => {
  const images = product.images || [];

  const firstTwoImages = images.length >= 2 && images.slice(0, 2);
  const thirdImage = images.length >= 3 && images[2];
  const remainingImages = images.length > 3 && images.slice(3);

  return (
    <div
      className="pdp-image-section"
      style={{ backgroundColor: images.length > 0 ? "#f7f7f7" : "white" }}
    >
      {firstTwoImages.length > 0 && (
        <div className="first-two-images">
          {firstTwoImages.map((image) => (
            <PDPImage image={image} key={image} />
          ))}
        </div>
      )}

      {thirdImage && (
        <div className="third-image">
          <PDPImage image={thirdImage} key="third" />
        </div>
      )}

      <PDPQuote />

      {remainingImages.length > 0 && (
        <div className="remaining-images">
          {remainingImages.map((image, index) => (
            <PDPImage
              key={image} 
              image={image}
              className={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      )}
    </div>
  );
};
