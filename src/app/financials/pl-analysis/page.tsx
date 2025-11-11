import { FiBarChart2, FiDollarSign, FiTrendingUp, FiFileText, FiPercent } from 'react-icons/fi';

export default function PLAnalysis() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            P&L Analysis
          </h1>
          <p className="text-zinc-600">
            Profit and Loss statement analysis and accounting policies
          </p>
        </div>

        {/* Main Accounting Policies */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiFileText className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Main Accounting Policies for P&L Preparation
            </h2>
          </div>

          <div className="space-y-6">
            {/* Revenue Recognition */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiDollarSign className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Revenue Recognition by Type of Project
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe revenue recognition policies by type of project (T&M, Work Packages, Fixed Price Projects etc)
                </label>
                <div className="space-y-3 mt-3">
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <h4 className="font-medium text-zinc-900 mb-2 text-sm">Time & Materials (T&M) Projects</h4>
                    <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                  </div>
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <h4 className="font-medium text-zinc-900 mb-2 text-sm">Work Packages Projects</h4>
                    <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                  </div>
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <h4 className="font-medium text-zinc-900 mb-2 text-sm">Fixed Price Projects</h4>
                    <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost of Sales vs Indirect Costs */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiTrendingUp className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Cost of Sales (Direct Costs) vs Indirect Costs
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  What costs are included in Cost of Sales (Direct Costs) vs Indirect Costs?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Indirect Costs Categorization */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiBarChart2 className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Indirect Costs Categorization
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  How are indirect costs categorized (e.g. sales and recruitment, general and administration, or another method?)
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Retirement Provisions */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiFileText className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Retirement Provisions
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Does the Company need to book retirement provisions?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Provision for Paid Vacation */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiFileText className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Provision for Paid Vacation
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Does the Company book Provision for Paid Vacation (provision for untaken vacation)?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing and Communication Expenditure */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiTrendingUp className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Marketing and Communication Expenditure
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Marketing and Communication expenditure for last 2 years
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Rate */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <FiPercent className="text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Current Effective Tax Rate
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Current effective tax rate and potential impact of a change in ownership
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

