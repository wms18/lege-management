/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-10-29 17:15:36
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-11-02 00:47:22
 */
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "@/views/View";
import About from "@/views/About";
import App from "@/App";
const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}>
        <Route path="/" element={<Navigate to={"/home"}></Navigate>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
export default baseRouter;
