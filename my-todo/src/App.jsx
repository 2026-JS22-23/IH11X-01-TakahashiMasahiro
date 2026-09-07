// src/App.jsx

import { useState } from 'react';   // 追加

export default function App() {
  const [todos, setTodos] = useState([]);   // 変化するデータ
  const [text, setText] = useState('');
  const add = () => {
    setTodos([...todos, text]);   // push ではなく新しい配列
    setText('');
  };
  return (<div>
    <input value={text} onChange={e => setText(e.target.value)} />
    <button onClick={add}>追加</button>
    <ul>{todos.map((t,i) => <li key={i}>{t}</li>)}</ul>
    <p>残り {todos.length} 件</p>
  </div>);
}