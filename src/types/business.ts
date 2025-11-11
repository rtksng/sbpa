export interface BusinessProfile {
  id: string;
  name: string;
  industry: string;
  location: string;
  establishedYear: number;
  employeeCount: number;
  revenue: number;
  growthRate: number;
  status: 'active' | 'inactive' | 'pending';
  description: string;
}

export interface BusinessMetrics {
  totalRevenue: number;
  growthRate: number;
  marketShare: number;
  customerSatisfaction: number;
  employeeCount: number;
  profitMargin: number;
}

export interface TimeSeriesData {
  date: string;
  value: number;
  label: string;
}

export interface CategoryData {
  category: string;
  value: number;
  percentage: number;
}

export interface AnalysisInsight {
  id: string;
  title: string;
  description: string;
  type: 'positive' | 'warning' | 'info';
  impact: 'high' | 'medium' | 'low';
}

