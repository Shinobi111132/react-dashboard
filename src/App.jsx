import KpiCard from './components/KpiCard.jsx';
import Counter from './components/Counter.jsx';
import Toggle from './components/Toggle.jsx';
import FilteredList from './components/FilteredList.jsx';
import { countries, metrics } from './data/mockData.js';

export default function App() {
  return (
    <main>
      <h1>Країни світу</h1>
      <p>Лабораторна робота №1. Тестові дані.</p>
      <div className="grid">
        {metrics.map(metric => (
          <KpiCard key={metric.id} title={metric.title}
            value={metric.value} change={metric.change} />
        ))}
      </div>
      <div className="grid">
        <Counter title="Лічильник" initialValue={0} />
        <Toggle title="Режим відображення" />
        <FilteredList countries={countries} />
      </div>
    </main>
  );
}
