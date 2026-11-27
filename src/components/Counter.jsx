import { useState } from 'react';

export default function Counter({ title, initialValue }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="card">
      <h2>{title}</h2>
      <p className="value">{count}</p>
      <button onClick={() => setCount(count - 1)}>−</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(initialValue)}>Скинути</button>
    </div>
  );
}
