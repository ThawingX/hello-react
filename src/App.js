import "./App.css";
import React from "react";
import proptypes from "proptypes";
import Son from "./components/Son";

class App extends React.PureComponent {
  state = {
    isShowDiv1: true,
  };

  render() {
    return (
      <div>
        <Son
          propSlot={<div key={1}>propSlot</div>}
          scopeSlot={(scope) => {
            return <div key={2}>{scope}</div>;
          }}
        >
          <div key={3}>children</div>
        </Son>
      </div>
    );
  }
}

App.prototypes = {
  msg: proptypes.string,
};
export default App;
