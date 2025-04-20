# 🌦️ Weather App

A simple weather application built with **Next.js** and **TypeScript** that allows users to search for the current weather and 5-day forecast of any city.

## 🚀 Features

- 🔍 Search by city name
- 🌤️ Display current weather details (description, wind, humidity)
- 📆 5-day forecast summary (one entry per day)
- 🧪 Unit and integration tests with Jest and Testing Library
- 🌓 Light/Dark mode support (via Tailwind)

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)

## 📦 Installation

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install

# testing
npm test
npx jest (file path)
```

## 🔮 API Used
This project uses the OpenWeatherMap API
create file .env.local

```bash
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```