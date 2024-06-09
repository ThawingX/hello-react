import React, { Suspense } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import classnames from "classnames/bind";

import routes from "./router";
import AppStyle from "./App.module.css";

const ClassNames = classnames.bind(AppStyle);
function App() {
  return (
    <div>
      <h1>React Cahllenges</h1>
      <div className={AppStyle['menu__wrap']}>
        {routes.map((route, index) => (
          <NavLink key={index} to={route.path}>
            {route.name}
          </NavLink>
        ))}
      </div>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} Component={route.component} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
