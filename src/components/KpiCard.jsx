export default function KpiCard({ title, value, change }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p className="value">{value}</p>
      <p>Зміна: {change}</p>
    </div>
  );
}
