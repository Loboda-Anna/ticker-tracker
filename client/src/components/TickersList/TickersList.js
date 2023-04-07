// import { useSelector } from "react-redux";
import { Ticker } from "../Ticker/Ticker";
import { fetchTickers } from "../../redux/operations";
import { getTickers } from "../../redux/selectors";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TickersTable } from "./TickersList.styled";

export const TickersList = () => {
  const dispatch = useDispatch();
  const tickers = useSelector(getTickers);

  useEffect(() => {
    dispatch(fetchTickers());
  }, [dispatch]);
  return (
    <TickersTable>
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Exchange</th>
          <th>Price</th>
          <th>Change</th>
                  <th>Change percent</th>
                  <th>Dividend</th>
          <th>Last trade time</th>
        </tr>
      </thead>

      <tbody>
        {tickers.map(
          ({
            ticker,
            exchange,
            price,
            change,
              change_percent,
            dividend,
            last_trade_time,
          }) => (
            <Ticker
              key={ticker}
              ticker={ticker}
              exchange={exchange}
              price={price}
              change={change}
                    changePercent={change_percent}
                    dividend = {dividend}
              lastTradeTime={last_trade_time}
            ></Ticker>
          )
        )}
      </tbody>
    </TickersTable>
  );
};
