import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiply, reset } from "./redux/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter Application</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(multiply())}>multiply</button>
    </div>
  );
};

export default Counter;
