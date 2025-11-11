import { FiDollarSign, FiTrendingUp, FiBarChart2, FiPieChart, FiFileText, FiGlobe, FiClock, FiBriefcase, FiLayers, FiUsers, FiAward, FiSettings, FiTarget, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function ProjectFinancials() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto ">
        <div className="mb-8 pt-6">
          <h1 className="text-3xl font-bold text-zinc-900 mb-3">
            Project Financials & Gross Margin Management
          </h1>
          <p className="text-zinc-600 text-lg leading-relaxed ">
            Seasia Infotech maintains a structured financial governance model that ensures transparency, predictability, and profitability across all client engagements.
          </p>
          <p className="text-zinc-600 mt-3 leading-relaxed ">
            Project financials are managed through defined controls at every lifecycle stage — from proposal estimation to project execution and closure — ensuring full traceability between effort, cost, and margin realization.
          </p>
        </div>

        {/* Financial Management Framework */}
        <div className="bg-white rounded-xl border border-zinc-200 p-8 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-zinc-50 rounded-lg">
              <FiSettings className="text-[#fb5642] text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              1. Financial Management Framework
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Governance Card */}
            <div className="bg-white rounded-lg p-6 border border-zinc-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-zinc-100 rounded-md">
                  <FiUsers className="text-[#fb5642] text-base" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">Governance</h3>
              </div>
              <div className="space-y-3">
                <p className="text-base text-zinc-600 leading-relaxed">
                  Project financials are jointly governed by the Delivery, Finance, and Business Head functions to maintain alignment between operational execution and commercial goals.
                </p>
                <p className="text-base text-zinc-600 leading-relaxed">
                  Every project is assigned a PIN (Project Identification Number) within Seasia's internal systems, linking revenue, resource utilization, and cost data for unified tracking.
                </p>
                <p className="text-base text-zinc-600 leading-relaxed">
                  Monthly project KPIs — are reviewed in Prodacker, ensuring that efforts and financial health are monitored continuously.
                </p>
              </div>
            </div>

            {/* Tools & Tracking Card */}
            <div className="bg-white rounded-lg p-6 border border-zinc-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-zinc-100 rounded-md">
                  <FiBarChart2 className="text-[#fb5642] text-base" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">Tools & Tracking</h3>
              </div>
              <div className="space-y-3">
                <p className="text-base text-zinc-600 leading-relaxed">
                  Financial and effort tracking is maintained through Prodacker, which integrates timesheets, project KPIs, and performance dashboards.
                </p>
                <p className="text-base text-zinc-600 leading-relaxed">
                  The system provides real-time visibility into planned vs. actual utilization and enables proactive variance control.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Financial Models by Engagement Type */}
        <div className="bg-white rounded-xl border border-zinc-200 p-8 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-zinc-50 rounded-lg">
              <FiBriefcase className="text-[#fb5642] text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              2. Project Financial Models by Engagement Type
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Time & Material Card */}
            <div className="bg-white rounded-lg p-6 border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-zinc-100 rounded-lg">
                  <FiClock className="text-[#fb5642]" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">Time & Material</h3>
              </div>
              <div className="space-y-3 mb-4">
                <p className="text-base text-zinc-600 leading-relaxed">
                  Suited for evolving or long-term engagements where scope changes are frequent.
                </p>
                <p className="text-base text-zinc-600 leading-relaxed">
                  Billing is based on actual effort logged against agreed hourly rates.
                </p>
                <p className="text-base text-zinc-600 leading-relaxed">
                  Margin monitoring is conducted monthly via Prodacker reports.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-100">
                <p className="text-sm text-zinc-500 mb-1">Average Gross Margin</p>
                <p className="text-lg font-bold text-[#fb5642]">40–45%</p>
              </div>
            </div>

            {/* Fixed Price Card */}
            <div className="bg-white rounded-lg p-6 border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-zinc-100 rounded-lg">
                  <FiTarget className="text-[#fb5642]" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">Fixed Price</h3>
              </div>
              <div className="space-y-3 mb-4">
                <p className="text-base text-zinc-600 leading-relaxed">
                  Applied to well-scoped, milestone-based projects with defined deliverables and acceptance criteria.
                </p>
                <p className="text-base text-zinc-600 leading-relaxed">
                  Revenue is recognized on milestone completion or as a percentage of completion.
                </p>
                <p className="text-base text-zinc-600 leading-relaxed">
                  Cost control focuses on effort efficiency, scope adherence, and timely delivery.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-100">
                <p className="text-sm text-zinc-500 mb-1">Average Gross Margin</p>
                <p className="text-lg font-bold text-[#fb5642]">25–35%</p>
              </div>
            </div>

            {/* Work Packages / Retainers Card */}
            <div className="bg-white rounded-lg p-6 border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-zinc-100 rounded-lg">
                  <FiLayers className="text-[#fb5642]" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">Work Packages</h3>
              </div>
              <div className="space-y-3 mb-4">
                <p className="text-base text-zinc-600 leading-relaxed">
                  Ideal for recurring engagements such as managed QA, Architecture, or Design services.
                </p>
                <p className="text-base text-zinc-600 leading-relaxed">
                  Revenue is realized monthly against defined deliverables or SLAs.
                </p>
                <p className="text-base text-zinc-600 leading-relaxed">
                  Utilization, quality, and continuity are key financial health indicators.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-100"></div>
                <p className="text-sm text-zinc-500 mb-1">Average Gross Margin</p>
                <p className="text-lg font-bold text-[#fb5642]">30–40%</p>
              </div>
            </div>
          </div>
           {/* Cost Allocation and Gross Margin Computation */}
        <div className="bg-white rounded-xl border border-zinc-200 p-8 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-zinc-50 rounded-lg">
              <FiPieChart className="text-[#fb5642] text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              3. Cost Allocation and Gross Margin Computation
            </h2>
          </div>

          <div className="space-y-6">
            {/* Gross Margin Definition Card */}
            <div className="bg-white rounded-lg p-6 border border-zinc-100">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">A. Gross Margin Definition</h3>
              <div className="bg-white rounded-lg p-5 border border-zinc-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-zinc-100 rounded-md">
                    <FiDollarSign className="text-[#fb5642]" />
                  </div>
                  <p className="text-lg font-semibold text-zinc-900">
                    Gross Margin = Project Revenue – Direct Project Costs
                  </p>
                </div>
                <div className="space-y-2 pl-11">
                  <p className="text-base text-zinc-600 leading-relaxed">
                    This reflects the operational profitability of each project before overhead and shared expenses.
                  </p>
                  <p className="text-base text-zinc-600 leading-relaxed">
                    Gross Margins are monitored at project, subsidiary, and business-unit levels.
                  </p>
                </div>
              </div>
            </div>

            {/* Costs Included in Gross Margin */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">B. Costs Included in Gross Margin (Direct Costs)</h3>
              <div className="bg-white rounded-lg border border-zinc-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-200">
                        <th className="px-6 py-4 text-left text-base font-semibold text-zinc-900">Category</th>
                        <th className="px-6 py-4 text-left text-base font-semibold text-zinc-900">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      <tr className="hover:bg-zinc-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <FiUsers className="text-[#fb5642] shrink-0" />
                            <span className="text-base font-medium text-zinc-900">Consultant & Employee Costs</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-base text-zinc-600 leading-relaxed">Salaries, benefits, and performance pay for delivery team members directly allocated to the project (Developers, QA, PMs, Architects, BAs, Designers).</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-zinc-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <FiBriefcase className="text-[#fb5642] shrink-0" />
                            <span className="text-base font-medium text-zinc-900">Subcontractor / Outsourcing Costs</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-base text-zinc-600 leading-relaxed">Vendor or partner costs associated with supplemental expertise or temporary staffing.</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-zinc-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <FiFileText className="text-[#fb5642] shrink-0" />
                            <span className="text-base font-medium text-zinc-900">Software Licenses & Tools</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-base text-zinc-600 leading-relaxed">Project-specific licenses, test environments, cloud usage, or design tool subscriptions.</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-zinc-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <FiGlobe className="text-[#fb5642] shrink-0" />
                            <span className="text-base font-medium text-zinc-900">Travel & Onsite Costs</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-base text-zinc-600 leading-relaxed">Travel, accommodation, or client-site deployment expenses incurred for project execution.</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-zinc-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <FiSettings className="text-[#fb5642] shrink-0" />
                            <span className="text-base font-medium text-zinc-900">Infrastructure Utilization</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-base text-zinc-600 leading-relaxed">Dedicated hosting, servers, or VPN access costs assigned to the client engagement.</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Costs Treated as Operating Expenses */}
            <div className="bg-white rounded-lg p-6 border border-zinc-100">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">C. Costs Treated as Operating Expenses (Below Gross Margin)</h3>
              <div className="bg-white rounded-lg p-5 border border-zinc-100">
                <p className="text-base font-semibold text-zinc-900 mb-3">
                  These expenses are organization-wide and not attributed to individual projects:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" />
                    <p className="text-base text-zinc-600">Administration, HR, and Finance overheads</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" />
                    <p className="text-base text-zinc-600">Marketing and Sales operations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" />
                    <p className="text-base text-zinc-600">Office rent, utilities, and infrastructure maintenance</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" />
                    <p className="text-base text-zinc-600">Training, R&D, and innovation costs</p>
                  </div>
                  <div className="flex items-start gap-2 md:col-span-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" />
                    <p className="text-base text-zinc-600">Depreciation, corporate IT, and compliance costs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Oversight & Margin Governance */}
        <div className="bg-white rounded-xl border border-zinc-200 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-zinc-50 rounded-lg">
              <FiBarChart2 className="text-[#fb5642] text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              4. Financial Oversight & Margin Governance
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-5 border border-zinc-100">
              <div className="flex items-center gap-2 mb-3">
                <FiTrendingUp className="text-[#fb5642]" />
                <h3 className="text-base font-semibold text-zinc-900">Monthly Reviews</h3>
              </div>
              <p className="text-base text-zinc-600 leading-relaxed">
                Gross Margin performance is reviewed monthly at project and subsidiary levels by the Delivery Head, and CRO.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-5 border border-zinc-100">
              <div className="flex items-center gap-2 mb-3">
                <FiAlertCircle className="text-[#fb5642]" />
                <h3 className="text-base font-semibold text-zinc-900">Threshold Management</h3>
              </div>
              <p className="text-base text-zinc-600 leading-relaxed">
                Projects below threshold margins trigger structured RCA and corrective actions focused on utilization, scope control, or delivery efficiency.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-5 border border-zinc-100">
              <div className="flex items-center gap-2 mb-3">
                <FiPieChart className="text-[#fb5642]" />
                <h3 className="text-base font-semibold text-zinc-900">Data Integration</h3>
              </div>
              <p className="text-base text-zinc-600 leading-relaxed">
                Financial data from Prodacker feeds directly into quarterly forecasting and annual budgeting, ensuring consistent visibility from project-level metrics to organizational P&L.
              </p>
            </div>
          </div>
        </div>
        </div>

       
      </div>
  );
}
