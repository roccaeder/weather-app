'use client';

import { useState } from 'react';
import WeatherSearch from '@/components/WeatherSearch';
import WeatherCard from '@/components/WeatherCard';
import ForecastList from '@/components/ForecastList';
import { fetchForecastData, fetchWeatherData } from '@/services/weather';
import { Weather, ForecastItem } from '@/types/weather';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    setWeather(null);
    setForecast(null);

    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchWeatherData(city),
        fetchForecastData(city),
      ]);

      setWeather(weatherData);

      const dailyData = forecastData.list.reduce((acc: Record<string, ForecastItem[]>, item: ForecastItem) => {
        const date = item.dt_txt.split(" ")[0];
        acc[date] = acc[date] || [];
        acc[date].push(item);
        return acc;
      }, {} as Record<string, ForecastItem[]>);

      console.log(dailyData);
      console.log(weather);

      const onePerDay = (Object.values(dailyData) as ForecastItem[][]).map((items) =>
        items.find((item) => item.dt_txt.includes("12:00:00")) || items[0]
      );
      console.log(onePerDay);
      setForecast(onePerDay);
    } catch (err) {
      setError("No se pudo obtener el clima");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-4 sm:p-6 md:p-8 lg:p-10 max-w-xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">🌦️ Weather App</h1>

      <WeatherSearch city={city} onChange={setCity} onSubmit={fetchData} />

      {loading && <p className="text-center">Cargando...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      {forecast && <ForecastList forecast={forecast} />}
    </main>
  );
}
