export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About JSE</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Understanding our mission, vision, and commitment to South African SMEs
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To protect and promote the interests of small, medium, and micro enterprises 
                by providing comprehensive support, advocacy, and representation. We strive to 
                create a favorable business environment that enables SMEs to thrive and contribute 
                to South Africa&apos;s economic growth.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading voice for small and medium enterprises in South Africa, 
                fostering an environment where businesses can operate efficiently, competitively, 
                and sustainably while contributing to job creation and economic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Are */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What is JSE?</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">A Voluntary, Non-Profit Organisation</h3>
              <p className="text-lg text-gray-700 mb-6">
                JUSTICE FOR SMALL ENTERPRISES (JSE) is a voluntary, non-profit employers&apos; 
                organisation with continued existence, established to serve the interests of SMMEs across South Africa.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Legal Status</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Corporate personality distinct from members</li>
                    <li>• Can own property and enter contracts</li>
                    <li>• Can sue or be sued in its own name</li>
                    <li>• Continues to exist despite membership changes</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Scope of Coverage</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Businesses with less than 500 employees</li>
                    <li>• Multiple industry sectors</li>
                    <li>• Sole proprietorships to companies</li>
                    <li>• Registered and informal businesses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Governance Structure</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">Board of Directors</h3>
                <p className="text-gray-700 mb-4">
                  The Board comprises 5-7 persons responsible for controlling and directing the affairs of the organisation.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Board Chairperson</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Board Vice-Chairperson</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Board Secretary</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Board Treasurer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Board Deputy Secretary</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Administration</h3>
                <p className="text-gray-700 mb-4">
                  The administration handles day-to-day operations and implements Board decisions.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-700">Chief Executive Officer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-700">Executive Director: National Operations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-700">Chief Information Officer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-700">Chief Director: Human Resources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-700">Regional Directors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Our Core Principles</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-3">Protection</h3>
                <p className="text-blue-200">
                  Safeguarding the rights and interests of SMEs in all employment and business matters.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-3">Promotion</h3>
                <p className="text-blue-200">
                  Actively advancing policies and practices that benefit small and medium enterprises.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Partnership</h3>
                <p className="text-blue-200">
                  Building strong relationships with government, unions, and other stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}