import { render, screen } from '@testing-library/react';
import WeatherCard from '../WeatherCard';
import { Weather } from '@/types/weather';

const mockWeather: Weather = {
  name: 'Santiago',
  main: {
    temp: 22,
    humidity: 55,
  },
  wind: {
    speed: 3.5,
  },
  weather: [
    {
      description: 'cielo despejado',
      icon: '01d',
    },
  ],
};

describe('WeatherCard', () => {
  it('renderiza el nombre de la ciudad', () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText('Santiago')).toBeInTheDocument();
  });

  it('muestra la temperatura', () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText(/22 °C/)).toBeInTheDocument();
  });

  it('muestra la humedad', () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText(/Humedad: 55%/)).toBeInTheDocument();
  });

  it('muestra la velocidad del viento', () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText(/Viento: 3.5 m\/s/)).toBeInTheDocument();
  });

  it('muestra la descripción del clima', () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText(/cielo despejado/)).toBeInTheDocument();
  });
});
