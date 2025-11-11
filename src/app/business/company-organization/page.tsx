import { FiUsers, FiLayers, FiBriefcase, FiTarget, FiTrendingUp, FiUserPlus, FiSettings, FiBarChart2, FiAward, FiClipboard, FiSearch, FiFilter, FiMessageSquare, FiCheckCircle, FiShield, FiUserCheck, FiGlobe, FiShare2, FiFileText, FiMessageCircle, FiGrid, FiZap } from 'react-icons/fi';

export default function CompanyOrganization() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Company Organization
          </h1>
          <p className="text-zinc-600">
            Organizational structure, teams, and management models
          </p>
        </div>

        {/* Organization Chart */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiLayers className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Organization Chart
            </h2>
          </div>
          <p className="text-zinc-600 mb-6">
            Provide the Organizational Chart of the Company showing:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <FiBriefcase className="text-orange-600" />
                <h3 className="font-semibold text-zinc-900">Management Team</h3>
              </div>
              <p className="text-sm text-zinc-600">[To be provided]</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <FiSettings className="text-blue-600" />
                <h3 className="font-semibold text-zinc-900">Technical Team</h3>
              </div>
              <p className="text-sm text-zinc-600">[To be provided]</p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <FiTrendingUp className="text-orange-600" />
                <h3 className="font-semibold text-zinc-900">Sales & Recruitment Team</h3>
              </div>
              <p className="text-sm text-zinc-600">[To be provided]</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <FiBarChart2 className="text-blue-600" />
                <h3 className="font-semibold text-zinc-900">Finance and Administration Team</h3>
              </div>
              <p className="text-sm text-zinc-600">[To be provided]</p>
            </div>
          </div>

          {/* Visual Organization Chart Placeholder */}
          <div className="bg-zinc-50 rounded-lg p-6 border border-zinc-200">
            <div className="text-center mb-6">
              <div className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
                Management Team
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium mb-2">
                  Technical Team
                </div>
              </div>
              <div className="text-center">
                <div className="bg-orange-400 text-white px-4 py-2 rounded-lg text-sm font-medium mb-2">
                  Sales & Recruitment Team
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium mb-2">
                  Finance & Admin Team
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-zinc-500 mt-4">
              [Detailed organizational chart to be provided]
            </p>
          </div>
        </div>

        {/* Management Team */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiBriefcase className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Management Team
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              Explain the main roles of each member of the management team, and if they are billable to clients or not.
            </p>
            <p className="text-zinc-600 text-sm mb-2">
              <strong>Source:</strong> GV Sir to provide
            </p>
            <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <p className="text-zinc-900">[Management team details to be provided]</p>
              <div className="mt-4 space-y-3">
                <div className="border-b border-zinc-200 pb-2">
                  <p className="text-sm font-medium text-zinc-900">Role: [To be provided]</p>
                  <p className="text-sm text-zinc-600">Main Responsibilities: [To be provided]</p>
                  <p className="text-sm text-zinc-600">Billable to Clients: [Yes/No]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales & Marketing */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiTrendingUp className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Sales & Marketing
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              Describe the sales management model: commercial meeting, coaching, sales reporting process, operational KPIs.
            </p>
            <p className="text-zinc-600 text-sm mb-4">
              <strong>Source:</strong> Anil Rana to provide
            </p>
            
            <div className="space-y-4">
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900 mb-2">
                  Commercial Meeting
                </h3>
                <p className="text-zinc-600 text-sm">[To be provided]</p>
              </div>
              
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900 mb-2">
                  Coaching
                </h3>
                <p className="text-zinc-600 text-sm">[To be provided]</p>
              </div>
              
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900 mb-2">
                  Sales Reporting Process
                </h3>
                <p className="text-zinc-600 text-sm">[To be provided]</p>
              </div>
              
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900 mb-2">
                  Operational KPIs
                </h3>
                <p className="text-zinc-600 text-sm">[To be provided]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recruitment */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiUserPlus className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Recruitment Process
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              A structured recruitment process ensures efficiency, fairness, and high-quality hiring.
            </p>
         
            
            {/* Step-by-Step Overview */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-6">
                Step-by-Step Overview:
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-zinc-200"></div>
                
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="relative flex items-start gap-6">
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 bg-white rounded-full border-4 flex items-center justify-center shadow-sm" style={{ borderColor: '#fb5642' }}>
                        <span className="text-lg font-bold" style={{ color: '#fb5642' }}>1</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="p-1.5 rounded" style={{ backgroundColor: '#fee2e2' }}>
                          <FiClipboard size={16} style={{ color: '#fb5642' }} />
                        </span>
                        <h4 className="text-sm font-semibold text-zinc-900">
                          Workforce Planning & Requisition Approval
                        </h4>
                      </div>
                      <ul className="text-sm text-zinc-600 list-disc list-inside space-y-1">
                        <li>Identify the hiring need and create a job requisition with role details, qualifications, and approvals.</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative flex items-start gap-6">
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 bg-white rounded-full border-4 flex items-center justify-center shadow-sm" style={{ borderColor: '#fb5642' }}>
                        <span className="text-lg font-bold" style={{ color: '#fb5642' }}>2</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="p-1.5 rounded" style={{ backgroundColor: '#fee2e2' }}>
                          <FiSearch size={16} style={{ color: '#fb5642' }} />
                        </span>
                        <h4 className="text-sm font-semibold text-zinc-900">
                          Job Posting & Sourcing
                        </h4>
                      </div>
                      <ul className="text-sm text-zinc-600 list-disc list-inside space-y-1">
                        <li>Publish roles on job boards, company website, social media, and internal referral platforms.</li>
                        <li>Proactively source passive candidates via LinkedIn, industry networks, and talent databases.</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative flex items-start gap-6">
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 bg-white rounded-full border-4 flex items-center justify-center shadow-sm" style={{ borderColor: '#fb5642' }}>
                        <span className="text-lg font-bold" style={{ color: '#fb5642' }}>3</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="p-1.5 rounded" style={{ backgroundColor: '#fee2e2' }}>
                          <FiFilter size={16} style={{ color: '#fb5642' }} />
                        </span>
                        <h4 className="text-sm font-semibold text-zinc-900">
                          Screening & Shortlisting
                        </h4>
                      </div>
                      <ul className="text-sm text-zinc-600 list-disc list-inside space-y-1">
                        <li>Review resumes/CVs and conduct initial phone or video screenings.</li>
                        <li>Assess candidate fit for skills, experience, and culture.</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="relative flex items-start gap-6">
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 bg-white rounded-full border-4 flex items-center justify-center shadow-sm" style={{ borderColor: '#fb5642' }}>
                        <span className="text-lg font-bold" style={{ color: '#fb5642' }}>4</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="p-1.5 rounded" style={{ backgroundColor: '#fee2e2' }}>
                          <FiMessageSquare size={16} style={{ color: '#fb5642' }} />
                        </span>
                        <h4 className="text-sm font-semibold text-zinc-900">
                          Interviews & Assessment
                        </h4>
                      </div>
                      <ul className="text-sm text-zinc-600 list-disc list-inside space-y-1">
                        <li>Conduct structured interviews (behavioural, technical, and competency-based).</li>
                        <li>Administer tests or assignments if required (technical tests, aptitude, psychometric assessments).</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Step 5 */}
                  <div className="relative flex items-start gap-6">
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 bg-white rounded-full border-4 flex items-center justify-center shadow-sm" style={{ borderColor: '#fb5642' }}>
                        <span className="text-lg font-bold" style={{ color: '#fb5642' }}>5</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="p-1.5 rounded" style={{ backgroundColor: '#fee2e2' }}>
                          <FiCheckCircle size={16} style={{ color: '#fb5642' }} />
                        </span>
                        <h4 className="text-sm font-semibold text-zinc-900">
                          Selection & Offer
                        </h4>
                      </div>
                      <ul className="text-sm text-zinc-600 list-disc list-inside space-y-1">
                        <li>Collaborate with hiring managers to select the final candidate.</li>
                        <li>Prepare and extend the offer letter, negotiate terms if needed.</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Step 6 */}
                  <div className="relative flex items-start gap-6">
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 bg-white rounded-full border-4 flex items-center justify-center shadow-sm" style={{ borderColor: '#fb5642' }}>
                        <span className="text-lg font-bold" style={{ color: '#fb5642' }}>6</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="p-1.5 rounded" style={{ backgroundColor: '#fee2e2' }}>
                          <FiShield size={16} style={{ color: '#fb5642' }} />
                        </span>
                        <h4 className="text-sm font-semibold text-zinc-900">
                          Background & Reference Checks
                        </h4>
                      </div>
                      <ul className="text-sm text-zinc-600 list-disc list-inside space-y-1">
                        <li>Verify employment history, education, and professional references.</li>
                        <li>Conduct compliance checks or security clearances for certain roles.</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Step 7 */}
                  <div className="relative flex items-start gap-6">
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 bg-white rounded-full border-4 flex items-center justify-center shadow-sm" style={{ borderColor: '#fb5642' }}>
                        <span className="text-lg font-bold" style={{ color: '#fb5642' }}>7</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="p-1.5 rounded" style={{ backgroundColor: '#fee2e2' }}>
                          <FiUserCheck size={16} style={{ color: '#fb5642' }} />
                        </span>
                        <h4 className="text-sm font-semibold text-zinc-900">
                          Onboarding
                        </h4>
                      </div>
                      <ul className="text-sm text-zinc-600 list-disc list-inside space-y-1">
                        <li>Facilitate induction and training for new hires.</li>
                        <li>Ensure smooth integration into the team.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recruitment Tools Used */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                Recruitment Tools Used
              </h3>
              <p className="text-zinc-600 mb-4 text-sm">
                Modern recruitment teams leverage technology to streamline processes and improve outcomes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <FiGlobe className="text-orange-600" size={18} />
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-900">
                      Job Boards & Career Platforms
                    </h4>
                  </div>
                  <p className="text-sm text-zinc-600">
                    LinkedIn, Naukri.com, Company Website - for posting vacancies and sourcing candidates.
                  </p>
                </div>
                
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FiShare2 className="text-blue-600" size={18} />
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-900">
                      Social Media
                    </h4>
                  </div>
                  <p className="text-sm text-zinc-600">
                    LinkedIn - for employer branding and sourcing passive candidates.
                  </p>
                </div>
                
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <FiUsers className="text-green-600" size={18} />
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-900">
                      Employee Referral Platforms
                    </h4>
                  </div>
                  <p className="text-sm text-zinc-600">
                    Internal Referral.
                  </p>
                </div>
                
            <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <FiFileText className="text-purple-600" size={18} />
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-900">
                      Assessment Tools
                    </h4>
                  </div>
                  <p className="text-sm text-zinc-600">
                    For testing skills, aptitude, and personality.
                  </p>
                </div>
                
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <FiMessageCircle className="text-orange-600" size={18} />
                </div>
                    <h4 className="text-sm font-semibold text-zinc-900">
                      Communication & Collaboration Tools
                    </h4>
                </div>
                  <p className="text-sm text-zinc-600">
                    Microsoft Teams - for scheduling, interviews, and coordination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Structuring */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiSettings className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Projects Structuring
            </h2>
          </div>
          <div>
            {/* Overview */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">Overview</h3>
              <p className="text-zinc-600 mb-3">
                Seasia Infotech follows a standardized yet flexible project structuring framework that aligns with its CMMI Level 5 process model and "Seasia Agile Model (SAM)".
              </p>
              <p className="text-zinc-600">
                Projects are structured to ensure clarity of ownership, optimized staffing, proactive risk control, and measurable delivery outcomes.
              </p>
            </div>

            {/* Project Structuring Framework */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">1. Project Structuring Framework</h3>
              
              <div className="space-y-4 mb-4">
                <div className="bg-white rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#fb5642' }}>
                      <FiGrid className="text-white" size={18} />
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-900">Phased Lifecycle</h4>
                  </div>
                  <p className="text-sm text-zinc-600 mb-3">
                    Every engagement is divided into clear, auditable stages:
                  </p>
                  <ul className="text-sm text-zinc-600 list-disc list-inside space-y-2">
                    <li><strong>Initiation & Handover:</strong> Sales-to-Delivery transition using a formal Handoff Document containing all proposal, estimate, and scope details.</li>
                    <li><strong>Planning & Architecture:</strong> Detailed planning involving the PM, Tech Lead, Architect(s), and BA to finalize scope, WBS, and delivery approach.</li>
                    <li><strong>Execution & Iteration:</strong> Sprint-based delivery under SAM (Seasia Agile Model), with QA and Architecture integrated from Day 1.</li>
                    <li><strong>Quality Gate & UAT:</strong> QA validation, client review cycles, and performance/security testing.</li>
                    <li><strong>Deployment & Transition:</strong> Managed release cycle, knowledge transfer, and stabilization support.</li>
                    <li><strong>Closure & Retrospective:</strong> Documentation of lessons learned, client feedback, and KPI evaluation.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#fb5642' }}>
                      <FiShield className="text-white" size={18} />
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-900">Delivery Governance</h4>
                  </div>
                  <ul className="text-sm text-zinc-600 list-disc list-inside space-y-2">
                    <li>Project Management Office (PMO) oversees governance, reporting, and compliance with delivery standards.</li>
                    <li>Each project has defined charters outlining milestones, roles, and SLAs.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Staffing Model */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">2. Staffing Model</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#fb5642' }}>
                      <FiUsers className="text-white" size={18} />
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-900">Team Composition</h4>
                  </div>
                  <ul className="text-sm text-zinc-600 list-disc list-inside space-y-2">
                    <li><strong>Project Manager (PM):</strong> Overall delivery lead, responsible for schedule, scope, and client engagement.</li>
                    <li><strong>Tech Lead / Architect:</strong> Defines technical architecture and ensures alignment with enterprise standards.</li>
                    <li><strong>Business Analyst (BA):</strong> Bridges business goals with technical execution, maintains requirements documentation.</li>
                    <li><strong>Developers / Engineers:</strong> Full-stack teams covering frontend, backend, DevOps, and integrations.</li>
                    <li><strong>QA Team:</strong> Dedicated QA resources aligned from initiation, covering manual, automation, performance, and security testing.</li>
                    <li><strong>UI/UX Designers:</strong> Integrated from early design stages for usability and experience optimization.</li>
                    <li><strong>Support / DevOps / Infra Engineers:</strong> For CI/CD, monitoring, and post-launch support.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#fb5642' }}>
                      <FiTarget className="text-white" size={18} />
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-900">Resource Allocation</h4>
                  </div>
                  <ul className="text-sm text-zinc-600 list-disc list-inside space-y-2">
                    <li>Resources are drawn from a central competency pool, ensuring domain and technology alignment.</li>
                    <li>For new domains or specialized engagements, cross-functional pods are formed under a Delivery Head's supervision.</li>
                    <li>Bench management and capacity planning are managed quarterly through Seasia Connect to maintain agility in deployment.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project Management Methodology */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">3. Project Management Methodology</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#fb5642' }}>
                      <FiZap className="text-white" size={18} />
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-900">Seasia Agile Model (SAM)</h4>
                  </div>
                  <ul className="text-sm text-zinc-600 list-disc list-inside space-y-2">
                    <li>A hybrid framework combining Agile, Scrum, and CMMI principles.</li>
                    <li>Ensures iterative delivery, defined sprint reviews, and documentation discipline.</li>
                    <li>Tailored based on engagement type — Fixed Price (milestone-driven) or T&M (velocity-driven).</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#fb5642' }}>
                      <FiMessageCircle className="text-white" size={18} />
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-900">Communication & Collaboration</h4>
                  </div>
                  <ul className="text-sm text-zinc-600 list-disc list-inside space-y-2">
                    <li>Centralized collaboration through Prodacker (Seasia's project tracking tool) integrated with CRM.</li>
                    <li>Weekly internal reviews and fortnightly client sync-ups maintain transparency.</li>
                    <li>Escalation matrices ensure timely issue resolution and cross-departmental visibility.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#fb5642' }}>
                      <FiBarChart2 className="text-white" size={18} />
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-900">Performance Tracking</h4>
                  </div>
                  <ul className="text-sm text-zinc-600 list-disc list-inside space-y-2">
                    <li>Metrics include delivery velocity, sprint burndown, defect leakage, and client satisfaction scores.</li>
                    <li>PMs maintain a Project Performance Dashboard reviewed monthly by Delivery Heads and the CTO, CEO.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Risk & Quality Management */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">4. Risk & Quality Management</h3>
              <div className="bg-white rounded-lg p-4 border border-zinc-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#fb5642' }}>
                    <FiCheckCircle className="text-white" size={18} />
                  </div>
                  <h4 className="text-sm font-semibold text-zinc-900">Risk & Quality Management</h4>
                </div>
                <ul className="text-sm text-zinc-600 list-disc list-inside space-y-2">
                  <li>QA and Risk functions are embedded throughout the lifecycle — not post-development.</li>
                  <li>Architecture reviews, test automation frameworks, and early performance testing mitigate delivery and scalability risks.</li>
                  <li>Continuous improvement feedback loops ensure learnings are captured for future engagements.</li>
                </ul>
                <p className="text-sm text-zinc-600 mt-3">
                  This integrated structure ensures every project is managed with a clear accountability chain, proactive risk control, and quantifiable quality outcomes.
                </p>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-sm font-semibold text-zinc-900 mb-2">Summary</h3>
              <p className="text-sm text-zinc-600">
                Seasia's project structuring emphasizes clarity, agility, and accountability — with defined governance layers and collaborative ownership across functions. The model ensures that each engagement is staffed with the right expertise, managed through data-driven oversight, and delivered with predictable quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
