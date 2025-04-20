// components/__tests__/ForecastItem.test.tsx
import { render, screen } from '@testing-library/react';
import ForecastItem from '@/components/ForecastItem'
import { ForecastItem as ForecastItemType } from '@/types/weather';

const mockItem: ForecastItemType = {
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
};

describe('ForecastItem', () => {
  it('render the information correctly', () => {
    render(<ForecastItem item={mockItem} />);
    expect(screen.getByText('dom, 1 oct')).toBeInTheDocument();
    expect(screen.getByText('cielo despejado')).toBeInTheDocument();
    expect(screen.getByText('22 °C')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'icono clima');
  });
});