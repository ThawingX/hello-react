import sonStyle from "./Son.module.css";
import React from "react";
import prototypes from "proptypes";
import classnames from "classnames";
import bindClassnames from "classnames/bind";
classnames({
  [sonStyle.son]: true,
  [sonStyle.son2]: false,
});
const classnames2 = bindClassnames.bind(sonStyle);
classnames2({
  son: true,
  son2: false,
});
class Son extends React.PureComponent {
  state = {
    children: [
      this.props.propSlot,
      this.props.children,
      this.props.scopeSlot(this.props.propSlot),
    ],
    isShowSon2: false,
  };
  render() {
    return (
      <div
        className={classnames2({
          son: true,
          son2: this.state.isShowSon2,
        })}
        style={{ color: "white" }}
      >
        {this.state.children}
        <button
          onClick={() => this.setState({ isShowSon2: !this.state.isShowSon2 })}
        >
          toggle
        </button>
      </div>
    );
  }
}

Son.prototypes = {
  propSlot: prototypes.element,
  scopeSlot: prototypes.element,
};

export default Son;
