export const Ticker = ({
  ticker,
  exchange,
  price,
  change,
  changePercent,
  dividend,
  lastTradeTime,
}) => {
  return (
    <tr>
      <td>{ticker}</td>
      <td>{exchange}</td>
      <td>{price}$</td>
      <td>{change}$</td>
      <td>{changePercent}%</td>
      <td>{dividend}%</td>
      <td><time>{lastTradeTime.slice(0, 19)}</time></td>
    </tr>
  );
};
