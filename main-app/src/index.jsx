import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./qiankun";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootContext from "./context";
import rootReducer from "./reducers";

export const rootStore = createStore(rootReducer);

ReactDOM.render(
  // 探究一下什么情况需要自定义Context？
  <Provider context={rootContext} store={rootStore}>
    <App />
  </Provider>,
  document.getElementById("main-app-root")
);
