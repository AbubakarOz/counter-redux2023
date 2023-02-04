import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const num = useSelector((state) => state.number);
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch({ type: "start" });
  };

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleRandom = () => {
    const ran = Math.floor(Math.random() * 100);
    dispatch({ type: "random", payload: ran });
  };

  return (
    <div className="App">
      <div className="number">{num}</div>
      <div className="matOperations">
        <button onClick={handleStart}>start</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleRandom}>?</button>
      </div>
    </div>
  );
};

export default App;
