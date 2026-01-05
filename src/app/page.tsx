import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[85vh] md:min-h-[90vh] lg:min-h-[90vh] pt-20 md:pt-0 flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/black2.jpg')`,
            }}
          ></div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-brown-900/40 to-slate-900/50"></div>
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/5 to-transparent animate-pulse"></div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-amber-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-brown-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>

        <div className="relative container mx-auto px-4 py-3 md:py-8">
          <div className="max-w-5xl mx-auto text-center">


            <h1 className="brand-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-5 leading-tight">
              <span className="block text-white text-xl sm:text-2xl md:text-3xl md:mb-1">
                <em className="not-italic md:italic">Welcome</em>
              </span>
              <span className="block text-amber-600 text-lg sm:text-xl md:text-2xl mb-2">
                <em className="not-italic md:italic">To</em>
              </span>
              <span className="block text-white mb-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl brand-italic">
                JUSTICE FOR SMALL ENTERPRISES (JSE)
              </span>
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-4 md:mb-5 border border-white/20 max-w-4xl mx-auto">
              <h2 className="brand-display italic text-lg sm:text-xl md:text-2xl font-bold text-amber-600 mb-3 md:mb-4">
                Who is JSE
              </h2>

              <p className="text-sm sm:text-base md:text-lg mb-3 md:mb-4 text-white leading-relaxed">
                JSE is a non-profit Employers Organisation registered with the Department of Employment and Labour, with a focus on being the ‘The Voice of the Employer’ in an everyday labour law environment.
              </p>


              <p className="text-sm sm:text-base md:text-lg mb-3 md:mb-4 text-white leading-relaxed">
                advocates and empowers small enterprises across South Africa to thrive in ever-evolving labour Laws  that are charectarised by complex interplay of relationships between employers, employees, trade unions.
              </p>

              <p className="text-sm sm:text-base md:text-lg mb-3 md:mb-4 text-white leading-relaxed">
                stand firm-protecting South African employers at the frontline of industrial labour disputes, collective bargaining, and compliance demands.
              </p>



              <p className="text-sm sm:text-base md:text-lg mb-3 md:mb-4 text-white leading-relaxed">
                encourage and support employers to build workplaces that are just, sustainable, and future-fit-where the conditions of employment serve both productivity and human dignity.
              </p>


            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center mb-3 md:mb-4 px-2">
              <Link
                href="/membership"
                className="group bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 md:px-7 md:py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-amber-500"
              >
                <span className="flex items-center justify-center text-sm md:text-base">
                  🎯 Become a Member
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/services"
                className="group bg-amber-700 hover:bg-amber-600 text-white px-5 py-2.5 md:px-7 md:py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-amber-600"
              >
                <span className="flex items-center justify-center text-sm md:text-base">
                  📋 Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </Link>
            </div>


          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Our Core Service Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-3 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="brand-display italic text-4xl font-bold text-amber-600 mb-4">Our Core Services</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">

              By becoming a member of JSE, small businesses gain access to extensive experience, vast industry knowledge, a strong network of employers, key role players in the industry. The following services

            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-20">

            {/* Industrial Relations */}
            <div className="bg-gradient-to-br from-white to-amber-50/40 rounded-2xl p-8 border-2 border-amber-400/50 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mr-4">
                  <span className="text-3xl">⚖️</span>
                </div>
                <h3 className="brand-display italic text-3xl font-bold text-amber-600">Industrial Relations</h3>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                We regulate the relationship between employers and organized labour (trade unions) and other processes related to unionized workplaces. These include:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">1. Grievances</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Assist employer accordingly deal address Work Grievances on behalf of Member Employer a range of employee issues.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">2. Disciplinary Inquiry</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Investigate acts of misconducts, initiate or preside over disciplinary inquiries on behalf of Member Employer.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">3. Arbitration</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Represent Members on all labour dispute referred by an employee or Trade Union to Arbitration related to unfair labour practices, unfair dismissal, or discrimination etc.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">4. Incapacity or Poor Performance</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Advise or represent Member Employer in cases of termination of a contract of employment where an employee is failing to reach and maintain reasonable, lawful attainable work performance standards expected by the employer.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">5. Retrenchments</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Advise and represent members on &quot;no fault dismissal&quot; where employer needs to reduce number of employees due to operational reasons caused by financial inadequacy, technological advancement or restructuring.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">6. Lockouts</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Advise and represent Member employers on lockouts of employees from work premises as offensive tactic to pressure those who refuse to return to work or damage the workplace property.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">7. Strikes</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Assist Members Employer on speedy resolution of employees disputes who are engaged in concerted refusal to work, either partially or completely exerting pressure on employers to accept their specific terms or benefits.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">8. Transfer of Business</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Manage transfer of businesses as a going concern where new employer inherits all rights and obligations related to employees condition of employment from old employer.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">9. Advice and Support</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Offer guidance to members on labour legislation, policies, and the practical application of the Main Collective Agreement.
                  </p>
                </div>
              </div>
            </div>

            {/* Collective Bargaining - NEW */}
            <div className="bg-gradient-to-br from-white to-amber-50/40 rounded-2xl p-8 border-2 border-amber-400/50 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mr-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="brand-display italic text-3xl font-bold text-amber-600">Collective Bargaining</h3>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Strategic engagement and support for workplace decision-making and negotiations.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">Collective Agreements</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Negotiate and agree upon collective agreements with trade unions, determining the terms and conditions of employment for security personnel.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">Workplace Engagement</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Promote and strengthen constructive engagement, mutual trust, understanding, respect and orderly participation of employees in workplace decision-making to decrease disputes as they are time-consuming, and cause reputational damage, deter customers and investors.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">Compliance Support</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Assist Members comply with labour legislation and regulations that often result in unfair labour practices, discrimination, unfair dismissal, attracting unnecessary Arbitration compensatory penalties, unjustified settlements or employees filling law suits at Labour Court.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">Educational Co-operation</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Foster co-operation between educational institutions, their employees, government, private sector to align education with sector needs, as literacy and innumeracy has negatively effect on their businesses efficiencies and productivity.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">Strategic Participation</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Develop strategies that help members to participate in decision-making processes that affect their interests when engaging with related government departments and municipalities.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">Legislation Guidance</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Offer guidance to members on labour legislation, policies, and the practical application of the Main Collective Agreement.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">Ethical Practices</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Promote ethical and social business conscious practices amongst our members when dealing with government and its entities.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">Mentorship & Support</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Assist Members Employer access mentorship, advice, and support from experienced entrepreneurs or business professionals crucial in navigating challenges and making informed decisions, accessing critical information, communicating with stakeholders, and navigating business bureaucratic processes.
                  </p>
                </div>

                <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">Networking</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Foster collective efficiency through networking to help overcome market access challenges and increase market penetration with aim to boost the participation of rural and township-based enterprises.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sectors We Cover - Restored */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 brand-display italic">Sectors We Cover</h2>

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
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-amber-500">
                  <h3 className="font-bold text-amber-800 text-lg mb-2">{item.sector}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits - Restored */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 brand-display italic">Membership Benefits</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-6 inline-block mb-4">
                  <div className="text-amber-600 text-3xl">⚖️</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Legal Protection</h3>
                <p className="text-gray-600">
                  Access to legal assistance, CCMA representation, and employment law guidance.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-6 inline-block mb-4">
                  <div className="text-amber-600 text-3xl">🤝</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Collective Bargaining</h3>
                <p className="text-gray-600">
                  Unified voice in negotiations with trade unions and government bodies.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-6 inline-block mb-4">
                  <div className="text-amber-600 text-3xl">📚</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Training & Development</h3>
                <p className="text-gray-600">
                  Compliance training, management development, and skills enhancement programs.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-6 inline-block mb-4">
                  <div className="text-amber-600 text-3xl">📢</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Policy Advocacy</h3>
                <p className="text-gray-600">
                  Influence on labour, social, and economic policies affecting your business.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-6 inline-block mb-4">
                  <div className="text-amber-600 text-3xl">🛡️</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Risk Management</h3>
                <p className="text-gray-600">
                  Compliance support, risk assessments, and preventive strategies.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-6 inline-block mb-4">
                  <div className="text-amber-600 text-3xl">💼</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Business Support</h3>
                <p className="text-gray-600">
                  Strategic consulting, networking opportunities, and industry intelligence.
                </p>
              </div>
            </div>

            {/* Quick Application CTA */}
            <div className="text-center mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Experience These Benefits Today</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Don&apos;t wait to secure your business&apos;s future. Join JSE now and immediately access
                  all our comprehensive support services and member benefits.
                </p>
                <Link
                  href="/membership"
                  className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-xl font-bold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                >
                  Join JSE Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
