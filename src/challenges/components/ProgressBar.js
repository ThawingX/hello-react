import ProgressStyle from "./ProgressBar.module.css";
import classnames from "classnames/bind";
const ProgressStyleClass = classnames.bind(ProgressStyle);
export default function ProgressBar({ progress: inputWidth }) {
  return (
    <div>
      <div className={ProgressStyleClass({ progress__wrap: true })}>
        {inputWidth >= 0 && inputWidth <= 100 ? (
          <div
            className={ProgressStyleClass({ progress: true })}
            style={{ width: `${inputWidth}%` }}
          >
            {inputWidth}%
          </div>
        ) : (
          alert("Need less than 100% and more than 0%")
        )}
      </div>
    </div>
  );
}
