'use client';

import { TimeSeriesData } from '@/types/business';
import { FiDollarSign } from 'react-icons/fi';

interface RevenueChartProps {
  data: TimeSeriesData[];
}

export default function RevenueChart({ data }: RevenueChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const range = maxValue - minValue || 1;

  return (
    <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FiDollarSign className="text-zinc-600" />
          <h2 className="text-lg font-semibold text-zinc-900">
            Revenue Trend
          </h2>
        </div>
      </div>
      <div className="h-64 flex items-end gap-2">
        {data.map((item, index) => {
          const height = ((item.value - minValue) / range) * 100;
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex flex-col items-center justify-end h-full">
                <div
                  className="w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t hover:from-orange-600 hover:to-orange-500 transition-all cursor-pointer group relative"
                  style={{ height: `${height}%` }}
                  title={`${item.label}: $${item.value.toLocaleString()}`}
                >
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    ${item.value.toLocaleString()}
                  </div>
                </div>
              </div>
              <span className="text-xs text-zinc-500 text-center">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-zinc-600">
          Min: ${minValue.toLocaleString()}
        </span>
        <span className="text-zinc-600">
          Max: ${maxValue.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

