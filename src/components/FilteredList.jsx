import { useState } from 'react';

export default function FilteredList({ countries }) {
  const [region, setRegion] = useState('Усі');
  const regions = [...new Set(countries.map(country => country.region))];
  const filtered = region === 'Усі'
    ? countries
    : countries.filter(country => country.region === region);

  return (
    <div className="card">
      <h2>Список країн</h2>
      <label htmlFor="region">Регіон: </label>
      <select id="region" value={region} onChange={event => setRegion(event.target.value)}>
        <option value="Усі">Усі</option>
        {regions.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
      <ul>
        {filtered.map(country => (
          <li key={country.id}>{country.name} — {country.region}</li>
        ))}
      </ul>
    </div>
  );
}
