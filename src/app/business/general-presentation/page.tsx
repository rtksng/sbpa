import Link from 'next/link';
import { FiFileText, FiCalendar, FiMapPin, FiUsers, FiGlobe, FiTarget, FiTrendingUp, FiBriefcase, FiAward, FiBarChart2, FiSettings, FiExternalLink, FiCheck, FiSmartphone, FiCloud, FiCode } from 'react-icons/fi';

export default function GeneralPresentation() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            General Presentation
          </h1>
          <p className="text-zinc-600">
            Comprehensive overview and general information about the business
          </p>
        </div>

        {/* Basic Company Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-[#fb5642] rounded-lg">
                <FiBriefcase className="text-white text-xl" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-900">
                Company Information
              </h2>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:bg-zinc-100 transition-colors">
                <div className="p-1.5 bg-[#fb5642]/10 rounded">
                  <FiFileText className="text-[#fb5642]" size={18} />
                </div>
                <div className="flex-1">
                  <label className="block text-lg font-medium text-zinc-500 mb-1 uppercase tracking-wide">
                    Company Name
                  </label>
                  <p className="text-lg font-semibold text-zinc-900">Seasia Group (Seasia Infotech, Bugraptors, Mooglelabs)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:bg-zinc-100 transition-colors">
                <div className="p-1.5 bg-[#fb5642]/10 rounded">
                  <FiCalendar className="text-[#fb5642]" size={18} />
                </div>
                <div className="flex-1">
                  <label className="block text-lg font-medium text-zinc-500 mb-1 uppercase tracking-wide">
                    Founded In
                  </label>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-zinc-900">2011</p>
                    <span className="px-2 py-0.5 bg-[#fb5642]/10 text-[#fb5642] text-lg font-medium rounded">
                      {new Date().getFullYear() - 2011}+ Years
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:bg-zinc-100 transition-colors">
                <div className="p-1.5 bg-[#fb5642]/10 rounded">
                  <FiGlobe className="text-[#fb5642]" size={18} />
                </div>
                <div className="flex-1">
                  <label className="block text-lg font-medium text-zinc-500 mb-1 uppercase tracking-wide">
                    Website
                  </label>
                  <a
                    href="https://www.seasiainfotech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#fb5642] hover:text-[#fb5642]/80 font-medium transition-colors group"
                  >
                    <span>www.seasiainfotech.com</span>
                    <FiExternalLink className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={14} />
                  </a>
                  <a
                    href="https://www.bugraptors.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#fb5642] hover:text-[#fb5642]/80 font-medium transition-colors group"
                  >
                    <span>www.bugraptors.com</span>
                    <FiExternalLink className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={14} />
                  </a>
                  <a
                    href="https://www.mooglelabs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#fb5642] hover:text-[#fb5642]/80 font-medium transition-colors group"
                  >
                    <span>www.mooglelabs.com</span>
                    <FiExternalLink className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-[#fb5642] rounded-lg">
                <FiMapPin className="text-white text-xl" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-900">
                Location Information
              </h2>
            </div>
            <div className="space-y-5">
              <div className="p-4 bg-gradient-to-br from-[#fb5642]/5 to-[#fb5642]/10 rounded-lg border border-[#fb5642]/20">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-[#fb5642] rounded">
                    <FiMapPin className="text-white" size={16} />
                  </div>
                  <div className="flex-1">
                    <label className="block text-lg font-medium text-zinc-600 mb-2 uppercase tracking-wide">
                      Headquarters
                    </label>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-lg font-semibold text-zinc-900">India</p>
                      <span className="px-2 py-0.5 bg-[#fb5642] text-white text-lg font-medium rounded">
                        Main Office
                      </span>
                    </div>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      C-136, Industrial Area, Phase 8,<br />
                      Chandigarh, 160071, India
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-lg font-medium text-zinc-500 mb-3 uppercase tracking-wide">
                  Additional Offices
                </label>
                <div className="grid lg:grid-cols-2 gap-3">

                  <div className="bg-white rounded-lg p-3 border border-zinc-200 hover:border-[#fb5642]/30 hover:shadow-sm transition-all group">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1 bg-[#fb5642]/10 rounded">
                        <FiGlobe className="text-[#fb5642] group-hover:scale-110 transition-transform" size={14} />
                      </div>
                      <p className="text-lg font-semibold text-zinc-900">Canada</p>
                    </div>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                      55 Village Centre Place Suite 307, Mississauga Ontario L4Z1V9, Canada
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-zinc-200 hover:border-[#fb5642]/30 hover:shadow-sm transition-all group ">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1 bg-[#fb5642]/10 rounded">
                        <FiGlobe className="text-[#fb5642] group-hover:scale-110 transition-transform" size={14} />
                      </div>
                      <p className="text-lg font-semibold text-zinc-900">USA</p>
                    </div>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                      5858 Horton Street, Suite 101, Emeryville, CA 94608
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our USP */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          {/* Value Proposition */}
          <div className='mb-6'>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-[#fb5642] rounded-lg">
                <FiAward className="text-white" size={18} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">Value Proposition</h3>
            </div>
            <div className="bg-gradient-to-r from-[#fb5642]/10 to-orange-100 rounded-lg p-5 border border-[#fb5642]/20">
              <p className="text-zinc-600 italic text-xl font-medium text-center mb-3">"World-Class Services. Proprietary Tools. Proven Outcomes."</p>
              <div className="flex items-start gap-2">
                <div className="mt-1.5 w-1.5 h-1.5 bg-[#fb5642] rounded-full flex-shrink-0"></div>
                <p className="text-zinc-600">Seasia Group blends technology, innovation, and discipline to help enterprises accelerate digital transformation, enhance customer experience, and scale globally.</p>
              </div>
            </div>
          </div>

          {/* Vision 2030 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-[#fb5642] rounded-lg">
                <FiTarget className="text-white" size={18} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">Vision 2030</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-zinc-200">
                <div className="p-1 bg-[#fb5642]/10 rounded mt-0.5">
                  <FiTarget className="text-[#fb5642]" />
                </div>
                <p className="text-zinc-600">$100M+ Revenue Target</p>
              </div>
              <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-zinc-200">
                <div className="p-1 bg-[#fb5642]/10 rounded mt-0.5">
                  <FiGlobe className="text-[#fb5642]" />
                </div>
                <p className="text-zinc-600">Expansion in North America, Europe & Middle East</p>
              </div>
              <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-zinc-200">
                <div className="p-1 bg-[#fb5642]/10 rounded mt-0.5">
                  <FiTrendingUp className="text-[#fb5642]" />
                </div>
                <p className="text-zinc-600">Strengthen AI, Cloud, and Automation portfolio</p>
              </div>
              <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-zinc-200">
                <div className="p-1 bg-[#fb5642]/10 rounded mt-0.5">
                  <FiSettings className="text-[#fb5642]" />
                </div>
                <p className="text-zinc-600">Continue to build IP-led growth through proprietary accelerators</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 my-6">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiCheck className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Our USP
            </h2>
          </div>

          <div className="space-y-8">
            {/* Group Overview Card */}
            <div className="bg-gradient-to-br from-[#fb5642]/5 to-[#fb5642]/10 rounded-lg border border-[#fb5642]/20 p-5">
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">SEASIA GROUP – WORLD-CLASS DIGITAL ENGINEERING ECOSYSTEM</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-[#fb5642] rounded-full flex-shrink-0"></div>
                  <p className="text-zinc-600">Global technology and digital transformation group delivering world-class IT, AI, and product engineering services.</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-[#fb5642] rounded-full flex-shrink-0"></div>
                  <p className="text-zinc-600">Backed by CMMI Level 5, ISO-certified processes, and GCC in India.</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-[#fb5642] rounded-full flex-shrink-0"></div>
                  <p className="text-zinc-600">Powered by 10+ proprietary accelerators and frameworks that ensure faster delivery, higher quality, and measurable outcomes.</p>
                </div>
              </div>
            </div>

            {/* Group Companies */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">Group Companies</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1 bg-[#fb5642]/10 rounded">
                      <FiCheck className="text-[#fb5642]" />
                    </div>
                    <h4 className="font-medium text-zinc-900 text-lg">Seasia Infotech</h4>
                  </div>
                  <p className="text-zinc-600 text-base">Enterprise software development, IT modernization, and digital transformation.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1 bg-[#fb5642]/10 rounded">
                      <FiCheck className="text-[#fb5642]" />
                    </div>
                    <h4 className="font-medium text-zinc-900 text-lg">BugRaptors</h4>
                  </div>
                  <p className="text-zinc-600 text-base">Leading independent QA & software testing company.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1 bg-[#fb5642]/10 rounded">
                      <FiCheck className="text-[#fb5642]" />
                    </div>
                    <h4 className="font-medium text-zinc-900 text-lg">MoogleLabs</h4>
                  </div>
                  <p className="text-zinc-600 text-base">AI, blockchain, and data science innovation arm.</p>
                </div>
              </div>
              <div className="mt-3 flex items-start gap-2">
                <div className="mt-1.5 w-1.5 h-1.5 bg-[#fb5642] rounded-full flex-shrink-0"></div>
                <p className="text-zinc-600">Together, they create a complete digital value chain — from strategy and engineering to assurance and innovation.</p>
              </div>
            </div>

            {/* Core Differentiators */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">Core Differentiators (USPs)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-2">
                    <div className="p-1 bg-[#fb5642]/10 rounded mt-0.5">
                      <FiAward className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 mb-1 text-lg">CMMI Level 5 Certified</h4>
                      <p className="text-zinc-600 text-base">Among the top 1% globally in process maturity.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-2">
                    <div className="p-1 bg-[#fb5642]/10 rounded mt-0.5">
                      <FiTrendingUp className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 mb-1 text-lg">World-Class Service Delivery</h4>
                      <p className="text-zinc-600 text-base">Proven track record across industries and geographies.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-2">
                    <div className="p-1 bg-[#fb5642]/10 rounded mt-0.5">
                      <FiSettings className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 mb-1 text-lg">10+ Proprietary Tools & Accelerators</h4>
                      <p className="text-zinc-600 text-base">Cutting-edge IPs that enhance delivery speed and efficiency.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-2">
                    <div className="p-1 bg-[#fb5642]/10 rounded mt-0.5">
                      <FiUsers className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 mb-1 text-lg">SAM (Seasia Engagement Model)</h4>
                      <p className="text-zinc-600 text-base">Transparent, value-driven engagement framework.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-2">
                    <div className="p-1 bg-[#fb5642]/10 rounded mt-0.5">
                      <FiGlobe className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 mb-1 text-lg">Global Delivery Network</h4>
                      <p className="text-zinc-600 text-base">Onshore, nearshore, and offshore models for agility and cost efficiency.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-2">
                    <div className="p-1 bg-[#fb5642]/10 rounded mt-0.5">
                      <FiFileText className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 mb-1 text-lg">Comprehensive Certifications</h4>
                      <p className="text-zinc-600 text-base">ISO 9001, ISO 27001, and other industry-recognized standards.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proprietary Tools & Accelerators */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">Proprietary Tools & Accelerators</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#fb5642]/10 rounded-lg flex-shrink-0">
                      <FiTarget className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 text-lg">SAM (Seasia Engagement Model)</h4>
                      <p className="text-zinc-600 text-base mt-1">Ensures outcome-driven, transparent engagement</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#fb5642]/10 rounded-lg flex-shrink-0">
                      <FiSettings className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 text-lg">Seasia DevOps Suite</h4>
                      <p className="text-zinc-600 text-base mt-1">Streamlined CI/CD, faster deployment</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#fb5642]/10 rounded-lg flex-shrink-0">
                      <FiCheck className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 text-lg">TestRaptor (BugRaptors)</h4>
                      <p className="text-zinc-600 text-base mt-1">Automated testing & QA accelerator</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#fb5642]/10 rounded-lg flex-shrink-0">
                      <FiTrendingUp className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 text-lg">AI Rapid Pilot (MoogleLabs)</h4>
                      <p className="text-zinc-600 text-base mt-1">Quick ML model prototyping and deployment</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#fb5642]/10 rounded-lg flex-shrink-0">
                      <FiBarChart2 className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 text-lg">DataIQ</h4>
                      <p className="text-zinc-600 text-base mt-1">Data migration and analytics accelerator</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#fb5642]/10 rounded-lg flex-shrink-0">
                      <FiSettings className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 text-lg">App360</h4>
                      <p className="text-zinc-600 text-base mt-1">Mobile app performance & insights platform</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#fb5642]/10 rounded-lg flex-shrink-0">
                      <FiGlobe className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 text-lg">CloudOps Console</h4>
                      <p className="text-zinc-600 text-base mt-1">Cloud optimization & cost governance</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#fb5642]/10 rounded-lg flex-shrink-0">
                      <FiFileText className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 text-lg">CodeGuard</h4>
                      <p className="text-zinc-600 text-base mt-1">Automated code quality & security audits</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#fb5642]/10 rounded-lg flex-shrink-0">
                      <FiUsers className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 text-lg">Engage+</h4>
                      <p className="text-zinc-600 text-base mt-1">Customer experience analytics tool</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#fb5642]/10 rounded-lg flex-shrink-0">
                      <FiBriefcase className="text-[#fb5642]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 text-lg">SmartGov Framework</h4>
                      <p className="text-zinc-600 text-base mt-1">Pre-built modules for e-Governance solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Delivery Focus */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">Global Delivery Focus</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-zinc-100 text-zinc-800 text-sm px-3 py-1.5 rounded-full">Government & Public Sector</span>
                <span className="bg-zinc-100 text-zinc-800 text-sm px-3 py-1.5 rounded-full">Healthcare & Life Sciences</span>
                <span className="bg-zinc-100 text-zinc-800 text-sm px-3 py-1.5 rounded-full">BFSI & FinTech</span>
                <span className="bg-zinc-100 text-zinc-800 text-sm px-3 py-1.5 rounded-full">Retail & eCommerce</span>
                <span className="bg-zinc-100 text-zinc-800 text-sm px-3 py-1.5 rounded-full">Travel, Transport & Hospitality</span>
                <span className="bg-zinc-100 text-zinc-800 text-sm px-3 py-1.5 rounded-full">Education & eLearning</span>
              </div>
            </div>


          </div>
        </div>
        {/* Activity Description */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiBriefcase className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Activity Description
            </h2>
          </div>
          <div className="space-y-6">
            {/* Overview */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">Overview</h3>
              <p className="text-zinc-600 leading-relaxed">
                Seasia Group possesses deep-rooted expertise in digital product engineering and AI-first service lines, the Group empowers businesses through end-to-end outsourced product development, AI-augmented quality engineering, and next-gen AI solutions including GenAI, AI/ML consulting, and intelligent automation. This future-ready capability enables the Group to consistently compete with industry giants. Its AI-driven methodology serves as a blueprint to conceptualize, scale, and launch innovative digital products faster and more efficiently.              </p>
            </div>

            {/* Core Activities */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Core Activities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div

                  className="block bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiBriefcase className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Custom Software Development
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    End-to-end application and product engineering (web, mobile, and cloud).
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiTrendingUp className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      AI & Machine Learning Solutions
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Intelligent automation, predictive analytics, and computer-vision systems.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiGlobe className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Cloud & DevOps Services
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Scalable infrastructure management, cloud migration, and continuous integration support.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiBarChart2 className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Enterprise Modernization
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Legacy transformation, system integration, and performance optimization.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiTarget className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Domain-Focused Offerings
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Banking & Fintech, Insurance, Healthcare, Logistics, Real Estate, and Sustainability.
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery & Engagement Model */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Delivery & Engagement Model</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiBriefcase className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Agile + CMMI Governance
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed mb-3">
                    "Seasia Agile Model (SAM)" blends flexibility with process rigor for predictable outcomes.
                  </p>
                  <Link
                    href="/pdf/SAM V2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white cursor-pointer hover:bg-zinc-50 text-[#fb5642] border border-[#fb5642] px-3 py-1 rounded text-lg font-medium transition-colors">
                      View PDF
                    </button>
                  </Link>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiGlobe className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Global Delivery Network
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Distributed teams providing 24×7 capability and scalable talent bandwidth.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiUsers className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Collaborative Engagement
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Transparent governance with shared KPIs, milestone reviews, and continuous feedback loops.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiAward className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Post-Go-Live Ownership
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Structured support, maintenance, and performance tracking ensuring sustained client value.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Focus */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Strategic Focus</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiTrendingUp className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Continuous Innovation
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Adoption of AI-enabled productivity tools and data-driven decision systems.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiTarget className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Domain Expertise Integration
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Integration of domain expertise with technology excellence for consultative solutioning.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiUsers className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Long-term Partnerships
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Building long-term partnerships focused on measurable business outcomes, not transactional deliveries.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">Conclusion</h3>
              <p className="text-zinc-600 leading-relaxed">
                Seasia Infotech acts as a strategic digital transformation partner, offering end-to-end enablement—from vision to execution—to help organizations modernize, scale, and lead in their respective industries.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership and Staff */}
        <div className="grid grid-cols-1  gap-6 mb-6">
          {/* <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-50 rounded-lg">
                <FiUsers className="text-orange-600" />
              </div>
              <h2 className="text-lg font-semibold text-zinc-900">
                Key Shareholders
              </h2>
            </div>
            <div className="space-y-2">
              <p className="text-zinc-600 text-lg">[To be provided]</p>
            </div>
          </div> */}

          {/* <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FiAward className="text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-zinc-900">
                Executives: Leadership Board
              </h2>
            </div>

            <Link
              href="/pdf/Leadership.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white cursor-pointer hover:bg-zinc-50 text-[#fb5642] border border-[#fb5642] px-3 py-1 rounded text-lg font-medium transition-colors">
                View PDF
              </button>
            </Link>
          </div> */}

          {/* <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-50 rounded-lg">
                <FiUsers className="text-orange-600" />
              </div>
              <h2 className="text-lg font-semibold text-zinc-900">
                Directors
              </h2>
            </div>
            <div className="space-y-2">
              <p className="text-zinc-600 text-lg mb-2">
                Can be added to the Leadership Board
              </p>
              <p className="text-zinc-600 text-lg">[To be provided]</p>
            </div>
          </div> */}
        </div>

        {/* Staff Information */}


        {/* Areas of Expertise and Core Business */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiTarget className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Areas of Expertise and Core Business
            </h2>
          </div>
          {/* <div className="mb-6">
            <p className="text-zinc-600 leading-relaxed mb-4">
              Seasia Infotech is a <strong>CMMI Level 5–certified digital engineering and IT services firm</strong> that delivers end-to-end technology solutions — from concept to deployment — through a balanced mix of engineering, design, and strategy.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Its core business areas include:
            </p>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 bg-[#fb5642] rounded-md">
                  <FiBriefcase className="text-white text-lg" />
                </div>
                <h3 className="font-semibold text-zinc-900 text-lg">
                  Software & Platform Engineering
                </h3>
              </div>
              <ul className="text-zinc-600 text-lg leading-relaxed space-y-1">
                <li className="flex items-start">
                  <span className="text-[#fb5642] mr-2 font-bold">→</span>
                  Custom software, product, and enterprise application development (web, mobile, and cloud)
                </li>
                <li className="flex items-start">
                  <span className="text-[#fb5642] mr-2 font-bold">→</span>
                  Full-stack engineering with expertise across .NET, Java, Python, NodeJS, React, Flutter, and other modern stacks
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 bg-[#fb5642] rounded-md">
                  <FiTrendingUp className="text-white text-lg" />
                </div>
                <h3 className="font-semibold text-zinc-900 text-lg">
                  Quality Assurance & Testing Services
                </h3>
              </div>
              <ul className="text-zinc-600 text-lg leading-relaxed space-y-1">
                <li className="flex items-start">
                  <span className="text-[#fb5642] mr-2 font-bold">→</span>
                  Dedicated QA Centre of Excellence offering Manual, Automation, API, Security, Performance, and Accessibility Testing
                </li>
                <li className="flex items-start">
                  <span className="text-[#fb5642] mr-2 font-bold">→</span>
                  Specialized testing frameworks and proprietary QA tools ensure precision, speed, and compliance
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 bg-[#fb5642] rounded-md">
                  <FiGlobe className="text-white text-lg" />
                </div>
                <h3 className="font-semibold text-zinc-900 text-lg">
                  Architecture Services
                </h3>
              </div>
              <ul className="text-zinc-600 text-lg leading-relaxed space-y-1">
                <li className="flex items-start">
                  <span className="text-[#fb5642] mr-2 font-bold">→</span>
                  Solution, Technical, and Infrastructure Architecture services driving scalability, security, and cost optimization
                </li>
                <li className="flex items-start">
                  <span className="text-[#fb5642] mr-2 font-bold">→</span>
                  Cloud-native design and modernization support leveraging AWS, Azure, and GCP
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 bg-[#fb5642] rounded-md">
                  <FiTarget className="text-white text-lg" />
                </div>
                <h3 className="font-semibold text-zinc-900 text-lg">
                  AI, Data & Analytics
                </h3>
              </div>
              <ul className="text-zinc-600 text-lg leading-relaxed space-y-1">
                <li className="flex items-start">
                  <span className="text-[#fb5642] mr-2 font-bold">→</span>
                  Applied AI and ML models for predictive intelligence, computer vision, and NLP
                </li>
                <li className="flex items-start">
                  <span className="text-[#fb5642] mr-2 font-bold">→</span>
                  Data engineering and analytics solutions enabling business-level decision intelligence
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 bg-[#fb5642] rounded-md">
                  <FiBarChart2 className="text-white text-lg" />
                </div>
                <h3 className="font-semibold text-zinc-900 text-lg">
                  UI/UX Studio
                </h3>
              </div>
              <ul className="text-zinc-600 text-lg leading-relaxed space-y-1">
                <li className="flex items-start">
                  <span className="text-[#fb5642] mr-2 font-bold">→</span>
                  In-house Design Studio specializing in user research, product design, usability testing, and design-system creation
                </li>
                <li className="flex items-start">
                  <span className="text-[#fb5642] mr-2 font-bold">→</span>
                  Expertise in creating high-conversion interfaces for web, mobile, and enterprise platforms
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 bg-[#fb5642] rounded-md">
                  <FiAward className="text-white text-lg" />
                </div>
                <h3 className="font-semibold text-zinc-900 text-lg">
                  Marketing Services
                </h3>
              </div>
              <ul className="text-zinc-600 text-lg leading-relaxed space-y-1">
                <li className="flex items-start">
                  <span className="text-[#fb5642] mr-2 font-bold">→</span>
                  Integrated Digital Marketing & Growth Enablement vertical offering SEO, content, branding, and campaign management
                </li>
                <li className="flex items-start">
                  <span className="text-[#fb5642] mr-2 font-bold">→</span>
                  Works closely with the Sales team to generate and qualify ICP-aligned leads
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 bg-[#fb5642] rounded-md">
                  <FiUsers className="text-white text-lg" />
                </div>
                <h3 className="font-semibold text-zinc-900 text-lg">
                  Industry-Specific Solutions
                </h3>
              </div>
              <ul className="text-zinc-600 text-lg leading-relaxed space-y-1">
                <li className="flex items-start">
                  <span className="text-[#fb5642] mr-2 font-bold">→</span>
                  Deep domain expertise across Banking & Fintech, Insurance, Healthcare, and Real Estate sectors
                </li>
                <li className="flex items-start">
                  <span className="text-[#fb5642] mr-2 font-bold">→</span>
                  Specialized solutions for Logistics, Retail, and Sustainability sectors
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Positioning and Advantages */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiAward className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Positioning and Advantages with Regard to Competition
            </h2>
          </div>
          <div className="space-y-6">
            {/* Overview */}
            <div>
              <p className="text-zinc-600 leading-relaxed">
                Seasia's competitive strength lies in its breadth of capability and process depth — allowing it to deliver both speed and scale.
              </p>
            </div>

            {/* Differentiators */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">1. Differentiators</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiAward className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      CMMI Level 5 + Agile Flexibility
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Proprietary Seasia Agile Model (SAM) integrates process maturity with agile flexibility for optimal delivery.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiBriefcase className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Full In-House Service Spectrum
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Complete end-to-end capabilities: Engineering + QA + Architecture + UI/UX + Marketing + AI + Data.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiUsers className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Cross-Functional Collaboration
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Seamless coordination between sales, marketing, QA, and delivery teams for cohesive value delivery.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiGlobe className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Global Delivery Network
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Time-zone aligned execution enabling 24/7 capability and scalable talent bandwidth.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiTrendingUp className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Enterprise Relationship Expertise
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Proven track record in long-term enterprise relationships across multiple industries.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow ">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiTrendingUp className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Proprietary Tools
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed mb-3">
                    Empowering various phases of software development with proven, proprietary tools — engineered for faster turnaround and uncompromised quality.
                  </p>
                  <Link
                    href="/pdf/Proprietry-Tools.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white cursor-pointer hover:bg-zinc-50 text-[#fb5642] border border-[#fb5642] px-3 py-1 rounded text-lg font-medium transition-colors">
                      View PDF
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Strategic Edge */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">2. Strategic Edge</h3>
              <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-[#fb5642] rounded-md mt-0.5">
                    <FiTarget className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <p className="text-zinc-600 leading-relaxed">
                      The ability to offer consultative, full-cycle digital transformation rather than just development support positions Seasia as a value partner, not just a vendor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Rationale and Business Objectives */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiTarget className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Strategic Rationale & 5-Year Objectives
            </h2>
          </div>
          <div className="space-y-6">
            {/* Strategic Rationale */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">Strategic Rationale</h3>
              <p className="text-zinc-600 leading-relaxed">
                To capitalize on the growing global need for integrated digital services — where strategy, design, quality, and engineering converge — Seasia aims to strengthen its position as a comprehensive digital partner combining innovation with delivery excellence.
              </p>
            </div>

            {/* Key Business Objectives */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Key Business Objectives (2025–2030)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiTarget className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Domain-Specific Offerings
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Deepen domain-specific offerings in Banking, Fintech, Insurance, and Healthcare.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiBarChart2 className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Scale QA & Architecture
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Scale QA and Architecture practices as independent service lines.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiGlobe className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Global Delivery Expansion
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Expand global delivery presence in North America, Europe, and MENA through local partnerships.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiTrendingUp className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Productized IPs & Tools
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Enhance productized IPs and internal tools, including AI-driven QA automation frameworks.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiBriefcase className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Design & Marketing Studios
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Grow design and marketing studios to deliver integrated go-to-market enablement for clients.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiAward className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Brand Visibility & Thought Leadership
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Increase brand visibility through thought leadership, case studies, and co-branded success stories with global partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Clients and Prospects */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiUsers className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Main Clients 
            </h2>
          </div>

          {/* Existing Clients */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-zinc-900 mb-4">Existing Clients</h3>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Seasia Infotech maintains long-term and multi-engagement relationships with clients across diverse industries and geographies. These engagements span product engineering, QA centres of excellence, architecture consulting, and enterprise digital transformation.
            </p>

         
            <div className="grid lg:grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">AT&T (USA)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Telecom, Consumer Electronics</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Built a unified in-store, consumer online, and B2B trade-in platform including device evaluation, valuation logic, bulk B2B intake workflows, and upgrade checkout modules.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Verizon (USA)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Telecom</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Developed a B2B-centric trade-in and bulk device intake system streamlining enterprise upgrade cycles and logistics workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Google US (USA)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Big Tech, Consumer Electronics</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Delivered both in-store trade-in (Monty) and online consumer trade-in flows, including diagnostics, valuation, and upgrade checkout paths.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Google Canada</h4>
                    <p className="text-lg text-zinc-500 mb-2">Big Tech, Consumer Electronics</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Built the consumer online trade-in platform supporting Pixel upgrade journeys with diagnostics and real-time price estimation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">TELUS (Canada)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Telecom</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Developed online and retail trade-in workflows, including automated condition checks and integrated upgrade checkout systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Freedom Mobile (Canada)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Telecom</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Created consumer and in-store trade-in systems with device grading, instant valuation, and seamless e-commerce linkage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">KOODO (Canada)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Telecom</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Implemented a consumer online trade-in solution with automated grading and upgrade flow integration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Target (USA)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Retail, Consumer Electronics</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Built a combined in-store & online trade-in + e-commerce upgrade module for electronics, supporting automated valuation and checkout integration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">WOW (USA)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Internet & Cable Retail</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Developed retail and consumer trade-in systems for device evaluation, pricing, and upgrade facilitation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">BBY – Best Buy (USA)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Retail, Electronics</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Delivered in-store and online trade-in software, including AI-based evaluation modules and upgrade checkout flows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">BuySell</h4>
                    <p className="text-lg text-zinc-500 mb-2">Electronics Resale / ReCommerce</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Built a multi-device trade-in & resale platform with valuation engine, intake workflows, and resale e-commerce integration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">NRET</h4>
                    <p className="text-lg text-zinc-500 mb-2">Device Resale, E-Commerce</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Developed a trade-in workflow platform with standardized grading logic and integrated resale management.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Tracfone (USA)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Prepaid Wireless / Telecom</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Implemented consumer trade-in workflows with IMEI-based valuation, condition checks, and upgrade options.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">USCC – US Cellular (USA)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Telecom</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Delivered consumer + in-store trade-in systems including real-time evaluation, credit calculation, and device-upgrade checkout integration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Sprint (USA)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Telecom</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Built Sprint's retail and online trade-in platform, supporting device assessment and automated upgrade flows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Vodafone (Global)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Telecom</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Developed trade-in and upgrade technology for customer channels across multiple geographies, including grading and valuation capabilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Microsoft (USA)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Big Tech, Consumer Hardware</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Built Microsoft's device trade-in engine for Surface/mobile devices, including self-diagnostic tools and upgrade checkout integration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Cisco (USA)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Enterprise Networking Hardware</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Developed a hardware trade-in and buyback lifecycle platform for networking equipment with enterprise upgrade workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Itochu Corporation (Japan)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Global Trading, Consumer Electronics Distribution</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Built global trade-in and device buyback solutions, supporting diagnostics, valuation, and integrated B2B/B2C workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">NTT Docomo (Japan)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Telecom</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Delivered a full retail and consumer trade-in engine including automated evaluation and upgrade purchase modules.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Samsung (Global)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Consumer Electronics, Mobile Hardware</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Built Samsung's global trade-in infrastructure, including device diagnostics, valuation algorithms, and integrated consumer upgrade flows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Facebook / Meta (USA)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Big Tech</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Delivered trade-in and device refresh systems supporting internal programs and external consumer upgrade workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Orange (France & Poland)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Telecom</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Developed in-store and online trade-in platforms with automated grading, valuation, and e-commerce upgrade integration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">WIND (Italy)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Telecom</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Built trade-in and exchange software for retail and consumer portals with full diagnostics and valuation systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Itochu Corporation (Japan)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Global Trading & Consumer Electronics</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Developed a comprehensive phone trade-in solution and e-commerce component, enabling device evaluation, pricing logic, buyback workflows, and seamless retail integration across Itochu's distribution ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Massachusetts Medical Society (USA)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Healthcare, Publishing</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Support for digital subscription platforms, medical-education delivery systems, accessibility QA, and secure content management.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiBriefcase className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Adani Group (India)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Infrastructure, Energy, Gas Distribution</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Developed a GIS-based mapping and operational intelligence dashboard for Adani's gas pipeline network. This solution enhanced operational transparency, pipeline monitoring efficiency, predictive maintenance capability, and regulatory compliance.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-6 bg-zinc-50 rounded-lg p-4">
              <p className="text-zinc-600 text-lg leading-relaxed">
                These partnerships demonstrate Seasia's ability to work with both global enterprises and high-growth innovation-led firms across verticals and regions.
              </p>
            </div>
          </div>

          {/* Prospective & Strategic Clients */}
          {/* <div>
            <h3 className="text-lg font-semibold text-zinc-900 mb-4">Prospective & Strategic Clients</h3>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Seasia's prospect pipeline for the coming fiscal period reflects its growing positioning as a digital engineering and transformation partner to global enterprises and innovation platforms.
            </p>

            <div className="grid lg:grid-cols-4 gap-3">
              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow border-dashed">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiTarget className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">Turing</h4>
                    <p className="text-lg text-zinc-500 mb-2">Technology & Workforce Platforms</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Potential partnership for QA automation and architectural consulting services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow border-dashed">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiTarget className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">BLS International</h4>
                    <p className="text-lg text-zinc-500 mb-2">Government Services / Digital Transformation</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Exploring enterprise mobility, automation, and citizen-facing solution modernization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow border-dashed">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiTarget className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">FROM, The Digital Transformation Agency (USA)</h4>
                    <p className="text-lg text-zinc-500 mb-2">Consulting & Product Engineering</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Discussion for co-development and solution delivery partnership.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-zinc-200 hover:shadow-lg transition-shadow border-dashed">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#fb5642] rounded-lg flex-shrink-0">
                    <FiTarget className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900 mb-1">India Global Forum</h4>
                    <p className="text-lg text-zinc-500 mb-2">Policy & Business Leadership Platform</p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      Exploring collaboration for event technology, marketing enablement, and digital experience platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Delivery Model */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <FiBriefcase className="text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Delivery Model – Key Aspects
            </h2>
          </div>
          <div className="space-y-6">
            {/* Engagement Framework */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Engagement Framework</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiTarget className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Fixed Price
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    For clearly defined scopes and deliverables.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiTrendingUp className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Time & Material (T&M)
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    For agile, evolving projects requiring iterative development or R&D.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiBriefcase className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Work Packages / Retainers
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    For long-term partnerships, continuous QA, DevOps, or maintenance work.
                  </p>
                </div>
              </div>
            </div>

            {/* On-Site, Hybrid, and Offshore Delivery */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">On-Site, Hybrid, and Offshore Delivery</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-1.5 bg-[#fb5642] rounded-md">
                      <FiMapPin className="text-white text-lg" />
                    </div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Primary Delivery Centres
                    </h4>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    Mohali (India) and regional offices in USA, Canada, UK, and Australia.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900 text-lg mb-3">Engagement Models:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 bg-[#fb5642] rounded-md">
                          <FiGlobe className="text-white text-lg" />
                        </div>
                        <h5 className="font-semibold text-zinc-900 text-lg">
                          Offshore Delivery
                        </h5>
                      </div>
                      <p className="text-zinc-600 text-lg leading-relaxed">
                        Core execution centre ensuring cost efficiency and scalability.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 bg-[#fb5642] rounded-md">
                          <FiUsers className="text-white text-lg" />
                        </div>
                        <h5 className="font-semibold text-zinc-900 text-lg">
                          On-Site / Hybrid
                        </h5>
                      </div>
                      <p className="text-zinc-600 text-lg leading-relaxed">
                        Deployed for project discovery, solution workshops, or high-touch implementations.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-zinc-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 bg-[#fb5642] rounded-md">
                          <FiBriefcase className="text-white text-lg" />
                        </div>
                        <h5 className="font-semibold text-zinc-900 text-lg">
                          Client-Premises Coordination
                        </h5>
                      </div>
                      <p className="text-zinc-600 text-lg leading-relaxed">
                        As required during transition or complex integration phases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Governance & Tools */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Governance & Tools</h3>
              <div className="bg-white rounded-lg p-4 border border-zinc-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-1.5 bg-[#fb5642] rounded-md">
                    <FiSettings className="text-white text-lg" />
                  </div>
                  <h4 className="font-semibold text-zinc-900 text-lg">
                    Unified Workflow Platform
                  </h4>
                </div>
                <p className="text-zinc-600 text-lg leading-relaxed ">
                  Unified workflow through CRM + Seasia Connect + Prodacker platforms.
                </p>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Real-time project monitoring, SLA tracking, and feedback loops integrated into all delivery stages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
