// services/__tests__/weather.test.ts

import { fetchWeatherData, fetchForecastData } from '../weather';

describe('weather service', () => {
  const mockWeatherResponse = {
    name: 'Santiago',
    main: { temp: 25, humidity: 40 },
    wind: { speed: 3 },
    weather: [{ description: 'cielo claro', icon: '01d' }],
  };

  const mockForecastResponse = {
    list: [
      {
        dt_txt: '2025-04-18 12:00:00',
        main: { temp: 22, humidity: 35 },
        weather: [{ description: 'soleado', icon: '01d' }],
        wind: { speed: 4 },
      },
      {
        dt_txt: '2025-04-18 15:00:00',
        main: { temp: 23, humidity: 33 },
        weather: [{ description: 'nublado', icon: '02d' }],
        wind: { speed: 3.5 },
      },
    ],
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('fetchWeatherData()', () => {
    it('should return weather JSON when response is OK', async () => {
      // mock fetch to succeed
      (global as any).fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockWeatherResponse,
      });

      const data = await fetchWeatherData('Santiago');
      expect(data).toEqual(mockWeatherResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/data/2.5/weather?q=Santiago'),
      );
    });

    it('should throw if response.ok is false', async () => {
      (global as any).fetch = jest.fn().mockResolvedValueOnce({ ok: false });

      await expect(fetchWeatherData('CiudadX'))
        .rejects
        .toThrow('Error al obtener el clima actual');
    });
  });

  describe('fetchForecastData()', () => {
    it('should return forecast JSON when response is OK', async () => {
      (global as any).fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockForecastResponse,
      });

      const data = await fetchForecastData('Santiago');
      expect(data).toEqual(mockForecastResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/data/2.5/forecast?q=Santiago'),
      );
    });

    it('should throw if response.ok is false', async () => {
      (global as any).fetch = jest.fn().mockResolvedValueOnce({ ok: false });

      await expect(fetchForecastData('CiudadX'))
        .rejects
        .toThrow('Error al obtener el pronóstico');
    });
  });
});
