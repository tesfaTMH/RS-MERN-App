import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// use root reducer to combine multiple reducer
const rootReducer = combineReducers({ user: userReducer });

// persistConfig defines the key, version, name of local storage
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

// create a persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
