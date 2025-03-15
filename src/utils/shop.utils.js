import { shopHeaderOverlayMenuItems, shopHeaderText } from "../constants/shop";
import { getProductsByCategory, getShuffledProducts } from "./product.utils";

// Function to return a product based on path - /shop or /shop/:category
export const getShopProductByPath = (path) => {
  if (path === "/shop") return getShuffledProducts();
  const category = path.split("/")?.[2];

  return getProductsByCategory(category);
};

// Function to return the shop header text based on path - /shop or /shop/:category
export const getShopHeaderTextByPath = (path) => {
  if (path === "/shop") return shopHeaderText.shop;

  const category = path.split("/")?.[2].replace(/-/g, "");
  return shopHeaderText[category];
};

// Function to return the filtered menu items based on the current path
export const getFilteredMenuItems = (pathname) => {
  const path = pathname.split("/")?.[2] || "";
  const filterPath = path ? `/${path}` : "";

  return shopHeaderOverlayMenuItems.filter((item) => item.href !== filterPath);
};
