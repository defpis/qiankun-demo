import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootContext from "./context";
import rootReducer from "./reducers";
import * as alternateShared from "./alternateShared";

export const rootStore = createStore(rootReducer);

const render = ({ shared = alternateShared, ...restProps }) => {
  ReactDOM.render(
    <Provider context={rootContext} store={rootStore}>
      <App {...restProps} shared={shared} />
    </Provider>,
    document.getElementById("first-feature-app-root")
  );
};

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("bootstrap");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("mount", props);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log("unmount");
  // 主应用通过react-router-dom切换路由，不需要手动卸载
  const dom = document.getElementById("first-feature-app-root");
  if (dom) {
    ReactDOM.unmountComponentAtNode(dom);
  }
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log("update", props);
}

// 直接启动
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
