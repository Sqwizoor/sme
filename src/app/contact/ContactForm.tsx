'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mgvpwdlo");
  
  if (state.succeeded) {
    return (
      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
        <div className="flex items-center">
          <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <div>
            <h3 className="text-lg font-bold text-green-900">Thank you for contacting us!</h3>
            <p className="text-green-800 mt-1">We&apos;ve received your message and will get back to you shortly.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
            placeholder="Your first name"
          />
          <ValidationError 
            prefix="First Name" 
            field="firstName"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
            placeholder="Your last name"
          />
          <ValidationError 
            prefix="Last Name" 
            field="lastName"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
          placeholder="your.email@example.com"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company/Organization *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
          placeholder="Your company name"
        />
        <ValidationError 
          prefix="Company" 
          field="company"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
            Business Type
          </label>
          <select
            id="businessType"
            name="businessType"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
          >
            <option value="">Select business type</option>
            <option value="sole-proprietorship">Sole Proprietorship</option>
            <option value="closed-corporation">Closed Corporation</option>
            <option value="private-company">Private Company</option>
            <option value="partnership">Partnership</option>
            <option value="trust">Trust</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
            Number of Employees
          </label>
          <select
            id="employees"
            name="employees"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
          >
            <option value="">Select range</option>
            <option value="1-5">1-5 employees</option>
            <option value="6-20">6-20 employees</option>
            <option value="21-50">21-50 employees</option>
            <option value="51-100">51-100 employees</option>
            <option value="101-500">101-500 employees</option>
            <option value="500+">500+ employees</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-2">
          Business Sector
        </label>
        <select
          id="sector"
          name="sector"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
        >
          <option value="">Select your sector</option>
          <option value="agriculture">Agriculture</option>
          <option value="mining">Mining & Quarrying</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="security">Private Security</option>
          <option value="construction">Construction</option>
          <option value="funeral">Funeral Parlours</option>
          <option value="wholesale-retail">Wholesale & Retail</option>
          <option value="community">Community Services</option>
          <option value="financial">Financial & Business Services</option>
          <option value="ict">ICT Sector</option>
          <option value="informal">Informal Sector</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
        >
          <option value="">Select a subject</option>
          <option value="membership">Membership Inquiry</option>
          <option value="services">Services Information</option>
          <option value="legal">Legal Support</option>
          <option value="training">Training Programs</option>
          <option value="general">General Information</option>
          <option value="other">Other</option>
        </select>
        <ValidationError 
          prefix="Subject" 
          field="subject"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent"
          placeholder="Please provide details about your inquiry..."
        ></textarea>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-amber-500 hover:to-amber-400 transition-all duration-300 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
