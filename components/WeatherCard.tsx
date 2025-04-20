import { Weather } from '@/types/weather';

export default function WeatherCard({ weather }: { weather: Weather }) {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
      <h2 className="text-xl font-semibold mb-2">{weather.name}</h2>
      <p>🌡️ {weather.main.temp} °C</p>
      <p>💧 Humedad: {weather.main.humidity}%</p>
      <p>💨 Viento: {weather.wind.speed} m/s</p>
      <p>🌥️ {weather.weather[0].description}</p>
    </div>
  );
}