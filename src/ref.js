import "./App.css";
import React from "react";
const divRef = React.createRef();
class App extends React.PureComponent {
  state = {};
  componentDidMount() {
    console.log(divRef.current);
    console.log(this.refs.divRef);
  }
  render() {
    return (
      <div ref={divRef}>
        <div ref="divRef">divRef</div>
      </div>
    );
  }
}

export default App;
