import React from "react";
export default function TestHookClass(UserComponent) {
  return class extends React.Component {
    render() {
      return (
        <>
          <UserComponent></UserComponent>
        </>
      );
    }
  };
}
