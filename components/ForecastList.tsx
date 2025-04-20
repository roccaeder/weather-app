import ForecastItem from './ForecastItem';
import { ForecastItem as ForecastItemType } from '@/types/weather';

export default function ForecastList({ forecast }: { forecast: ForecastItemType[] }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-2 text-center">Próximos días</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {forecast.map((item, index) => (
          <ForecastItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
