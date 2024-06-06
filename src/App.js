import "./App.css";
import React from "react";
import proptypes from "proptypes";

class App extends React.PureComponent {
  state = {
    isShowDiv1: true,
  };

  render() {
    return (
      <div className="app">{this.state.isShowDiv1 ? <div>div1</div> : ""}</div>
    );
  }
}

App.prototypes = {
  msg: proptypes.string,
};
export default App;
