import { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React カウンター</h1>
      <p>カウント: {count}</p>
      {count === 5 && <p>5回クリックしたよ！</p>}
      <button onClick={() => setCount(count + 1)}>
        増やす！
      </button>
    </div>
  );
}

export default App;