import { combineReducers } from '@reduxjs/toolkit';

// Define the initial state
const initialBrandState = {
  brandName: 'Two Good Co',
};

// Define action types
const SET_STORE_DATA = 'SET_STORE_DATA';

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

const rootReducer = combineReducers({
  brandStore: brandReducer,
});

export default rootReducer;