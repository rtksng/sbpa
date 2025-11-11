import { FiServer, FiMail, FiDatabase, FiShield, FiHardDrive, FiAlertCircle, FiSettings, FiBarChart2, FiUsers, FiClock, FiDollarSign, FiCreditCard, FiShoppingBag, FiPackage, FiGrid } from 'react-icons/fi';

export default function ITToolsAndInfrastructure() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            IT tools and infrastructure
          </h1>
          <p className="text-zinc-600">
            IT infrastructure and tools overview
          </p>
        </div>

        {/* IT Infrastructure */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiServer className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              IT Infrastructure
            </h2>
          </div>

          <div className="space-y-6">
            {/* Network */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiServer className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Network
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe the network infrastructure
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided]</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiMail className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Email
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe the email system
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided]</p>
                </div>
              </div>
            </div>

            {/* Data */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiDatabase className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Data
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Describe data storage, including type of sensitive customer data stored on the Company's network
                  </label>
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <p className="text-sm text-zinc-600">[To be provided]</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    How is sensitive customer data protected?
                  </label>
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <p className="text-sm text-zinc-600">[To be provided]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Backup */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiHardDrive className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Backup
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe backup procedures for internal and customer data
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided]</p>
                </div>
              </div>
            </div>

            {/* Disaster Recovery Plan */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiAlertCircle className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Disaster Recovery Plan
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe the disaster recovery plan
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IT Tools Summary */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiSettings className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Summary of IT Tools and Main Interfaces
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ERP */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiBarChart2 className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  ERP
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>

            {/* CRM */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiUsers className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  CRM
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>

            {/* Project Management */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiSettings className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Project Management
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>

            {/* Recruitment, Employee Databases */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiUsers className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Recruitment, Employee Databases
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>

            {/* HR Management */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiClock className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  HR Management: Timesheets, Vacation etc
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>

            {/* Accounting & Book Keeping */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiDollarSign className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Accounting & Book Keeping
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>

            {/* Travel and Expenses Management */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiCreditCard className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Travel and Expenses Management
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>

            {/* Billing System */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiDollarSign className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Billing System
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>

            {/* Purchasing */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiShoppingBag className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Purchasing
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>

            {/* Fixed Assets */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiPackage className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Fixed Assets
                </h3>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided]</p>
              </div>
            </div>

            {/* Other Systems */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiGrid className="text-blue-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Other Systems
                </h3>
              </div>
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

