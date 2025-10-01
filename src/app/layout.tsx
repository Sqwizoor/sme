import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JSMME - Justice for Small Medium & Micro Enterprises",
  description: "A voluntary, non-profit employers' organisation protecting and promoting the interests of SMEs across South Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 sticky top-0 z-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/sme-logo.jpeg"
                  alt="JSMME Logo"
                  width={240}
                  height={80}
                  className="h-20 w-auto object-contain"
                  priority
                />
              </Link>
              
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-slate-700 hover:text-blue-900 font-medium transition-colors relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/about" className="text-slate-700 hover:text-blue-900 font-medium transition-colors relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/services" className="text-slate-700 hover:text-blue-900 font-medium transition-colors relative group">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/membership" className="text-slate-700 hover:text-blue-900 font-medium transition-colors relative group">
                  Membership
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/contact" className="text-slate-700 hover:text-blue-900 font-medium transition-colors relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link 
                  href="/membership" 
                  className="bg-gradient-to-r from-gold-500 to-gold-400 text-slate-900 px-6 py-3 rounded-xl font-bold hover:from-gold-400 hover:to-gold-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Join Now
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-slate-700 hover:text-blue-900 p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        <main>
          {children}
        </main>
        
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="col-span-2">
                <div className="mb-6">
                  <Image
                    src="/sme-logo.jpeg"
                    alt="JSMME Logo"
                    width={300}
                    height={100}
                    className="h-24 w-auto object-contain"
                  />
                </div>
                <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                  A voluntary, non-profit employers' organisation dedicated to protecting 
                  and promoting the interests of small, medium, and micro enterprises across South Africa.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-slate-400">Email:</span>
                  <a href="mailto:justicesmme@gmail.com" className="text-gold-400 hover:text-gold-300 transition-colors font-medium">
                    justicesmme@gmail.com
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-slate-400 hover:text-gold-400 transition-colors flex items-center group">
                      <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-slate-400 hover:text-gold-400 transition-colors flex items-center group">
                      <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-slate-400 hover:text-gold-400 transition-colors flex items-center group">
                      <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/membership" className="text-slate-400 hover:text-gold-400 transition-colors flex items-center group">
                      <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      Membership
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-6 text-white">Our Services</h3>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Legal Support
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Employment Relations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Training & Consultancy
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Policy Advocacy
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-700/50 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-slate-400 text-sm mb-4 md:mb-0">
                  <p>&copy; 2024 Justice for Small Medium & Micro Enterprises (JSMME). All rights reserved.</p>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-sm text-slate-400">
                    <svg className="w-4 h-4 mr-1 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.238.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Trusted & Verified
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-600/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-gold-600/5 to-transparent rounded-full blur-3xl"></div>
        </footer>
      </body>
    </html>
  );
}
