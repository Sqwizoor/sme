export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive support services designed specifically for SMEs
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Core Services</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Legal Support */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 text-4xl mb-4">⚖️</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Legal Support</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Employment contract drafting</li>
                  <li>• CCMA representation</li>
                  <li>• Labour court proceedings</li>
                  <li>• Arbitration services</li>
                  <li>• Legal consultation</li>
                </ul>
              </div>

              {/* Employment Relations */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Employment Relations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Workplace grievance resolution</li>
                  <li>• Disciplinary inquiry chairing</li>
                  <li>• Union negotiations support</li>
                  <li>• Policy development</li>
                  <li>• HR advisory services</li>
                </ul>
              </div>

              {/* Training & Development */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 text-4xl mb-4">📚</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Training & Development</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Compliance training</li>
                  <li>• Management development</li>
                  <li>• Labour law workshops</li>
                  <li>• Skills development</li>
                  <li>• Best practices seminars</li>
                </ul>
              </div>

              {/* Policy Advocacy */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 text-4xl mb-4">📢</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Policy Advocacy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Government lobbying</li>
                  <li>• Industry representation</li>
                  <li>• Policy position papers</li>
                  <li>• Legislative submissions</li>
                  <li>• Stakeholder engagement</li>
                </ul>
              </div>

              {/* Risk Management */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Risk Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Compliance audits</li>
                  <li>• Risk assessments</li>
                  <li>• Preventive strategies</li>
                  <li>• Crisis management</li>
                  <li>• Insurance guidance</li>
                </ul>
              </div>

              {/* Business Support */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 text-4xl mb-4">💼</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Business Support</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Strategic consulting</li>
                  <li>• Business development</li>
                  <li>• Networking opportunities</li>
                  <li>• Resource mobilization</li>
                  <li>• Industry intelligence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Specialized Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Bargaining Council Representation</h3>
                <p className="text-gray-700 mb-4">
                  JSMME represents member interests on bargaining and statutory councils, 
                  ensuring your voice is heard in industry-wide negotiations and decisions.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Industry wage negotiations</li>
                  <li>• Working conditions discussions</li>
                  <li>• Policy formulation participation</li>
                  <li>• Collective agreement oversight</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">International Relations</h3>
                <p className="text-gray-700 mb-4">
                  We maintain affiliations with international employers&apos; organisations 
                  and the International Labour Organisation (ILO) for global best practices.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Global industry insights</li>
                  <li>• International best practices</li>
                  <li>• Cross-border business support</li>
                  <li>• ILO convention guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">How We Serve You</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 rounded-full p-4 flex-shrink-0">
                  <span className="text-blue-900 font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Initial Consultation</h3>
                  <p className="text-gray-700">
                    We assess your specific needs and challenges to provide tailored solutions 
                    that align with your business objectives and industry requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 rounded-full p-4 flex-shrink-0">
                  <span className="text-blue-900 font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Strategic Planning</h3>
                  <p className="text-gray-700">
                    Our experts develop comprehensive strategies and action plans to address 
                    your employment relations, compliance, and business development needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 rounded-full p-4 flex-shrink-0">
                  <span className="text-blue-900 font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Implementation Support</h3>
                  <p className="text-gray-700">
                    We provide hands-on support during implementation, ensuring smooth 
                    execution of solutions and addressing any challenges that arise.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 rounded-full p-4 flex-shrink-0">
                  <span className="text-blue-900 font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Ongoing Partnership</h3>
                  <p className="text-gray-700">
                    We maintain long-term relationships with our members, providing continuous 
                    support, updates on regulatory changes, and strategic guidance as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Access Our Services?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join JSMME today and gain access to comprehensive support services designed to help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/membership" 
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Become a Member
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}