import { rootStore } from ".";

// 好神奇，居然是undefined，为什么？
// console.log(rootStore);

export const getCounter = () => {
  const { counter } = rootStore.getState();
  return counter;
};

export const onCounterChange = (fn) => {
  return rootStore.subscribe(fn);
};

export const increase = () => {
  rootStore.dispatch({ type: "INCREASE" });
};

export const decrease = () => {
  rootStore.dispatch({ type: "DECREASE" });
};
