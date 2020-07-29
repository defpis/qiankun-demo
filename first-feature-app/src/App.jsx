import React, { useState, useEffect } from "react";

const App = (props) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    props.setGlobalState({
      count: count + 1,
    });
  };

  useEffect(() => {
    // 第二个参数为true表示立即执行一次观察者函数
    props.onGlobalStateChange((current) => setCount(current.count || 0), true);
    return () => props.offGlobalStateChange();
  }, []);

  return (
    <>
      <p>First Feature App</p>
      <p>Count: {count}</p>
      <button onClick={increase}>increase in child app</button>
    </>
  );
};

export default App;
