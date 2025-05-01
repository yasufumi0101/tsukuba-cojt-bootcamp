import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([
    { id: 0, title: "りんご", isDone: false },
    { id: 1, title: "バナナ", isDone: true },
    { id: 2, title: "メロン", isDone: false },
  ]);
  const [input, setInput] = useState("");
  const addTodos = () => {
    if (input.trim() === "") return;
    const newTodos = [
      ...todos,
      { title: input, isDone: false, id: Date.now() },
    ];
    setTodos(newTodos);
    setInput("");
  };
  const toggleDone = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };
  return (
    <>
      <input
        type="text"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodos}>Add</button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <label
                style={{
                  textDecorationLine: todo.isDone ? "line-through" : "none",
                }}
              >
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={() => toggleDone(todo.id)}
                />
                {todo.title}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
