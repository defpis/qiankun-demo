import {
  createStoreHook,
  createSelectorHook,
  createDispatchHook,
} from "react-redux";
import rootContext from "./context";

export const useStore = createStoreHook(rootContext);
export const useSelector = createSelectorHook(rootContext);
export const useDispatch = createDispatchHook(rootContext);
