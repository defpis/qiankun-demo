import React from "react";
import { useSelector, useDispatch } from "../hooks";

const Home = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Home</p>

      <p>{counter}</p>

      <button onClick={() => dispatch({ type: "INCREASE" })}>increase</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>decrease</button>
    </>
  );
};

export default Home;
