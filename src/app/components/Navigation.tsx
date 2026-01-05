'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/sme-logo.jpeg"
              alt="JSE Logo"
              width={240}
              height={80}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-amber-700 font-medium transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-amber-700 font-medium transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-amber-700 font-medium transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/membership" className="text-slate-700 hover:text-amber-700 font-medium transition-colors relative group">
              Membership
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-amber-700 font-medium transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/membership" 
              className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:from-amber-500 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join Now
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-amber-700 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-slate-700 hover:text-amber-700 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-slate-700 hover:text-amber-700 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-slate-700 hover:text-amber-700 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/membership" 
                className="text-slate-700 hover:text-amber-700 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Membership
              </Link>
              <Link 
                href="/contact" 
                className="text-slate-700 hover:text-amber-700 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/membership" 
                className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-3 rounded-xl font-bold text-center hover:from-amber-500 hover:to-amber-400 transition-all duration-300 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
