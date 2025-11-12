import { FiUsers, FiMapPin, FiDollarSign, FiAlertCircle, FiCheck, FiBook, FiCalendar, FiRefreshCw } from 'react-icons/fi';

export default function StaffAnalysis() {
  const consultantData = {
    fiscalYear: "FY 2025",
    categories: [
      {
        employeeType: "Consultant",
        total: 375,
        billingRanges: {
          "0-50k": 168,
          "50k-1Lakh": 106,
          "1Lakh-1.5Lakh": 56,
          "1.5Lakh-2Lakh": 20,
          "2LakhAndAbove": 25
        }
      },
      {
        employeeType: "Moogle Canada",
        total: 4,
        billingRanges: {
          "0-50k": null,
          "50k-1Lakh": null,
          "1Lakh-1.5Lakh": null,
          "1.5Lakh-2Lakh": null,
          "2LakhAndAbove": null
        }
      },
      {
        employeeType: "Subcontractors (B2B)",
        total: 19,
        billingRanges: {
          "0-50k": 0,
          "50k-1Lakh": 0,
          "1Lakh-1.5Lakh": 0,
          "1.5Lakh-2Lakh": 6,
          "2LakhAndAbove": 13
        }
      },
      {
        employeeType: "FTE support",
        total: null,
        billingRanges: {
          "0-50k": null,
          "50k-1Lakh": null,
          "1Lakh-1.5Lakh": null,
          "1.5Lakh-2Lakh": null,
          "2LakhAndAbove": null
        }
      }
    ],
    grandTotal: 394
  };

  const employeeData = {
    fiscalYear: "FY 2025",
    departments: [
      {
        department: "Sales",
        count: 21
      },
      {
        department: "HR",
        count: 5
      },
      {
        department: "Marketing",
        count: 29
      },
      {
        department: "Finance",
        count: 3
      },
      {
        department: "Other",
        count: 375
      }
    ],
    total: 433
  };

  const locationData = {
    locations: [
      {
        cityCountry: "Tricity",
        consultants: 155
      },
      {
        cityCountry: "Haryana",
        consultants: 97
      },
      {
        cityCountry: "Bihar",
        consultants: 12
      },
      {
        cityCountry: "Rajasthan",
        consultants: 13
      },
      {
        cityCountry: "Dehradun",
        consultants: 9
      },
      {
        cityCountry: "Himachal",
        consultants: 79
      },
      {
        cityCountry: "UP",
        consultants: 10
      }
    ]
  };

  const ageDistribution = {
    categories: [
      {
        ageRange: "under 25",
        percentage: 24.8
      },
      {
        ageRange: "25-35 years",
        percentage: 56.0
      },
      {
        ageRange: "35-45 years",
        percentage: 19.0
      },
      {
        ageRange: "45-55 years",
        percentage: 0.0
      },
      {
        ageRange: "over 55",
        percentage: 0.2
      }
    ],
    total: 100.0
  };

  const educationData = {
    diplomas: [
      {
        diploma: "B.Tech/BCA/BCOM",
        percentage: 78.2
      },
      {
        diploma: "MSC/M.tech/MCA/MBA",
        percentage: 21.8
      },
      {
        diploma: "PHD",
        percentage: 0.0
      }
    ],
    total: 100.0
  };

  const skillData = {
    skills: [
      {
        skill: "AI - Implementation and Quality",
        count: 108
      },
      {
        skill: "Enterprise & Integration Technologies",
        count: 102
      },
      {
        skill: "Cloud-Native, Devops & Infrastructure",
        count: 32
      },
      {
        skill: "Data Engineering",
        count: 8
      },
      {
        skill: "Digital & Product Transformation",
        count: 32
      },
      {
        skill: "Cybersecurity",
        count: 8
      },
      {
        skill: "Quality Engineering",
        count: 60
      },
      {
        skill: "Automation",
        count: 35
      },
      {
        skill: "Solution Architecture & Design",
        count: 16
      }
    ],
    total: 401
  };

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
          
        </div>

        {/* Consultants Onsite vs Offsite Analysis */}
        {/* <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
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
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-3">Onsite Consultants</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Total:</span>
                    <span className="font-semibold text-zinc-900 bg-orange-100 px-2 py-1 rounded text-base">300</span>
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
                 
                </div>
              </div>
            </div>
          </div>
        </div> */}


        {/* Key Metrics Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
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
            
          </div>
        </div> */}



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
            
            </div>
          </div>
        </div>

        {/* Consultants' Location Analysis by Office */}
        {/* <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiMapPin className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Consultants' Location Analysis: By Office
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              Distribution of consultants across different office locations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-3">Office Location 1</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Consultants:</span>
                    <span className="font-semibold text-zinc-900 bg-blue-100 px-2 py-1 rounded text-base">120</span>
                  </div>
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Percentage:</span>
                    <span className="font-semibold text-zinc-900 text-base">30%</span>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-3">Office Location 2</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Consultants:</span>
                    <span className="font-semibold text-zinc-900 bg-green-100 px-2 py-1 rounded text-base">150</span>
                  </div>
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Percentage:</span>
                    <span className="font-semibold text-zinc-900 text-base">37.5%</span>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-3">Office Location 3</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Consultants:</span>
                    <span className="font-semibold text-zinc-900 bg-purple-100 px-2 py-1 rounded text-base">130</span>
                  </div>
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Percentage:</span>
                    <span className="font-semibold text-zinc-900 text-base">32.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Consultants' Education Analysis */}
        {/* <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiBook className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Consultants' Education Analysis
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              Distribution of consultants by education level: B.Tech / M.Tech
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-3">B.Tech</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Total:</span>
                    <span className="font-semibold text-zinc-900 bg-blue-100 px-2 py-1 rounded text-base">250</span>
                  </div>
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Percentage:</span>
                    <span className="font-semibold text-zinc-900 text-base">62.5%</span>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-3">M.Tech</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Total:</span>
                    <span className="font-semibold text-zinc-900 bg-indigo-100 px-2 py-1 rounded text-base">150</span>
                  </div>
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Percentage:</span>
                    <span className="font-semibold text-zinc-900 text-base">37.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Age Pyramid */}
        {/* <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiCalendar className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Age Pyramid
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              Distribution of consultants by age categories: 20 yrs – 60 yrs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-3">20-30 years</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Total:</span>
                    <span className="font-semibold text-zinc-900 bg-green-100 px-2 py-1 rounded text-base">120</span>
                  </div>
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Percentage:</span>
                    <span className="font-semibold text-zinc-900 text-base">30%</span>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-3">31-40 years</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Total:</span>
                    <span className="font-semibold text-zinc-900 bg-blue-100 px-2 py-1 rounded text-base">180</span>
                  </div>
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Percentage:</span>
                    <span className="font-semibold text-zinc-900 text-base">45%</span>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-3">41-50 years</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Total:</span>
                    <span className="font-semibold text-zinc-900 bg-yellow-100 px-2 py-1 rounded text-base">80</span>
                  </div>
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Percentage:</span>
                    <span className="font-semibold text-zinc-900 text-base">20%</span>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <h3 className="text-base font-semibold text-zinc-900 mb-3">51-60 years</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Total:</span>
                    <span className="font-semibold text-zinc-900 bg-orange-100 px-2 py-1 rounded text-base">20</span>
                  </div>
                  <div className="flex justify-between items-center text-base">
                    <span className="text-zinc-600">Percentage:</span>
                    <span className="font-semibold text-zinc-900 text-base">5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Number of consultants (FTE) */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiUsers className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Number of consultants (FTE)
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              {consultantData.fiscalYear}
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200">
                <thead className="bg-zinc-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-zinc-500 uppercase tracking-wider">
                      Employee Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-zinc-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-zinc-500 uppercase tracking-wider">
                      0-50k
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-zinc-500 uppercase tracking-wider">
                      50k-1Lakh
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-zinc-500 uppercase tracking-wider">
                      1Lakh-1.5Lakh
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-zinc-500 uppercase tracking-wider">
                      1.5Lakh-2Lakh
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-zinc-500 uppercase tracking-wider">
                    2 Lakh & Above
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-zinc-200">
                  {consultantData.categories.map((category, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900">
                        {category.employeeType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                        {category.total !== null ? category.total : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                        {category.billingRanges["0-50k"] !== null ? category.billingRanges["0-50k"] : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                        {category.billingRanges["50k-1Lakh"] !== null ? category.billingRanges["50k-1Lakh"] : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                        {category.billingRanges["1Lakh-1.5Lakh"] !== null ? category.billingRanges["1Lakh-1.5Lakh"] : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                        {category.billingRanges["1.5Lakh-2Lakh"] !== null ? category.billingRanges["1.5Lakh-2Lakh"] : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                        {category.billingRanges["2LakhAndAbove"] !== null ? category.billingRanges["2LakhAndAbove"] : '-'}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-zinc-50 font-semibold">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                      Grand Total
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                      {consultantData.grandTotal}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Support staff subdivision (non-productive FTEs) */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiUsers className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Support staff subdivision (non-productive FTEs)
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              {employeeData.fiscalYear}
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200">
                <thead className="bg-zinc-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-zinc-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-zinc-500 uppercase tracking-wider">
                      Count
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-zinc-200">
                  {employeeData.departments.map((dept, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900">
                        {dept.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                        {dept.count}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-zinc-50 font-semibold">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                      Total
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                      {employeeData.total}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Cities and/or countries in which they were located YTD 2026 */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiMapPin className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Cities and/or countries in which they were located YTD 2026
            </h2>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200">
                <thead className="bg-zinc-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-zinc-500 uppercase tracking-wider text-sm">
                      City/Country
                    </th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-zinc-500 uppercase tracking-wider text-sm">
                      Consultants
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-zinc-200">
                  {locationData.locations.map((location, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900">
                        {location.cityCountry}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                        {location.consultants}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Age distribution of productive employees */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiCalendar className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Age distribution of productive employees
            </h2>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200">
                <thead className="bg-zinc-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left  font-medium text-zinc-500 uppercase tracking-wider text-sm">
                      Age Range
                    </th>
                    <th scope="col" className="px-6 py-3 text-left  font-medium text-zinc-500 uppercase tracking-wider text-sm">
                      Percentage
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-zinc-200">
                  {ageDistribution.categories.map((category, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900">
                        {category.ageRange}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                        {category.percentage}%
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-zinc-50 font-semibold">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                      Total
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                      {ageDistribution.total}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Educational background of productive employees */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiBook className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Educational background of productive employees
            </h2>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200">
                <thead className="bg-zinc-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left  font-medium text-zinc-500 uppercase tracking-wider text-sm">
                      Diploma
                    </th>
                    <th scope="col" className="px-6 py-3 text-left  font-medium text-zinc-500 uppercase tracking-wider text-sm">
                      Percentage
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-zinc-200">
                  {educationData.diplomas.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900">
                        {item.diploma}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                        {item.percentage}%
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-zinc-50 font-semibold">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                      Total
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                      {educationData.total}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Skill Distribution */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiUsers className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Skill Distribution of Productive Employees
            </h2>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200">
                <thead className="bg-zinc-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left  font-medium text-zinc-500 uppercase tracking-wider text-sm">
                      Skill
                    </th>
                    <th scope="col" className="px-6 py-3 text-left  font-medium text-zinc-500 uppercase tracking-wider text-sm">
                      Resource Count
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-zinc-200">
                  {skillData.skills.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900">
                        {item.skill}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                        {item.count}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-zinc-50 font-semibold">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                      Total
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                      {skillData.total}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bench Analysis */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiUsers className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Bench Analysis
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              Number of consultants currently on the bench
            </p>
            <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">Consultants on Bench</h3>
                  <p className="text-sm text-zinc-600">Currently available consultants awaiting project assignment</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-zinc-900">40</p>
                  <p className="text-sm text-zinc-500 mt-1">Consultants</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
