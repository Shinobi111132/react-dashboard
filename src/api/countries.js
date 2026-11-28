const regions = {
  Europe: 'Європа',
  Asia: 'Азія',
  Africa: 'Африка',
  Americas: 'Америка',
  Oceania: 'Океанія',
  Antarctic: 'Антарктика',
};

export async function fetchCountries(signal) {
  const response = await fetch('/api/countries?limit=10&response_fields=names.common,codes.alpha_2,region,population,area.kilometers', { signal });

  if (response.status === 401) throw new Error('Перевірте API-ключ');
  if (!response.ok) throw new Error('Помилка HTTP ' + response.status);

  const result = await response.json();
  if (result.data?._demo) throw new Error('Потрібен API-ключ замість демо-ключа');
  if (!Array.isArray(result.data?.objects)) throw new Error('Невірний формат даних');

  const names = new Intl.DisplayNames(['uk'], { type: 'region' });

  return result.data.objects.map(country => ({
    id: country.codes.alpha_2,
    name: /^[A-Z]{2}$/.test(country.codes.alpha_2)
      ? names.of(country.codes.alpha_2)
      : country.names.common,
    region: regions[country.region] || country.region,
    population: country.population ?? null,
    area: country.area?.kilometers ?? null,
  }));
}
