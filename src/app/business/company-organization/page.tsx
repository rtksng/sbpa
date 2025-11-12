'use client';

import { FiUsers, FiLayers, FiBriefcase, FiTarget, FiTrendingUp, FiUserPlus, FiSettings, FiBarChart2, FiAward, FiClipboard, FiSearch, FiFilter, FiMessageSquare, FiCheckCircle, FiShield, FiUserCheck, FiGlobe, FiShare2, FiFileText, FiMessageCircle, FiGrid, FiZap } from 'react-icons/fi';
import React, { useState } from 'react';
import Image from 'next/image';
import ProfileCard from '@/components/layout/ProfileCard';
import { FaRibbon, FaCog, FaChevronDown } from 'react-icons/fa';

// Leadership data based on the image
const leadershipData = {
  ceo: {
    name: 'RP Singh',
    designation: 'CEO',
    experience: '',
    imageSrc: '/employees-images/RP-Singh.png',
  },
  finance: [
    { name: 'Priyanka', designation: 'AR Manager', experience: '12+ Years', imageSrc: '/employees-images/Finance/Priyanka.png' },
    { name: 'Suresh Kumar', designation: 'Payroll Manager', experience: '40+ Years', imageSrc: '/employees-images/Finance/Suresh-Kumar.png' },
    { name: 'Ritu', designation: 'Accounting Manager', experience: '20+ Years', imageSrc: '/employees-images/Finance/Ritu.png' },
  ],
  hr: [
    { name: 'Dr. Harpreet Kaur', designation: 'Director HR & Admin', experience: '26 Years', imageSrc: '/employees-images/HR/Harpreet-Kaur.png' },
    { name: 'Deepak', designation: 'Manager Admin', experience: '20 Years', imageSrc: '/employees-images/HR/Deepak.png' },
    { name: 'Rachita Mathur', designation: 'HR - Assitant Manager ', experience: '5+ Years', imageSrc: '/employees-images/HR/Rachita-Mathur.jpg' },
  ],
  engineering: [
    // First Column (8 members)
    { name: 'Yashu', designation: 'CQO', experience: '17 Years', imageSrc: '/employees-images/Engineering/yashu-kapila.png' },
    { name: 'Kanika', designation: 'VP Delivery', experience: '13+ Years', imageSrc: '/employees-images/Engineering/kanika.png' },
    { name: 'Prateek', designation: 'Head COE Automation QA', experience: '15+ Years', imageSrc: '/employees-images/Engineering/Prateek.png' },
    { name: 'Tushar', designation: 'Security Testing Manager', experience: '12+ Years', imageSrc: '/employees-images/Engineering/Tushar.png' },
    { name: 'Rajeev Verma', designation: 'QA Manager', experience: '12+ Years', imageSrc: '/employees-images/Engineering/Rajeev-Verma.png' },
    { name: 'Sandeep Vashisht', designation: 'QA Manager', experience: '16 Years', imageSrc: '/employees-images/Engineering/Sandeep-Vashisht.png' },
    { name: 'Prabjot Singh', designation: 'Project Manager', experience: '10+ Years', imageSrc: '/employees-images/Engineering/Prabjot-Singh.png' },
    { name: 'Ashish Kainth', designation: 'Project Manager', experience: '12 Years', imageSrc: '/employees-images/Engineering/Ashish-Kainth.png' },
    // Second Column (16 members)
    { name: 'Ganesh Verma', designation: 'CTO', experience: '24 Years', imageSrc: '/employees-images/Engineering/Ganesh-Verma.png' },
    { name: 'Amardeep Pundir', designation: 'AVP Delivery', experience: '15+ Years', imageSrc: '/employees-images/Engineering/Amardeep-Pundir.png' },
    { name: 'Arun Batta', designation: 'AVP DBA', experience: '20+ Years', imageSrc: '/employees-images/Engineering/Arun-Batta.png' },
    { name: 'Abhishek Kaushik', designation: 'AVP DBA', experience: '17 Years', imageSrc: '/employees-images/Engineering/Abhishek-Kaushik.png' },
    { name: 'Amit Nanda', designation: 'AVP Cloud Operations', experience: '23 Years', imageSrc: '/employees-images/Engineering/Amit-Nanda.jpg' },
    { name: 'GP', designation: 'AVP Architecture', experience: '17+ Years', imageSrc: '/employees-images/Engineering/gp.png' },
    { name: 'Ishan Gogna', designation: 'Head COE Solution Architecture', experience: '13 Years', imageSrc: '/employees-images/Engineering/Ishan-Gogna.png' },
    { name: 'Gurpreet Singh', designation: 'Head COE Blockchain', experience: '14 Years', imageSrc: '/employees-images/Engineering/Gurpreet-Singh.png' },
    { name: 'Harpreet Singh', designation: 'Manager Open Source', experience: '11 Years', imageSrc: '/employees-images/Engineering/Harpreet-Singh.png' },
    { name: 'Vivek Rana', designation: 'Manager Open Source', experience: '12+ Years', imageSrc: '/employees-images/Engineering/Vivek-Rana.png' },
    { name: 'Arun Randev', designation: 'Manager Java', experience: '17 Years', imageSrc: '/employees-images/Engineering/Arun-Randev.png' },
    { name: 'Harjodh', designation: 'Head COE Cloud Computing', experience: '12 years', imageSrc: '/employees-images/Engineering/Harjodh.png' },
    { name: 'Charanjeet Singh', designation: 'System Architect', experience: '12 Years', imageSrc: '/employees-images/Engineering/Charanjeet-Singh.png' },
    { name: 'Aman Badan', designation: 'Project Manager', experience: '11 Years', imageSrc: '/employees-images/Engineering/Aman-Badan.png' },
    // { name: 'Amarjeet Singh', designation: 'Project Manager', experience: '11 Years', imageSrc: '/employees-images/Engineering/Aman-Badan.png' },
  ],
  it: [
    { name: 'JB', designation: 'CIO', experience: '24 Years', imageSrc: '/employees-images/IT/JB.png' },
    { name: 'Saurav Sharma', designation: 'AVP IT', experience: '17+ Years', imageSrc: '/employees-images/IT/Saurav-Sharma.png' },
  ],
  salesMarketing: [
    { name: 'Anil Rana', designation: 'CRO', experience: '17+ Years', imageSrc: '/employees-images/Sales-Marketing/Anil-Rana.png' },
    { name: 'Amandeep Arora', designation: 'AVP-Sales', experience: '12 Years', imageSrc: '/employees-images/Sales-Marketing/Amandeep-Arora.png' },
    { name: 'Gurkirat', designation: 'BD Manager', experience: '11 Years', imageSrc: '/employees-images/Sales-Marketing/Gurkirat.png' },
    { name: 'RJ', designation: 'Sr. Manager', experience: '9 Years', imageSrc: '/employees-images/Sales-Marketing/RJ.png' },
    { name: 'Anish', designation: 'Asst. Manager Digital Marketing', experience: '7 Years', imageSrc: '/employees-images/Sales-Marketing/Anish.png' },
    { name: 'Kawleen', designation: 'Manager Market Research', experience: '11 Years', imageSrc: '/employees-images/Sales-Marketing/Kawleen.png' },
    { name: 'Simran Dhawan', designation: 'Manager Content Strategy', experience: '6 Years', imageSrc: '/employees-images/Sales-Marketing/Simran-Dhawan.png' },
    { name: 'Minkle', designation: 'Manager Organic Marketing', experience: '6 Years', imageSrc: '/employees-images/Sales-Marketing/MinkleKalara.png' },
    { name: 'Palak', designation: 'Manager Lead Generation', experience: '6 Years', imageSrc: '/employees-images/Sales-Marketing/Palakjot-Kaur.png' },
    { name: 'Pavtrarita', designation: 'Sr. Manager BD', experience: '10 Years', imageSrc: '/employees-images/Sales-Marketing/Pavitrata.jfif' },
  ],
  uiux: [
    { name: 'Abhishek Vasudev', designation: 'CCO', experience: '18 Years', imageSrc: '/employees-images/UI-UX/Abhishek-Vasudev.png' },
    { name: 'Nitesh Attri', designation: 'Asst. Manager UI/UX', experience: '13+ Years', imageSrc: '/employees-images/UI-UX/Nitesh-Attri.png' },
    { name: 'Shavinder Bains', designation: 'Team Lead', experience: '12+ Years', imageSrc: '/employees-images/UI-UX/Shavinder-Bains.png' },
    { name: 'Raman Shant', designation: 'Team Lead', experience: '6+ Years', imageSrc: '/employees-images/UI-UX/Raman-Shant.png' },
    { name: 'Manzeer Walia', designation: 'Team Lead', experience: '6+ Years', imageSrc: '/employees-images/UI-UX/Manzeer-Walia.png' },
  ],
};

const departments = [
  { key: 'finance', label: 'Finance', members: leadershipData.finance },
  { key: 'hr', label: 'HR', members: leadershipData.hr },
  { key: 'engineering', label: 'Engineering', members: leadershipData.engineering },
  { key: 'it', label: 'IT', members: leadershipData.it },
  { key: 'salesMarketing', label: 'Sales & Marketing', members: leadershipData.salesMarketing },
  { key: 'uiux', label: 'UI/UX', members: leadershipData.uiux },
];
export default function CompanyOrganization() {
  const [openDepartment, setOpenDepartment] = useState<string | null>(null);

  const toggleDepartment = (deptKey: string) => {
    setOpenDepartment(openDepartment === deptKey ? null : deptKey);
  };
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
          {/* CEO Profile Card */}
          <div className="flex justify-center w-full mb-5">
            <div className="bg-white rounded-lg shadow-md p-4 w-52">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white border-2 border-white shadow-md flex-shrink-0">
                  <Image
                    src={leadershipData.ceo.imageSrc}
                    alt={leadershipData.ceo.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-semibold text-[#272D57] text-sm leading-tight">
                    {leadershipData.ceo.name}
                  </h3>
                  <p className="text-[#272D57] text-xs leading-tight">{leadershipData.ceo.designation}</p>
                </div>
              </div>
            </div>
          </div>
          {/* All Departments Profile Cards - 12 Column Grid */}
          <div className="flex flex-col xl:grid xl:grid-cols-14 xl:gap-4 gap-2">
            {departments.map((dept) => {
              const isEngineering = dept.key === 'engineering';
              const colSpan = isEngineering ? 'xl:col-span-4' : 'xl:col-span-2';
              const isOpen = openDepartment === dept.key;
              const isOpenBelowXl = isOpen; // For below xl breakpoint

              return (
                <div key={dept.key} className={`w-full flex flex-col gap-4 ${colSpan}`}>
                  {/* Department Label */}
                  <button
                    onClick={() => toggleDepartment(dept.key)}
                    className="bg-[#FC5743] text-white px-4 py-4 rounded-md font-semibold shadow-sm text-center text-sm whitespace-nowrap xl:pointer-events-none flex items-center justify-center gap-2 relative transition-all duration-300 hover:bg-[#e04a38]"
                  >
                    <span>{dept.label}</span>
                    {/* Dropdown icon - only visible below xl */}
                    <span className={`xl:hidden transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpenBelowXl ? 'rotate-180' : 'rotate-0'}`}>
                      <FaChevronDown className="text-white text-xs" />
                    </span>
                  </button>

                  {/* Department Members Profile Cards */}
                  <div
                    className={`
                                        overflow-hidden
                                        ${isOpenBelowXl
                        ? 'max-h-[5000px] opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-2'
                      }
                                        xl:max-h-none xl:opacity-100 xl:translate-y-0
                                    `}
                    style={{
                      transition: 'max-height 600ms cubic-bezier(0.4, 0, 0.2, 1), opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 50ms, transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {isEngineering ? (
                      // Engineering: 2 Separate Columns Layout (lg and above), single column below lg
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* First Column - First 8 members */}
                        <div className="flex flex-col">
                          {dept.members.slice(0, 8).map((member, index) => {
                            const variant = index === 0 ? 'primary' : index === 1 ? 'secondary' : 'common';
                            const isFirst = index === 0;
                            const isLast = index === 7;
                            // Adjust rounded corners for single column layout below lg
                            const roundedClass = isFirst
                              ? 'lg:rounded-tl-lg rounded-t-lg'
                              : isLast
                                ? 'lg:rounded-bl-lg rounded-b-lg'
                                : '';

                            return (
                              <ProfileCard
                                key={`${dept.key}-col1-${index}`}
                                imageSrc={member.imageSrc}
                                name={member.name}
                                designation={member.designation}
                                experience={member.experience}
                                variant={variant}
                                className={roundedClass}
                                showBottomDropdown={isFirst}
                              />
                            );
                          })}
                        </div>
                        {/* Second Column - Remaining members */}
                        <div className="flex flex-col">
                          {dept.members.slice(8).map((member, index) => {
                            const actualIndex = index + 8;
                            // Variant based on specific members: Ganesh Verma = primary, Amardeep Pundir = secondary, rest = common
                            let variant: 'primary' | 'secondary' | 'common' = 'common';
                            if (member.name === 'Ganesh Verma') {
                              variant = 'primary';
                            } else if (member.name === 'Amardeep Pundir') {
                              variant = 'secondary';
                            }

                            const isFirst = index === 0;
                            const isLast = index === dept.members.slice(8).length - 1;
                            // Adjust rounded corners for single column layout below lg
                            const roundedClass = isFirst
                              ? 'lg:rounded-tr-lg rounded-t-lg'
                              : isLast
                                ? 'lg:rounded-br-lg rounded-b-lg'
                                : '';

                            return (
                              <ProfileCard
                                key={`${dept.key}-col2-${index}`}
                                imageSrc={member.imageSrc}
                                name={member.name}
                                designation={member.designation}
                                experience={member.experience}
                                variant={variant}
                                className={roundedClass}
                                showBottomDropdown={isFirst}
                              />
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      // Other Departments: Vertical Stack
                      <div className="flex flex-col">
                        {dept.members.map((member, index) => {
                          // Determine variant based on position: first = primary, second = secondary, rest = common
                          const variant = index === 0 ? 'primary' : index === 1 ? 'secondary' : 'common';

                          // Determine rounded corners: first card = top rounded, last card = bottom rounded, others = no rounded
                          const isFirst = index === 0;
                          const isLast = index === dept.members.length - 1;
                          const roundedClass = isFirst ? 'rounded-t-lg' : isLast ? 'rounded-b-lg' : '';

                          return (
                            <ProfileCard
                              key={`${dept.key}-${index}`}
                              imageSrc={member.imageSrc}
                              name={member.name}
                              designation={member.designation}
                              experience={member.experience}
                              variant={variant}
                              className={roundedClass}
                              showBottomDropdown={isFirst}
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* RP Singh - CEO */}
              <div className="bg-white rounded-lg p-5 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5 pb-5 border-b-2 border-zinc-300">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-100 shrink-0 ring-2 ring-zinc-200">
                    <Image
                      src="/employees-images/RP-Singh.png"
                      alt="RP Singh"
                      width={80}
                      height={80}
                      quality={100}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-zinc-900 mb-1">
                      RP Singh – Chief Executive Officer (CEO)
                    </h3>
                  </div>
                </div>
                <div className="space-y-2 mb-5 pb-5 border-b-2 border-zinc-300 flex-1">
                  <p className="text-sm font-medium text-zinc-700">Main Responsibilities:</p>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-1 ml-2">
                    <li>Defines Seasia's long-term vision, growth strategy, and market direction.</li>
                    <li>Oversees global operations, delivery excellence, and client satisfaction.</li>
                    <li>Leads innovation, partnerships, and process governance (CMMI Level 5).</li>
                  </ul>
                </div>
                <div className="mt-auto pt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">Billable to Clients:</span>
                    <span className="text-base text-zinc-900 font-medium"> No – Strategic and governance role</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">🟢 Leadership Focus:</span>
                    <span className="text-base text-zinc-900 font-medium">Vision | Strategy | Organizational Excellence</span>
                  </div>
                </div>
              </div>

              {/* Ganesh Verma - CTO */}
              <div className="bg-white rounded-lg p-5 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5 pb-5 border-b-2 border-zinc-300">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-100 shrink-0 ring-2 ring-zinc-200">
                    <Image
                      src="/employees-images/Engineering/Ganesh-Verma.png"
                      alt="Ganesh Verma"
                      width={80}
                      height={80}
                      quality={100}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-zinc-900 mb-1">
                      Ganesh Verma – Chief Technology Officer (CTO)
                    </h3>
                  </div>
                </div>
                <div className="space-y-2 mb-5 pb-5 border-b-2 border-zinc-300 flex-1">
                  <p className="text-sm font-medium text-zinc-700">Main Responsibilities:</p>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-1 ml-2">
                    <li>Leads Seasia's technology vision and product architecture strategy.</li>
                    <li>Oversees cloud, AI/ML, and data engineering practices.</li>
                    <li>Guides technical leadership teams across all subsidiaries and verticals.</li>
                  </ul>
                </div>
                <div className="mt-auto pt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">Billable to Clients:</span>
                    <span className="text-base text-zinc-900 font-medium"> Partial – Strategic technology leadership role</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">🟢 Leadership Focus:</span>
                    <span className="text-base text-zinc-900 font-medium">Architecture | Innovation | Technology Strategy</span>
                  </div>
                </div>
              </div>

              {/* Yashu Kapila - CQO */}
              <div className="bg-white rounded-lg p-5 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5 pb-5 border-b-2 border-zinc-300">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-100 shrink-0 ring-2 ring-zinc-200">
                    <Image
                      src="/employees-images/Engineering/yashu-kapila.png"
                      alt="Yashu Kapila"
                      width={80}
                      height={80}
                      quality={100}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-zinc-900 mb-1">
                      Yashu Kapila – Chief Quality Officer (CQO)
                    </h3>
                  </div>
                </div>
                <div className="space-y-2 mb-5 pb-5 border-b-2 border-zinc-300 flex-1">
                  <p className="text-sm font-medium text-zinc-700">Main Responsibilities:</p>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-1 ml-2">
                    <li>Heads Seasia's Quality Assurance (QA) and testing functions globally.</li>
                    <li>Ensures process maturity, standardization, and compliance across projects.</li>
                    <li>Drives QA automation, security testing, and performance engineering excellence.</li>
                  </ul>
                </div>
                <div className="mt-auto pt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">Billable to Clients:</span>
                    <span className="text-base text-zinc-900 font-medium"> Partial – Quality and governance oversight role</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">🟢 Leadership Focus:</span>
                    <span className="text-base text-zinc-900 font-medium">QA Strategy | Process Governance | Delivery Quality</span>
                  </div>
                </div>
              </div>

              {/* Anil Rana - CRO */}
              <div className="bg-white rounded-lg p-5 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5 pb-5 border-b-2 border-zinc-300">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-100 shrink-0 ring-2 ring-zinc-200">
                    <Image
                      src="/employees-images/Sales-Marketing/Anil-Rana.png"
                      alt="Anil Rana"
                      width={80}
                      height={80}
                      quality={100}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-zinc-900 mb-1">
                      Anil Rana – Chief Revenue Officer (CRO)
                    </h3>
                  </div>
                </div>
                <div className="space-y-2 mb-5 pb-5 border-b-2 border-zinc-300 flex-1">
                  <p className="text-sm font-medium text-zinc-700">Main Responsibilities:</p>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-1 ml-2">
                    <li>Leads global sales, marketing, and revenue strategy functions.</li>
                    <li>Defines GTM (Go-to-Market) plans, partnership channels, and client engagement frameworks.</li>
                    <li>Oversees business growth, pipeline management, and subsidiary alignment.</li>
                  </ul>
                </div>
                <div className="mt-auto pt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">Billable to Clients:</span>
                    <span className="text-base text-zinc-900 font-medium"> No – Business leadership and client strategy role</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">🟢 Leadership Focus:</span>
                    <span className="text-base text-zinc-900 font-medium">Growth | Partnerships | Market Development</span>
                  </div>
                </div>
              </div>

              {/* Amardeep Pundir - Head of Delivery */}
              <div className="bg-white rounded-lg p-5 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5 pb-5 border-b-2 border-zinc-300">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-100 shrink-0 ring-2 ring-zinc-200">
                    <Image
                      src="/employees-images/Engineering/Amardeep-Pundir.png"
                      alt="Amardeep Pundir"
                      width={80}
                      height={80}
                      quality={100}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-zinc-900 mb-1">
                      Amardeep Pundir – Head of Delivery
                    </h3>
                  </div>
                </div>
                <div className="space-y-2 mb-5 pb-5 border-b-2 border-zinc-300 flex-1">
                  <p className="text-sm font-medium text-zinc-700">Main Responsibilities:</p>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-1 ml-2">
                    <li>Owns global delivery governance, ensuring on-time, high-quality execution.</li>
                    <li>Manages program delivery, resource allocation, and project performance KPIs.</li>
                    <li>Drives efficiency through agile best practices and operational automation.</li>
                  </ul>
                </div>
                <div className="mt-auto pt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">Billable to Clients:</span>
                    <span className="text-base text-zinc-900 font-medium"> Partial – Program oversight role</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">🟢 Leadership Focus:</span>
                    <span className="text-base text-zinc-900 font-medium">Delivery Excellence | Efficiency | Execution Governance</span>
                  </div>
                </div>
              </div>

              {/* Abhishek Vasudev - CCO */}
              <div className="bg-white rounded-lg p-5 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5 pb-5 border-b-2 border-zinc-300">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-100 shrink-0 ring-2 ring-zinc-200">
                    <Image
                      src="/employees-images/UI-UX/Abhishek-Vasudev.png"
                      alt="Abhishek Vasudev"
                      width={80}
                      height={80}
                      quality={100}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-zinc-900 mb-1">
                      Abhishek Vasudev – Chief Creative Officer (CCO)
                    </h3>
                  </div>
                </div>
                <div className="space-y-2 mb-5 pb-5 border-b-2 border-zinc-300 flex-1">
                  <p className="text-sm font-medium text-zinc-700">Main Responsibilities:</p>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-1 ml-2">
                    <li>Leads Seasia's in-house UI/UX Design Studio and Creative Division.</li>
                    <li>Oversees product experience, design systems, and brand identity solutions.</li>
                    <li>Collaborates with Marketing and Sales on client-facing digital experience strategies.</li>
                  </ul>
                </div>
                <div className="mt-auto pt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">Billable to Clients:</span>
                    <span className="text-base text-zinc-900 font-medium"> Partial – Leadership and design innovation role</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">🟢 Leadership Focus:</span>
                    <span className="text-base text-zinc-900 font-medium">Design Strategy | User Experience | Brand Innovation</span>
                  </div>
                </div>
              </div>

              {/* Jatinder Bawa - CIO */}
              <div className="bg-white rounded-lg p-5 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5 pb-5 border-b-2 border-zinc-300">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-100 shrink-0 ring-2 ring-zinc-200">
                    <Image
                      src="/employees-images/IT/JB.png"
                      alt="Jatinder Bawa"
                      width={80}
                      height={80}
                      quality={100}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-zinc-900 mb-1">
                      Jatinder Bawa – Chief Information Officer (CIO)
                    </h3>
                  </div>
                </div>
                <div className="space-y-2 mb-5 pb-5 border-b-2 border-zinc-300 flex-1">
                  <p className="text-sm font-medium text-zinc-700">Main Responsibilities:</p>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-1 ml-2">
                    <li>Manages Seasia's internal IT infrastructure, cybersecurity, and systems integration.</li>
                    <li>Ensures business continuity, network resilience, and compliance with data regulations.</li>
                    <li>Supports technology modernization and IT governance initiatives.</li>
                  </ul>
                </div>
                <div className="mt-auto pt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">Billable to Clients:</span>
                    <span className="text-base text-zinc-900 font-medium"> No – Internal systems and infrastructure role</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">🟢 Leadership Focus:</span>
                    <span className="text-base text-zinc-900 font-medium">IT Governance | Infrastructure | Security</span>
                  </div>
                </div>
              </div>

              {/* Dr. Harpreet Kaur - Director HR & Administration */}
              <div className="bg-white rounded-lg p-5 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5 pb-5 border-b-2 border-zinc-300">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-100 shrink-0 ring-2 ring-zinc-200">
                    <Image
                      src="/employees-images/HR/Harpreet-Kaur.png"
                      alt="Dr. Harpreet Kaur"
                      width={80}
                      height={80}
                      quality={100}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-zinc-900 mb-1">
                      Dr. Harpreet Kaur – Director, HR & Administration
                    </h3>
                  </div>
                </div>
                <div className="space-y-2 mb-5 pb-5 border-b-2 border-zinc-300 flex-1">
                  <p className="text-sm font-medium text-zinc-700">Main Responsibilities:</p>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-1 ml-2">
                    <li>Leads Seasia's global human resource strategy and organizational development.</li>
                    <li>Oversees recruitment, training, talent management, and workplace culture.</li>
                    <li>Manages administration, compliance, and people engagement initiatives.</li>
                  </ul>
                </div>
                <div className="mt-auto pt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">Billable to Clients:</span>
                    <span className="text-base text-zinc-900 font-medium"> No – Human capital and organizational leadership role</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base text-zinc-600">🟢 Leadership Focus:</span>
                    <span className="text-base text-zinc-900 font-medium">People Strategy | HR Development | Organizational Culture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales & Marketing */}
        {/* <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
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


            <div className="space-y-4">
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-2">
                  Commercial Meeting
                </h3>
                <p className="text-zinc-600 text-base">[To be provided]</p>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-2">
                  Coaching
                </h3>
                <p className="text-zinc-600 text-base">[To be provided]</p>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-2">
                  Sales Reporting Process
                </h3>
                <p className="text-zinc-600 text-base">[To be provided]</p>
              </div>

              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-2">
                  Operational KPIs
                </h3>
                <p className="text-zinc-600 text-base">[To be provided]</p>
              </div>
            </div>
          </div>
        </div> */}

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
                        <h4 className="text-base font-semibold text-zinc-900">
                          Workforce Planning & Requisition Approval
                        </h4>
                      </div>
                      <ul className="text-base text-zinc-600 list-disc list-inside space-y-1">
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
                        <h4 className="text-base font-semibold text-zinc-900">
                          Job Posting & Sourcing
                        </h4>
                      </div>
                      <ul className="text-base text-zinc-600 list-disc list-inside space-y-1">
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
                        <h4 className="text-base font-semibold text-zinc-900">
                          Screening & Shortlisting
                        </h4>
                      </div>
                      <ul className="text-base text-zinc-600 list-disc list-inside space-y-1">
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
                        <h4 className="text-base font-semibold text-zinc-900">
                          Interviews & Assessment
                        </h4>
                      </div>
                      <ul className="text-base text-zinc-600 list-disc list-inside space-y-1">
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
                        <h4 className="text-base font-semibold text-zinc-900">
                          Selection & Offer
                        </h4>
                      </div>
                      <ul className="text-base text-zinc-600 list-disc list-inside space-y-1">
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
                        <h4 className="text-base font-semibold text-zinc-900">
                          Background & Reference Checks
                        </h4>
                      </div>
                      <ul className="text-base text-zinc-600 list-disc list-inside space-y-1">
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
                        <h4 className="text-base font-semibold text-zinc-900">
                          Onboarding
                        </h4>
                      </div>
                      <ul className="text-base text-zinc-600 list-disc list-inside space-y-1">
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
              <p className="text-zinc-600 mb-4 text-base">
                Modern recruitment teams leverage technology to streamline processes and improve outcomes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <FiGlobe className="text-orange-600" size={18} />
                    </div>
                    <h4 className="text-base font-semibold text-zinc-900">
                      Job Boards & Career Platforms
                    </h4>
                  </div>
                  <p className="text-base text-zinc-600">
                    LinkedIn, Naukri.com, Company Website - for posting vacancies and sourcing candidates.
                  </p>
                </div>

                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FiShare2 className="text-blue-600" size={18} />
                    </div>
                    <h4 className="text-base font-semibold text-zinc-900">
                      Social Media
                    </h4>
                  </div>
                  <p className="text-base text-zinc-600">
                    LinkedIn - for employer branding and sourcing passive candidates.
                  </p>
                </div>

                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <FiUsers className="text-green-600" size={18} />
                    </div>
                    <h4 className="text-base font-semibold text-zinc-900">
                      Employee Referral Platforms
                    </h4>
                  </div>
                  <p className="text-base text-zinc-600">
                    Internal Referral.
                  </p>
                </div>

                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <FiFileText className="text-purple-600" size={18} />
                    </div>
                    <h4 className="text-base font-semibold text-zinc-900">
                      Assessment Tools
                    </h4>
                  </div>
                  <p className="text-base text-zinc-600">
                    For testing skills, aptitude, and personality.
                  </p>
                </div>

                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <FiMessageCircle className="text-orange-600" size={18} />
                    </div>
                    <h4 className="text-base font-semibold text-zinc-900">
                      Communication & Collaboration Tools
                    </h4>
                  </div>
                  <p className="text-base text-zinc-600">
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
                    <h4 className="text-base font-semibold text-zinc-900">Phased Lifecycle</h4>
                  </div>
                  <p className="text-base text-zinc-600 mb-3">
                    Every engagement is divided into clear, auditable stages:
                  </p>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-2">
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
                    <h4 className="text-base font-semibold text-zinc-900">Delivery Governance</h4>
                  </div>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-2">
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
                    <h4 className="text-base font-semibold text-zinc-900">Team Composition</h4>
                  </div>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-2">
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
                    <h4 className="text-base font-semibold text-zinc-900">Resource Allocation</h4>
                  </div>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-2">
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
                    <h4 className="text-base font-semibold text-zinc-900">Seasia Agile Model (SAM)</h4>
                  </div>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-2">
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
                    <h4 className="text-base font-semibold text-zinc-900">Communication & Collaboration</h4>
                  </div>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-2">
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
                    <h4 className="text-base font-semibold text-zinc-900">Performance Tracking</h4>
                  </div>
                  <ul className="text-base text-zinc-600 list-disc list-inside space-y-2">
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
                  <h4 className="text-base font-semibold text-zinc-900">Risk & Quality Management</h4>
                </div>
                <ul className="text-base text-zinc-600 list-disc list-inside space-y-2">
                  <li>QA and Risk functions are embedded throughout the lifecycle — not post-development.</li>
                  <li>Architecture reviews, test automation frameworks, and early performance testing mitigate delivery and scalability risks.</li>
                  <li>Continuous improvement feedback loops ensure learnings are captured for future engagements.</li>
                </ul>
                <p className="text-base text-zinc-600 mt-3">
                  This integrated structure ensures every project is managed with a clear accountability chain, proactive risk control, and quantifiable quality outcomes.
                </p>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-base font-semibold text-zinc-900 mb-2">Summary</h3>
              <p className="text-base text-zinc-600">
                Seasia's project structuring emphasizes clarity, agility, and accountability — with defined governance layers and collaborative ownership across functions. The model ensures that each engagement is staffed with the right expertise, managed through data-driven oversight, and delivered with predictable quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
