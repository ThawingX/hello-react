import React from "react";
import { Context } from "../App";

class Son extends React.PureComponent {
  state = {};
  render() {
    return (
      <div>
        <Context.Consumer>
          {({ msg }) => {
            return <div>{msg}</div>;
          }}
        </Context.Consumer>
      </div>
    );
  }
}

export default Son;
