export const formatPrice = (price) => {
  const roundedPrice = Math.round(price);
  return roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const generateOrderId = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

export const generateDeliveryDate = () => {
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 3);

  const options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  return deliveryDate.toLocaleDateString("en-US", options);
};
