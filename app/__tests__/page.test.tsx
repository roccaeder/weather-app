// app/__tests__/page.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../page';
import { fetchForecastData, fetchWeatherData } from '@/services/weather';

// 🔁 Mock de los servicios
jest.mock('@/services/weather', () => ({
  fetchWeatherData: jest.fn(),
  fetchForecastData: jest.fn(),
}));


describe('Home page', () => {
  const mockWeather = {
    weather: [{ description: 'soleado', icon: '01d' }],
    name: 'Lima',
    wind: { speed: 5 },
    main: { humidity: 60 },
  };

  const mockForecast = {
    list: [
      {
        dt_txt: '2024-04-20 06:00:00',
        main: { temp: 22 },
        weather: [{ description: 'nublado', icon: '02d' }],
        wind: { speed: 3 },
      },
      {
        dt_txt: '2024-04-20 09:00:00',
        main: { temp: 23 },
        weather: [{ description: 'parcial', icon: '03d' }],
        wind: { speed: 2 },
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (fetchWeatherData as jest.Mock).mockResolvedValue(mockWeather);
    (fetchForecastData as jest.Mock).mockResolvedValue(mockForecast);
  });

  it('renderiza el título y el input', () => {
    render(<Home />);
    expect(screen.getByText(/weather app/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/ingresa una ciudad/i)).toBeInTheDocument();
  });

  it('muestra datos del clima luego de buscar', async () => {
    render(<Home />);
    const input = screen.getByPlaceholderText(/ingresa una ciudad/i);
    fireEvent.change(input, { target: { value: 'Lima' } });

    const button = screen.getByRole('button', { name: /buscar/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/nublado/i)).toBeInTheDocument();
      expect(screen.getByText(/22 °C/)).toBeInTheDocument();
    });
  });
});

describe('handle error', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('muestra mensaje de error si falla la API', async () => {
    (fetchWeatherData as jest.Mock).mockRejectedValueOnce(new Error('Error al obtener clima'));
    (fetchForecastData as jest.Mock).mockRejectedValueOnce(new Error('Error al obtener pronóstico'));

    render(<Home />);

    const input = screen.getByPlaceholderText(/Ingresa una ciudad/i);
    const button = screen.getByRole('button', { name: /Buscar/i });

    fireEvent.change(input, { target: { value: 'Santiago' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/No se pudo obtener el clima/i)).toBeInTheDocument();
    });
  });
});