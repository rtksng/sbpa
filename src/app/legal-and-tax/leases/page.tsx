import { FiHome, FiDollarSign, FiCalendar, FiUsers, FiFileText } from 'react-icons/fi';

export default function Leases() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Leases
          </h1>
          <p className="text-zinc-600">
            Lease information and details
          </p>
        </div>

        {/* Leases Information */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiHome className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Lease Details
            </h2>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-zinc-700">
                <strong>Note:</strong> You can use the attached excel file for lease information.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Size */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiHome className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Size
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[150px] flex items-center justify-center">
                <div className="text-center">
                  <FiFileText className="text-zinc-400 text-4xl mx-auto mb-2" />
                  <p className="text-sm text-zinc-600">[Lease size information to be provided]</p>
                </div>
              </div>
            </div>

            {/* Costs */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiDollarSign className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Costs
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[150px] flex items-center justify-center">
                <div className="text-center">
                  <FiFileText className="text-zinc-400 text-4xl mx-auto mb-2" />
                  <p className="text-sm text-zinc-600">[Lease costs to be provided]</p>
                </div>
              </div>
            </div>

            {/* Contract Dates */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiCalendar className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Contract Start Date and End Date
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[150px] flex items-center justify-center">
                <div className="text-center">
                  <FiFileText className="text-zinc-400 text-4xl mx-auto mb-2" />
                  <p className="text-sm text-zinc-600">[Contract dates to be provided]</p>
                </div>
              </div>
            </div>

            {/* Notice Period and Exit Options */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiFileText className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Notice Period and Exit Options
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[Notice period and exit options to be provided]</p>
              </div>
            </div>

            {/* Work Positions and Occupancy */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiUsers className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Number of Work Positions and Current Occupancy
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[150px] flex items-center justify-center">
                <div className="text-center">
                  <FiFileText className="text-zinc-400 text-4xl mx-auto mb-2" />
                  <p className="text-sm text-zinc-600">[Work positions and occupancy to be provided]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


