import ProgressBar from "./components/ProgressBar";
import { useState } from "react";
export default function EasyProgressBar() {
  const [progress, setProgress] = useState(10);
  return (
    <div>
      <h1>Progress Bar</h1>
      <ProgressBar progress={progress} />
      <div>
        <label>Input Percentage:</label>
        <input
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          type="number"
          min="0"
          max="100"
        />
      </div>
    </div>
  );
}
