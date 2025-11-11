import { FiBarChart2, FiDollarSign, FiFileText, FiShield, FiCreditCard, FiTrendingUp, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function BalanceSheetAnalysis() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Balance Sheet Analysis
          </h1>
          <p className="text-zinc-600">
            Balance sheet analysis and financial position
          </p>
        </div>

        {/* Fixed Assets */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiFileText className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Fixed Assets Policy
            </h2>
          </div>

          <div className="space-y-6">
            {/* What is Capitalized */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiDollarSign className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  What is Capitalized
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe what is capitalized as fixed assets
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Depreciation Method */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiTrendingUp className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Depreciation Method and Periods
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe depreciation method and depreciation periods
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Tax vs Accounting Depreciation */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiBarChart2 className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Tax vs Accounting Depreciation
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Are there any differences between tax and accounting depreciation?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Periodical Reviews */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiCheckCircle className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Periodical Reviews of Fixed Assets
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe periodical reviews of fixed assets (including annual inventory)
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Write Off Policy */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiFileText className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Fixed Assets Write Off Policy
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe fixed assets write off policy
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accounts Receivable */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiCreditCard className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Accounts Receivable
            </h2>
          </div>

          <div className="space-y-6">
            {/* Trade Receivables Analysis */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiBarChart2 className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Trade Receivables Analysis as of August 2024
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Provide an analysis of trade receivables: customer aging balance by age structure (current, late between 0-30 days, 30-60, 60-90, 90-120, 120-180, 180-360, over 360 days old)
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[200px] flex items-center justify-center">
                  <div className="text-center">
                    <FiBarChart2 className="text-zinc-400 text-4xl mx-auto mb-2" />
                    <p className="text-sm text-zinc-600">[Aging analysis to be provided by Accounts]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Risky Receivables */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiAlertCircle className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Risky Receivables and Bad Debt Provisions
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Highlight any risky receivables and any provisions for bad debts that have been recognized in the books
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Bad Debt Provisions Policy */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiShield className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Bad Debt Provisions Policy
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe policy for bad debt provisions
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Payment Terms by Customer */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiFileText className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Payment Terms by Customer
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Provide a list of payment terms by customer
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[150px] flex items-center justify-center">
                  <div className="text-center">
                    <FiFileText className="text-zinc-400 text-4xl mx-auto mb-2" />
                    <p className="text-sm text-zinc-600">[Payment terms list to be provided by Accounts]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Securities */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <FiShield className="text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Securities (Bank Guarantees, Escrow Accounts)
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Has the Company given or received securities (bank guarantees, escrow accounts), and for what reason?
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Provisions */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-50 rounded-lg">
              <FiAlertCircle className="text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Main Risk Provisions for Contingencies and Liabilities
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Describe main risk provisions for contingencies and liabilities
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trade Payables */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <FiCreditCard className="text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Analysis and Details of Trade Payables
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Provide analysis and details of trade payables
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Funding */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiDollarSign className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Bank Funding
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                What bank funding does the Company have? What is the length of maturity and the terms & conditions?
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Factoring */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiTrendingUp className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Factoring
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Does the Company use factoring?
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

