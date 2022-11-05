/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-10-29 17:15:36
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-11-02 18:06:54
 */
import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Home from "@/views/Home";
// import About from "@/views/About";
const About = lazy(() => import("@/views/About"));
const User = lazy(() => import("@/views/User"));
const User1 = lazy(() => import("@/views/User1"));
const User2 = lazy(() => import("@/views/User2"));
const Home = lazy(() => import("@/views/Home"));
const View = lazy(() => import("@/views/View"));
const Login = lazy(() => import("@/views/Login"))
const withLoadingComponent = (Comp: JSX.Element) => (
  <Suspense fallback={<div>Loading</div>}> {Comp} </Suspense>
);
const routes = [
  {
    path: "/",
    element: <Navigate to={"/home"}></Navigate>,
  },
  {
    path: "/",
    element: <View />,
    children: [
      {
        path: "/about",
        element: withLoadingComponent(<About></About>),
      },
      {
        path: "/home",
        element: withLoadingComponent(<Home></Home>),
      },
      {
        path: "/user",
        element: withLoadingComponent(<User></User>),
        children: [
          {
            path: "/user/1",
            element: withLoadingComponent(<User1></User1>),
          },
          {
            path: "/user/2",
            element: withLoadingComponent(<User2></User2>),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: withLoadingComponent(<Login></Login>),
  },
  {
    path: "*",
    element: <Navigate to={"/home"} />,
  },
];
export default routes;
