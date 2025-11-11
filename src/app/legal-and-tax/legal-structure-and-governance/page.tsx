import { FiFileText, FiUsers, FiBriefcase, FiShield, FiCheckCircle } from 'react-icons/fi';

export default function LegalStructureAndGovernance() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Legal structure and governance
          </h1>
          <p className="text-zinc-600">
            Legal structure, ownership, and governance information
          </p>
        </div>

        {/* Legal Chart */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiFileText className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Legal Chart
            </h2>
          </div>

          <div className="space-y-6">
            {/* Company Type */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Is the Company a Standalone Company or Part of a Group of Companies?
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>

            {/* List of Group Companies */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                List of Group Companies
              </h3>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[150px] flex items-center justify-center">
                <div className="text-center">
                  <FiFileText className="text-zinc-400 text-4xl mx-auto mb-2" />
                  <p className="text-sm text-zinc-600">[List of group companies to be provided]</p>
                </div>
              </div>
            </div>

            {/* Group Structure */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                Group Structure
              </h3>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <FiBriefcase className="text-zinc-400 text-4xl mx-auto mb-2" />
                  <p className="text-sm text-zinc-600">[Group structure to be provided]</p>
                </div>
              </div>
            </div>

            {/* Origin of Companies */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                Origin of Companies
              </h3>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Provide origin of companies (date created or acquired, status, list of shareholders and directors)
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[200px] flex items-center justify-center">
                  <div className="text-center">
                    <FiFileText className="text-zinc-400 text-4xl mx-auto mb-2" />
                    <p className="text-sm text-zinc-600">[Origin of companies to be provided]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Ownership Structure */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiUsers className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Current Ownership Structure
            </h2>
          </div>

          <div className="space-y-6">
            {/* Shareholder Information */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                Shareholder Information
              </h3>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Number of shares, value of shares and % of ownership for each shareholder
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[200px] flex items-center justify-center">
                  <div className="text-center">
                    <FiUsers className="text-zinc-400 text-4xl mx-auto mb-2" />
                    <p className="text-sm text-zinc-600">[Shareholder information to be provided]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Type of Shares */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                Type of Shares
              </h3>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  What type of shares is each (regular, preferred etc)?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided]</p>
                </div>
              </div>
            </div>

            {/* Warrant Shares and Stock Options */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                Warrant Shares, Stock Options and Other Ownership Rights
              </h3>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Are there any warrant shares, stock options and other forms of ownership rights or promissory notes issued to date?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Directors */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <FiBriefcase className="text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Company Directors and Other Representatives
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Provide list of Company Directors and Other Representatives
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[150px] flex items-center justify-center">
                <div className="text-center">
                  <FiUsers className="text-zinc-400 text-4xl mx-auto mb-2" />
                  <p className="text-sm text-zinc-600">[List of directors and representatives to be provided]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Governance Policy */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <FiShield className="text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Governance Policy
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Describe the Company's governance policy
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


