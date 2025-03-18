import { products } from "../constants/products";
import { getProductBySlug, getProductsByCategory } from "./product.utils";

export const getPdpBackgroundColor = (category) => {
  switch (category) {
    case "bath":
      return "#e6dfd7";
    case "pantry":
      return "#fdf4f0";
    case "pre-sale":
      return "#C1C1C1";
    case "donations":
      return "#DFD1D1";
    case "home":
      return "#f7f2ec";
    case "gift-packs":
      return "#d6e0e0";
    default:
      return "#F7F7F7";
  }
};

export const getRandomProductsByCategory = (category, slug) => {
  const categoryProducts = getProductsByCategory(category);
  return categoryProducts
    .filter((product) => product.href !== `/${slug}`)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
};

export const getRecommendedProducts = (path) => {
  const slug = path.split("/")?.[2];
  const product = getProductBySlug(`/${slug}`);
  const category = product.category;

  if (category === "pre-sale") {
    const preSaleProducts = getRandomProductsByCategory("pre-sale", slug);
    const filteredProducts = products.filter(
      (product) =>
        product.href === "/change-the-course-cookbook" ||
        product.href === "/the-inside-scoop-good-feels-cracker-box"
    );
    return [...preSaleProducts, ...filteredProducts];
  }

  return getRandomProductsByCategory(category, slug);
};
