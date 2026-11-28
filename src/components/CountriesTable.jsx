import { useState } from 'react';

export default function CountriesTable({ countries }) {
  const [field, setField] = useState('name');
  const [ascending, setAscending] = useState(true);

  const sorted = [...countries].sort((a, b) => {
    if (field === 'population') {
      if (a.population === null) return b.population === null ? 0 : 1;
      if (b.population === null) return -1;
    }

    const result = field === 'name'
      ? a.name.localeCompare(b.name, 'uk')
      : a.population - b.population;

    return ascending ? result : -result;
  });

  return (
    <div className="card">
      <h2>Таблиця країн</h2>
      <label htmlFor="sort">Сортування: </label>
      <select id="sort" value={field} onChange={e => setField(e.target.value)}>
        <option value="name">За назвою</option>
        <option value="population">За населенням</option>
      </select>
      <button onClick={() => setAscending(!ascending)}>
        {ascending ? 'За зростанням' : 'За спаданням'}
      </button>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Країна</th>
              <th>Регіон</th>
              <th>Населення</th>
              <th>Площа, км²</th>
              <th>Код</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(country => (
              <tr key={country.id}>
                <td>{country.name}</td>
                <td>{country.region}</td>
                <td>{country.population ?? '—'}</td>
                <td>{country.area ?? '—'}</td>
                <td>{country.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
