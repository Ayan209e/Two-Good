import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_TOTAL_AMOUNT,
  ADD_CARD_TO_CART,
} from "../action.types";
import { initialCartState } from "../initialStates/cartInitialState";

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: action.payload,
      };
    case CART_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: action.payload,
      };
    case ADD_CARD_TO_CART:
      return {
        ...state,
        cards: action.payload,
      };
    default:
      return state;
  }
};
