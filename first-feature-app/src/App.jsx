import React, { useState, useEffect } from "react";

const App = (props) => {
  const {
    shared: { getCounter, onCounterChange, increase, decrease },
  } = props;
  const [counter, setCounter] = useState(getCounter());

  useEffect(() => {
    const unsubscribe = onCounterChange(() => {
      setCounter(getCounter());
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <p>First Feature App</p>

      <p>Count: {counter}</p>

      <button onClick={increase}>increase in child app</button>
      <button onClick={decrease}>decrease in child app</button>
    </>
  );
};

export default App;
