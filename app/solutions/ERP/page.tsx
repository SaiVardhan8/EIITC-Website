"use client"
import React from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import PageMetadata from '@/components/PageMetaData';

export default function Business() {
    return (
        <section>
            <TechNavigation />
            <PageMetadata 
        title="ERP - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div>
 <div className="relative w-full h-[60vh] md:h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-[32%] pt-20 px-4 md:pl-8">
            <p className="text-3xl md:text-5xl font-bold">Custom ERP Services​</p>
            <p className="pt-5 text-base md:text-lg font-normal">Edvenswa brings in 16 years of experience in end-to-end ERP development and support to help companies boost the efficiency of their unique business workflows, minimize operational risks, and optimize costs.</p>
            
            <Link href="/tech/contact-us" className="inline-block bg-teal-500 text-white px-4 py-2 rounded text-sm md:text-base">
              Get in touch
            </Link>
          </div>
          {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/ERP.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
        </div>





                <div className="px-8 py-16 max-w-7xl mx-auto">
                    <p className='text-gray-700 mb-16'>
                        Custom ERP is designed to provide tailor-made functionality to address an enterprise&apos;s unique operational and strategic needs. Edvenswa&apos;s custom ERP software development is aimed at building a scalable business-tailored system that integrates all business management functions and facilitates data-driven decision-making.
                    </p>

                    <h2 className='text-3xl font-semibold mb-10'>Benefits of Custom ERP</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        <div className='p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow'>
                            <div className='text-teal-500 text-3xl mb-4'>★</div>
                            <h3 className='font-medium mb-3'>Functionality bound</h3>
                            <p className='text-gray-600'>to your unique needs and specific processes. The ability to leverage advanced tools (AI, IoT, blockchain, etc.) for maximized business efficiency.</p>
                        </div>
                        <div className='p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow'>
                            <div className='text-teal-500 text-3xl mb-4'>★</div>
                            <h3 className='font-medium mb-3'>Compliance</h3>
                            <p className='text-gray-600'>with all required global, country- and industry-specific regulations. Powerful security of ERP software and data it stores; minimized security risks.</p>
                        </div>
                        <div className='p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow'>
                            <div className='text-teal-500 text-3xl mb-4'>★</div>
                            <h3 className='font-medium mb-3'>Smooth and cost-effective integration</h3>
                            <p className='text-gray-600'>with the necessary systems, including legacy software.</p>
                        </div>
                        <div className='p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow'>
                            <div className='text-teal-500 text-3xl mb-4'>★</div>
                            <h3 className='font-medium mb-3'>Flexibility to upgrade</h3>
                            <p className='text-gray-600'>ERP with new capabilities as your business scales or transforms.</p>
                        </div>
                    </div>
                </div>

                <div className="px-8 py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className='text-3xl font-semibold mb-10'>Functional ERP Modules Edvenswa Develops</h2>
                        <p className='text-gray-600 mb-12'>
                            Depending on your business needs and budget, we can cover the development of the following ERP modules to automate and raise the efficiency of your workflows:
                        </p>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z M7 12h2v5H7zm4-7h2v12h-2zm4 4h2v8h-2z"/>
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-2'>Finance & Accounting</h3>
                                <div className='w-12 h-0.5 bg-teal-500 mb-3'></div>
                                <p className='text-gray-600'>Financial planning and analysis, accounts payable and accounts receivable tracking, general ledger management, billing automation.</p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-2'>Human Resources</h3>
                                <div className='w-12 h-0.5 bg-teal-500 mb-3'></div>
                                <p className='text-gray-600'>HR policy management and personnel management from recruitment and onboarding to payroll, attendance, learning, and employee request management.</p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-8 11c0 1.66-1.34 3-3 3s-3-1.34-3-3H4v-2h2v2h2c0-.34.08-.66.23-.94.41-.73 1.18-1.23 2.07-1.23s1.66.5 2.07 1.23c.15.28.23.6.23.94h2v-2h8v2h-2z"/>
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-2'>Production Management</h3>
                                <div className='w-12 h-0.5 bg-teal-500 mb-3'></div>
                                <p className='text-gray-600'>Production planning, scheduling and control. May include sub-modules for product lifecycle management and quality assurance.</p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-2'>Sales & Marketing</h3>
                                <div className='w-12 h-0.5 bg-teal-500 mb-3'></div>
                                <p className='text-gray-600'>Functionality for automating customer order management, planning data-driven marketing campaigns, communicating with the customers and getting visibility into the sales dynamics.</p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-8 11c0 1.66-1.34 3-3 3s-3-1.34-3-3H4v-2h2v2h2c0-.34.08-.66.23-.94.41-.73 1.18-1.23 2.07-1.23s1.66.5 2.07 1.23c.15.28.23.6.23.94h2v-2h8v2h-2z"/>
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-2'>Supply Chain Management</h3>
                                <div className='w-12 h-0.5 bg-teal-500 mb-3'></div>
                                <p className='text-gray-600'>Inventory planning, optimization, and control, management of warehouse operations, vendor management, sourcing and procurement automation.</p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-2'>Service Operations Management</h3>
                                <div className='w-12 h-0.5 bg-teal-500 mb-3'></div>
                                <p className='text-gray-600'>Planning, control, and optimization of service-related workflows. Service data classification and management. Conducting polls and e-voting to gather service improvement ideas.</p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-1.99.89-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-2'>Project Management</h3>
                                <div className='w-12 h-0.5 bg-teal-500 mb-3'></div>
                                <p className='text-gray-600'>Project planning and monitoring, task assignment and tracking, team collaboration tools (instant messaging, shared file space, etc.).</p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-2'>Document Management</h3>
                                <div className='w-12 h-0.5 bg-teal-500 mb-3'></div>
                                <p className='text-gray-600'>Centralized storage of multiple document types, easy document navigation and sharing, document templates.</p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h10V12c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-2'>Knowledge Management</h3>
                                <div className='w-12 h-0.5 bg-teal-500 mb-3'></div>
                                <p className='text-gray-600'>Centralized knowledge repository with a powerful search engine, automated knowledge classification, knowledge sharing and collaboration tools.</p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" viewBox="0 0 24 24">
                                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-2'>Chatbots & Virtual Assistants for Users</h3>
                                <div className='w-12 h-0.5 bg-teal-500 mb-3'></div>
                                <p className='text-gray-600'>Chatbots help users navigate ERP, while virtual assistants can automate basic tasks, e.g., update customer info, send alerts on low inventory levels, capture data on order shipment.</p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-2'>Data Analytics & BI</h3>
                                <div className='w-12 h-0.5 bg-teal-500 mb-3'></div>
                                <p className='text-gray-600'>Comprehensive data analysis and visualization functionality for monitoring, measuring and optimizing the performance of every business department.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-8 py-16 max-w-7xl mx-auto">
                    <h2 className='text-3xl font-semibold mb-10'>Functional ERP Modules Edvenswa Develops</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                            <div className='text-teal-500 text-3xl mb-4'>
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                                </svg>
                            </div>
                            <h3 className='font-medium text-xl mb-3'>ERP Consulting</h3>
                            <p className='text-gray-600'>We design the optimal feature set, architecture, UX and UI of ERP software with your unique needs in mind. Our consultants introduce the best-fitting tech stack for ERP implementation and provide expert advice on security and compliance. You also receive a detailed ERP project plan for risk-free implementation.</p>
                        </div>

                        <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                            <div className='text-teal-500 text-3xl mb-4'>
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                                </svg>
                            </div>
                            <h3 className='font-medium text-xl mb-3'>ERP Development</h3>
                            <p className='text-gray-600'>We cover all stages of ERP development, from design to deployment in production. Our ERP talents integrate the new software with your existing corporate systems and run the necessary quality assurance procedures. You also benefit from user training in a preferred format and get after-launch support.</p>
                        </div>

                        <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                            <div className='text-teal-500 text-3xl mb-4'>
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
                                </svg>
                            </div>
                            <h3 className='font-medium text-xl mb-3'>ERP Evolution</h3>
                            <p className='text-gray-600'>We review your legacy ERP software&apos;s architecture, codebase, and tech stack and upgrade it with the required features. Our service can comprise cloud migration and data migration to the new modules. You get a modern solution promptly and with minimal disruption to your business operations.</p>
                        </div>
                    </div>
                </div>

                <div className="px-8 py-16 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className='text-lg font-semibold text-gray-900 mb-8'>WHY CHOOSE US</h2>
                        <h3 className='text-3xl font-semibold mb-8'>We Ensure Smooth Integrations</h3>
                        <div className='space-y-4'>
                            <div className='flex items-start gap-3'>
                                <div className='text-teal-500 mt-1'>
                                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className='text-gray-700'>Integrations with popular enterprise platforms such as Salesforce, Magento, Office 365.</p>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='text-teal-500 mt-1'>
                                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className='text-gray-700'>API for smooth integration between ERP modules.</p>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='text-teal-500 mt-1'>
                                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className='text-gray-700'>Security policies for securing API traffic and easily apply custom policies.</p>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='text-teal-500 mt-1'>
                                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className='text-gray-700'>Integrations with IoT and blockchain.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-8 py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className='text-3xl font-semibold mb-10'>Benefits of Custom ERP</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-3'>Estimation Accuracy</h3>
                                <p className='text-gray-600'>Having vast experience in implementing ERP projects of various complexity, we can precisely estimate project costs and delivery time.</p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-3'>Minimized Financial Risks</h3>
                                <p className='text-gray-600'>We conduct a feasibility study before starting a project to ensure economic feasibility of ERP implementation for each client.</p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-3'>Fast MVP Development</h3>
                                <p className='text-gray-600'>We typically deliver the first version of a solution within 3-5 months, then introduce new releases every 2-5 weeks.</p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                                <div className='text-teal-500 mb-4'>
                                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className='font-medium text-xl mb-3'>Transparent Collaboration</h3>
                                <p className='text-gray-600'>We provide full transparency of the development process via regular reporting and documented processes.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-8 py-16 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className='text-3xl font-semibold mb-6'>Get ERP That Fits Your Specific Workflows</h2>
                        <p className='text-gray-600 mb-10'>Delegate ERP development to Edvenswa and get a flexible bespoke system that addresses all your unique business needs. Custom ERP implementation brings the following benefits:</p>
                        
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <div className='bg-gray-900 p-6 rounded-lg text-white'>
                                <div className='text-teal-400 text-4xl font-bold mb-4'>+20-30%</div>
                                <p>Business productivity via enhanced collaboration and tailored functionality</p>
                            </div>

                            <div className='bg-gray-900 p-6 rounded-lg text-white'>
                                <div className='text-teal-400 text-4xl font-bold mb-4'>-10%</div>
                                <p>Labor costs due to enterprise process automation</p>
                            </div>

                            <div className='bg-gray-900 p-6 rounded-lg text-white'>
                                <div className='text-teal-400 text-4xl font-bold mb-4'>90%+</div>
                                <p>User satisfaction due to streamlined workflows</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </section>
    )
}
