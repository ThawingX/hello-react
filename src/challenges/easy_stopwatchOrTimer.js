import { useState } from "react";

const generateTime = (count) => {
  return `${Math.floor(count / 60)} mins ${count % 60} secs`;
};
export default function ShowHideChallenge() {
  const [count, setCount] = useState(0);

  const startTimer = () => {
    window.timer = setInterval(() => {
      // setCount(count+1); // 形成闭包，count 还是第一个上下文的值，所以这里不能用 count + 1，即一直都是获取0。因为调用的时候，count 是0，所以一直都是0
      setCount((_val) => _val + 1); // 这里可以用这种方式，setCount 会接收一个函数，这个函数的参数，useState单独维护了一个数据，这个数据是最新的，所以这里可以用这种方式
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(window.timer);
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };
  return (
    <div>
      <h2>Timer</h2>
      <p>{generateTime(count)}</p>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
