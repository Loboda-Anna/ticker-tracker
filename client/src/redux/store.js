import { configureStore } from "@reduxjs/toolkit";
import { tickersReducer } from "./slice";

export const store = configureStore({
  reducer: {
    tickers: tickersReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
