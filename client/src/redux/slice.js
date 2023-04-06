import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";


export const tickersSlice = createSlice({
  name: "tickers",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchTickersSuccess, (state, action) => {
        return {
          ...state,
          items: action.payload,
          isLoading: false,
        };
      })
      .addCase(actions.fetchTickersRequest, (state) => {
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      })
      .addCase(actions.fetchTickersError, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      });
  },
});

export const tickersReducer = tickersSlice.reducer;
