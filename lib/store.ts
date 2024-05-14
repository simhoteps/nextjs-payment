import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { reducer as packagesReducer } from "./features/package/packageSlice";
import { reducer as paymentReducer } from "./features/payment/paymentSlice";
import { reducer as userReducer } from "./features/user/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const packagesPersistConfig = {
  key: "packages",
  storage: storage,
  whitelist: ["totalPrice","selectPackage"],
};

const userPersistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["user","loginForm"],
};

const paymentPersistConfig = {
  key: "payment",
  storage: storage,
  whitelist: ["creditCardForm","paymentInfo"],
};

const rootReducer = combineReducers({
  packages: persistReducer(packagesPersistConfig, packagesReducer),
  payment: persistReducer(paymentPersistConfig, paymentReducer),
  user: persistReducer(userPersistConfig, userReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/* import { configureStore } from '@reduxjs/toolkit'
import { reducer as packagesReducer } from "./features/package/packageSlice";
import { reducer as userReducer } from "./features/user/userSlice"; 


export const makeStore = () => {
  return configureStore({
    reducer: {
     user: userReducer,
      packages: packagesReducer, 
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch'] */
