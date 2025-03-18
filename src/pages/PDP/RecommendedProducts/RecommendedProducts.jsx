import React from "react";
import { getRecommendedProducts } from "../../../utils/pdp.utils";
import "./RecommendedProducts.css";
import { ProductCard } from "../../../components/ProductCard/ProductCard";

export const RecommendedProducts = () => {
  const products = getRecommendedProducts(window.location.pathname);

  return (
    <div className="recommended-products">
      <div className="recommended-products-title">YOU MIGHT ALSO LIKE</div>
      <div className="recommended-product-card">
        {products.map((product) => (
          <ProductCard product={product} key={product.href} />
        ))}
      </div>
    </div>
  );
};
