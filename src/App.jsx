import { useState, useEffect } from 'react';
import { fetchCountries } from './api/countries.js';
import Dashboard from './components/Dashboard.jsx';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    fetchCountries(controller.signal)
      .then(data => {
        if (!controller.signal.aborted) setCountries(data);
      })
      .catch(error => {
        if (!controller.signal.aborted) setError(error.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <main>
      <h1>Країни світу</h1>
      <p>Лабораторна робота №2. Вибірка з REST Countries.</p>
      {loading ? <p>Завантаження...</p>
        : error ? <p>Помилка: {error}</p>
        : countries.length === 0 ? <p>Даних немає</p>
        : <Dashboard countries={countries} />}
    </main>
  );
}
