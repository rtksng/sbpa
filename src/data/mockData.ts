import {
  BusinessProfile,
  BusinessMetrics,
  TimeSeriesData,
  CategoryData,
  AnalysisInsight,
} from '@/types/business';

export const mockBusinessProfile: BusinessProfile = {
  id: '1',
  name: 'TechCorp Solutions',
  industry: 'Technology & Software',
  location: 'Singapore',
  establishedYear: 2015,
  employeeCount: 250,
  revenue: 12500000,
  growthRate: 23.5,
  status: 'active',
  description:
    'Leading provider of enterprise software solutions and cloud services in Southeast Asia.',
};

export const mockMetrics: BusinessMetrics = {
  totalRevenue: 12500000,
  growthRate: 23.5,
  marketShare: 12.8,
  customerSatisfaction: 4.6,
  employeeCount: 250,
  profitMargin: 18.2,
};

export const mockRevenueData: TimeSeriesData[] = [
  { date: '2024-01', value: 950000, label: 'Jan' },
  { date: '2024-02', value: 1020000, label: 'Feb' },
  { date: '2024-03', value: 1100000, label: 'Mar' },
  { date: '2024-04', value: 1050000, label: 'Apr' },
  { date: '2024-05', value: 1180000, label: 'May' },
  { date: '2024-06', value: 1250000, label: 'Jun' },
];

export const mockCategoryData: CategoryData[] = [
  { category: 'Software Licensing', value: 5000000, percentage: 40 },
  { category: 'Cloud Services', value: 3750000, percentage: 30 },
  { category: 'Consulting', value: 2500000, percentage: 20 },
  { category: 'Support & Maintenance', value: 1250000, percentage: 10 },
];

export const mockInsights: AnalysisInsight[] = [
  {
    id: '1',
    title: 'Strong Revenue Growth',
    description:
      'Revenue has increased by 23.5% year-over-year, significantly above industry average of 15%.',
    type: 'positive',
    impact: 'high',
  },
  {
    id: '2',
    title: 'Market Share Expansion',
    description:
      'Market share has grown from 10.2% to 12.8% in the past quarter, indicating strong competitive positioning.',
    type: 'positive',
    impact: 'high',
  },
  {
    id: '3',
    title: 'Customer Satisfaction High',
    description:
      'Customer satisfaction score of 4.6/5.0 is excellent, but there is room for improvement in support response times.',
    type: 'info',
    impact: 'medium',
  },
  {
    id: '4',
    title: 'Profit Margin Optimization',
    description:
      'Current profit margin of 18.2% is healthy, but could be improved through operational efficiency initiatives.',
    type: 'warning',
    impact: 'medium',
  },
];

