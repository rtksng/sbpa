import { FiUsers, FiFileText, FiBriefcase } from 'react-icons/fi';

export default function AuditorsAndExternalCPA() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Auditors and External CPA
          </h1>
          <p className="text-zinc-600">
            Information about external auditors and certified public accountants
          </p>
        </div>

        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiUsers className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              External Auditors & CPA Information
            </h2>
          </div>
          <p className="text-zinc-600">
            Content for auditors and external CPA will be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}

