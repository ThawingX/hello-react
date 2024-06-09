import { lazy } from "react";

const routes = [
  {
    path: "/q1",
    component: lazy(() => import("../challenges/easy_show-hide")),
    name: "【Q1】Show/Hide Challenge",
  },
  {
    path: "/q2",
    component: lazy(() => import("../challenges/easy_stopwatchOrTimer")),
    name: "【Q2】Stopwatch/Timer",
  },
];

export default routes;
