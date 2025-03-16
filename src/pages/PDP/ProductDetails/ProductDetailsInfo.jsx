import React, { useState } from "react";

export const ProductDetailsInfo = ({ product }) => {
  const { info } = product;

  const [showMoreIngredients, setShowMoreIngredients] = useState(false);
  const toggleShowMoreIngredients = () => {
    setShowMoreIngredients(!showMoreIngredients);
  };

  return (
    <div className="product-details-info">
      <div className="product-info-container">
        <div className="product-info-container-title">Info</div>
        <div className="product-info-container-content">
          {info.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>

      {product.ingredients && (
        <div className="product-info-container">
          <div className="product-info-container-title">Ingredients</div>
          <div className="product-info-container-ingredients">
            <div>{product.ingredients.primary}</div>
            {product.ingredients.secondary && (
              <div>
                <div
                  className={`product-info-container-ingredients-secondary ${
                    showMoreIngredients ? "show" : ""
                  }`}
                >
                  {product.ingredients.secondary}
                  <div
                    className={`product-info-button ${
                      showMoreIngredients ? "show" : ""
                    }`}
                    onClick={toggleShowMoreIngredients}
                  >
                    Show less
                  </div>
                </div>
                <div
                  className={`product-info-button ${
                    showMoreIngredients ? "" : "show"
                  }`}
                  onClick={toggleShowMoreIngredients}
                >
                  See all
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {product.material && (
        <div className="product-info-container">
          <div className="product-info-container-title">Material</div>
          <div className="product-info-container-ingredients">
            <div>{product.material.primary}</div>
          </div>
        </div>
      )}

      {product.nittyGritty && (
        <div className="product-info-container">
          <div className="product-info-container-title">The nitty gritty</div>
          <div className="product-info-container-nitty">
            {product.nittyGritty.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
