import { usePageBottom } from "./hooks";
const arr = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
];
export default function MediumUsePageBottom() {
  const reachedBottom = usePageBottom();
  console.log("reachedBottom", reachedBottom);
  return (
    <div className="App">
      <h1>Welcome to React Challenges</h1>
      {arr.map((index) => (
        <h2>{index}</h2>
      ))}
      <footer>&copy; 2024</footer>
    </div>
  );
}
