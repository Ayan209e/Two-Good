import React from "react";
import "./ProductDetails.css";
import { ProductDetailsFooter } from "./ProductDetailsFooter";
import { ProductDetailsTitle } from "./ProductDetailsTitle";
import { ProductDetailsInfo } from "./ProductDetailsInfo";
import { getPdpBackgroundColor } from "../../../constants/pdp";

export const ProductDetails = ({ product }) => {
  const { name, price, image, highlight } = product;
  const backgroundColor = getPdpBackgroundColor(product.category);

  return (
    <div
      className="product-details-wrapper"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="product-details">
        <ProductDetailsTitle name={name} price={price} highlight={highlight} />

        <div className="image">
          <img src={image} alt={name} />
        </div>

        <ProductDetailsInfo product={product} />
      </div>

      <ProductDetailsFooter price={price} highlight={highlight} />
    </div>
  );
};
