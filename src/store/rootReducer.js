import { combineReducers } from "@reduxjs/toolkit";
import { brandReducer } from "./reducers/brandReducer";
import { userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
  brandStore: brandReducer,
  userStore: userReducer,
  cartStore: cartReducer,
});

export default rootReducer;
