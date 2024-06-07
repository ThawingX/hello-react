import Son from "./components/Son";
import { useState, useEffect, useMemo } from "react";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Parent useEffect");
  }, [count]);
  const memoizedValue = useMemo(() => {
    return count + count;
  }, [count]);
  return (
    <div>
      <h1>Parent</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>Count: {count}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <Son test="test"></Son>
    </div>
  );
}
export default App;
