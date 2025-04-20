import { ForecastItem as ForecastItemType } from '@/types/weather';

export default function ForecastItem({ item }: { item: ForecastItemType }) {
  const date = new Date(item.dt_txt).toLocaleDateString('es-ES', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
      <p className="font-semibold">{date}</p>
      <img
        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt="icono clima"
        className="mx-auto"
      />
      <p>{item.weather[0].description}</p>
      <p>{item.main.temp} °C</p>
    </div>
  );
}
