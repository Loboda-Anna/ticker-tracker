import { io } from "socket.io-client";
import * as actions from "./actions";

const socket = io("http://localhost:4000");

export const fetchTickers = () => async (dispatch) => {
  dispatch(actions.fetchTickersRequest());
  try {
    await socket.emit("start").on("ticker", (data) => {
      dispatch(actions.fetchTickersSuccess(data));
    });
  } catch (error) {
    dispatch(actions.fetchTickersError(error));
  }
};
