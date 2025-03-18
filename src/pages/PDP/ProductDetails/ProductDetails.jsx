import React, { useEffect, useRef } from "react";
import "./ProductDetails.css";
import { ProductDetailsFooter } from "./ProductDetailsFooter";
import { ProductDetailsTitle } from "./ProductDetailsTitle";
import { ProductDetailsInfo } from "./ProductDetailsInfo";
import { getPdpBackgroundColor } from "../../../utils/pdp.utils";
import gsap from "gsap";

export const ProductDetails = ({ product }) => {
  const { name, price, image, highlight } = product;
  const backgroundColor = getPdpBackgroundColor(product.category);

  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div
      className="product-details-wrapper"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="product-details">
        <ProductDetailsTitle name={name} price={price} highlight={highlight} />

        <div className="image" ref={imgRef}>
          <img src={image} alt={name} />
        </div>

        <ProductDetailsInfo product={product} />
      </div>

      <ProductDetailsFooter price={price} highlight={highlight} />
    </div>
  );
};
