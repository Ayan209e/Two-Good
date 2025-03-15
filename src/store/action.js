import {
  SET_IS_LOGGED_IN,
  SET_STORE_DATA,
  SET_USER_EMAIL,
  TOGGLE_NAVBAR_MENU_LIST,
  TOGGLE_OVERLAY,
  TOGGLE_SHOW_DONATION_MENU,
} from "./action.types";

export const setStoreData = (data) => ({
  type: SET_STORE_DATA,
  payload: data,
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: SET_IS_LOGGED_IN,
  payload: isLoggedIn,
});

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload: email,
});

export const toggleOverlay = (val) => ({
  type: TOGGLE_OVERLAY,
  payload: val,
});

export const toggleNavbarMenuList = (val) => ({
  type: TOGGLE_NAVBAR_MENU_LIST,
  payload: val,
});

export const toggleShowDonationMenu = (val) => ({
  type: TOGGLE_SHOW_DONATION_MENU,
  payload: val,
});
