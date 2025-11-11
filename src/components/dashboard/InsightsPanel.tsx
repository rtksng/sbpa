'use client';

import { AnalysisInsight } from '@/types/business';
import { FiAlertCircle, FiInfo, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';

interface InsightsPanelProps {
  insights: AnalysisInsight[];
}

export default function InsightsPanel({ insights }: InsightsPanelProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'positive':
        return <FiCheckCircle className="text-green-500" />;
      case 'warning':
        return <FiAlertTriangle className="text-yellow-500" />;
      case 'info':
        return <FiInfo className="text-blue-500" />;
      default:
        return <FiAlertCircle className="text-gray-500" />;
    }
  };

  const getImpactBadge = (impact: string) => {
    const colors = {
      high: 'bg-orange-100 text-orange-800',
      medium: 'bg-blue-100 text-blue-800',
      low: 'bg-zinc-100 text-zinc-800',
    };
    return colors[impact as keyof typeof colors] || colors.low;
  };

  return (
    <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-zinc-900 mb-6">
        Key Insights & Analysis
      </h2>
      <div className="space-y-4">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="p-4 rounded-lg border border-zinc-200 hover:border-orange-300 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">{getIcon(insight.type)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {insight.title}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium uppercase ${getImpactBadge(insight.impact)}`}
                  >
                    {insight.impact}
                  </span>
                </div>
                <p className="text-sm text-zinc-600">
                  {insight.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

