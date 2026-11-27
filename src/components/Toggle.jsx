import { useState } from 'react';

export default function Toggle({ title }) {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'card dark' : 'card'}>
      <h2>{title}</h2>
      <p>{dark ? 'Темна тема' : 'Світла тема'}</p>
      <button onClick={() => setDark(!dark)}>Змінити тему</button>
    </div>
  );
}
