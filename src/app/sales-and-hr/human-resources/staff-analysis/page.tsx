import { FiUsers, FiMapPin, FiDollarSign, FiAlertCircle, FiCheck } from 'react-icons/fi';

export default function StaffAnalysis() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Staff Analysis Breakdown
          </h1>
          <p className="text-zinc-600">
            Comprehensive staff analysis, demographics, location, education, and organizational breakdown
          </p>
          <p className="text-zinc-600 text-base mt-2">
            <strong>Source:</strong> HR to provide (unless otherwise specified)
          </p>
        </div>

        {/* Consultants Onsite vs Offsite Analysis */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiMapPin className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Consultants Onsite vs Offsite Analysis
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              Number and % in each category, split between employees, freelancers, contractors etc.
            </p>
            <p className="text-zinc-600 text-base mb-4">
              <strong>Source:</strong> GV Sir/HR to provide
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-3">Onsite Consultants</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Total:</span>
                    <span className="font-semibold text-zinc-900 bg-orange-100 px-2 py-1 rounded text-base">300</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-base font-medium text-zinc-700 mb-2">Employee Types:</p>
                    <div className="flex items-center gap-2">
                      <FiCheck className="text-orange-500 shrink-0" size={12} />
                      <span className="text-base text-zinc-600">Employees - To be provided</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCheck className="text-orange-500 shrink-0" size={12} />
                      <span className="text-base text-zinc-600">Freelancers - To be provided</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCheck className="text-orange-500 shrink-0" size={12} />
                      <span className="text-base text-zinc-600">Contractors - To be provided</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-3">Offsite Consultants</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Total:</span>
                    <span className="font-semibold text-zinc-900 bg-blue-100 px-2 py-1 rounded text-base">150</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-base font-medium text-zinc-700 mb-2">Employee Types:</p>
                    <div className="flex items-center gap-2">
                      <FiCheck className="text-blue-500 shrink-0" size={12} />
                      <span className="text-base text-zinc-600">Employees - To be provided</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCheck className="text-blue-500 shrink-0" size={12} />
                      <span className="text-base text-zinc-600">Freelancers - To be provided</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCheck className="text-blue-500 shrink-0" size={12} />
                      <span className="text-base text-zinc-600">Contractors - To be provided</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#fb5642] rounded-lg">
                <FiUsers className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Gender Split
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full shrink-0"></div>
                  <span className="text-base text-zinc-600">Male:</span>
                </div>
                <span className="font-semibold text-zinc-900 bg-blue-50 px-3 py-1 rounded-md text-base">286</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full shrink-0"></div>
                  <span className="text-base text-zinc-600">Female:</span>
                </div>
                <span className="font-semibold text-zinc-900 bg-pink-50 px-3 py-1 rounded-md text-base">114</span>
              </div>
              <div className="pt-2 border-t border-zinc-200">
                <div className="flex items-center justify-between text-base">
                  <span className="font-medium text-zinc-700">Total:</span>
                  <span className="font-bold text-zinc-900 bg-zinc-100 px-3 py-1 rounded-md">400</span>
                </div>
              </div>
            </div>
            <p className="text-base text-zinc-600 mt-2">Source: HR to provide</p>
          </div>

          <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#fb5642] rounded-lg">
                <FiDollarSign className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Average Consultants Salary
              </h3>
            </div>
            <p className="text-3xl font-bold text-zinc-900">837,333.44</p>
            <p className="text-base text-zinc-500 mt-2">Annual</p>
            <p className="text-base text-zinc-600 mt-2">Source: HR to provide</p>
          </div>
        </div>



        {/* Work Council and Labor Union */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#fb5642] rounded-lg">
                <FiUsers className="text-white" />
              </div>
              <h2 className="text-lg font-semibold text-zinc-900">
                Work Council
              </h2>
            </div>
            <div>
              <p className="text-zinc-600 mb-4">Is there a work council?</p>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="font-medium text-zinc-900">NO</span>
                  </div>
                </div>
              </div>
              <p className="text-base text-zinc-600 mt-3">
                <strong>Source:</strong> HR to provide
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#fb5642] rounded-lg">
                <FiAlertCircle className="text-white" />
              </div>
              <h2 className="text-lg font-semibold text-zinc-900">
                Labor Union
              </h2>
            </div>
            <div>
              <p className="text-zinc-600 mb-4">Is a labor union present?</p>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="font-medium text-zinc-900">NO</span>
                  </div>
                </div>
              </div>
              <p className="text-base text-zinc-600 mt-3">
                <strong>Source:</strong> HR to provide
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
