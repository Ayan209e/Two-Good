import { SET_IS_LOGGED_IN, SET_USER_EMAIL } from "../action.types";
import { initialUserState } from "../initialStates/initialUserState";

export const userReducer = (state = initialUserState, action) => {
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
