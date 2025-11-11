import { FiCheckCircle, FiCreditCard, FiFileText, FiUsers, FiSettings, FiShield } from 'react-icons/fi';

export default function ClientCreditControlAndPaymentTerms() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Client Credit control and payment terms
          </h1>
          <p className="text-zinc-600">
            Credit control policies and payment terms for clients
          </p>
        </div>

        {/* Qualification Process for New Customers */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiUsers className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Qualification Process for New Customers
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Describe the qualification process for new customers
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided by Priyanka]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Terms and Credit Limit */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiCreditCard className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Payment Terms and Credit Limit
            </h2>
          </div>

          <div className="space-y-6">
            {/* Process Description */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiSettings className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Process of Setting Payment Terms and Credit Limit
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe the process of setting payment terms and credit limit (rules, roles and overriding approval policy)
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Priyanka]</p>
                </div>
              </div>
            </div>

            {/* Rules */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiFileText className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Rules
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  What rules are used for setting payment terms and credit limits?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Priyanka]</p>
                </div>
              </div>
            </div>

            {/* Roles */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiUsers className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Roles
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  What roles are involved in setting payment terms and credit limits?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Priyanka]</p>
                </div>
              </div>
            </div>

            {/* Overriding Approval Policy */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiShield className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Overriding Approval Policy
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe the overriding approval policy for payment terms and credit limits
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Priyanka]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

