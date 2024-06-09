import React, { Suspense } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import routes from "./router";
function App() {
  return (
    <div>
      <h1>React Cahllenges</h1>
      <div>
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
