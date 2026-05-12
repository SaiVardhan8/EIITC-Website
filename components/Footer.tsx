"use client";
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <section>
      {/* Main Footer Content */}
      <div className="bg-gray-900 text-white pt-5 pb-5 px-5 py-5">
        <div className="container mx-auto">
          {/* Top Section with Logo and Tagline */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
            {/* Left Side - Logo and Company Info */}
            <div className="flex items-center gap-6 mb-8 lg:mb-0">
              <div className="bg-white rounded-lg p-3 shadow-lg">
                <img 
                  src="/edvenswa-logo-150x150.png" 
                  alt="EdVensWa Logo" 
                  className="h-16 w-16 object-contain" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Edvenswa</h3>
                <p className="text-gray-300 max-w-md text-sm leading-relaxed">
                  Global leader in IT services and consulting, committed to empowering organizations with transformative solutions.
                </p>
              </div>
            </div>

            {/* Right Side - Tagline */}
            <div className="text-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Driven by <span className="text-teal-400">Empathy.</span>
              </h2>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Powered by <span className="text-teal-400">Passion.</span>
              </h2>
            </div>
          </div>


          <div className="border-t border-gray-700 pt-8 flex justify-center">
            <p className="text-gray-300 leading-relaxed text-sm max-w-5xl text-center">
              Edvenswa International Information Technology, headquartered in Riyadh as a Regional Headquarters (RHQ), is a Saudi company with offices in the US, India, and Mexico, and a global leader in IT services and consulting. Committed to empowering organizations with transformative solutions, Edvenswa leverages over 17 years of expertise in advanced technologies such as Artificial Intelligence (AI), Machine Learning (ML), Robotic Process Automation (RPA), Data Analytics, and Digital Transformation. As an ISO 9001, ISO 27001 certified, and SOC2-compliant organization, Edvenswa upholds the highest standards of quality, security, and governance while addressing complex challenges and driving operational excellence for clients across the globe.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-8 px-4 text-gray-300">
        <div className="container mx-auto">
          {/* Social Media Icons */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/company/edvenswa-tech-llc/" 
                className="w-12 h-12 border border-teal-400 rounded flex items-center justify-center hover:bg-teal-400 hover:text-gray-900 transition-all duration-200 group"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M16 8C17.6569 8 19 9.34315 19 11V20H16V11C16 10.4477 15.5523 10 15 10C14.4477 10 14 10.4477 14 11V20H11V11C11 9.34315 12.3431 8 14 8C14.6569 8 15.2813 8.21989 15.7778 8.61803L16 8ZM6 20H9V11H6V20ZM7.5 5C6.67157 5 6 5.67157 6 6.5C6 7.32843 6.67157 8 7.5 8C8.32843 8 9 7.32843 9 6.5C9 5.67157 8.32843 5 7.5 5Z"/>
                </svg>
              </a>
              <a 
                href="https://m.facebook.com/edvenswa/" 
                className="w-12 h-12 border border-teal-400 rounded flex items-center justify-center hover:bg-teal-400 hover:text-gray-900 transition-all duration-200 group"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM14.075 10.45H12.21V9.135C12.21 8.685 12.445 8.445 12.875 8.445H14.135V6.155C13.915 6.135 13.065 6.075 12.195 6.075C10.415 6.075 9.175 7.155 9.175 9.075V10.45H8V13.265H9.175V20H12.21V13.265H14.075L14.355 10.45Z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/edvenswa" 
                className="w-12 h-12 border border-teal-400 rounded flex items-center justify-center hover:bg-teal-400 hover:text-gray-900 transition-all duration-200 group"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25H21.5L14.288 10.513L22 21.75H14.712L9.244 14.5L3.756 21.75H0.5L8.009 13.24L1.314 2.25H8.381L13.155 8.293L18.244 2.25ZM15.372 20.25H17.433L7.009 3.75H4.792L15.372 20.25Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm mb-6">
            <Link href="/imprint" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">IMPRINT</Link>
            <span className="text-gray-500">|</span>
            <Link href="/terms" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">TERMS & CONDITIONS</Link>
            <span className="text-gray-500">|</span>
            <Link href="/data-protection" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">DATA PROTECTION</Link>
            <span className="text-gray-500">|</span>
            <Link href="/privacy-notice" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">PRIVACY NOTICE</Link>
            <span className="text-gray-500">|</span>
            <Link href="/cookies" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">COOKIES MANAGEMENT</Link>
            <span className="text-gray-500">|</span>
            <Link href="/global-terms" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">GLOBAL TERMS AND CONDITIONS OF PURCHASING</Link>
            <span className="text-gray-500">|</span>
            <Link href="/legal" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">LEGAL DOCUMENTATION</Link>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Edvenswa International Information Technology Company
            </p>
          </div>

        </div>
      </div>

      {/* Back to top button */}
      <button 
        className="fixed bottom-6 right-6 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition-all duration-200 hover:scale-105 z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </section>
  );
}