import { useState, useEffect } from "react";
export default function EasyMaxCount() {
  const [leftTime, setLeftTime] = useState(5);
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = null;
    if (leftTime > 0) {
      timer = setInterval(() => {
        setLeftTime(
          (prev) => prev - 1,
          () => {}
        );
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [leftTime]); // 添加leftTime用于独立更新，即不加该参数时，leftTime不会主动更新，只会跟着update周期调用
  const handleAddNumber = () => {
    if (leftTime === 0) return alert("Time is up");
    setCount(count + 1);
  };
  return (
    <div>
      <h2>No of Clicks until timer exipres</h2>
      <div style={{ background: "red" }}>
        <h1>{count}</h1>
        <h2>Time left:{leftTime} seconds</h2>
        <button onClick={handleAddNumber}>Click me</button>
      </div>
    </div>
  );
}
