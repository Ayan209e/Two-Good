import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

export const ProductDetailsInfo = ({ product }) => {
  const { info } = product;

  const [showMoreIngredients, setShowMoreIngredients] = useState(false);
  const toggleShowMoreIngredients = () => {
    setShowMoreIngredients(!showMoreIngredients);
  };

  const infoRef = useRef(null);
  const ingredientRef = useRef(null);
  const materialRef = useRef(null);
  const containsRef = useRef(null);
  const nittyRef = useRef(null);

  useEffect(() => {
    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }
    if (ingredientRef.current) {
      gsap.fromTo(
        ingredientRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }
    if (materialRef.current) {
      gsap.fromTo(
        materialRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }
    if (containsRef.current) {
      gsap.fromTo(
        containsRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }
    if (nittyRef.current) {
      gsap.fromTo(
        nittyRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.4,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="product-details-info">
      <div className="product-info-container" ref={infoRef}>
        <div className="product-info-container-title">Info</div>
        <div className="product-info-container-content">
          {info.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>

      {product.ingredients && (
        <div className="product-info-container" ref={ingredientRef}>
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
        <div className="product-info-container" ref={materialRef}>
          <div className="product-info-container-title">Material</div>
          <div className="product-info-container-ingredients">
            <div>{product.material.primary}</div>
          </div>
        </div>
      )}

      {product.contains && (
        <div className="product-info-container" ref={containsRef}>
          <div className="product-info-container-title">Contains</div>
          <div className="product-info-container-content">
            {product.contains.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
      )}

      {product.nittyGritty && (
        <div className="product-info-container" ref={nittyRef}>
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
