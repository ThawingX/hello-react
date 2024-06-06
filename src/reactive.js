import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    a: 1,
    b: {
      b1: 1,
      b2: 2,
    },
  };
  add = () => {
    this.setState({
      a: this.state.a + 1,
      b: {
        ...this.state.b,
        b1: this.state.b.b1 + 1,
      },
    });
  };
  shallowMerge = () => {
    this.setState({ a: 1 });
    this.setState({ b: { b1: 1, b2: 2 } });
  };
  render() {
    return (
      <div className="app">
        <div onClick={this.add.bind(this)}>{this.state.a}</div>
        <div onClick={this.add.bind(this)}>{this.state.b.b1}</div>
        <div onClick={this.add.bind(this)}>{this.state.b.b2}</div>

        <div onClick={this.shallowMerge}>shallow</div>
      </div>
    );
  }
}

export default App;
