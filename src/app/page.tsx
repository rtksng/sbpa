import ProfileHeader from '@/components/dashboard/ProfileHeader';
import MetricCard from '@/components/dashboard/MetricCard';
import RevenueChart from '@/components/dashboard/RevenueChart';
import CategoryBreakdown from '@/components/dashboard/CategoryBreakdown';
import InsightsPanel from '@/components/dashboard/InsightsPanel';
import {
  mockBusinessProfile,
  mockMetrics,
  mockRevenueData,
  mockCategoryData,
  mockInsights,
} from '@/data/mockData';
import {
  FiDollarSign,
  FiTrendingUp,
  FiUsers,
  FiBarChart2,
  FiHeart,
  FiPercent,
} from 'react-icons/fi';

export default function Dashboard() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Business Profile Analysis
          </h1>
          <p className="text-zinc-600">
            Comprehensive overview and insights for {mockBusinessProfile.name}
          </p>
        </div>
        

        {/* Profile Header */}
        <div className="mb-6">
          <ProfileHeader profile={mockBusinessProfile} />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <MetricCard
            title="Total Revenue"
            value={`$${(mockMetrics.totalRevenue / 1000000).toFixed(1)}M`}
            change={mockMetrics.growthRate}
            trend="up"
            icon={<FiDollarSign className="text-zinc-400" />}
            subtitle="Annual revenue"
          />
          <MetricCard
            title="Growth Rate"
            value={`${mockMetrics.growthRate}%`}
            change={5.2}
            trend="up"
            icon={<FiTrendingUp className="text-zinc-400" />}
            subtitle="Year-over-year"
          />
          <MetricCard
            title="Market Share"
            value={`${mockMetrics.marketShare}%`}
            change={2.6}
            trend="up"
            icon={<FiBarChart2 className="text-zinc-400" />}
            subtitle="Industry market share"
          />
          <MetricCard
            title="Customer Satisfaction"
            value={`${mockMetrics.customerSatisfaction}/5.0`}
            change={0.3}
            trend="up"
            icon={<FiHeart className="text-zinc-400" />}
            subtitle="Average rating"
          />
          <MetricCard
            title="Employees"
            value={mockMetrics.employeeCount.toLocaleString()}
            change={12}
            trend="up"
            icon={<FiUsers className="text-zinc-400" />}
            subtitle="Total workforce"
          />
          <MetricCard
            title="Profit Margin"
            value={`${mockMetrics.profitMargin}%`}
            change={-1.2}
            trend="down"
            icon={<FiPercent className="text-zinc-400" />}
            subtitle="Net profit margin"
          />
        </div>

        {/* Charts and Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <RevenueChart data={mockRevenueData} />
          <CategoryBreakdown data={mockCategoryData} title="Revenue by Category" />
        </div>

        {/* Insights Panel */}
        <div className="mb-6">
          <InsightsPanel insights={mockInsights} />
        </div>
      </div>
    </div>
  );
}
