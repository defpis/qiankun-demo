import { registerMicroApps, start, initGlobalState } from "qiankun";
import * as shared from "./shared";

registerMicroApps([
  {
    name: "first-feature-app",
    entry: "//localhost:3001",
    container: "#first-feature-app",
    activeRule: "/first-feature-app",
    props: { shared },
  },
]);

start();

// setDefaultMountApp("/first-feature-app");

/**
 * 组件通信
 */

export const actions = initGlobalState({
  count: 0,
});

// 订阅
// onGlobalStateChange((state, prev) => {
//   console.log(state, prev);
// });

// 变更
// setGlobalState({
//   count: 1,
// });

// 取消订阅
// offGlobalStateChange();
