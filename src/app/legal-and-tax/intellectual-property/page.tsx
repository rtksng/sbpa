import { FiFileText, FiShield, FiDollarSign } from 'react-icons/fi';

export default function IntellectualProperty() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Intellectual Property
          </h1>
          <p className="text-zinc-600">
            Intellectual property ownership and assets
          </p>
        </div>

        {/* IP Ownership from R&D */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiShield className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Intellectual Property Ownership from R&D Work
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Describe who owns intellectual property from R&D work performed by the Company's consultants
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Intangible Assets */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <FiDollarSign className="text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Intangible Assets Related to R&D
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Are there any intangible assets booked on the Company's balance sheet related to internally developed or acquired R&D?
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


