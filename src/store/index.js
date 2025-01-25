import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';

// Configuration for redux-persist
const persistConfig = {
    key: 'root',
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const store = configureStore({
    reducer: persistedReducer,
  });
  
  export const persistor = persistStore(store);
  export default store;