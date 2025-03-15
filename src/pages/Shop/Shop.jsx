import React from "react";
import "./Shop.css";
import { ProductGrid } from "../../components/ProductGrid/ProductGrid";
import { quotes } from "../../constants/quotes";
import { ShopHeader } from "./ShopHeader/ShopHeader";
import { getShopProductByPath } from "../../utils/shop.utils";

export const Shop = () => {
  const pathName = window.location.pathname;
  const shopProducts = getShopProductByPath(pathName);

  return (
    <div className="shop">
      <ShopHeader />
      <ProductGrid products={shopProducts} quotes={quotes} />
    </div>
  );
};
