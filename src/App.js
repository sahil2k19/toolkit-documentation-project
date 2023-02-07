import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counter";
export default function App() {
  const value = useSelector((state) => {
    return state.counter.value;
  });

  const dispatch = useDispatch();

  const handlerIncrement = () => {
    dispatch(increment());
  };
  const handlerDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <h1>
        The Count is : <span>{value}</span>
      </h1>
      <button onClick={handlerIncrement}>Decrease</button>

      <button onClick={handlerDecrement}>Increase</button>
    </div>
  );
}
