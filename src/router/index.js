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
    name: "【Q2】【easy】Stopwatch Timer",
  },
  {
    path: "/q3",
    component: lazy(() => import("../challenges/easy_todoList")),
    name: "【Q3】【easy】TODO List",
  },
  {
    path: "/q4",
    component: lazy(() => import("../challenges/easy_progressBar")),
    name: "【Q4】【easy】Progress Bar",
  },
  {
    path: "/q5",
    component: lazy(() => import("../challenges/easy_SubmitFormData")),
    name: "【Q5】【easy】FormData submit",
  },
  {
    path: "/q6",
    component: lazy(() => import("../challenges/easy_maxCount")),
    name: "【Q6】【easy】Max Count",
  },
  {
    path: "/q7",
    component: lazy(() => import("../challenges/medium_usePageBottom")),
    name: "【Q7】【medium】Use Page Bottom",
  },
];

export default routes;
