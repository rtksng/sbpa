import { FiPercent, FiFileText, FiCheckCircle } from 'react-icons/fi';

export default function Tax() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Tax
          </h1>
          <p className="text-zinc-600">
            Tax position, audits, and special tax rates
          </p>
        </div>

        {/* Tax Position */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <FiCheckCircle className="text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Tax Position
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Are taxes current?
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Audits */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiFileText className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Tax Audits
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Outcome of any tax or social security audits since the Company's incorporation
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Tax Rates */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiPercent className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Special Tax Rates
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Is the Company taking advantage of any special reduced tax rates (e.g. for IT, R&D activities etc)?
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


