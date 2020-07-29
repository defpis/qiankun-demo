import React, { useState, useEffect } from "react";
import Router from "./router";
import { actions } from "./qiankun";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    actions.setGlobalState({
      count: count + 1,
    });
  };

  useEffect(() => {
    actions.onGlobalStateChange((current) => setCount(current.count || 0));
    return () => actions.offGlobalStateChange();
  }, []);

  return (
    <>
      <p>Main App</p>
      <p>Count: {count}</p>
      <button onClick={increase}>increase in main app</button>
      <Router />
    </>
  );
};

export default App;
