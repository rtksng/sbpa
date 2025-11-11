'use client';

import { CategoryData } from '@/types/business';
import { FiPieChart } from 'react-icons/fi';

interface CategoryBreakdownProps {
  data: CategoryData[];
  title: string;
}

export default function CategoryBreakdown({ data, title }: CategoryBreakdownProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <FiPieChart className="text-zinc-600" />
        <h2 className="text-lg font-semibold text-zinc-900">
          {title}
        </h2>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => {
          const width = (item.value / maxValue) * 100;
          const colors = [
            'bg-orange-500',
            'bg-blue-500',
            'bg-orange-400',
            'bg-blue-400',
            'bg-orange-300',
            'bg-blue-300',
          ];
          const color = colors[index % colors.length];

          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-900">
                  {item.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-zinc-600">
                    ${item.value.toLocaleString()}
                  </span>
                  <span className="text-xs text-zinc-500 w-12 text-right">
                    {item.percentage}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-zinc-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`${color} h-full rounded-full transition-all duration-500`}
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 pt-4 border-t border-zinc-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-900">
            Total
          </span>
          <span className="text-lg font-bold text-zinc-900">
            ${total.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

