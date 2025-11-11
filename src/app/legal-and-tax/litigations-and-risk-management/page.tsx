import { FiAlertCircle, FiShield, FiUsers, FiBriefcase } from 'react-icons/fi';

export default function LitigationsAndRiskManagement() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Litigations and risk management
          </h1>
          <p className="text-zinc-600">
            Legal proceedings and risk management information
          </p>
        </div>

        {/* Material Legal Proceedings */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-50 rounded-lg">
              <FiAlertCircle className="text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Material Legal Proceedings of the Past 3 Years
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Whether settled or still pending, describe reason, amount at risk and resolution or expected outcome
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <FiAlertCircle className="text-zinc-400 text-4xl mx-auto mb-2" />
                  <p className="text-sm text-zinc-600">[Material legal proceedings to be provided]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Litigations */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiShield className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Pending Litigations
            </h2>
          </div>

          <div className="space-y-6">
            {/* Customer Litigations */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiBriefcase className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Customers
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[150px] flex items-center justify-center">
                <div className="text-center">
                  <FiBriefcase className="text-zinc-400 text-4xl mx-auto mb-2" />
                  <p className="text-sm text-zinc-600">[Pending litigations with customers to be provided]</p>
                </div>
              </div>
            </div>

            {/* Employee Litigations */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiUsers className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Employees
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[150px] flex items-center justify-center">
                <div className="text-center">
                  <FiUsers className="text-zinc-400 text-4xl mx-auto mb-2" />
                  <p className="text-sm text-zinc-600">[Pending litigations with employees to be provided]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


