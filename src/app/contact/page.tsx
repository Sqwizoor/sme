import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brown-900 to-brown-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-brown-100">
              Get in touch with our team for support, information, or membership inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Membership Application Highlight */}
      <section className="py-12 bg-gradient-to-r from-brown-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-amber-100 rounded-full p-3 mr-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Membership Application</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Ready to join JSMME? Use the form below to submit your membership application. 
                Select &quot;Membership Inquiry&quot; in the subject field and provide your business details.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
                <div className="flex items-center">
                  <svg className="w-4 h-4 brand-icon mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Quick & Easy Process
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 brand-icon mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fast Response Time
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 brand-icon mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Professional Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 rounded-full p-3">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">Email</h3>
                      <a 
                        href="mailto:justicesmme@gmail.com" 
                        className="text-amber-600 hover:underline text-lg"
                      >
                        justicesmme@gmail.com
                      </a>
                      <p className="text-gray-600 text-sm mt-1">
                        For membership inquiries, support, and general information
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 rounded-full p-3">
                      <svg className="w-6 h-6 brand-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">Phone</h3>
                      <a 
                        href="tel:+27603114115" 
                        className="text-amber-600 hover:underline text-lg font-mono"
                      >
                        060 311 4115
                      </a>
                      <p className="text-gray-600 text-sm mt-1">
                        For direct contact and immediate assistance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 rounded-full p-3">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">Office</h3>
                      <p className="text-gray-700">
                        National Head Office<br />
                        South Africa
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        Serving businesses nationwide with regional support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 rounded-full p-3">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-700">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        Emergency support available for urgent matters
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div id="membership-form" className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h3>
                <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mb-6">
                  <p className="text-amber-800 text-sm">
                    <strong>💡 Tip:</strong> For membership applications, select &quot;Membership Inquiry&quot; as your subject 
                    and include details about your business size, sector, and specific needs.
                  </p>
                </div>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Quick Actions</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-6 inline-block mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Join as Member</h3>
                <p className="text-gray-600 mb-4">
                  Ready to become a member? Get started with your application today.
                </p>
                <a 
                  href="mailto:justicesmme@gmail.com?subject=Membership Application" 
                  className="bg-brown-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brown-800 transition-colors inline-block"
                >
                  Apply Now
                </a>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-6 inline-block mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Get Support</h3>
                <p className="text-gray-600 mb-4">
                  Need immediate assistance? Contact our support team for help.
                </p>
                <a 
                  href="mailto:justicesmme@gmail.com?subject=Support Request" 
                  className="border-2 border-brown-900 text-brown-900 px-6 py-3 rounded-lg font-semibold hover:bg-brown-900 hover:text-white transition-colors inline-block"
                >
                  Get Help
                </a>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-6 inline-block mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Download Info</h3>
                <p className="text-gray-600 mb-4">
                  Get detailed information about our services and membership.
                </p>
                <a 
                  href="mailto:justicesmme@gmail.com?subject=Information Request" 
                  className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-block"
                >
                  Request Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Regional Coverage</h2>
            <p className="text-lg text-gray-700 mb-8">
              JSMME serves businesses across South Africa with dedicated regional support, 
              including specialized coverage in Gauteng Province through our five regional directors.
            </p>
            
            <div className="bg-amber-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-brown-900">Our Commitment</h3>
              <p className="text-gray-700">
                We are dedicated to providing accessible, responsive support to SMEs nationwide. 
                Whether you&apos;re in a major city or rural area, our team is committed to helping 
                your business succeed and thrive in the South African market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}