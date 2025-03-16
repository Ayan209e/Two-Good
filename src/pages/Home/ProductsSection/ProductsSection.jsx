import React from "react";
import "./ProductsSection.css";
import { ProductSectionCards } from "./ProductSectionCards";
import { getShuffledProducts } from "../../../utils/product.utils";

export const ProductsSection = () => {
  const homeSectionProducts = getShuffledProducts();

  return (
    <div className="product-section">
      {homeSectionProducts.slice(0, 4).map((product, index) => (
        <ProductSectionCards
          key={index}
          imgSrc={product.image}
          title={product.name}
          price={product.price}
          href={product.href}
        />
      ))}
    </div>
  );
};
