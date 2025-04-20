// services/weather.ts
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const fetchWeatherData = async (city: string) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
  );
  if (!res.ok) throw new Error('Error al obtener el clima actual');
  return res.json();
};

export const fetchForecastData = async (city: string) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=es`
  );
  if (!res.ok) throw new Error('Error al obtener el pronóstico');
  return res.json();
};