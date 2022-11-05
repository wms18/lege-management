/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-10-27 00:34:56
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-11-04 00:10:19
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "reset-css";
import "antd/dist/antd.css";
import "@/assets/styles/global.scss";
import App from "./App";
import store from "@/store";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
