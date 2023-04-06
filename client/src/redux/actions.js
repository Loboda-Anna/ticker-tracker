import { createAction } from "@reduxjs/toolkit";
//pending
export const fetchTickersRequest = createAction("tickers/fetchTickersRequest");
//fulfilled
export const fetchTickersSuccess = createAction("tickers/fetchTickersSuccess");
//rejected
export const fetchTickersError = createAction("tickers/fetchTickersError");
