import { FiFileText, FiUsers, FiBriefcase, FiSettings, FiDollarSign, FiTrendingUp, FiBarChart2, FiCheckCircle } from 'react-icons/fi';

export default function PresentationAndOrganization() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Presentation and organization
          </h1>
          <p className="text-zinc-600">
            Finance department presentation and organizational structure
          </p>
        </div>

        {/* Financial Board */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiBriefcase className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Financial Board
            </h2>
          </div>

          {/* Finance Administration Team */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FiUsers className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Finance Administration Team
              </h3>
            </div>
            <p className="text-zinc-600 mb-4 text-sm">
              Describe the Company's organization and roles in the finance team. Can be taken from Leadership Board.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiDollarSign className="text-orange-600" />
                  <h4 className="font-medium text-zinc-900">Finance Manager</h4>
                </div>
                <p className="text-sm text-zinc-600">[To be provided - Can be taken from Leadership Board]</p>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiFileText className="text-orange-600" />
                  <h4 className="font-medium text-zinc-900">Accounting</h4>
                </div>
                <p className="text-sm text-zinc-600">[To be provided - Can be taken from Leadership Board]</p>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiTrendingUp className="text-orange-600" />
                  <h4 className="font-medium text-zinc-900">Treasury</h4>
                </div>
                <p className="text-sm text-zinc-600">[To be provided - Can be taken from Leadership Board]</p>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiBarChart2 className="text-orange-600" />
                  <h4 className="font-medium text-zinc-900">Controlling</h4>
                </div>
                <p className="text-sm text-zinc-600">[To be provided - Can be taken from Leadership Board]</p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <p className="text-sm text-zinc-700">
                <strong>Note:</strong> Company's organization and roles in the finance team (Finance Manager, Accounting, Treasury, Controlling etc) can be taken from Leadership Board.
              </p>
            </div>
          </div>

          {/* Outsourced Roles */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-50 rounded-lg">
                <FiCheckCircle className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Roles Outsourced to External Provider
              </h3>
            </div>
            <p className="text-zinc-600 mb-4 text-sm">
              Describe the roles that are outsourced to an external provider. Suresh Sir/RP Sir to provide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiUsers className="text-green-600" />
                  <h4 className="font-medium text-zinc-900">Payroll</h4>
                </div>
                <p className="text-sm text-zinc-600">[To be provided by Suresh Sir/RP Sir]</p>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiFileText className="text-green-600" />
                  <h4 className="font-medium text-zinc-900">Book-keeping</h4>
                </div>
                <p className="text-sm text-zinc-600">[To be provided by Suresh Sir/RP Sir]</p>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <div className="flex items-center gap-2 mb-2">
                  <FiSettings className="text-green-600" />
                  <h4 className="font-medium text-zinc-900">Tax</h4>
                </div>
                <p className="text-sm text-zinc-600">[To be provided by Suresh Sir/RP Sir]</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-sm text-zinc-700">
                <strong>Note:</strong> Roles that are outsourced to an external provider (payroll, book-keeping, tax etc) - Suresh Sir/RP Sir to provide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

