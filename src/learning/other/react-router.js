import React from "react";
import { Routes, Route ,NavLink,Link} from "react-router-dom";
import Son from "../components/Son";
import Home from "../components/Home";
function App() {
  return (
    <div>
      <h1>menu</h1>
      {/* navlink 会添加一个active类 */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/son">Son</NavLink>
      <h1>menu2</h1>
      {/* link 不会添加active类 */}
      <Link to="/">Home</Link>
      <Link to="/son">Son</Link>
      <Routes>
        {/* react-router-dom v6 */}
        <Route path="/" element={<Home />} />
        {/* react-router-dom v5 */}
        <Route path="/son" Component={Son} />  
      </Routes>
    </div>
  );
}
export default App;
