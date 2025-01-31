import { combineReducers } from "@reduxjs/toolkit";

// Define the initial state
const initialBrandState = {
  brandName: "Two Good Co",
};

const initialUserState = {
  isLoggedIn: false,
  email: "",
};

// Define action types
export const SET_STORE_DATA = "SET_STORE_DATA";
export const SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";
export const SET_USER_EMAIL = "SET_USER_EMAIL";

// Brand reducer
const brandReducer = (state = initialBrandState, action) => {
  switch (action.type) {
    case SET_STORE_DATA:
      return {
        ...state,
        brandName: action.payload,
      };
    default:
      return state;
  }
};

// Auth reducer
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  brandStore: brandReducer,
  userStore: userReducer,
});

export default rootReducer;
