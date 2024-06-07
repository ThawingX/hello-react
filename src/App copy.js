import "./App.css";
import React from "react";
import Son from "./components/Son";
export const Context = React.createContext();
class App extends React.PureComponent {
  state = {};
  render() {
    return (
      <div>
        {/* 只能传递value作为值 */}
        {/* 如果需要传递多个值，可以使用对象 */}
        {/* 可以嵌套多个Context，但是不推荐 */}
        <Context.Provider value={{ msg: "msg" }}>
          <Son></Son>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
