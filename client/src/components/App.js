import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickers } from "../redux/operations";
import { getError, getIsLoading } from "../redux/selectors";
import { TickersList } from "./TickersList/TickersList";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTickers());
  }, [dispatch]);
  return (
    <div>
      <TickersList />
      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};
