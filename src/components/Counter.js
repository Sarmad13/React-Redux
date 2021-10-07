import classes from "./Counter.module.css";
import { useSelector } from "react-redux";
import store from "../Store";
import { useDispatch } from "react-redux";
import React from "react";
import { counterActions } from "../Store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle(!showCounter));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div hidden={showCounter} className={classes.value}>
        {counter}
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}> increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
    </main>
  );
};

export default Counter;
