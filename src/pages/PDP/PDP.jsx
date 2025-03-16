import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../constants/products";
import { ProductDetails } from "./ProductDetails/ProductDetails";
import "./PDP.css";
import { PDPImpactSection } from "./PDPImpactSection/PDPImpactSection";

export const PDP = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.href === `/${slug}`);

  return (
    <div className="pdp">
      <ProductDetails product={product} />
      <PDPImpactSection category={product.category} name={product.name} />
    </div>
  );
};
