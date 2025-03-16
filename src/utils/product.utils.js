import { products } from "../constants/products";

// Function to mix products randomly
export const getShuffledProducts = () => {
  const shuffledProducts = [...products];
  for (let i = shuffledProducts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledProducts[i], shuffledProducts[j]] = [
      shuffledProducts[j],
      shuffledProducts[i],
    ];
  }
  return shuffledProducts;
};

// Function to return products based on category
export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

// Function to return products based on slug.href
export const getProductBySlug = (slug) => {
  return products.filter((product) => product.href === slug)[0];
};
