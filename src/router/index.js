import { lazy } from "react";

const routes = [
  {
    path: "/q1",
    component: lazy(() => import("../challenges/easy_show-hide")),
    name: "【Q1】【easy】Show/Hide Challenge",
  },
  {
    path: "/q2",
    component: lazy(() => import("../challenges/easy_stopwatchOrTimer")),
    name: "【Q2】【easy】Stopwatch/Timer",
  },
  {
    path: "/q3",
    component: lazy(() => import("../challenges/easy_todoList")),
    name: "【Q3】【easy】TODO List",
  },
];

export default routes;
