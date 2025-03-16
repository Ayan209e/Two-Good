import { getProductBySlug } from "./product.utils";

const createFeaturedProduct = (
  mainProductSlug,
  leftProductSlug,
  rightProductSlug,
  primaryColor,
  secondaryColor
) => {
  const mainProduct = getProductBySlug(mainProductSlug);
  const leftProduct = getProductBySlug(leftProductSlug);
  const rightProduct = getProductBySlug(rightProductSlug);

  return {
    image: mainProduct.image,
    href: `/product${mainProduct.href}`,
    heading: mainProduct.category,
    primaryColor,
    secondaryColor,
    leftImg: leftProduct.image,
    rightImg: rightProduct.image,
    leftTitle: leftProduct.name,
    rightTitle: rightProduct.name,
    leftHref: leftProduct.href,
    rightHref: rightProduct.href,
  };
};

export const getFeaturedProducts = () => {
  const featuredProductOne = createFeaturedProduct(
    "/the-inside-scoop-good-feels-cracker-box",
    "/strawberry-gum-leaf-coriander-basil-mint-candle",
    "/change-the-course-cookbook",
    "#DCC0B4",
    "#F3E9E5"
  );

  const featuredProductTwo = createFeaturedProduct(
    "/alemais-cook-in-colour-apron",
    "/alemais-cook-in-colour-apron",
    "/alemais-food-is-love-lunch-set",
    "#8AAAD6",
    "#EDF3FB"
  );

  const featuredProductThree = createFeaturedProduct(
    "/nourish-soothe-body-lotion",
    "/cleanse-hydrate-shampoo",
    "/repair-shine-conditioner-5l",
    "#adadad",
    "#F3F3F3"
  );

  return [featuredProductOne, featuredProductTwo, featuredProductThree];
};
