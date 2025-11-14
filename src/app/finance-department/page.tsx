
export default function Finance() {
  const excelFiles = [
    { name: 'Financial Data', filename: 'Fin.xlsx', path: '/Finance/Fin.xlsx' }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Finance </h1>

      {/* Finance Data Section */}
      <div className="bg-white rounded-lg shadow-md p-6">

        <div className="space-y-4">
          {excelFiles.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{file.name}</span>
                <span className="text-sm text-gray-500">({file.filename})</span>
              </div>

              <a
                href={file.path}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View Data
              </a>
            </div>
          ))}
        </div>

        {excelFiles.length === 0 && (
          <p className="text-gray-500 text-center py-8">No finance data files available.</p>
        )}
      </div>
    </div>
  );
}

