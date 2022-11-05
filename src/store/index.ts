/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-11-04 00:01:47
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-11-04 00:20:33
 */
import { legacy_createStore } from "redux";
import reducer from "./reducer.ts";

const store = legacy_createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;