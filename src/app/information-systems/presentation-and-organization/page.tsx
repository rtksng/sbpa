import { FiUsers, FiSettings, FiBriefcase, FiCheckCircle } from 'react-icons/fi';

export default function PresentationAndOrganization() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Presentation and organization
          </h1>
          <p className="text-zinc-600">
            IT administration team organization, roles and responsibilities
          </p>
        </div>

        {/* IT Administration Team */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiUsers className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              IT Administration Team
            </h2>
          </div>

          <div className="space-y-6">
            {/* Organization, Roles and Responsibilities */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiBriefcase className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Organization, Roles and Responsibilities
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe the IT administration team organization, roles and responsibilities
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided]</p>
                </div>
              </div>
            </div>

            {/* Outsourced Roles */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiCheckCircle className="text-green-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Outsourced Roles
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe roles that are outsourced to an external company
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

