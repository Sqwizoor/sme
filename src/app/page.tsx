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
                JSE is an employer’s organisation that provide comprehensive Industrial Relations, Human Resource Advancement, Government Lobbying, and Business Advocacy services specifically designed for SMMEs across South Africa.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed">
                JSE work in collaboration with other entities that share its ideals of supporting SMMEs by promoting their interests locally, regionally, nationally and internationally.
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
            <h2 className="brand-display italic text-4xl font-bold text-amber-600 mb-4">Our Core Service</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Industrial Relations
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">

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
                    <h4 className="font-bold text-amber-700 text-lg mb-2">9. Collective Bargaining</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Promote and strengthen constructive engagement, mutual trust, understanding, respect and orderly participation of employees in workplace decision-making decrease as disputes are time-consuming, and cause reputational damage, deter customers and investors.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 p-5 rounded-xl border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-700 text-lg mb-2">10. Collective Agreements</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Negotiate and agree upon collective agreements with trade unions, determining the terms and conditions of employment for security personnel.
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
          </div>
        </div>
      </section>
    </div>
  );
}
