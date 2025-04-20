'use client';
type Props = {
  city: string;
  onChange: (city: string) => void;
  onSubmit: () => void;
};

export default function WeatherSearch({ city, onChange, onSubmit }: Props) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        value={city}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ingresa una ciudad"
        className="border flex-1 px-3 py-2 rounded bg-white dark:bg-gray-800 dark:text-white"
      />
      <button
        onClick={onSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Buscar
      </button>
    </div>
  );
}
