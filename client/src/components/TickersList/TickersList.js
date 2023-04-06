// import { useSelector } from "react-redux";
import { Ticker } from "../Ticker/Ticker";
import { fetchTickers } from "../../redux/operations";
import { getTickers } from "../../redux/selectors";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


export const TickersList = (state) => {
  const dispatch = useDispatch();
  const tickers = useSelector(getTickers);

  useEffect(() => {
    dispatch(fetchTickers());
  }, [dispatch]);
  return (
    <ul>
      {tickers.map((ticker) => (
        <li key={ticker.ticker}>
          <Ticker ticker={ticker} />
        </li>
      ))}
    </ul>
  );
};
