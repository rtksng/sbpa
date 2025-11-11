import { FiSettings, FiTrendingUp, FiFileText, FiDollarSign, FiClock, FiUsers, FiCheckCircle, FiCreditCard, FiShield } from 'react-icons/fi';

export default function SalesAdministrationProcess() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Sales administration process
          </h1>
          <p className="text-zinc-600">
            Sales administration processes and workflows
          </p>
        </div>

        {/* End to End Sales Process */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiTrendingUp className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              End to End Sales Process
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Describe the end to end sales process
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contracting and PO Collection */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiFileText className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Contracting and PO Collection
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Use of MSAs, individual contracts, SOWs, POs etc. SOW/PO PDF's
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[150px] flex items-center justify-center">
                <div className="text-center">
                  <FiFileText className="text-zinc-400 text-4xl mx-auto mb-2" />
                  <p className="text-sm text-zinc-600">[SOW/PO PDF's to be provided]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Time Tracking Process */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-50 rounded-lg">
              <FiClock className="text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Time Tracking Process
            </h2>
          </div>

          <div className="space-y-6">
            {/* Use of Timesheets */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiClock className="text-green-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Use of Timesheets
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe the use of timesheets (including tools used)
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Workflow */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiSettings className="text-green-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Workflow
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe the workflow for time tracking
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Approval Process */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiCheckCircle className="text-green-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Approval Process
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe the approval process for time tracking
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Management of Changes */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiSettings className="text-green-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Management of Changes
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe the management of changes in time tracking
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Rules for Time Allocation */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiUsers className="text-green-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Rules for Time Allocation
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe rules used to allocate time (between projects whether billable or non-billable, bench, training, ramp up, admin tasks, time off etc)
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Management of Subcontractors Time */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <FiUsers className="text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Management of Subcontractors Time
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Describe process of approving time invoiced by subcontractors
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided by Priyanka]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Invoicing */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiDollarSign className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Invoicing
            </h2>
          </div>

          <div className="space-y-6">
            {/* Invoice Process */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                Invoice Preparation, Validation and Submission Process
              </h3>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe the process of invoice preparation, validation and submission to customers, separately for:
                </label>
                <div className="space-y-3 mt-3">
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <h4 className="font-medium text-zinc-900 mb-2 text-sm">Time & Materials Projects</h4>
                    <p className="text-sm text-zinc-600">[Regularity: weekly vs monthly vs milestones, use of down payments etc. - To be provided by Priyanka]</p>
                  </div>
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <h4 className="font-medium text-zinc-900 mb-2 text-sm">Work Packages Projects</h4>
                    <p className="text-sm text-zinc-600">[Regularity: weekly vs monthly vs milestones, use of down payments etc. - To be provided by Priyanka]</p>
                  </div>
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <h4 className="font-medium text-zinc-900 mb-2 text-sm">Fixed Price Projects</h4>
                    <p className="text-sm text-zinc-600">[Regularity: weekly vs monthly vs milestones, use of down payments etc. - To be provided by Priyanka]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Used */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiSettings className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Tools Used in Invoice Preparation
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe tools used in invoice preparation
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Priyanka]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cash Collection */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <FiCreditCard className="text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Cash Collection
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Describe invoicing monitoring process, management of receivables ageing and cash collection process (steps, timeline and roles)
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided by Priyanka]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Guarantees */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-50 rounded-lg">
              <FiShield className="text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Project Guarantees
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Is this a common practice?
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

