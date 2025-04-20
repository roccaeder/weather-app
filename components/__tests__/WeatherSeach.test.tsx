// components/__tests__/WeatherSeach.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import WeatherSearch from '@/components/WeatherSearch';

describe('WeatherSearch', () => {
  const mockChange = jest.fn();
  const mockSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    render(
      <WeatherSearch city="Lima" onChange={mockChange} onSubmit={mockSubmit} />
    );
  });

  it('render the input and button', () => {
    expect(screen.getByPlaceholderText('Ingresa una ciudad')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Buscar' })).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    const input = screen.getByPlaceholderText('Ingresa una ciudad');
    fireEvent.change(input, { target: { value: 'Santiago' } });
    expect(mockChange).toHaveBeenCalledWith('Santiago');
  });

  it('calls onSubmit when button is clicked', () => {
    const button = screen.getByRole('button', { name: 'Buscar' });
    fireEvent.click(button);
    expect(mockSubmit).toHaveBeenCalled();
  });
});