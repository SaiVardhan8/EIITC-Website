"use client";
import { useState } from 'react';
import { Phone, Mail, MapPin, Check, ChevronDown, ArrowUp, Send, Linkedin, Twitter, Facebook } from 'lucide-react';

// Define types for form data
interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  helpOption: string;
  message: string;
}

export default function ContactPage() {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    helpOption: '',
    message: ''
  });

  // State for dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add actual submission logic here
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-white py-4 px-6 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/api/placeholder/80/40" alt="EdVensWa Logo" className="h-10" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-500 px-2 py-1 flex items-center">
                Business
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="/newsroom" className="text-gray-700 hover:text-blue-500 px-2 py-1">Newsroom</a>
            <a href="/careers" className="text-gray-700 hover:text-blue-500 px-2 py-1">Careers</a>
            <a href="/about" className="text-gray-700 hover:text-blue-500 px-2 py-1">About Us</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500 px-2 py-1">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Newsroom Banner */}
      <div className="bg-gray-100 py-4 text-center">
        <h2 className="uppercase tracking-wider text-gray-500 font-semibold">Newsroom</h2>
      </div>
      
      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-6 px-4">
        <div className="container mx-auto">
          <div className="uppercase text-sm mb-6 tracking-wide">Contact Us</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Book a Complimentary Consultation Call with Our Expert to Discuss Your Needs and Explore Our Solutions
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content Section */}
            <div className="w-full lg:w-1/2 bg-teal-50 p-6 rounded-md">
              <p className="text-gray-700 mb-6">
                We&apos;re happy to answer any questions you may have and help you determine which of our services best fit your needs.
              </p>
              
              <p className="text-gray-800 font-semibold mb-6">
                For Enquiries, reach out at : info@edvenswa.com
              </p>
              
              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 mb-4">Your benefits:</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <div className="bg-teal-500 rounded-full p-1 mr-2 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Client-oriented</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-500 rounded-full p-1 mr-2 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Results-driven</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-500 rounded-full p-1 mr-2 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Independent</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-500 rounded-full p-1 mr-2 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Problem-solving</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-500 rounded-full p-1 mr-2 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Competent</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-500 rounded-full p-1 mr-2 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Transparent</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">What happens next?</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex items-start">
                    <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-2 flex-shrink-0">
                      1
                    </div>
                    <p className="text-sm">We schedule a call at your convenience</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-2 flex-shrink-0">
                      2
                    </div>
                    <p className="text-sm">We do a discovery and consulting meeting</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-2 flex-shrink-0">
                      3
                    </div>
                    <p className="text-sm">We prepare a proposal</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-6 shadow-md rounded-md">
                <div className="text-center mb-6">
                  <h2 className="text-lg font-semibold">Schedule a Consultation</h2>
                  <div className="flex justify-center my-2">
                    <div className="bg-teal-500 rounded-full p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm mb-1">First name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Last name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm mb-1">Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm mb-1">Company email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm mb-1">How Can We Help You?</label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={toggleDropdown}
                        className="w-full text-left border border-gray-300 rounded p-2 flex justify-between items-center"
                      >
                        {formData.helpOption || "Select Option"}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      
                      {isDropdownOpen && (
                        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1">
                          <div
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, helpOption: "IT Consulting" }));
                              setIsDropdownOpen(false);
                            }}
                          >
                            IT Consulting
                          </div>
                          <div
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, helpOption: "Software Development" }));
                              setIsDropdownOpen(false);
                            }}
                          >
                            Software Development
                          </div>
                          <div
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, helpOption: "Digital Transformation" }));
                              setIsDropdownOpen(false);
                            }}
                          >
                            Digital Transformation
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2 h-32"
                      placeholder="To better assist you, please describe how we can help..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Solutions, Products, Services */}
      <div className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Solutions Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">CRM</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">ERP</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Marketing & Advertising</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Operations Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Human Resources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Asset Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">E-Learning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Project Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Document Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Data Analytics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Supply Chain Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">E-Commerce</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Fleet Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Web Portals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Financial Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">CMS</a></li>
              </ul>

              <div className="mt-8">
                <div className="border border-gray-700 rounded p-3 mb-4">
                  <p className="text-sm">Unlock Exclusive Updates. Subscribe Now</p>
                </div>
                <div className="flex items-start mb-4">
                  <input type="checkbox" className="mt-1 mr-2" id="privacy-consent" />
                  <label htmlFor="privacy-consent" className="text-xs text-gray-400">
                    I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy.
                  </label>
                </div>
                <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center text-sm">
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </button>
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">EmPortal</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">EdVision</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">UniOne WorkForce</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Omni Sporting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Scool</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <div className="grid grid-cols-2 gap-2">
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Software Development</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Testing and QA</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Application Services</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">UI/UX Design</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">IT Infrastructure Services</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Data Analytics</a></li>
                </ul>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Digital Transformation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Managed IT Services</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">IT Outsourcing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">IT Consulting</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">IT Support</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Cybersecurity</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info & Copyright Footer */}
      <div className="bg-gray-900 border-t border-gray-800 py-6 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-white rounded-full p-2 mr-4">
              <img src="/api/placeholder/40/40" alt="EdVensWa Seal" className="h-10 w-10" />
            </div>
            <div className="text-white">
              <p className="text-sm flex items-center mb-1">
                <MapPin className="h-4 w-4 mr-2" />
                11205 Alpharetta Hwy, STE H2, Roswell, GA 30076
              </p>
              <p className="text-sm flex items-center mb-1">
                <Phone className="h-4 w-4 mr-2" />
                T: 1-877-253-3484
              </p>
              <p className="text-sm flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                E: info@edvenswa.com
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-white">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-white">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="container mx-auto mt-6 text-center text-gray-400 text-xs">
          <p>© 2007-2025 Edvenswa All rights reserved</p>
          <div className="flex justify-center mt-1 space-x-4">
            <a href="/terms" className="hover:text-white">Terms & Conditions</a>
            <a href="/privacypolicy" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <button 
        className="fixed bottom-6 right-6 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}