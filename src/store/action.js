import { SET_IS_LOGGED_IN, SET_STORE_DATA, SET_USER_EMAIL } from "./rootReducer";

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

