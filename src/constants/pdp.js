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
