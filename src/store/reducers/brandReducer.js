import {
  SET_STORE_DATA,
  TOGGLE_NAVBAR_MENU_LIST,
  TOGGLE_OVERLAY,
  TOGGLE_SHOW_DONATION_MENU,
} from "../action.types";
import { initialBrandState } from "../initialStates/initialBrandState";

export const brandReducer = (state = initialBrandState, action) => {
  switch (action.type) {
    case SET_STORE_DATA:
      return {
        ...state,
        brandName: action.payload,
      };
    case TOGGLE_OVERLAY:
      return {
        ...state,
        isOverlayOpen: action.payload,
      };
    case TOGGLE_NAVBAR_MENU_LIST:
      return {
        ...state,
        isNavMenuListOpen: action.payload,
      };
    case TOGGLE_SHOW_DONATION_MENU:
      return {
        ...state,
        showDonationMenu: action.payload,
      };
    default:
      return state;
  }
};
