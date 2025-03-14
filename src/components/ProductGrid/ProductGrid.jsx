import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export const ProductGrid = ({
  products,
  quotes = [],
  startingQuoteIndex = 0,
}) => {
  let quoteIndex = startingQuoteIndex;

  return (
    <div className="product-container">
      {products.map((product, index) => {
        if ((index + 1) % 5 === 0) {
          // Insert the quote one position earlier (before every 5th element)
          return (
            <React.Fragment key={index}>
              <ProductCard quote={quotes[quoteIndex++]} />
              <ProductCard product={product} />
            </React.Fragment>
          );
        } else {
          return (
            <div key={index} className="product-row">
              <ProductCard product={product} />
            </div>
          );
        }
      })}
    </div>
  );
};
