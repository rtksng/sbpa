import { FiCalendar, FiBarChart2, FiFileText, FiTrendingUp, FiTarget, FiClock } from 'react-icons/fi';

export default function FinancialReportingAndFinancialCalendar() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Financial reporting and financial calendar
          </h1>
          <p className="text-zinc-600">
            Financial reporting schedules and calendar information
          </p>
        </div>

        {/* Financial Year */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiCalendar className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Financial Year
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Is the financial year the same as the tax year: Jan to Dec?
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided by Suresh Sir]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accounts Closing */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiClock className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Accounts Closing
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Is there a monthly / quarterly / yearly accounts closing?
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business and Financial Reporting */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-50 rounded-lg">
              <FiFileText className="text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Business and Financial Reporting
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Reports */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                Reports Prepared
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Monthly Reports
                  </label>
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Quarterly Reports
                  </label>
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Annual Reports
                  </label>
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* KPIs */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                KPIs Prepared
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Monthly KPIs
                  </label>
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Quarterly KPIs
                  </label>
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Annual KPIs
                  </label>
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Budget and Forecast */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <FiTrendingUp className="text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Budget and Forecast
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-zinc-600 text-sm mb-4">
              Describe the budget process, structuring and monitoring, as well as reforecasts process during the year.
            </p>
            <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
            </div>
          </div>
        </div>

        {/* Monitoring Procedure for Fixed-Price Contracts (FPP) */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiTarget className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Monitoring Procedure for Fixed-Price Contracts (FPP)
            </h2>
          </div>

          <div className="space-y-6">
            {/* FPP Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                FPP Specifications
              </h3>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  How are FPP specifications built?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Budget Setup */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                Budget Setup
              </h3>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  How is budget set up for FPP?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Technical and Financial Monitoring */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                Technical and Financial Monitoring
              </h3>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe the technical and financial monitoring process for FPP
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Frequency of Revaluing */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                Project Revaluation Frequency
              </h3>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  What is the frequency of revaluing projects?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Revenue Recognition Policy */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                Revenue Recognition Policy
              </h3>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe the policy used by the Company for revenue recognition for FPP
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Project KPIs */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                Project KPIs for FPP
              </h3>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  What Project KPIs are used for FPP?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Project Charts */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                Project Charts for FPP Monitoring
              </h3>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Provide examples of Project Charts used to monitor FPP
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[200px] flex items-center justify-center">
                  <div className="text-center">
                    <FiBarChart2 className="text-zinc-400 text-4xl mx-auto mb-2" />
                    <p className="text-sm text-zinc-600">[Project Charts to be provided by Accounts]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

