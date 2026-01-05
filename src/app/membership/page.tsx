import Link from "next/link";

export default function Membership() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join JSE</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Become part of a powerful collective voice for SMMEs
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Gain access to comprehensive support, advocacy, and representation 
              designed specifically for small, medium, and micro enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Eligibility */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Membership Eligibility</h2>
            
            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Who Can Join?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Any employer within our scope is eligible for membership. This includes:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Business Types</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sole proprietorships</li>
                    <li>• Closed corporations</li>
                    <li>• Companies (registered under Companies Act)</li>
                    <li>• Private businesses</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Size Requirement</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Small businesses (less than 500 employees)</li>
                    <li>• Medium enterprises</li>
                    <li>• Micro enterprises</li>
                    <li>• Informal sector businesses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Membership Application CTA */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Apply for Membership?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Complete our membership application form and take the first step towards joining 
                  South Africa&apos;s premier SME advocacy organization.
                </p>
                <Link 
                  href="/contact#membership-form"
                  className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                >
                  Fill Membership Application Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Cover */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Sectors We Cover</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { sector: "Agriculture", desc: "Farms, ranches, and agricultural businesses" },
                { sector: "Mining & Quarrying", desc: "Mineral extraction and stone quarrying" },
                { sector: "Manufacturing", desc: "Production of goods from raw materials" },
                { sector: "Private Security", desc: "Security services and protection" },
                { sector: "Construction", desc: "Building and infrastructure development" },
                { sector: "Funeral Parlours", desc: "Funeral and burial services" },
                { sector: "Wholesale & Retail", desc: "Trading and commercial businesses" },
                { sector: "Community Services", desc: "Healthcare, education, social assistance" },
                { sector: "Financial & Business Services", desc: "Financial products and professional services" },
                { sector: "ICT Sector", desc: "Telecommunications, IT, and digital services" },
                { sector: "Informal Sector", desc: "Unregistered businesses and traders" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-blue-900 text-lg mb-2">{item.sector}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Membership Benefits</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
                  <div className="text-blue-600 text-3xl">⚖️</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Legal Protection</h3>
                <p className="text-gray-600">
                  Access to legal assistance, CCMA representation, and employment law guidance.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
                  <div className="text-blue-600 text-3xl">🤝</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Collective Bargaining</h3>
                <p className="text-gray-600">
                  Unified voice in negotiations with trade unions and government bodies.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
                  <div className="text-blue-600 text-3xl">📚</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Training & Development</h3>
                <p className="text-gray-600">
                  Compliance training, management development, and skills enhancement programs.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
                  <div className="text-blue-600 text-3xl">📢</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Policy Advocacy</h3>
                <p className="text-gray-600">
                  Influence on labour, social, and economic policies affecting your business.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
                  <div className="text-blue-600 text-3xl">🛡️</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Risk Management</h3>
                <p className="text-gray-600">
                  Compliance support, risk assessments, and preventive strategies.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
                  <div className="text-blue-600 text-3xl">💼</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Business Support</h3>
                <p className="text-gray-600">
                  Strategic consulting, networking opportunities, and industry intelligence.
                </p>
              </div>
            </div>

            {/* Quick Application CTA */}
            <div className="text-center mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Experience These Benefits Today</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Don&apos;t wait to secure your business&apos;s future. Join JSE now and immediately access 
                  all our comprehensive support services and member benefits.
                </p>
                <Link 
                  href="/contact#membership-form"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                >
                  Complete Membership Application
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">How to Join</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-900 text-white rounded-full p-4 flex-shrink-0">
                  <span className="font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Submit Application</h3>
                  <p className="text-gray-700">
                    Lodge your written application for membership together with the yearly membership fee 
                    with our secretary. Ensure all required documentation is complete.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-900 text-white rounded-full p-4 flex-shrink-0">
                  <span className="font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Review Process</h3>
                  <p className="text-gray-700">
                    The Executive Committee will consider your application within four weeks of receipt. 
                    We&apos;ll assess your eligibility and alignment with our objectives.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-900 text-white rounded-full p-4 flex-shrink-0">
                  <span className="font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Approval & Welcome</h3>
                  <p className="text-gray-700">
                    Upon approval, you&apos;ll receive your membership number and welcome package. 
                    You&apos;ll immediately gain access to all member benefits and services.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-900 text-white rounded-full p-4 flex-shrink-0">
                  <span className="font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Active Participation</h3>
                  <p className="text-gray-700">
                    As a member, you&apos;ll have voting rights in general meetings and the opportunity 
                    to participate in the governance and direction of the organisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Fees */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Membership Investment</h2>
            
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Competitive Membership Fees</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our membership fees are determined by the Executive Committee and reviewed annually 
                to ensure they remain accessible while supporting our comprehensive services.
              </p>
              
              <div className="bg-white rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  <strong>For detailed fee information, please contact us:</strong>
                </p>
                <a 
                  href="mailto:justicesmme@gmail.com" 
                  className="text-blue-600 text-xl font-semibold hover:underline"
                >
                  justicesmme@gmail.com
                </a>
              </div>
              
              <p className="text-sm text-gray-600">
                * Fees vary based on business size and sector. Contact us for a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Movement?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Take the first step towards securing your business&apos;s future. Join JSE today 
            and become part of a powerful collective voice for SMMEs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact#membership-form"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 shadow-lg"
            >
              🖊️ Fill Membership Form
            </Link>
            <a 
              href="mailto:justicesmme@gmail.com?subject=Membership Application" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              📧 Email Application
            </a>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              💬 Ask Questions First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}