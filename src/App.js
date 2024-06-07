import Son from "./components/Son";
import React, { useEffect } from "react";
import { useContext, useRef } from "react";
export const Context = React.createContext();
function App() {
  const h1Ref = useRef();
  const onClick = () => {
    console.log(h1Ref);
  };
  useEffect(() => {
    console.log("Parent useEffect");
    console.log(h1Ref);
  }, []);
  return (
    <div>
      <h1 ref={h1Ref}>Parent</h1>
      <Context.Provider value="t22est">
        <Son test="test"></Son>
      </Context.Provider>
      <button onClick={onClick}>Focus</button>
    </div>
  );
}
export default App;
