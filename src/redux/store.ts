import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
// import servicesReducer from "./slices/servicesSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    // services: servicesReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
