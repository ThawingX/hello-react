import { useState } from "react";
export default function EasyTodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const inputEvent = (e) => {
    setInput(e.target.value);
  };
  const clickEvent = () => {
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div>
      <div>
        <input value={input} onInput={inputEvent}></input>
        <button onClick={clickEvent}>Add</button>
      </div>
      <ul>
        {todos.map((todo, todoIdx) => (
          <li key={todoIdx}>
            <span>{todo}</span>
            <button
              onClick={() => setTodos(todos.filter((_, i) => i !== todoIdx))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
