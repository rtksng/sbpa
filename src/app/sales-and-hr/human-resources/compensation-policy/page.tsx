import { FiDollarSign, FiTrendingUp, FiUsers, FiAward, FiBriefcase, FiFileText, FiCalendar, FiCreditCard, FiBarChart2, FiCheckCircle, FiClock, FiUser, FiUserCheck } from 'react-icons/fi';

export default function CompensationPolicy() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Compensation Policy
          </h1>
          <p className="text-zinc-600">
            Comprehensive compensation structure, review process, payroll, and travel expenses policy
          </p>
        </div>

        {/* Compensation Structure */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiBriefcase className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Compensation Structure
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              Describe compensation components for consultants, subcontractors, management and administrative personnel.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiUsers className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">Consultants</h3>
                </div>
                <p className="text-lg text-zinc-600">Performance-based bonuses linked to project delivery, client satisfaction, or billable utilization rate. Example: 5-15% of annual salary depending on project profitability and client feedback.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiFileText className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">Subcontractors</h3>
                </div>
                <p className="text-lg text-zinc-600">Generally, not eligible for internal bonuses but may receive completion or performance incentives in fixed-term contracts.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiAward className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">Management</h3>
                </div>
                <p className="text-lg text-zinc-600">Annual performance bonuses tied to company profitability, departmental goals, and leadership performance (10-30% of base salary).</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiBriefcase className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">Administrative Personnel</h3>
                </div>
                <p className="text-lg text-zinc-600">Modest annual bonuses based on company performance or individual objectives (3–10% of annual salary).</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiBarChart2 className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Salary Grid
                </h3>
                </div>
                <p className="text-lg text-zinc-600">Salaries are determined based on position, level of responsibility, qualifications, and experience. Each role (consultant, subcontractor, management, administrative staff) falls within a defined pay band or rate structure. Periodic reviews ensure competitiveness with market standards and internal equity.</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">By role/level: Defined pay bands for each position type</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">By experience: Progression within pay bands based on tenure and performance</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Geographic variations: Market adjustments for different locations</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiTrendingUp className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Bonus System
                </h3>
                </div>
                <p className="text-lg text-zinc-600">Performance-based bonuses are awarded according to individual, project, and company results. Consultants and Management: Eligible for annual or project completion bonuses tied to profitability, client satisfaction, and performance metrics. Administrative Staff: May receive annual performance or company success bonuses. Subcontractors: Generally not eligible unless stipulated in the contract.</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Performance bonuses: Tied to individual and team achievements</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Annual bonuses: Based on company performance and departmental goals</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Project bonuses: Awarded upon successful project completion</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiDollarSign className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Commissions
                </h3>
                </div>
                <p className="text-lg text-zinc-600">Applicable to employees directly involved in business development or sales activities. Commissions are calculated as a percentage of the value of secured contracts or projects. Management may receive override commissions on team sales or revenue performance. Administrative and non-sales subcontractor roles are typically not commission-based.</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Commission rates: Percentage of contract/project value</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Eligibility: Sales and business development roles only</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Calculation method: Based on secured contracts and revenue performance</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiCalendar className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Benefits (pension, health insurance, company car etc)
                </h3>
                </div>
                <p className="text-lg text-zinc-600">Comprehensive benefits package including pension, health insurance, and other perks designed to support employee well-being and work-life balance.</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Pension Plan: Employer contributions based on a percentage of gross salary</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Health Insurance: Comprehensive medical, dental, and vision coverage</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Company Car/Allowance: Provided to consultants and management roles requiring frequent travel</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Life and Disability Insurance: Coverage based on role and tenure</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Paid Leave: Annual vacation, sick leave, and statutory holidays</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Professional Development: Training and certification support</p>
                  </div>
                </div>
              </div>


              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiAward className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Other Benefits etc.
                </h3>
                </div>
                <p className="text-lg text-zinc-600">Additional perks and programs designed to enhance employee experience and support work-life balance.</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Flexible or hybrid work arrangements</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Performance recognition awards and service milestones</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Profit-sharing or stock option plans for senior management</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Employee wellness initiatives and team-building events</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Paid professional membership fees and licensing costs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compensation Review */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiTrendingUp className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Compensation Review
            </h2>
          </div>
          <div>
            <div className="space-y-6">
              {/* Performance Appraisal Process */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  Performance Appraisal Process
                </h3>
                <p className="text-zinc-600 mb-4">
                  <strong>Objective:</strong> To evaluate employee performance, provide constructive feedback, and align individual goals with organizational objectives.
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-[#fb5642]/10 rounded">
                        <FiClock className="text-[#fb5642]" size={16} />
                      </div>
                      <h4 className="text-lg font-semibold text-zinc-900">Timing</h4>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-lg font-medium text-zinc-900 mb-1">Annual Review:</p>
                        <p className="text-lg text-zinc-600">Most organizations conduct performance appraisals once a year as part of the formal HR cycle.</p>
                      </div>
                      <div>
                        <p className="text-lg font-medium text-zinc-900 mb-1">Mid-Year Check-Ins / As-Needed Reviews:</p>
                        <p className="text-lg text-zinc-600">Some companies supplement annual reviews with mid-year reviews or ad-hoc appraisals to adjust goals, address performance issues, or recognize exceptional contributions.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-[#fb5642]/10 rounded">
                        <FiUsers className="text-[#fb5642]" size={16} />
                      </div>
                      <h4 className="text-lg font-semibold text-zinc-900">Roles in the Appraisal Process</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1.5 bg-[#fb5642] rounded">
                            <FiUser className="text-white" size={16} />
                          </div>
                          <h5 className="text-lg font-semibold text-zinc-900">Employee</h5>
                        </div>
                        <p className="text-sm text-zinc-600">Self-assessment, set personal goals, reflect on achievements and development areas.</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1.5 bg-[#fb5642] rounded">
                            <FiUserCheck className="text-white" size={16} />
                          </div>
                          <h5 className="text-lg font-semibold text-zinc-900">Manager / Supervisor</h5>
                        </div>
                        <p className="text-sm text-zinc-600">Evaluate employee performance against goals, provide feedback, identify strengths and development needs, recommend rewards or improvement plans.</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1.5 bg-[#fb5642] rounded">
                            <FiFileText className="text-white" size={16} />
                          </div>
                          <h5 className="text-lg font-semibold text-zinc-900">HR / Talent Management</h5>
                        </div>
                        <p className="text-sm text-zinc-600">Design appraisal framework, provide guidance, ensure consistency and compliance, collect ratings, and compile overall performance data.</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1.5 bg-[#fb5642] rounded">
                            <FiAward className="text-white" size={16} />
                          </div>
                          <h5 className="text-lg font-semibold text-zinc-900">Senior Management</h5>
                        </div>
                        <p className="text-sm text-zinc-600">Approve final ratings, ensure fairness, and align appraisal outcomes with organizational objectives.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compensation Review Process */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  Compensation Review Process
                </h3>
                <p className="text-zinc-600 mb-4">
                  <strong>Objective:</strong> To ensure fair and competitive compensation aligned with performance, market benchmarks, and budget constraints.
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-[#fb5642]/10 rounded">
                        <FiClock className="text-[#fb5642]" size={16} />
                      </div>
                      <h4 className="text-lg font-semibold text-zinc-900">Timing</h4>
                    </div>
                    <p className="text-lg text-zinc-600">Typically annual, coinciding with the performance appraisal cycle. Can also occur on an ad-hoc basis for promotions, role changes, or market adjustments.</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-[#fb5642]/10 rounded">
                        <FiDollarSign className="text-[#fb5642]" size={16} />
                      </div>
                      <h4 className="text-lg font-semibold text-zinc-900">Budget and Average Increase</h4>
                    </div>
                    <p className="text-lg text-zinc-600 mb-3">Organizations typically allocate a salary increase budget of 3-6% of base salary per year for merit-based increases (can vary by industry, company performance, or economic conditions).</p>
                    <div className="space-y-1">
                      <div className="flex items-start gap-2">
                        <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                        <p className="text-lg text-zinc-600">Top performers may receive above-average increases, while average performers may receive standard adjustments.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                        <p className="text-lg text-zinc-600">Promotions or role changes can attract higher increases outside the standard budget.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-[#fb5642]/10 rounded">
                        <FiTrendingUp className="text-[#fb5642]" size={16} />
                      </div>
                      <h4 className="text-lg font-semibold text-zinc-900">Reflection in Bill Rates (for client-facing roles / contractors)</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-lg font-medium text-zinc-900 mb-1">Direct Employees:</p>
                        <p className="text-lg text-zinc-600">Increases are reflected in payroll; for client billing (if the employee is on a client project), increases may impact project costs.</p>
                      </div>
                      <div>
                        <p className="text-lg font-medium text-zinc-900 mb-1">Contractors / Consultants:</p>
                        <div className="ml-2 space-y-1">
                          <div className="flex items-start gap-2">
                            <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                            <p className="text-lg text-zinc-600">Performance-based increases or annual adjustments can be reflected in bill rates charged to clients, usually after negotiation and approval.</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                            <p className="text-lg text-zinc-600">Changes are documented in contracts or project billing agreements.</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-medium text-zinc-900 mb-1">Budgeting:</p>
                        <p className="text-lg text-zinc-600">HR and finance ensure that performance-based compensation increases are affordable within client billing or project budgets.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payroll Process */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiFileText className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Payroll Process
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              The payroll process ensures employees are paid accurately and on time, in compliance with labour laws, tax regulations, and company policies.
            </p>
            <p className="text-zinc-600 text-lg mb-4">
              <strong>Source:</strong> HR to provide
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiCalendar className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Payroll Cycle
                </h3>
                </div>
                <p className="text-lg text-zinc-600">Payroll is typically processed monthly, bi-weekly, or weekly, depending on company policy and local labour regulations.</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Frequency: Monthly, bi-weekly, or weekly based on company policy</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Cycle Steps: 1) Payroll period starts and end dates are defined. 2) Timesheets, leave records, and attendance data are collected. 3) Payroll is calculated, reviewed, approved, and disbursed.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Pay dates: Scheduled dates aligned with payroll frequency</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Cut-off dates: Deadlines for timesheet submission and data collection</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiFileText className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    How are timesheets used to calculate payroll
                </h3>
                </div>
                <p className="text-lg text-zinc-600">Employees submit timesheets (manual or via an HRIS/time tracking system) to record hours worked, overtime, and paid/unpaid leaves. Timesheets are reviewed and approved by managers before payroll processing. Payroll calculation depends on timesheet data to ensure accurate wages, overtime, and allowances.</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Timesheet submission: Manual or via HRIS/time tracking system</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Hours calculation: Regular hours, overtime hours, paid leaves, unpaid leaves, and absences</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Overtime handling: Premium rates applied to overtime hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiUsers className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Who calculates payroll
                </h3>
                </div>
                <p className="text-lg text-zinc-600">Payroll is usually calculated by the Payroll Team or Finance/HR Payroll Specialist. For organizations using an HR/Payroll system, calculations are automated based on employee data, timesheets, and pre-defined salary rules.</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Responsible department: Payroll Team, Finance, or HR</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Roles involved: Payroll Specialists, Finance personnel, HR Payroll Specialists</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">System/tools used: HRIS/Payroll systems with automated calculations based on pre-defined rules</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiCheckCircle className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Approval Process etc.
                </h3>
                </div>
                <p className="text-lg text-zinc-600">Multi-level approval process ensures payroll accuracy and compliance. Payroll reports are generated for record-keeping, audits, and statutory compliance (tax filings, social security, etc.).</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Timesheet Approval: Managers verify hours worked and approve timesheets</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Payroll Verification: Payroll team reviews calculated salaries, deductions, and adjustments</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Finance/HR Approval: Senior HR or finance personnel approve the final payroll for disbursement</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Disbursement: Salaries are transferred to employee bank accounts or issued via checks on the scheduled payroll date</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Reporting & Compliance: Payroll reports generated for record-keeping, audits, and statutory compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Expenses Policy */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiCreditCard className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Travel Expenses Policy
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              Describe travel expenses policy.
            </p>
            <p className="text-zinc-600 text-lg mb-4">
              <strong>Source:</strong> HR to provide
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642] rounded">
                    <FiUsers className="text-white" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Travel Policy by Employee Category (consultants, admin staff, management etc) and Billable vs Non-Billable Travel
                </h3>
                </div>
                <p className="text-lg text-zinc-600">Travel policies vary by employee category and whether travel is billable to clients or company-funded. Billable travel is reimbursed at cost plus markup, while non-billable travel follows expense reimbursement guidelines.</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-[#fb5642]/10 rounded">
                        <FiUsers className="text-[#fb5642]" size={16} />
                      </div>
                      <h4 className="text-lg font-semibold text-zinc-900">Consultants</h4>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-zinc-900 mb-1">Billable:</p>
                        <p className="text-sm text-zinc-600">Full reimbursement plus 15% markup for client billing</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-900 mb-1">Non-billable:</p>
                        <p className="text-sm text-zinc-600">Economy class flights, mid-range hotels, standard per diem</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-[#fb5642]/10 rounded">
                        <FiBriefcase className="text-[#fb5642]" size={16} />
                      </div>
                      <h4 className="text-lg font-semibold text-zinc-900">Admin Staff</h4>
                    </div>
                    <p className="text-sm text-zinc-600">Limited to essential business travel only, economy class, budget hotels</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 bg-[#fb5642]/10 rounded">
                        <FiAward className="text-[#fb5642]" size={16} />
                      </div>
                      <h4 className="text-lg font-semibold text-zinc-900">Management</h4>
                    </div>
                    <p className="text-sm text-zinc-600">Business class for international flights over 6 hours, premium hotels for client meetings</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiCalendar className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Booking Process (company vs employee)
                </h3>
                </div>
                <p className="text-lg text-zinc-600">Travel booking is handled through designated channels to ensure cost control, safety, and compliance. Company booking provides better rates and centralized management.</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Company booking: Preferred for international travel and major client engagements through corporate travel agency</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Employee booking: Allowed for domestic travel under $2,000 with pre-approval and use of preferred vendors</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Preferred vendors: Corporate contracts with airlines, hotels, and car rental companies for discounted rates</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiDollarSign className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Per Diem Allowances vs Actual Costs Reimbursement
                </h3>
                </div>
                <p className="text-lg text-zinc-600">Per diem allowances provide fixed daily rates for meals and incidentals, while actual cost reimbursement covers specific expenses with receipts. Per diem is preferred for simplicity and cost control.</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Per diem rates: $75/day domestic, $125/day international (includes meals and incidentals)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Actual cost reimbursement: For entertainment, client gifts, and special circumstances requiring receipts</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">When each applies: Per diem for standard business travel, actual costs for business entertainment or special approvals</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiCreditCard className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Use of Company Cards
                </h3>
                </div>
                <p className="text-lg text-zinc-600">Company cards are issued to eligible employees for approved business expenses, providing better expense tracking and faster reimbursement processing.</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Eligibility: Management, consultants on client projects, and administrative staff with frequent travel</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Usage guidelines: Business expenses only, receipts required for all transactions over $25, monthly statement review</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Limits: $5,000/month for individual cards, higher limits for management with approval</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-zinc-200 transition-shadow duration-200 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-[#fb5642]/10 rounded">
                    <FiCheckCircle className="text-[#fb5642]" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Approval Process etc.
                </h3>
                </div>
                <p className="text-lg text-zinc-600">All travel expenses require pre-approval and follow a tiered approval process based on cost and travel type to ensure budget compliance and business necessity.</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Pre-approval requirements: Travel authorization form required for all business travel, including estimated costs</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Approval levels: Manager approval for travel under $2,500, department head for $2,500-$10,000, executive approval for over $10,000</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#fb5642] mt-0.5 shrink-0" size={14} />
                    <p className="text-lg text-zinc-600">Documentation requirements: Original receipts, boarding passes, hotel folios, and expense reports submitted within 30 days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Spend Categories */}
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-[#fb5642] rounded">
                  <FiBarChart2 className="text-white text-lg" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  What are the main spend categories (based on value in 2023)?
                </h3>
              </div>
              <p className="text-lg text-zinc-600 mb-3">Based on 2023 travel expense analysis, these represent the highest value spending categories, accounting for approximately 78% of total travel expenses.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3 border border-zinc-200">
                  <p className="text-lg font-medium text-zinc-900">Airfare (35%):</p>
                  <p className="text-lg text-zinc-600">International business class and economy flights to client locations and conferences</p>
                </div>
                <div className="bg-white rounded p-3 border border-zinc-200">
                  <p className="text-lg font-medium text-zinc-900">Hotels & Lodging (28%):</p>
                  <p className="text-lg text-zinc-600">Extended stays at business hotels, conference venues, and client-site accommodations</p>
                </div>
                <div className="bg-white rounded p-3 border border-zinc-200">
                  <p className="text-lg font-medium text-zinc-900">Meals & Per Diem (15%):</p>
                  <p className="text-lg text-zinc-600">Client meetings, business dinners, and daily meal allowances during travel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
