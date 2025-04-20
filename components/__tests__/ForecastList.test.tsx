// components/__tests__/ForecastItem.test.tsx
import { render, screen } from '@testing-library/react';
import ForecasList from '@/components/ForecastList';
import { ForecastItem as ForecastItemType } from '@/types/weather';
import { describe } from 'node:test';

const mockItem: ForecastItemType[] = [{
  dt_txt: '2023-10-01 12:00:00',
  main: {
    temp: 22,
    humidity: 55,
  },
  weather: [
    {
      description: 'cielo despejado',
      icon: '01d',
    }],
  wind: {
    speed: 3.5,
  },
},
{
  dt_txt: '2023-10-01 15:00:00',
  main: {
    temp: 23,
    humidity: 60,
  },
  weather: [
    {
      description: 'cielo nublado',
      icon: '02d',
    }],
  wind: {
    speed: 4,
  },
}];

describe('ForecastList', () => {
  it('render list of forecast items', () => {
    render(<ForecasList forecast={mockItem} />);
    expect(screen.getByText('cielo despejado')).toBeInTheDocument();
    expect(screen.getByText('cielo nublado')).toBeInTheDocument();
    expect(screen.getByText('22 °C')).toBeInTheDocument();
    expect(screen.getByText('23 °C')).toBeInTheDocument();
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('alt', 'icono clima');
    expect(screen.getAllByRole('img')[1]).toHaveAttribute('alt', 'icono clima');
  });
});