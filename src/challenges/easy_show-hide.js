import { useState } from "react";

export default function ShowHideChallenge() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>Show/Hide</button>
      {isShow ? <h1>Welocome to React Challenges</h1> : null}
    </div>
  );
}
