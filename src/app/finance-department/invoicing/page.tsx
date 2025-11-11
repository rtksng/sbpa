import { FiDollarSign, FiFileText } from 'react-icons/fi';

export default function Invoicing() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Invoicing
          </h1>
          <p className="text-zinc-600">
            Invoice management and processing
          </p>
        </div>

        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiDollarSign className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Invoicing System
            </h2>
          </div>
          <p className="text-zinc-600">
            Content for invoicing will be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}

