import { combineReducers } from "@reduxjs/toolkit";
import { brandReducer } from "./reducers/brandReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  brandStore: brandReducer,
  userStore: userReducer,
});

export default rootReducer;
