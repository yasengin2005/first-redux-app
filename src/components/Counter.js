import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter); // useSelector is a hook that allows us to access the state or tiny parts of data from the store and automatically make subscriptions components to store.
  // this func executed by react-redux and it will give us the latest state snapshot from the store. If unmount (clear the DOM) the store will be cleared the subscription.
  const show = useSelector((state) => state.counter.showCounter);


  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseBy10Handler = () => {
    dispatch(counterActions.increaseBy10(10));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const resetHandler = () => {
    dispatch(counterActions.reset())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseBy10Handler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
        <button onClick={resetHandler}>Reset</button>
    </main>
  );
};

export default Counter;
