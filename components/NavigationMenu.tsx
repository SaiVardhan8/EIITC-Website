"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';


export default function NavigationMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [mobileIndustriesSubmenuOpen, setMobileIndustriesSubmenuOpen] = useState(false);
  const [mobileServicesSubmenuOpen, setMobileServicesSubmenuOpen] = useState(false);

  // const indusrtriesSubmenuItems = [
  //   { name: 'Aerospace', href: '/tech' },
  //   { name: 'Automotive', href: '/healthcare' },
  //   { name: 'Banking & Financial Services', href: '/epc' },
  //   { name: 'Defence', href: '/epc' },
  //   { name: 'Energy & Utilities', href: '/epc' },
  //   { name: 'Insurance', href: '/epc' },
  //   { name: 'Life Sciences', href: '/epc' },
  //   { name: 'Marine', href: '/epc' },
  //   { name: 'Rail & Transportation', href: '/epc' },
  //   { name: 'Space', href: '/epc' },

  // ];

  const servicesSubmenuItems = [
    { name: 'Innovation Management & Solutions', href: '/services/InnovationManagement' },
    { name: 'Transformation Consultancy', href: '/services/TransformationConsultancy' },
    { name: 'AI & Digital Transformation', href: '/services/AI' },
    { name: 'Product Engineering', href: '/services/ProductEngineering' },
    { name: 'Manufacturing & Supply Chain', href: '/services/Manufacturing' },
    { name: 'Quality & Testing', href: '/services/Quality' },
    { name: 'Customer Support & Maintenance', href: '/services/CustomerSupport' },

  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setMobileSubmenuOpen(false);
      setMobileIndustriesSubmenuOpen(false);
      setMobileServicesSubmenuOpen(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <header
        className="bg-white shadow-sm relative"
        style={{ paddingTop: '10px', paddingBottom: '10px' }}
      >
        <div className="container mx-auto flex justify-between items-center relative px-4">
          {/* Logo */}
          <div className="logo z-10">
            <Link href="/">
              <div className="logo-container relative transform transition-transform duration-300 hover:scale-105">
                <Image
                  src="/edvenswa-logo-150x150.png"
                  alt="Edvenswa Logo"
                  width={60}
                  height={15}
                  className="rounded-md hover:shadow-lg transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-6 items-start">
              {/* Business Desktop */}
              {/* <div className="relative mb-1 group">
                <Link href="/business" className="text-gray-600 hover:text-blue-500 py-5">
                  Industries
                </Link>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
                  <div className="py-2">
                    {indusrtriesSubmenuItems.map((item, index) => (
                      <a
                        target="_blank"
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div> */}

              {/* Careers Desktop */}
              <div className="relative mb-1 group">
                <Link href="/careers" className="text-gray-600 hover:text-blue-500 py-5">
                  Services
                </Link>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
                  <div className="py-2">
                    {servicesSubmenuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* <li>
                <Link href="/about-us" className="text-gray-600 hover:text-blue-500">
                  Case Studies
                </Link>
              </li> */}
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-500">
                  Insights
                </Link>
              </li>
              <li>
                <a
                  href="https://myajeer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Careers
                </a>
              </li>

              {/* About Us Desktop */}
              <div className="relative mb-1 group">
                <Link href="/Investors" className="text-gray-600 hover:text-blue-500 pb-5">
                  About Us
                </Link>

                {/* Mega Dropdown */}
                <div className="absolute top-full left-0 mt-1 w-[700px] bg-white shadow-lg rounded-md border z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">
                  <div className="grid grid-cols-2 gap-6 p-6">

                    {/* Column 1 */}
                    <div>
                      <h3 className="text-base font-semibold mb-3 text-teal-600">
                        AT A GLANCE
                      </h3>
                      <ul className="space-y-2">
                        <li><Link href="/about/WhoWeAre" className="text-sm text-gray-700 hover:text-blue-500">Who we are</Link></li>
                        <li><Link href="/about/mission" className="text-sm text-gray-700 hover:text-blue-500">Our Story</Link></li>
                        <li><Link href="/about/leadership" className="text-sm text-gray-700 hover:text-blue-500">Executive Management</Link></li>
                        <li><Link href="/about/leadership" className="text-sm text-gray-700 hover:text-blue-500">Ethics & Compilance</Link></li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h3 className="text-base font-semibold text-teal-600 mb-3">
                        LATEST UPDATES
                      </h3>
                      <ul className="space-y-2">
                        <li><Link href="/Investors/board-of-directors" className="text-sm text-gray-700 hover:text-blue-500">Media Room</Link></li>
                        <li><Link href="/Investors/financials" className="text-sm text-gray-700 hover:text-blue-500">Events Calendar</Link></li>
                        <li><Link href="/Investors/annual-reports" className="text-sm text-gray-700 hover:text-blue-500">Podcasts</Link></li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                      <h3 className="text-base font-semibold text-teal-600 mb-3">
                        OUR NETWORK
                      </h3>
                      <ul className="space-y-2">
                        <li><Link href="/careers/openings" className="text-sm text-gray-700 hover:text-blue-500">Locations</Link></li>
                        <li><Link href="/careers/life" className="text-sm text-gray-700 hover:text-blue-500">Affiliates</Link></li>
                        <li><Link href="/careers/openings" className="text-sm text-gray-700 hover:text-blue-500">Partners</Link></li>
                        <li><Link href="/careers/life" className="text-sm text-gray-700 hover:text-blue-500">Customers</Link></li>
                      </ul>
                    </div>

                    {/* Column 4 */}
                    {/* <div>
                      <h3 className="text-base font-semibold text-teal-600 mb-3">
                        EDVENSWA FOR THE FUTURE
                      </h3>
                      <ul className="space-y-2">
                        <li><Link href="/media/news" className="text-sm text-gray-700 hover:text-blue-500">Innovation Impact</Link></li>
                      </ul>
                    </div> */}

                  </div>
                </div>
              </div>
              <li>
                <Link href="/contact-us" className="text-gray-600 hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-500 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-4 p-4">

              {/* Mobile Business Submenu */}
              {/* <li>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <button
                    onClick={() => setMobileIndustriesSubmenuOpen(!mobileIndustriesSubmenuOpen)}
                    className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <span>Industries</span>
                    {mobileIndustriesSubmenuOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {mobileIndustriesSubmenuOpen && (
                    <div className="mt-2 ml-4 space-y-1 border-l-2 border-blue-100 pl-4">
                      {indusrtriesSubmenuItems.map((item, index) => (
                        <a
                          target="_blank"
                          key={index}
                          href={item.href}
                          className="block py-2 text-sm text-gray-600 hover:text-blue-500 transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li> */}

              {/* Mobile Careers Submenu */}
              <li>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <button
                    onClick={() => setMobileServicesSubmenuOpen(!mobileServicesSubmenuOpen)}
                    className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <span>Services</span>
                    {mobileServicesSubmenuOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {mobileServicesSubmenuOpen && (
                    <div className="mt-2 ml-4 space-y-1 border-l-2 border-blue-100 pl-4">
                      {servicesSubmenuItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block py-2 text-sm text-gray-600 hover:text-blue-500 transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>

              {/* <li>
                <Link href="/about-us" className="text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>
                  Case Studies
                </Link>
              </li> */}
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>
                  Insights
                </Link>
              </li>
              <li>
                <a
                  href="https://myajeer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Careers
                </a>
              </li>

              {/* Mobile Investors Submenu */}
              <li>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <button
                    onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                    className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    <span>About Us</span>
                    {mobileSubmenuOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {mobileSubmenuOpen && (
                    <div className="mt-2 ml-4 border-l-2 border-blue-100 pl-4">
                      {/* Section 1 */}
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-800">AT A GLANCE</h4>
                        <div className="ml-3 mt-1 space-y-1">
                          <Link
                            href="/about/history"
                            className="block text-sm text-gray-600 hover:text-blue-500"
                            onClick={toggleMobileMenu}
                          >
                            Who we are
                          </Link>
                          <Link
                            href="/about/mission"
                            className="block text-sm text-gray-600 hover:text-blue-500"
                            onClick={toggleMobileMenu}
                          >
                            Our story
                          </Link>
                          <Link
                            href="/about/leadership"
                            className="block text-sm text-gray-600 hover:text-blue-500"
                            onClick={toggleMobileMenu}
                          >
                            Executive Management
                          </Link>
                          <Link
                            href="/about/leadership"
                            className="block text-sm text-gray-600 hover:text-blue-500"
                            onClick={toggleMobileMenu}
                          >
                            Ethics & Compilance
                          </Link>
                        </div>
                      </div>

                      {/* Section 2 */}
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-800">LATEST UPDATES</h4>
                        <div className="ml-3 mt-1 space-y-1">
                          <Link href="/Investors/board-of-directors" className="block text-sm text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>
                            Media Room
                          </Link>
                          <Link href="/Investors/financials" className="block text-sm text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>
                            Events Calendar
                          </Link>
                          <Link href="/Investors/annual-reports" className="block text-sm text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>
                            Podcasts
                          </Link>
                        </div>
                      </div>

                      {/* Section 3 */}
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-800">OUR NETWORK</h4>
                        <div className="ml-3 mt-1 space-y-1">
                          <Link href="/careers/openings" className="block text-sm text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>
                            Locations
                          </Link>
                          <Link href="/careers/life" className="block text-sm text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>
                            Affiliates
                          </Link>
                          <Link href="/careers/life" className="block text-sm text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>
                            Partners
                          </Link>
                          <Link href="/careers/life" className="block text-sm text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>
                            Customers
                          </Link>
                        </div>
                      </div>

                      {/* Section 4 */}
                      {/* <div>
                        <h4 className="text-sm font-semibold text-gray-800">Media</h4>
                        <div className="ml-3 mt-1 space-y-1">
                          <Link href="/media/news" className="block text-sm text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>
                            News & Updates
                          </Link>
                          <Link href="/media/events" className="block text-sm text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>
                            Events
                          </Link>
                          <Link href="/media/gallery" className="block text-sm text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>
                            Gallery
                          </Link>
                        </div>
                      </div> */}
                    </div>
                  )}
                </div>
              </li>


              <li>
                <Link href="/JobPostings" className="text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
