import { FiTarget, FiFileText, FiDollarSign, FiTrendingUp, FiBarChart2, FiSettings, FiClock } from 'react-icons/fi';

export default function MonitoringProcedureFixedPriceContracts() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Monitoring procedure for fixed-price contracts (FPP)
          </h1>
          <p className="text-zinc-600">
            Procedures and processes for monitoring fixed-price contracts
          </p>
        </div>

        {/* Monitoring Procedure Overview */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiTarget className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Monitoring Procedure for Fixed-Price Contracts (FPP)
            </h2>
          </div>

          <div className="space-y-6">
            {/* FPP Specifications */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiFileText className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  FPP Specifications
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  How are FPP specifications built?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Budget Setup */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiDollarSign className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Budget Setup
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  How is budget set up for FPP?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Technical and Financial Monitoring */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiSettings className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Technical and Financial Monitoring
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Describe the technical and financial monitoring process for FPP
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>

            {/* Frequency of Revaluing */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiClock className="text-orange-600" />
                <h3 className="text-lg font-semibold text-zinc-900">
                  Project Revaluation Frequency
                </h3>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  What is the frequency of revaluing projects?
                </label>
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Recognition Policy */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiTrendingUp className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Revenue Recognition Policy for FPP
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-zinc-600 text-sm mb-4">
              Describe the policy used by the Company for revenue recognition for FPP.
            </p>
            <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
            </div>
          </div>
        </div>

        {/* Project KPIs */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <FiBarChart2 className="text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Project KPIs for FPP
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                What Project KPIs are used for FPP?
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600">[To be provided by Accounts]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Charts */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <FiBarChart2 className="text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Project Charts for FPP Monitoring
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Provide examples of Project Charts used to monitor FPP
              </label>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <FiBarChart2 className="text-zinc-400 text-5xl mx-auto mb-3" />
                  <p className="text-sm text-zinc-600 font-medium mb-1">Project Charts</p>
                  <p className="text-xs text-zinc-500">[Examples of Project Charts to be provided by Accounts]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

