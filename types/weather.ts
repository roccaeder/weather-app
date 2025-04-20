// types/weather.ts
export interface Weather {
  name: string;
  main: { temp: number; humidity: number };
  wind: { speed: number };
  weather: { description: string; icon: string }[];
}

export interface ForecastItem {
  dt_txt: string;
  main: { temp: number; humidity: number };
  weather: { description: string; icon: string }[];
  wind: { speed: number };
}