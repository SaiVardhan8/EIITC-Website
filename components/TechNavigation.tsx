"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image for the logo
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'; // Import icons for mobile menu

export default function TechNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSolutionsSubmenuOpen, setMobileSolutionsSubmenuOpen] = useState(false);
  const [mobileProductsSubmenuOpen, setMobileProductsSubmenuOpen] = useState(false);
  const [mobileServicesSubmenuOpen, setMobileServicesSubmenuOpen] = useState(false);
  const [mobileinvestorsSubmenuOpen, setmobileinvestorsSubmneuOpen] = useState(false);


  // Define submenu items for Solutions
  const solutionsSubmenuItems = [
    { name: 'CRM', href: '/solutions/CRM' },
    { name: 'Marketing & Advertising', href: '/solutions/MarketingAndAdvertising' },
    { name: 'Human Resources', href: '/solutions/HR' },
    { name: 'E-Learning', href: '/solutions/E-Learning' },
    { name: 'Document Management', href: '/solutions/Document-Management' },
    { name: 'Supply Chain Management', href: '/solutions/SupplyChainManagement' },
    { name: 'Fleet Management', href: '/solutions/Fleet-Management' },
    { name: 'Financial Management', href: '/solutions/financial-management' },
    { name: 'ERP', href: '/solutions/ERP' },
    { name: 'Operations Management', href: '/solutions/OM' },
    { name: 'Asset Management', href: '/solutions/Asset-Management' },
    { name: 'Project Management', href: '/solutions/ProjectManagement' },
    { name: 'Data Analytics', href: '/solutions/data-analytics' },
    { name: 'E-Commerce', href: '/solutions/E-Commarce' },
    { name: 'Web Portals', href: '/solutions/web-portal' },
    { name: 'CMS', href: '/solutions/CMS' },
  ];

    const investorsSubmenuItems = [
    { name: 'Board of Directors', href: '/Investors/board-of-directors' },
    { name: 'Financials', href: '/Investors/financials' },
    { name: 'Contacts', href: '/Investors/contacts' },
    { name: 'Rights Issue', href: '/Investors/rights-issue' },
    { name: 'Announcements', href: '/Investors/announcements' },
    { name: 'Policies', href: '/Investors/policies' },
    { name: 'Annual Reports', href: '/Investors/annual-reports' },
    { name: 'Preferential Issue', href: '/Investors/preferential-issue' },
  ];

  // Define submenu items for Products
  const productsSubmenuItems = [
    { name: 'EmPortal', href: '/products/EmPortal' },
    { name: 'EdVision', href: '/products/EdVision' },
    { name: 'Scool', href: '/products/scool' },
    { name: 'ThinkAyurvedaFirst', href: '/products/ThinkAyurvedaFirst' },
    { name: 'Z-Security', href: '/products/z-security' },
    // { name: 'Omni Sporting', href: '/products/omni-sporting' },
    
  ];

  const submenuItems = [
    { name: 'Board of Directors', href: '/Investors/board-of-directors' },
    { name: 'Financials', href: '/Investors/financials' },
    { name: 'Contacts', href: '/Investors/contacts' },
    { name: 'Rights Issue', href: '/Investors/rights-issue' },
    { name: 'Announcements', href: '/Investors/announcements' },
    { name: 'Policies', href: '/Investors/policies' },
    { name: 'Annual Reports', href: '/Investors/annual-reports' },
    { name: 'Preferential Issue', href: '/Investors/preferential-issue' },
  ];

  // Define submenu items for Services
  const servicesSubmenuItems = [
    { name: 'Software Development', href: '/services/software-development' },
    { name: 'Testing and QA', href: '/services/TestingAndQA' },
    { name: 'Application Services', href: '/services/ApplicationServices' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'Infrastructure Services', href: '/services/infrastructure-services' },
    { name: 'Data Analytics', href: '/services/data-analytics-Two' },
    { name: 'Digital Transformation', href: '/services/digital-transformation' },
    { name: 'Managed IT Services', href: '/services/Managed-IT-Services' },
    { name: 'IT Outsourcing', href: '/services/it-outsourcing' },
    { name: 'IT Consulting', href: '/services/it-consulting' },
    { name: 'IT Support', href: '/services/it-support' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close all submenus when main mobile menu is toggled
    if (isMobileMenuOpen) {
      setMobileSolutionsSubmenuOpen(false);
      setMobileProductsSubmenuOpen(false);
      setMobileServicesSubmenuOpen(false);
      setmobileinvestorsSubmneuOpen(false);
    }
  };

  return (
    // Outer sticky div and header adapted from NavigationMenu
    <div className="sticky top-0 z-50 bg-white">
      <header className="bg-white shadow-sm relative" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <div className="container mx-auto flex justify-between items-center relative px-4">
          {/* Logo aligned left */}
          <div className="logo z-10">
            <Link href="/"> {/* Link to the main website home */}
              <div className="logo-container relative transform transition-transform duration-300 hover:scale-105">
                <Image
                  src="/edvenswa-logo-150x150.png" // Ensure this path is correct
                  alt="Edvenswa Logo"
                  width={60}
                  height={15}
                  className="rounded-md hover:shadow-lg transition-shadow duration-300"
                />
                {/* Optional hover effect on logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation centered */}
          <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-6 items-start"> {/* Use items-start to align top, or items-center for middle */}
              
              <li><Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link></li> {/* Link to main tech page */}

              {/* Solutions Menu with hover effect */}
              <div className="relative mb-1 group">
                <Link href="/solutions" className="text-gray-600 hover:text-blue-500 pb-5">
                  Solutions
                </Link>
                {/* <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
                  <div className="py-2">
                    {solutionsSubmenuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div> */}
              </div>

              {/* Products Menu with hover effect */}
              <div className="relative mb-1 group">
                <Link href="/products" className="text-gray-600 hover:text-blue-500 pb-5">
                  Products
                </Link>
                {/* <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
                  <div className="py-2">
                    {productsSubmenuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div> */}
              </div>

              {/* Services Menu with hover effect */}
              <div className="relative mb-1 group">
                <Link href="/services" className="text-gray-600 hover:text-blue-500 pb-5">
                  Services
                </Link>
                {/* <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
                  <div className="py-2">
                    {servicesSubmenuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div> */}
              </div>

              <li><Link href="/contact-us" className="text-gray-600 hover:text-blue-500">Contact Us</Link></li>


              {/* Investors Menu with hover effect */}
              {/* <div clas */}

              

              {/* <li><Link href="/" className="text-gray-600 hover:text-blue-500">Enterprise</Link></li> Link back to main Home */}
            </ul>
          </nav>

          {/* Mobile menu toggle button */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-500 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu content */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-4 p-4">
              <li><Link href="/" className="text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>Home</Link></li>
              

              {/* Mobile Solutions Submenu */}
              <li>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <button
                    onClick={() => setMobileSolutionsSubmenuOpen(!mobileSolutionsSubmenuOpen)}
                    className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <span>Solutions</span>
                    {mobileSolutionsSubmenuOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {mobileSolutionsSubmenuOpen && (
                    <div className="mt-2 ml-4 space-y-1 border-l-2 border-blue-100 pl-4">
                      {solutionsSubmenuItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block py-2 text-sm text-gray-600 hover:text-blue-500 transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </li>

              {/* Mobile Products Submenu */}
              <li>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <button
                    onClick={() => setMobileProductsSubmenuOpen(!mobileProductsSubmenuOpen)}
                    className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <span>Products</span>
                    {mobileProductsSubmenuOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {mobileProductsSubmenuOpen && (
                    <div className="mt-2 ml-4 space-y-1 border-l-2 border-blue-100 pl-4">
                      {productsSubmenuItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block py-2 text-sm text-gray-600 hover:text-blue-500 transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </li>

              {/* Mobile Services Submenu */}
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
                        <Link
                          key={index}
                          href={item.href}
                          className="block py-2 text-sm text-gray-600 hover:text-blue-500 transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </li>

              <li>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <button
                    onClick={() => setmobileinvestorsSubmneuOpen(!mobileinvestorsSubmenuOpen)}
                    className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <span>Investors</span>
                    {mobileinvestorsSubmenuOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {mobileinvestorsSubmenuOpen && (
                    <div className="mt-2 ml-4 space-y-1 border-l-2 border-blue-100 pl-4">
                      {investorsSubmenuItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block py-2 text-sm text-gray-600 hover:text-blue-500 transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </li>

              <li><Link href="/contact-us" className="text-gray-600 hover:text-blue-500" onClick={toggleMobileMenu}>Contact Us</Link></li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}