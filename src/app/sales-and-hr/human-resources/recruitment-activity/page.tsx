import { FiUserPlus, FiUsers, FiTrendingUp, FiCalendar, FiTarget, FiDollarSign, FiGlobe, FiSettings } from 'react-icons/fi';

export default function RecruitmentActivity() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Recruitment Activity
          </h1>
          <p className="text-zinc-600">
            Talent acquisition, recruitment strategy, and hiring processes
          </p>

        </div>

        {/* Recruiting Activity */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiUserPlus className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Recruiting Activity
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              Describe the recruitment strategy, the functioning of the recruitment team and the recruitment process, including recruitment tools used.
            </p>


            <div className="space-y-4">
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900 mb-2">
                  Recruitment Strategy
                </h3>
                <p className="text-sm text-zinc-600 mb-3">
                  The company's recruitment strategy focuses on attracting, selecting, and retaining talented individuals who align with the organization's goals, values, and culture. It ensures that hiring practices are efficient, inclusive, and data-driven, enabling the business to meet both its short-term and long-term workforce needs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-xs text-zinc-700 font-medium">Workforce Planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-xs text-zinc-700 font-medium">Employer Branding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-xs text-zinc-700 font-medium">Sourcing Strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-xs text-zinc-700 font-medium">Candidate Screening and Selection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-xs text-zinc-700 font-medium">Diversity and Inclusion</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900 mb-2">
                  Recruitment Team Functioning
                </h3>
                <p className="text-sm text-zinc-600 mb-3">
                  The recruitment team operates as a specialized unit within HR, collaborating closely with hiring managers and business leaders to attract and select the best talent. The team is typically structured based on function, seniority, or geography, depending on the organization's size and needs.
                </p>
                <div className=" grid lg:grid-cols-2 gap-4 ">
                  <div className="bg-white rounded p-3 border border-zinc-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-sm font-medium text-zinc-900">Recruitment Manager / Talent Acquisition Lead</span>
                    </div>
                    <p className="text-xs text-zinc-600 ml-4">Oversees recruitment strategy, ensures alignment with business goals, manages team performance.</p>
                  </div>

                  <div className="bg-white rounded p-3 border border-zinc-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-sm font-medium text-zinc-900">Recruiters / Talent Acquisition Specialists</span>
                    </div>
                    <p className="text-xs text-zinc-600 ml-4">End-to-end recruitment for assigned roles, from sourcing to selection and offer management.</p>
                  </div>

                  <div className="bg-white rounded p-3 border border-zinc-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-sm font-medium text-zinc-900">Sourcing Specialists</span>
                    </div>
                    <p className="text-xs text-zinc-600 ml-4">Identify and engage passive candidates, build talent pipelines for critical positions.</p>
                  </div>

                  <div className="bg-white rounded p-3 border border-zinc-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-sm font-medium text-zinc-900">HR Business Partners</span>
                    </div>
                    <p className="text-xs text-zinc-600 ml-4">Collaborate on workforce planning and role requirements, ensure compliance with HR policies.</p>
                  </div>

                  <div className="bg-white rounded p-3 border border-zinc-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-sm font-medium text-zinc-900">Recruitment Coordinator / Administrator</span>
                    </div>
                    <p className="text-xs text-zinc-600 ml-4">Schedule interviews, manage job postings, maintain candidate communications and recruitment documentation.</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900 mb-2">
                  Recruitment Process
                </h3>
                <p className="text-sm text-zinc-600 mb-4">
                  A structured recruitment process ensures efficiency, fairness, and high-quality hiring.
                </p>
                <div className="space-y-4">
                  <div className="border-l-2 border-orange-500 pl-3">
                    <p className="text-sm font-medium text-zinc-900 mb-1">1. Workforce Planning & Requisition Approval</p>
                    <p className="text-xs text-zinc-600">Identify the hiring need and create a job requisition with role details, qualifications, and approvals.</p>
                  </div>

                  <div className="border-l-2 border-blue-500 pl-3">
                    <p className="text-sm font-medium text-zinc-900 mb-1">2. Job Posting & Sourcing</p>
                    <p className="text-xs text-zinc-600">Publish roles on job boards, company website, social media, and internal referral platforms. Proactively source passive candidates via LinkedIn, industry networks, and talent databases.</p>
                  </div>

                  <div className="border-l-2 border-orange-500 pl-3">
                    <p className="text-sm font-medium text-zinc-900 mb-1">3. Screening & Shortlisting</p>
                    <p className="text-xs text-zinc-600">Review resumes/CVs, conduct initial phone or video screenings, and assess candidate fit for skills, experience, and culture.</p>
                  </div>

                  <div className="border-l-2 border-blue-500 pl-3">
                    <p className="text-sm font-medium text-zinc-900 mb-1">4. Interviews & Assessment</p>
                    <p className="text-xs text-zinc-600">Conduct structured interviews (behavioural, technical, and competency-based). Administer tests or assignments if required (technical tests, aptitude, psychometric assessments).</p>
                  </div>

                  <div className="border-l-2 border-orange-500 pl-3">
                    <p className="text-sm font-medium text-zinc-900 mb-1">5. Selection & Offer</p>
                    <p className="text-xs text-zinc-600">Collaborate with hiring managers to select the final candidate. Prepare and extend the offer letter, negotiate terms if needed.</p>
                  </div>

                  <div className="border-l-2 border-blue-500 pl-3">
                    <p className="text-sm font-medium text-zinc-900 mb-1">6. Background & Reference Checks</p>
                    <p className="text-xs text-zinc-600">Verify employment history, education, and professional references. Conduct compliance checks or security clearances for certain roles.</p>
                  </div>

                  <div className="border-l-2 border-orange-500 pl-3">
                    <p className="text-sm font-medium text-zinc-900 mb-1">7. Onboarding</p>
                    <p className="text-xs text-zinc-600">Facilitate induction, training, and integration into the team to ensure a smooth transition.</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900 mb-2">
                  Recruitment Tools Used
                </h3>
                <p className="text-sm text-zinc-600 mb-3">
                  Modern recruitment teams leverage technology to streamline processes and improve outcomes:
                </p>
                <div className=" grid lg:grid-cols-3 gap-4 ">
                  <div className="bg-white rounded p-3 border border-zinc-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-sm font-medium text-zinc-900">Job Boards & Career Platforms</span>
                    </div>
                    <p className="text-xs text-zinc-600 ml-4">LinkedIn, Naukri.com, Company Website - for posting vacancies and sourcing candidates.</p>
                  </div>

                  <div className="bg-white rounded p-3 border border-zinc-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-sm font-medium text-zinc-900">Social Media</span>
                    </div>
                    <p className="text-xs text-zinc-600 ml-4">LinkedIn - for employer branding and sourcing passive candidates.</p>
                  </div>

                  <div className="bg-white rounded p-3 border border-zinc-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-sm font-medium text-zinc-900">Employee Referral Platforms</span>
                    </div>
                    <p className="text-xs text-zinc-600 ml-4">Internal Referral.</p>
                  </div>

                  <div className="bg-white rounded p-3 border border-zinc-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-sm font-medium text-zinc-900">Assessment Tools</span>
                    </div>
                    <p className="text-xs text-zinc-600 ml-4">For testing skills, aptitude, and personality.</p>
                  </div>

                  <div className="bg-white rounded p-3 border border-zinc-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-sm font-medium text-zinc-900">Communication & Collaboration Tools</span>
                    </div>
                    <p className="text-xs text-zinc-600 ml-4">Microsoft Teams - for scheduling, interviews, and coordination.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biggest Challenge in Finding Talent */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiTarget className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Biggest Challenge in Finding Talent
            </h2>
          </div>
          <div>

            <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <p className="text-zinc-900 mb-4">
                Identifying and attracting the right people with the right skills who also align with the organization's culture and values.
              </p>
              <div className=" grid lg:grid-cols-3 gap-4 ">
                <div className="bg-white rounded p-3 border border-zinc-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-sm font-medium text-zinc-900">Skill Gaps</span>
                  </div>
                  <p className="text-xs text-zinc-600 ml-4">The skills companies need are evolving faster than the workforce can adapt.</p>
                </div>

                <div className="bg-white rounded p-3 border border-zinc-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-sm font-medium text-zinc-900">High Competition</span>
                  </div>
                  <p className="text-xs text-zinc-600 ml-4">Top candidates often have multiple offers and can choose where they want to work.</p>
                </div>

                <div className="bg-white rounded p-3 border border-zinc-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-sm font-medium text-zinc-900">Cultural Fit</span>
                  </div>
                  <p className="text-xs text-zinc-600 ml-4">It's not just about technical ability; finding someone who fits the team's mindset and values is equally important.</p>
                </div>

                <div className="bg-white rounded p-3 border border-zinc-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-sm font-medium text-zinc-900">Changing Candidate Expectations</span>
                  </div>
                  <p className="text-xs text-zinc-600 ml-4">People now look for flexibility, purpose, and growth opportunities - not just a paycheck.</p>
                </div>

                <div className="bg-white rounded p-3 border border-zinc-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-sm font-medium text-zinc-900">Speed and Efficiency</span>
                  </div>
                  <p className="text-xs text-zinc-600 ml-4">Good candidates don't stay on the market long, so companies have to move quickly without compromising on quality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Salary Positioning vs Competitors */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiDollarSign className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Company's Salaries Positioned vs Competitors
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              How are the Company's salaries positioned vs the competitors?
            </p>

            <div className="space-y-4">
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-sm font-medium text-zinc-900">Market Leader Positioning</span>
                </div>
                <p className="text-sm text-zinc-600">Our company's salaries are positioned above market averages to attract top-tier talent and reduce turnover in critical roles.</p>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm font-medium text-zinc-900">Market Competitive Positioning</span>
                </div>
                <p className="text-sm text-zinc-600">We maintain salaries around the market median, ensuring fairness and competitiveness while balancing cost efficiency.</p>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-sm font-medium text-zinc-900">Value-Based Positioning</span>
                </div>
                <p className="text-sm text-zinc-600">While our base salaries align with industry norms, our strength lies in our comprehensive benefits, flexible work culture, and growth opportunities.</p>
              </div>
            </div>


          </div>
        </div>

        {/* Recruitment Channels */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiGlobe className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Recruitment Channels
            </h2>
          </div>
          <div>
            <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <div className="flex items-center gap-2 mb-2">
                <FiUsers className="text-orange-600" />
                <h3 className="text-sm font-semibold text-zinc-900">Job Boards</h3>
              </div>
              <p className="text-xs text-zinc-600">LinkedIn, Indeed, Naukri.com, local job boards.</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
