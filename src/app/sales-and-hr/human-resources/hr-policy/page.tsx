import { FiFileText, FiUsers, FiTrendingUp, FiSettings, FiBriefcase, FiCalendar, FiClock, FiAlertTriangle, FiBarChart2, FiCheck } from 'react-icons/fi';

export default function HRPolicy() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            HR Policy and Productivity Information
          </h1>
          <p className="text-zinc-600">
            Human resources policies, employment contracts, time off, and productivity metrics
          </p>
        </div>

        {/* Type of Contract */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiBriefcase className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Type of Contract
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              Permanent vs contractors vs freelancers etc. Describe benefits offered.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900 mb-2">Permanent Employees</h3>
                <p className="text-xs text-zinc-600 mb-2">Full-Time or Part-Time Staff - Hired directly by the company on an ongoing basis, usually with no fixed end date.</p>
                <div className="mt-2">
                  <p className="text-xs font-medium text-zinc-900 mb-2">Benefits:</p>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Fixed salary with regular pay schedule</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Bonuses or incentives (performance-based)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Health and insurance benefits (medical, dental, vision, life)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Paid leave (vacation, sick days, parental leave)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Retirement or pension contributions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Training and career development programs</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Job security and stability</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Employee perks (e.g., wellness programs, flexible working, stock options)</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs font-medium text-zinc-900 mb-2">Advantages for the company:</p>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Fixed salary with regular pay schedule</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Bonuses or incentives (performance-based)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Health and insurance benefits (medical, dental, vision, life)</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs font-medium text-zinc-900 mb-2">Considerations:</p>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Higher long-term costs (benefits, payroll taxes)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Less flexibility in adjusting workforce size quickly</span>
                    </div>

                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900 mb-2">Contractors</h3>
                <p className="text-xs text-zinc-600 mb-2">Fixed-Term or Project-Based Workers - Engaged for a specific period or project, often through a contract or staffing agency.</p>
                <div className="mt-2">
                  <p className="text-xs font-medium text-zinc-900 mb-2">Benefits:</p>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-amber-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Typically paid a higher hourly or daily rate instead of benefits</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-amber-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Usually do not receive company benefits such as health insurance or paid leave</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-amber-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">May get limited access to training or company resources related to their project</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs font-medium text-zinc-900 mb-2">Advantages for the company:</p>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-amber-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Flexibility to scale workforce up or down quickly</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-amber-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Specialized expertise for short-term projects</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-amber-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Lower administrative costs (benefits, onboarding, etc.)</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs font-medium text-zinc-900 mb-2">Considerations:</p>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-amber-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Less loyalty and engagement</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-amber-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">May not fully integrate into company culture</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-amber-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Knowledge and expertise may leave with them when the contract ends  </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 col-span-2">
                <h3 className="text-sm font-semibold text-zinc-900 mb-2">Freelancers</h3>
                <p className="text-xs text-zinc-600 mb-2">Independent or Self-Employed Professionals - Work independently for multiple clients, often on short assignments or deliverables.</p>
                <div className="mt-2">
                  <p className="text-xs font-medium text-zinc-900 mb-2">Benefits:</p>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-red-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">No employer-provided benefits; freelancers manage their own insurance, retirement, and taxes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-red-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Compensation is based on project or deliverable fees</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-red-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">May receive bonuses or referrals for exceptional work (rare and discretionary)</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs font-medium text-zinc-900 mb-2">Advantages for the company:</p>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-red-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Maximum flexibility and cost efficiency -pay only for work done</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-red-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Access to specialized or creative skills on demand</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-red-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">No long-term employment obligation</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs font-medium text-zinc-900 mb-2">Considerations:</p>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-red-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Limited control over availability and workflow</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-red-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Potential confidentiality or consistency issues</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiCheck className="text-red-500 shrink-0 mt-0.5" size={12} />
                      <span className="text-xs text-zinc-600">Not suitable for roles requiring deep integration or long-term collaboration.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Working Hours and Time Off */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-50 rounded-lg">
                <FiClock className="text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Weekly Working Hours
              </h3>
            </div>
            <p className="text-3xl font-bold text-zinc-900">40</p>
            <p className="text-sm text-zinc-500 mt-2">Hours per week</p>
            <p className="text-xs text-zinc-600 mt-1">8 hours per day, 5 days a week (Monday to Friday)</p>
          </div>

          <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FiCalendar className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Paid Vacation Days
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0"></div>
                  <span className="text-sm text-zinc-600">Casual Leaves</span>
                </div>
                <span className="font-semibold text-zinc-900 bg-blue-50 px-2 py-1 rounded text-sm">7 Days</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full shrink-0"></div>
                  <span className="text-sm text-zinc-600">Special Leaves</span>
                </div>
                <span className="font-semibold text-zinc-900 bg-green-50 px-2 py-1 rounded text-sm">13 Days</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full shrink-0"></div>
                  <span className="text-sm text-zinc-600">Maternity</span>
                </div>
                <span className="font-semibold text-zinc-900 bg-pink-50 px-2 py-1 rounded text-sm">180 Days</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full shrink-0"></div>
                  <span className="text-sm text-zinc-600">Paternity</span>
                </div>
                <span className="font-semibold text-zinc-900 bg-purple-50 px-2 py-1 rounded text-sm">5 Days</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-50 rounded-lg">
                <FiCalendar className="text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Holidays
              </h3>
            </div>
            <p className="text-3xl font-bold text-zinc-900">11</p>
            <p className="text-sm text-zinc-500 mt-2">Days per year</p>
          </div>

          <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FiUsers className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Sick Days
              </h3>
            </div>
            <p className="text-3xl font-bold text-zinc-900">7</p>
            <p className="text-sm text-zinc-500 mt-2">Days per year</p>
          </div>
        </div>

      </div>
    </div>
  );
}
