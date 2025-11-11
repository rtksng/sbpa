import { FiTrendingUp, FiDollarSign, FiUsers, FiTarget, FiBarChart2, FiBriefcase, FiFileText, FiAward, FiCheckCircle, FiSettings, FiCheck } from 'react-icons/fi';

export default function Sales() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Sales
          </h1>
          <p className="text-zinc-600">
            Sales organization, strategy, processes, and management information
          </p>
        </div>

        {/* Sales Management Model */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiSettings className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Sales Management Model
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-6">
              The Sales Management Model at Seasia Infotech is designed to ensure a balance between strategic leadership involvement and operational autonomy. It establishes structured visibility across sales performance, deal governance, and individual development.
            </p>
            
            <div className=" grid lg:grid-cols-3 gap-4 ">
              {/* Commercial Engagements */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#fb5642] group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Commercial Engagements
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Commercial meetings are opportunity-driven rather than scheduled by calendar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">These meetings are conducted with prospects and are typically attended by the CRO, Subsidiary Head, or Tech Lead, depending on opportunity complexity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">They focus on validating scope, aligning business intent, and ensuring stakeholder clarity before advancing to formal proposals.</span>
                  </li>
                </ul>
              </div>

              {/* Sales Coaching and Enablement */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#fb5642] group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Sales Coaching and Enablement
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Regularly scheduled sales coaching sessions are conducted to enhance discovery, objection handling, and negotiation skills.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Sessions also emphasize cross-team alignment between Pre-Sales, Marketing, and Delivery.</span>
                  </li>
                </ul>
              </div>

              {/* Reporting and Review Framework */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#fb5642] group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Reporting and Review Framework
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">A structured reporting cadence is maintained through CRM dashboards and weekly internal updates.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Metrics such as lead-to-proposal conversion, proposal TAT, and deal outcomes are tracked.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Monthly performance reviews are led by the CRO with subsidiary heads to identify improvement areas and training needs.</span>
                  </li>
                </ul>
              </div>

              
            </div>
            {/* Summary */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mt-3">
                <p className="text-sm text-zinc-900 italic">
                  In essence, the model promotes a top-down strategic alignment while empowering sales teams with operational visibility and decision support through data-driven reviews.
                </p>
              </div>
          </div>
        </div>

        {/* Business Development Organization */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiBriefcase className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Business Development Organization
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-6">
              Seasia's Business Development Organization functions as a strategically aligned yet independently operating structure focused on lead generation, relationship management, and deal acquisition.
            </p>
            
            <div className=" grid lg:grid-cols-2 gap-4 ">
              {/* Roles and Responsibilities */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-orange-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Roles and Responsibilities
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Business Managers are primarily responsible for new business development, client engagement, and pipeline expansion.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">They coordinate with Delivery and Project Management teams for capability inputs but do not participate in resource staffing or deployment decisions.</span>
                  </li>
                </ul>
              </div>

              {/* Handoff and Collaboration */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-orange-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Handoff and Collaboration
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Upon deal closure, all project details—including scope, assumptions, and pricing rationale—are transitioned formally to the Delivery team through structured handover documents.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">This ensures a clear segregation between sales functions and delivery accountability.</span>
                  </li>
                </ul>
              </div>

              {/* Summary */}
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200 col-span-2">
                <p className="text-sm text-zinc-900 italic">
                  This structure ensures agility in client engagement while preserving process integrity and delivery focus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Strategy */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiTarget className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Sales Strategy, Lead Generation & Pipeline Management
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-6">
              Seasia follows a multi-channel, ICP-led sales strategy that combines structured marketing intelligence with data-backed outbound prospecting to build a balanced, high-quality pipeline.
            </p>
            <div className=" grid lg:grid-cols-3 gap-4 ">
              {/* Dual-Channel Sales Strategy */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#fb5642] group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Dual-Channel Sales Strategy
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed"><span className="font-semibold">Inbound:</span> Leads flow through marketing-driven channels—website, campaigns, digital listings, and referrals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed"><span className="font-semibold">Outbound:</span> Proactive prospecting through LinkedIn, Upwork, targeted cold outreach, and partnerships forms a major part of the acquisition strategy.</span>
                  </li>
                </ul>
              </div>

              {/* ICP-Driven Lead Qualification */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#fb5642] group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    ICP-Driven Lead Qualification
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Every lead is validated against a defined Ideal Customer Profile (ICP) jointly maintained by Marketing and Sales.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">ICP alignment ensures efficient resource allocation toward leads with higher probability of conversion and long-term engagement value.</span>
                  </li>
                </ul>
              </div>

              {/* Pipeline Governance */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#fb5642] group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Pipeline Governance
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Leads are managed through a standardized CRM-driven pipeline: <span className="font-semibold text-zinc-900">Lead → Discovery → Proposal → Negotiation → Closure → Handover</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">The pipeline provides real-time visibility to leadership, improving forecasting accuracy and accountability.</span>
                  </li>
                </ul>
              </div>

              {/* Summary */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 col-span-3">
                <p className="text-sm text-zinc-900 italic">
                  The integrated sales and marketing collaboration ensures sustained pipeline quality and strategic consistency across subsidiaries and domains.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* KPIs for Sales Activity */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiBarChart2 className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Sales KPIs and Performance Tracking
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-6">
              A well-defined KPI framework forms the core of Seasia's sales governance model, providing both performance transparency and decision-making support.
            </p>
            
            <div className=" grid lg:grid-cols-3 gap-4 ">
              {/* Operational KPIs */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-orange-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Operational KPIs
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Lead-to-Proposal Ratio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Conversion Rate (Proposal to Win)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Average Turnaround Time (Qualification to Proposal)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Iterations per Proposal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Active Pipeline Velocity</span>
                  </li>
                </ul>
              </div>

              {/* Financial KPIs */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-orange-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Financial KPIs
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Average Deal Value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Revenue per Qualified Lead</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Regional and Subsidiary-wise Contribution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Discount vs. Margin Trend Analysis</span>
                  </li>
                </ul>
              </div>

              {/* Monitoring and Governance */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-orange-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Monitoring and Governance
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">KPIs are auto-tracked through CRM dashboards and validated monthly by Sales Heads and the CRO.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Insights from these reviews feed directly into sales coaching, forecasting, and quarterly goal setting.</span>
                  </li>
                </ul>
              </div>

              {/* Summary */}
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200 col-span-3">
                <p className="text-sm text-zinc-900 italic">
                  This integrated KPI framework drives accountability and aligns operational performance with financial outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Incentives */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiAward className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Sales Incentive Framework
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-6">
              Seasia's sales incentive framework is built to reward collaboration, revenue generation, and strategic alignment rather than isolated achievements.
            </p>
            
            <div className=" grid lg:grid-cols-2 gap-4 ">
              {/* Incentive Model */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#fb5642] group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Incentive Model
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">The model is purely commission-based, directly linked to realized deal value.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Commissions are calculated as a fixed percentage of closed revenues and processed post-client confirmation.</span>
                  </li>
                </ul>
              </div>

              {/* Team-Based Structure */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#fb5642] group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Team-Based Structure
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Incentives are structured around team performance, fostering cooperation among Sales, Marketing, and Pre-Sales teams.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Targets are defined quarterly, reflecting both company-level and subsidiary-level priorities.</span>
                  </li>
                </ul>
              </div>

              {/* Summary */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 col-span-2">
                <p className="text-sm text-zinc-900 italic">
                  This performance-linked structure ensures fairness, motivates collective achievement, and reinforces alignment to organizational objectives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Evaluation Process */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiCheckCircle className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Project Evaluation and Sales Process
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-6">
              The sales process follows a structured, stage-wise model ensuring opportunity validation, cross-functional participation, and controlled progression toward closure.
            </p>
            
            <div className="space-y-6">
              {/* Stage Framework */}
              <div>
                <h3 className="text-base font-semibold text-zinc-900 mb-4">
                  1. Stage Framework
                </h3>
                <div className="space-y-4">
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#fb5642] text-white text-xs font-semibold shrink-0 mt-0.5">1</span>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-900 mb-1">Lead Qualification</h4>
                        <p className="text-sm text-zinc-700">Based on ICP alignment and CRM verification.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#fb5642] text-white text-xs font-semibold shrink-0 mt-0.5">2</span>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-900 mb-1">Discovery & Requirement Definition</h4>
                        <p className="text-sm text-zinc-700">Conducted by Sales, often involving the CRO, BA, or Tech Lead.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#fb5642] text-white text-xs font-semibold shrink-0 mt-0.5">3</span>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-900 mb-1">Internal Evaluation (Go/No-Go)</h4>
                        <p className="text-sm text-zinc-700">Formal review for complex or high-value projects; routine opportunities may be fast-tracked by the BDM.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#fb5642] text-white text-xs font-semibold shrink-0 mt-0.5">4</span>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-900 mb-1">Solutioning & Proposal Creation</h4>
                        <p className="text-sm text-zinc-700">Joint effort between Sales, BA, and Delivery for scoping and pricing.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#fb5642] text-white text-xs font-semibold shrink-0 mt-0.5">5</span>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-900 mb-1">Proposal Negotiation & Clarifications</h4>
                        <p className="text-sm text-zinc-700">Managed via CRM-tracked communication logs ensuring version control.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#fb5642] text-white text-xs font-semibold shrink-0 mt-0.5">6</span>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-900 mb-1">Project Handover</h4>
                        <p className="text-sm text-zinc-700">Formal transition to Delivery upon client confirmation and contract execution.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Governance and Roles */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-orange-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Governance and Roles
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed"><span className="font-semibold">Sales/BDM:</span> Opportunity ownership and client communication.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed"><span className="font-semibold">CRO:</span> Strategic oversight and commercial validation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed"><span className="font-semibold">Delivery/Tech Lead:</span> Feasibility and estimation inputs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed"><span className="font-semibold">BA/Pre-Sales:</span> Documentation and solution articulation.</span>
                  </li>
                </ul>
              </div>

              {/* Summary */}
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <p className="text-sm text-zinc-900 italic">
                  This structured flow ensures agility without compromising governance or quality in client engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Method and Process */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiDollarSign className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Pricing Method and Approval Process
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-6">
              Pricing at Seasia follows a transparent, structured workflow ensuring balance between competitiveness and profitability.
            </p>
            
            <div className=" grid lg:grid-cols-3 gap-4 ">
              {/* Pricing Preparation */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#fb5642] group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Pricing Preparation
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">The Business Development Manager prepares the initial pricing based on estimates received through a detailed Work Breakdown Structure (WBS).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">The WBS captures all modules, roles, estimated effort, and cost assumptions.</span>
                  </li>
                </ul>
              </div>

              {/* Validation and Approval */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#fb5642] group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Validation and Approval
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Pricing is reviewed internally for feasibility by Delivery or Technical Leads.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Any non-standard pricing, special discount, or deviation from margin norms requires CRO or CTO approval.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">Business Development Managers are authorized to provide discounts up to <span className="font-semibold text-zinc-900">5%</span> without escalation.</span>
                  </li>
                </ul>
              </div>

              {/* Governance Intent */}
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#fb5642] group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fb5642] flex items-center justify-center group-hover:bg-[#d94432] transition-colors">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Governance Intent
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#fee2dd] border-2 border-[#fee2dd] flex items-center justify-center">
                        <FiCheck className="text-[#fb5642] text-xs" />
                      </div>
                    </div>
                    <span className="leading-relaxed">The process ensures transparency, profitability awareness, and controlled flexibility while maintaining competitiveness during deal negotiation.</span>
                  </li>
                </ul>
              </div>

              {/* Summary */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 col-span-3">
                <p className="text-sm text-zinc-900 italic">
                  This method creates consistency across all proposals and reinforces alignment between commercial objectives and delivery realities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
