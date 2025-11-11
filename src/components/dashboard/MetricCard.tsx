import { ReactNode } from 'react';
import { FiTrendingUp, FiTrendingDown, FiMinus } from 'react-icons/fi';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  subtitle?: string;
}

export default function MetricCard({
  title,
  value,
  change,
  icon,
  trend,
  subtitle,
}: MetricCardProps) {
  const getTrendIcon = () => {
    if (trend === 'up') return <FiTrendingUp className="text-green-500" />;
    if (trend === 'down') return <FiTrendingDown className="text-red-500" />;
    return <FiMinus className="text-gray-500" />;
  };

  const getChangeColor = () => {
    if (!change) return '';
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-zinc-600">
          {title}
        </h3>
        {icon && <div className="text-zinc-400">{icon}</div>}
      </div>
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-bold text-zinc-900">
          {value}
        </p>
        {change !== undefined && (
          <div className={`flex items-center gap-1 text-sm font-medium ${getChangeColor()}`}>
            {getTrendIcon()}
            <span>{Math.abs(change)}%</span>
          </div>
        )}
      </div>
      {subtitle && (
        <p className="text-xs text-zinc-500 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}

