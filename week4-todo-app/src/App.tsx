import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([
    { id: 0, title: "りんご", isDone: false },
    { id: 1, title: "バナナ", isDone: true },
    { id: 2, title: "メロン", isDone: false },
  ]);

  return (
    <>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo.title}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
