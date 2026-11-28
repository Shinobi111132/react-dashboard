import KpiCard from './KpiCard.jsx';
import Counter from './Counter.jsx';
import Toggle from './Toggle.jsx';
import FilteredList from './FilteredList.jsx';
import CountriesTable from './CountriesTable.jsx';

export default function Dashboard({ countries }) {
  const population = countries.reduce((sum, country) => sum + (country.population ?? 0), 0);
  const regionCount = new Set(countries.map(country => country.region)).size;

  return (
    <>
      <div className="grid">
        <KpiCard title="Кількість країн" value={countries.length} />
        <KpiCard title="Сумарне населення" value={population.toLocaleString('uk-UA')} />
        <KpiCard title="Кількість регіонів" value={regionCount} />
      </div>
      <CountriesTable countries={countries} />
      <div className="grid">
        <Counter title="Лічильник" initialValue={0} />
        <Toggle title="Режим відображення" />
        <FilteredList countries={countries} />
      </div>
    </>
  );
}
