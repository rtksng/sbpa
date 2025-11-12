import { FiUsers, FiMapPin, FiDollarSign, FiAlertCircle, FiCheck, FiBook, FiCalendar, FiRefreshCw } from 'react-icons/fi';

export default function StaffAnalysis() {
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
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
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
        </div>


        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
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
        </div>



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
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
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
        </div>

        {/* Consultants' Education Analysis */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
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
        </div>

        {/* Age Pyramid */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
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
        </div>

        {/* Staff Rotation Analysis */}
        <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#fb5642] rounded-lg">
              <FiRefreshCw className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Staff Rotation Analysis
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 mb-4">
              Consultants' turnover in 2023 and January 2024 to date, by quarter, split between employees, contractors and freelancers
            </p>
            
            {/* 2023 Quarters */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">2023</h3>
              <div className="space-y-4">
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <h4 className="text-base font-semibold text-zinc-900 mb-3">Q1 2023</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-zinc-600 mb-1">Employees</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Beginning:</span>
                          <span className="font-semibold">60</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Entries:</span>
                          <span className="font-semibold text-green-600">+5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Exits:</span>
                          <span className="font-semibold text-red-600">-2</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-zinc-300">
                          <span className="font-medium">End:</span>
                          <span className="font-bold">63</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-600 mb-1">Contractors</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Beginning:</span>
                          <span className="font-semibold">30</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Entries:</span>
                          <span className="font-semibold text-green-600">+3</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Exits:</span>
                          <span className="font-semibold text-red-600">-1</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-zinc-300">
                          <span className="font-medium">End:</span>
                          <span className="font-bold">32</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-600 mb-1">Freelancers</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Beginning:</span>
                          <span className="font-semibold">20</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Entries:</span>
                          <span className="font-semibold text-green-600">+2</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Exits:</span>
                          <span className="font-semibold text-red-600">-1</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-zinc-300">
                          <span className="font-medium">End:</span>
                          <span className="font-bold">21</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <h4 className="text-base font-semibold text-zinc-900 mb-3">Q2 2023</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-zinc-600 mb-1">Employees</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Beginning:</span>
                          <span className="font-semibold">63</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Entries:</span>
                          <span className="font-semibold text-green-600">+4</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Exits:</span>
                          <span className="font-semibold text-red-600">-3</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-zinc-300">
                          <span className="font-medium">End:</span>
                          <span className="font-bold">64</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-600 mb-1">Contractors</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Beginning:</span>
                          <span className="font-semibold">32</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Entries:</span>
                          <span className="font-semibold text-green-600">+2</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Exits:</span>
                          <span className="font-semibold text-red-600">-2</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-zinc-300">
                          <span className="font-medium">End:</span>
                          <span className="font-bold">32</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-600 mb-1">Freelancers</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Beginning:</span>
                          <span className="font-semibold">21</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Entries:</span>
                          <span className="font-semibold text-green-600">+1</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Exits:</span>
                          <span className="font-semibold text-red-600">-1</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-zinc-300">
                          <span className="font-medium">End:</span>
                          <span className="font-bold">21</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <h4 className="text-base font-semibold text-zinc-900 mb-3">Q3 2023</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-zinc-600 mb-1">Employees</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Beginning:</span>
                          <span className="font-semibold">64</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Entries:</span>
                          <span className="font-semibold text-green-600">+6</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Exits:</span>
                          <span className="font-semibold text-red-600">-4</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-zinc-300">
                          <span className="font-medium">End:</span>
                          <span className="font-bold">66</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-600 mb-1">Contractors</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Beginning:</span>
                          <span className="font-semibold">32</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Entries:</span>
                          <span className="font-semibold text-green-600">+3</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Exits:</span>
                          <span className="font-semibold text-red-600">-1</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-zinc-300">
                          <span className="font-medium">End:</span>
                          <span className="font-bold">34</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-600 mb-1">Freelancers</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Beginning:</span>
                          <span className="font-semibold">21</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Entries:</span>
                          <span className="font-semibold text-green-600">+2</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Exits:</span>
                          <span className="font-semibold text-red-600">-2</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-zinc-300">
                          <span className="font-medium">End:</span>
                          <span className="font-bold">21</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                  <h4 className="text-base font-semibold text-zinc-900 mb-3">Q4 2023</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-zinc-600 mb-1">Employees</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Beginning:</span>
                          <span className="font-semibold">66</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Entries:</span>
                          <span className="font-semibold text-green-600">+3</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Exits:</span>
                          <span className="font-semibold text-red-600">-3</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-zinc-300">
                          <span className="font-medium">End:</span>
                          <span className="font-bold">66</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-600 mb-1">Contractors</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Beginning:</span>
                          <span className="font-semibold">34</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Entries:</span>
                          <span className="font-semibold text-green-600">+2</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Exits:</span>
                          <span className="font-semibold text-red-600">-1</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-zinc-300">
                          <span className="font-medium">End:</span>
                          <span className="font-bold">35</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-600 mb-1">Freelancers</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Beginning:</span>
                          <span className="font-semibold">21</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Entries:</span>
                          <span className="font-semibold text-green-600">+1</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Exits:</span>
                          <span className="font-semibold text-red-600">-1</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-zinc-300">
                          <span className="font-medium">End:</span>
                          <span className="font-bold">21</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* January 2024 */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">January 2024</h3>
              <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  <div>
                    <p className="text-sm text-zinc-600 mb-1">Employees</p>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Beginning:</span>
                        <span className="font-semibold">66</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Entries:</span>
                        <span className="font-semibold text-green-600">+2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Exits:</span>
                        <span className="font-semibold text-red-600">-3</span>
                      </div>
                      <div className="flex justify-between pt-1 border-t border-zinc-300">
                        <span className="font-medium">End:</span>
                        <span className="font-bold">65</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-600 mb-1">Contractors</p>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Beginning:</span>
                        <span className="font-semibold">35</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Entries:</span>
                        <span className="font-semibold text-green-600">+1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Exits:</span>
                        <span className="font-semibold text-red-600">-1</span>
                      </div>
                      <div className="flex justify-between pt-1 border-t border-zinc-300">
                        <span className="font-medium">End:</span>
                        <span className="font-bold">35</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-600 mb-1">Freelancers</p>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Beginning:</span>
                        <span className="font-semibold">21</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Entries:</span>
                        <span className="font-semibold text-green-600">+1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Exits:</span>
                        <span className="font-semibold text-red-600">-0</span>
                      </div>
                      <div className="flex justify-between pt-1 border-t border-zinc-300">
                        <span className="font-medium">End:</span>
                        <span className="font-bold">22</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="bg-zinc-50 rounded-lg p-6 border border-zinc-200">
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
