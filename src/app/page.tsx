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
                Justice for Small, Medium Micro Enterprises
              </span>
              <span className="block text-amber-600 text-lg sm:text-xl md:text-2xl font-semibold">
                (JSMME)
              </span>
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-4 md:mb-5 border border-white/20 max-w-4xl mx-auto">
              <h2 className="brand-display italic text-lg sm:text-xl md:text-2xl font-bold text-amber-600 mb-3 md:mb-4">
                Who is JSMME
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg mb-3 md:mb-4 text-white leading-relaxed">
                JSMME is an employer&apos;s organisation that provide comprehensive Industrial Relations, Human Resource Advancement, Government Lobbying, and Business Advocacy services specifically designed for SMMEs across South Africa.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed">
                JSMME work in collaboration with other entities that share its ideals of supporting SMMEs by promoting their interests locally, regionally, nationally and internationally.
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
 
      {/* Restored Content: From FOCUSES onward */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-3 md:px-6 max-w-7xl">
          <div className="prose prose-lg max-w-none">

            {/* Vision/Mission/Values/Legal Status Cards */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* VISION */}
                <div className="group bg-gradient-to-br from-white via-amber-50/30 to-amber-100/50 rounded-2xl p-8 border-2 border-amber-400/60 shadow-lg hover:shadow-2xl hover:border-amber-500 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
                  <h3 className="brand-display italic text-2xl font-bold text-amber-600 mb-4 group-hover:text-amber-700 transition-colors">VISION</h3>
                  <p className="text-slate-700 leading-relaxed">
                    To be recognised as a one stop industrial and human relations shop that promotes SMME Owners&apos; economic interests in ever-changing complex labour environment,
                  </p>
                </div>

                {/* MISSION */}
                <div className="group bg-gradient-to-br from-white via-amber-50/30 to-amber-100/50 rounded-2xl p-8 border-2 border-amber-400/60 shadow-lg hover:shadow-2xl hover:border-amber-500 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
                  <h3 className="brand-display italic text-2xl font-bold text-amber-600 mb-4 group-hover:text-amber-700 transition-colors">MISSION</h3>
                  <p className="text-slate-700 leading-relaxed">
                    provide tailored support and expertise that enables SMME owners to influence policy development and enhance coherent strategies and entrepreneurial value to drive economic development innovations that create of job opportunities for all South Africans
                  </p>
                </div>

                {/* VALUES */}
                <div className="group bg-gradient-to-br from-white via-amber-50/30 to-amber-100/50 rounded-2xl p-8 border-2 border-amber-400/60 shadow-lg hover:shadow-2xl hover:border-amber-500 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
                  <h3 className="brand-display italic text-2xl font-bold text-amber-600 mb-4 group-hover:text-amber-700 transition-colors">VALUES</h3>
                  <p className="text-slate-700 leading-relaxed">
                    values integrity, innovation, accountability, honesty, respect, passion, and trust in the workplace.
                  </p>
                </div>

                {/* LEGAL STATUS */}
                <div className="group bg-gradient-to-br from-white via-amber-50/30 to-amber-100/50 rounded-2xl p-8 border-2 border-amber-400/60 shadow-lg hover:shadow-2xl hover:border-amber-500 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
                  <h3 className="brand-display italic text-2xl font-bold text-amber-600 mb-4 group-hover:text-amber-700 transition-colors">LEGAL STATUS</h3>
                  <p className="text-slate-700 leading-relaxed">
                    The JSMME is a voluntary, non-profit employers&apos; organisation with a corporate personality, distinct from its members , can enter into contracts, sue or be sued in its own name, liable for its debts and commitments, can own  its property and continue to exist notwithstanding changes in the composition of its membership.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Section - Organized by Categories */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="brand-display italic text-4xl font-bold text-amber-600 mb-4">Our Services</h2>
                <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                  Comprehensive support across four key areas designed specifically for SMMEs
                </p>
              </div>

              {/* Industrial Relations */}
              <div className="mb-12 bg-gradient-to-br from-white to-amber-50/40 rounded-2xl p-8 border-2 border-amber-400/50 shadow-lg">
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
                      Address Work Grievances on behalf of Member Employer a range of employee issues related to pay, working conditions, and harassment to discrimination or breaches of contract etc.
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
                    <h4 className="font-bold text-amber-700 text-lg mb-2">9. Collective Bargaining</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Promote and strengthen constructive engagement, mutual trust, understanding, respect and orderly participation of employees in workplace decision-making decrease as disputes are time-consuming, and cause reputational damage, deter customers and investors.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">10. Legal Compliance</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Assist Members comply with labour legislation and regulations that often result unfair labour practices, discrimination, unfair dismissal, unfair discrimination attracting unnecessary Arbitration compensatory penalties, unjustified settlements or employees filling law suits at Labour Courts.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">11. Advice and Support</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Offer guidance to members on labour legislation, policies, and the practical application of the Main Collective Agreement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Human Resource Advancement */}
              <div className="mb-12 bg-gradient-to-br from-white to-amber-50/40 rounded-2xl p-8 border-2 border-amber-400/50 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mr-4">
                    <span className="text-3xl">👥</span>
                  </div>
                  <h3 className="brand-display italic text-3xl font-bold text-amber-600">Human Resource Advancement</h3>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Building strong teams through strategic HR management, training, and development programs.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">1. Recruitment</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Provide recruitment techniques and strategies to attract, select and appoint talent candidates, while promoting safety and health to avert workplace accidents, injuries.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">2. Risk Management</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Early detection of potential risk issues related to workplace safety and health that can lead to accidents, injuries, conflict between employees and management, giving rise to disruption of operations, productivity, absenteeism, and affect employee morale.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">3. Collective Agreements</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Negotiate and agree upon collective agreements with trade unions, determining the terms and conditions of employment for security personnel.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">4. Benefit Schemes</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Help members establish and administer various benefit schemes for employees, such as pension funds, medical aid, and provident funds.
                    </p>
                  </div>
                </div>
              </div>

              {/* Government Lobbying */}
              <div className="mb-12 bg-gradient-to-br from-white to-amber-50/40 rounded-2xl p-8 border-2 border-amber-400/50 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mr-4">
                    <span className="text-3xl">🏛️</span>
                  </div>
                  <h3 className="brand-display italic text-3xl font-bold text-amber-600">Government Lobbying</h3>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Amplifying SMME voices in policy development and creating favorable business environments.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">1. Education</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Foster co-operation between educational institutions, their employees, government, private sector to align education with sector needs, as literacy and innumeracy has negatively effect on their businesses efficiencies and productivity.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">2. Engagement</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Develop strategies to participate in decision-making processes that affect their interests when engaging with related government departments and municipalities.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">3. Ethical Business Practices</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Promote ethical and social business conscious practices amongst our members when dealing with government and its entities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Advocacy */}
              <div className="mb-12 bg-gradient-to-br from-white to-amber-50/40 rounded-2xl p-8 border-2 border-amber-400/50 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mr-4">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="brand-display italic text-3xl font-bold text-amber-600">Business Advocacy</h3>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Empowering business growth through strategic support, partnerships, and market access.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">1. Mentorship and Support</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Assist Members Employer access mentorship, advice, and support from experienced entrepreneurs or business professionals crucial in navigating challenges and making informed decisions, accessing critical information, communicating with stakeholders, and navigating business bureaucratic processes.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">2. Marketing and Sales</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Enhance marketing and sales strategies that effectively promote Members Employer s products or services, analyse market trends and customer needs.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">3. Networking</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Foster collective efficiency through networking to help overcome market access challenges and increase market penetration with aim to boost the participation of rural and township-based enterprises.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">4. Funding Applications</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Assist Members Employer prepare funding applications to meet stringent lending requirements necessary to secure loans, grants or other forms of funding for their business operations and growth.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">5. Tender Procurement</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Assist Members Employer prepare compliant tender procurement bidding documents that meet supply chain regulations requirements.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">6. Brand Development</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Assist Member Employers develop strong and last brands that can sustain time in a competitive business landscapes.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">7. Legal Practitioners</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Assist Member Employers secure negotiated affordable and competent legal practitioners with speciality in pursuing specific legal action or dispute without impacting on their cash flow or hindering their ability to operate and grow.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">8. Draft Agreements</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Advise Member Employers when drafting legally binding agreements that outlines specific deliverables, quality standards, and expectations between parties, to the achieve defined outcomes.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">9. Strategic Planning</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Assist Member Employers create and implement strategic plans intendent to achieve their specific goals through building strong relationships with clients, securing new business stakeholders, fostering long-term partnerships and strong alliances.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">10. Strategic Partnerships</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Facilitate an integrated approach to create strategic partnerships with a range of business institutions.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">11. Internal Policies</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Develop internal policies for assist Member Employers that reflects future goals and aspirations and provides guidelines for carrying out those goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* SMME Clinic Partnership */}
              <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 border-2 border-amber-400 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mr-4">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="brand-display italic text-3xl font-bold text-amber-600">SMME Clinic Partnership</h3>
                    <p className="text-slate-600 text-sm">In collaboration with SMME Clinic</p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The JSMME has established a long term service level agreement with a company known as <strong>SMME CLINIC</strong> in its dedication to serve the best interest of the SMME&apos;s as the services rendered by one of these entities lead to another.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This strategic partnership ensures our members receive end-to-end assistance across all business functions, from legal compliance to market expansion, creating a seamless support ecosystem for SMME growth and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


     

      {/* Sectors We Serve */}
      <section className="py-24 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/black3.jpg')`,
            }}
          ></div>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-blue-900/60"></div>
        </div>

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-brown-900/50 text-brown-300 rounded-full px-4 py-2 text-sm font-semibold mb-4 backdrop-blur-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM1 15a1 1 0 011-1h.01a1 1 0 110 2H2a1 1 0 01-1-1zm6 0a1 1 0 011-1h.01a1 1 0 110 2H8a1 1 0 01-1-1zm6 0a1 1 0 011-1h.01a1 1 0 110 2H14a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Industries We Serve
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Supporting Businesses Across
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brown-400 to-brown-300">
                11 Key Sectors
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From agriculture to ICT, we provide specialized support for businesses 
              with less than 500 employees across diverse industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { name: "Agriculture", icon: "🌾", desc: "Farms, ranches & agricultural businesses" },
              { name: "Mining & Quarrying", icon: "⛏️", desc: "Mineral extraction & stone quarrying" },
              { name: "Manufacturing", icon: "🏭", desc: "Production & goods manufacturing" },
              { name: "Private Security", icon: "🛡️", desc: "Security services & protection" },
              { name: "Construction", icon: "🏗️", desc: "Building & infrastructure development" },
              { name: "Wholesale & Retail", icon: "🏪", desc: "Trading & commercial businesses" },
              { name: "Community Services", icon: "🏥", desc: "Healthcare, education & social services" },
              { name: "Financial Services", icon: "💰", desc: "Financial products & professional services" },
              { name: "ICT Sector", icon: "💻", desc: "Technology, telecoms & digital services" },
              { name: "Informal Sector", icon: "🛒", desc: "Street vendors & market traders" },
              { name: "Funeral Parlours", icon: "⚱️", desc: "Funeral & burial services" }
            ].map((sector, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:bg-slate-700/50 transition-all duration-500 transform hover:-translate-y-2 hover:border-brown-400/50">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-brown-400 transition-colors">
                  {sector.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-slate-300 mb-6 text-lg">
              Don&apos;t see your sector? Contact us to learn about eligibility.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-brown-600 to-brown-500 text-white px-8 py-4 rounded-xl font-bold hover:from-brown-500 hover:to-brown-400 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* What We Do Highlights - Moved from Hero */}
          <div className="bg-gradient-to-br from-brown-50 to-amber-50 rounded-2xl p-6 md:p-8 mb-12 border border-brown-200/50 max-w-6xl mx-auto">
            <p className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-center text-amber-600">Our Core Services:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-amber-700">
                <span className="text-sm md:text-base font-semibold text-amber-700">Industrial Relations</span>
              </div>
              <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-amber-700">
                <span className="text-sm md:text-base font-semibold text-amber-700">Human Resource Advancement</span>
              </div>
              <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-amber-700">
                <span className="text-sm md:text-base font-semibold text-amber-700">Government Lobbying</span>
              </div>
              <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-amber-700">
                <span className="text-sm md:text-base font-semibold text-amber-700">Business Advocacy</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-brown-100 text-brown-800 rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Core Services
            </div>
            <h2 className="brand-display text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Essential Support for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-600">
                Your Business Growth
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              From industrial relations to strategic advocacy, we provide the comprehensive 
              services SMEs need to thrive in today&apos;s competitive business environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Industrial Relations */}
            <div className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-2 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200">
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="brand-display text-2xl font-bold mb-4 text-amber-600 group-hover:text-amber-700 transition-colors">
                Industrial Relations & Dispute Resolution
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Expert legal support for employment matters, CCMA proceedings, labour court representation, 
                and comprehensive dispute resolution services.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  CCMA Representation & Arbitration
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Labour Court Proceedings
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Workplace Dispute Resolution
                </li>
              </ul>
            </div>

            {/* Compliance & Risk Management */}
            <div className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-2 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="brand-display text-2xl font-bold mb-4 text-amber-600 group-hover:text-amber-700 transition-colors">
                Compliance & Risk Management
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Comprehensive compliance support, risk assessments, and preventive strategies 
                to protect your business from legal and operational challenges.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Labour Law Compliance Audits
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Risk Assessment & Mitigation
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Policy Development & Review
                </li>
              </ul>
            </div>

            {/* Workplace Training */}
            <div className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-2 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200">
              <div className="bg-gradient-to-br from-amber-700 to-amber-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="brand-display text-2xl font-bold mb-4 text-amber-600 group-hover:text-amber-800 transition-colors">
                Workplace Training & Advisory
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Professional development programs, compliance training, and strategic advisory 
                services to enhance your workforce and business operations.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Management Development Programs
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Compliance & Skills Training
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Strategic Business Advisory
                </li>
              </ul>
            </div>

            {/* Employment Contracts */}
            <div className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-2 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="brand-display text-2xl font-bold mb-4 text-amber-600 group-hover:text-amber-700 transition-colors">
                Employment Contracts & Disciplinary Hearings
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Professional drafting of employment contracts, disciplinary procedures, 
                and comprehensive workplace governance solutions.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Employment Contract Drafting
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Disciplinary Hearing Chairing
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Workplace Policy Development
                </li>
              </ul>
            </div>

            {/* Lobbying & Advocacy */}
            <div className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200">
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="brand-display text-2xl font-bold mb-4 text-amber-600 group-hover:text-amber-700 transition-colors">
                Lobbying & Advocacy
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Strategic government engagement, policy advocacy, and industry representation 
                to create favorable business environments for SMEs.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Government Policy Lobbying
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Industry Representation
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Legislative Submissions
                </li>
              </ul>
            </div>

            {/* Collective Bargaining */}
            <div className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200">
              <div className="bg-gradient-to-br from-amber-700 to-amber-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="brand-display text-2xl font-bold mb-4 text-amber-600 group-hover:text-amber-800 transition-colors">
                Support for Collective Bargaining
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Expert guidance and representation in collective bargaining processes, 
                wage negotiations, and industry-wide agreements.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Bargaining Council Representation
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />  
                  </svg>
                  Wage Negotiation Support
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Industry Agreement Analysis
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="brand-display text-2xl font-bold text-amber-600 mb-4">
                Need Specialized Support for Your Business?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Our expert team is ready to provide tailored solutions for your specific industry and business needs. 
                Contact us today to discuss how we can support your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/services"
                  className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-4 rounded-xl font-bold hover:from-amber-800 hover:to-amber-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View All Services
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all duration-300"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-brown-100 text-brown-800 rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Member Benefits
            </div>
            <h2 className="brand-display text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-600">
                JSMME?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              As a voluntary, non-profit employers&apos; organisation, JSMME provides unparalleled support 
              and protection designed specifically for Small, Medium & Micro Enterprises across South Africa. 
              Join over 500+ businesses who trust us to safeguard their interests.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="group text-center">
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="brand-display text-xl font-bold mb-3 text-amber-600 group-hover:text-amber-700 transition-colors">
                Expert Industrial Relations
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Professional CCMA representation, labour court proceedings, and comprehensive workplace dispute resolution. 
                Protect your business with expert legal guidance and advocacy.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="brand-display text-xl font-bold mb-3 text-amber-600 group-hover:text-amber-700 transition-colors">
                Government Advocacy & Lobbying
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Strategic government engagement and policy lobbying to create favorable business environments. 
                Your voice amplified in legislative processes that impact SMEs.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="brand-display text-xl font-bold mb-3 text-amber-600 group-hover:text-amber-700 transition-colors">
                Training & Development
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive workplace training, management development programs, and strategic business advisory 
                services to enhance your operations and workforce capabilities.
              </p>
            </div>

            <div className="group text-center">
              <div className="bg-gradient-to-br from-amber-700 to-amber-800 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="brand-display text-xl font-bold mb-3 text-amber-600 group-hover:text-amber-800 transition-colors">
                Collective Bargaining Support
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Expert support in collective bargaining processes, wage negotiations, and industry-wide agreements. 
                Strengthen your position through collective representation and unified advocacy.
              </p>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brown-700 mb-2">24/7</div>
                <div className="text-slate-600">Legal Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brown-600 mb-2">100%</div>
                <div className="text-slate-600">Confidential Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brown-600 mb-2">10+</div>
                <div className="text-slate-600">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center bg-brown-800/50 backdrop-blur-sm border border-brown-400/20 rounded-full px-6 py-2 mb-8">
              <svg className="w-4 h-4 mr-2 text-brown-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.707 10.379a1 1 0 101.414 1.414l.879-.879 2.707 2.707a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-brown-100">Join 500+ Businesses</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Secure Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brown-400 to-brown-300">
                Business Future?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-4 text-brown-100 font-medium">
              Join JSMME Today
            </p>
            
            <p className="text-lg mb-12 text-brown-200 max-w-3xl mx-auto leading-relaxed">
              Become part of a powerful collective voice that protects and promotes your business interests. 
              Get access to legal support, advocacy, training, and networking opportunities designed specifically for SMEs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link 
                href="/membership" 
                className="group bg-gradient-to-r from-brown-600 to-brown-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-brown-500 hover:to-brown-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-brown-500/25"
              >
                <span className="flex items-center justify-center">
                  Apply for Membership
                  <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              
              <Link 
                href="/contact" 
                className="group border-2 border-brown-300/50 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl"
              >
                <span className="flex items-center justify-center">
                  Contact Us First
                  <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brown-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-brown-200">For membership fees and information:</span>
              </div>
              <a 
                href="mailto:justicesmme@gmail.com" 
                className="text-brown-400 hover:text-brown-300 text-xl font-semibold transition-colors"
              >
                justicesmme@gmail.com
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
              <div className="text-center">
                <div className="text-2xl mb-2">🏛️</div>
                <div className="text-sm text-blue-300">Government Recognized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🤝</div>
                <div className="text-sm text-blue-300">ILO Affiliated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <div className="text-sm text-blue-300">Legal Protection</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📈</div>
                <div className="text-sm text-blue-300">Business Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
