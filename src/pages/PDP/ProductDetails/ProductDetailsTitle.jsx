import React from "react";
import { AddToCartCTA } from "../../../components/AddToCartCTA/AddToCartCTA";

export const ProductDetailsTitle = ({ price, highlight, name }) => {
  return (
    <div className="product-details-title">
      <h1>{name}</h1>
      <AddToCartCTA price={price} highlight={highlight} />
    </div>
  );
};
