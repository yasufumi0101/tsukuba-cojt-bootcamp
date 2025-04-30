import { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React コラボ課題</h1>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        増やす
      </button>

      {/* TODO: 減らすボタンをここに追加 */}
      {/* TODO: 10回達成時のメッセージをここに表示 */}
    </div>
  );
}

export default App;