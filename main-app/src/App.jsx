import React from "react";
import Router from "./router";
import { useSelector, useDispatch } from "./hooks";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Main App</p>
      <p>Count: {counter}</p>
      <button onClick={() => dispatch({ type: "INCREASE" })}>
        increase in main app
      </button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>
        decrease in main app
      </button>
      <Router />
    </>
  );
};

export default App;
