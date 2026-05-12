"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import PageMetadata from '@/components/PageMetaData';


export default function OperationsManagement() {
    return (
        <section>
            <TechNavigation />
            <PageMetadata 
        title="Operations-Management - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div>
                {/* Hero Section */}
                <section className="relative w-full min-h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center">
                    <div className="max-w-7xl mx-auto px-8 pt-20">
                        <h1 className='text-4xl font-bold mb-6'>Digital Operations Consulting</h1>
                        <p className="text-sm md:text-lg font-normal text-gray-700 max-w-full md:max-w-3xl mb-8">
                            Digital operations consulting will help you streamline production or service execution and reduce related costs. The services of Edvenswa cover technical design of operations management software and, if required, its implementation and continuous support.
                        </p>
                        <Link href="/tech/contact-us" className='inline-block bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors'>
                            Get in touch
                        </Link>
                    </div>
                    {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/Operations management.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
                </section>

                {/* Services Section */}
                <section className="px-8 py-16 max-w-7xl mx-auto">
                    <h2 className='text-3xl font-semibold mb-10'>We Deliver Operations Management Software That Helps</h2>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 mb-6'>
                        <div className='p-6 border-2 border-black rounded-lg hover:shadow-lg transition-shadow'>
                            <h3 className='text-lg font-medium text-[#52B7B7]'>Improve Decision Making</h3>
                        </div>
                        <div className='p-6 border-2 border-black rounded-lg hover:shadow-lg transition-shadow'>
                            <h3 className='text-lg font-medium text-[#52B7B7]'>Reduce Reporting Latency</h3>
                        </div>
                        <div className='p-6 border-2 border-black rounded-lg hover:shadow-lg transition-shadow'>
                            <h3 className='text-lg font-medium text-[#52B7B7]'>Reduce Inventory Costs</h3>
                        </div>
                        <div className='p-6 border-2 border-black rounded-lg hover:shadow-lg transition-shadow'>
                            <h3 className='text-lg font-medium text-[#52B7B7]'>Improve Resource Utilization</h3>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                        <div className='p-6 border-2 border-black rounded-lg hover:shadow-lg transition-shadow'>
                            <h3 className='text-lg font-medium text-[#52B7B7]'>Reduce Risks of Operations Bottlenecks</h3>
                        </div>
                        <div className='p-6 border-2 border-black rounded-lg hover:shadow-lg transition-shadow'>
                            <h3 className='text-lg font-medium text-[#52B7B7]'>Raise Machinery Efficiency</h3>
                        </div>
                        <div className='p-6 border-2 border-black rounded-lg hover:shadow-lg transition-shadow'>
                            <h3 className='text-lg font-medium text-[#52B7B7]'>Improve Workflow</h3>
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section className="px-8 py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className='text-3xl font-semibold mb-10'>What Makes Our Operations Management Solutions Stand Out</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            <div className='bg-white p-8 rounded-lg shadow-sm'>
                                <div className='mb-6'>
                                    <Image src="/da_logo1.jpg" alt="Analytics" width={48} height={48} className='text-[#52B7B7]' />
                                </div>
                                <h3 className='text-xl font-semibold mb-4'>Data Analytics</h3>
                                <p className='text-gray-600'>
                                    For accurate production or service planning and operations optimization. Configurable dashboards for real-time visibility into operations data.
                                </p>
                            </div>

                            <div className='bg-white p-8 rounded-lg shadow-sm'>
                                <div className='mb-6'>
                                    <Image src="/DBW_logo.jpg" alt="Workflow" width={60} height={60} className='text-[#52B7B7]' />
                                </div>
                                <h3 className='text-xl font-semibold mb-4'>Digitalized Business Workflows</h3>
                                <p className='text-gray-600'>
                                    (e.g., production/service order approvals) and advanced techs for process automation (e.g., inventory tracking with barcode or RFID technology and machinery condition monitoring with IoT) to reduce labor costs and the risks of human errors.
                                </p>
                            </div>

                            <div className='bg-white p-8 rounded-lg shadow-sm'>
                                <div className='mb-6'>
                                    <Image src="/MDSM_logo.jpg" alt="Security" width={48} height={48} className='text-[#52B7B7]' />
                                </div>
                                <h3 className='text-xl font-semibold mb-4'>Mature Data Security Methods</h3>
                                <p className='text-gray-600'>
                                    (authorized user access, user activity logs, data encryption) To protect sensitive operational data.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="px-8 py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className='text-3xl font-semibold mb-4'>Edvenswa Recommends: Top Operations Management Features to Consider</h2>
                        <p className='text-gray-600 mb-10'>We cover the implementation of all core functionality modules of operations management software.</p>
                        
                        <h3 className='text-2xl font-semibold mb-8'>For Production Operations Management</h3>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                            <div className='bg-white p-6 rounded-lg shadow-sm'>
                                <h4 className='text-xl font-semibold mb-4'>Operations Optimization</h4>
                                <div className='h-1 w-12 bg-[#52B7B7] mb-4'></div>
                                <p className='text-gray-600'>
                                    With AI recommendations drawn from historical operations data and what-if scenario modeling (to balance production load across plants, compare different versions of a production schedule, etc.).
                                </p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm'>
                                <h4 className='text-xl font-semibold mb-4'>Inventory & Warehouse Management</h4>
                                <div className='h-1 w-12 bg-[#52B7B7] mb-4'></div>
                                <p className='text-gray-600'>
                                    For reduced inventory costs and streamlined workflows (automated inventory tracking, order picking routing, etc.).
                                </p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm'>
                                <h4 className='text-xl font-semibold mb-4'>Sales & Purchase Order Management</h4>
                                <div className='h-1 w-12 bg-[#52B7B7] mb-4'></div>
                                <p className='text-gray-600'>
                                    For a facilitated order creation, approval and tracking.
                                </p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm'>
                                <h4 className='text-xl font-semibold mb-4'>Workforce Management</h4>
                                <div className='h-1 w-12 bg-[#52B7B7] mb-4'></div>
                                <p className='text-gray-600'>
                                    For simplified workforce scheduling and reporting.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Operations Management Section */}
                <section className="px-8 py-16 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className='text-3xl font-semibold mb-8'>For Service Operations Management</h2>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
                                <h4 className='text-xl font-semibold mb-4'>Service Planning & Resource Management</h4>
                                <div className='h-1 w-12 bg-[#52B7B7] mb-4'></div>
                                <p className='text-gray-600'>
                                    To meet the customer demand, maximize resource utilization and improve service execution.
                                </p>
                            </div>

                            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
                                <h4 className='text-xl font-semibold mb-4'>Project Management</h4>
                                <div className='h-1 w-12 bg-[#52B7B7] mb-4'></div>
                                <p className='text-gray-600'>
                                    To accurately plan project budget, time and human resources, monitor project health and manage change requests.
                                </p>
                            </div>

                            <div className='bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200'>
                                <h4 className='text-lg md:text-xl font-semibold mb-4'>Time & Expense Management</h4>
                                <div className='h-1 w-12 bg-[#52B7B7] mb-4'></div>
                                <p className='text-sm md:text-gray-600'>
                                    To simplify time and expense tracking and streamline approvals for timesheets and expense claims.
                                </p>
                            </div>

                            <div className='bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200'>
                                <h4 className='text-lg md:text-xl font-semibold mb-4'>Service Document Management</h4>
                                <div className='h-1 w-12 bg-[#52B7B7] mb-4'></div>
                                <p className='text-sm md:text-gray-600'>
                                    For a quick document search and facilitated document creation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Section */}
                <section className="px-4 md:px-8 py-8 md:py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-sm md:text-lg text-gray-700 mb-8 md:mb-12 text-center">
                            We also ensure smooth integration of operations management software with other business-critical software:
                        </p>
                        <img src="/OM.png" alt="OM" className="w-full max-w-md mx-auto" />
                    </div>
                </section>

                {/* Cost Factors Section */}
                <section className="px-4 md:px-8 py-8 md:py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className='text-3xl font-semibold mb-8'>Timeframes for Our E-Learning Software Development Services</h2>
                        <p className='text-lg text-gray-700 mb-8'>
                            Edvenswa suggests taking into consideration the following cost factors when planning operations management software implementation:
                        </p>
                        <div className='space-y-6'>
                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-4 h-4 rounded-full bg-[#52B7B7] flex items-center justify-center mt-1'>
                                    <svg className='w-3 h-3 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                    </svg>
                                </div>
                                <p className='text-gray-700'>Number and complexity of functionality modules.</p>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-4 h-4 rounded-full bg-[#52B7B7] flex items-center justify-center mt-1'>
                                    <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                    </svg>
                                </div>
                                <p className='text-gray-700'>Number and complexity of integrations (such as integrations with legacy software, IoT devices, etc.).</p>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-4 h-4  rounded-full bg-[#52B7B7] flex items-center justify-center mt-1'>
                                    <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                    </svg>
                                </div>
                                <p className='text-gray-700'>Data volume used for analytics (to forecast resource demand, revenue, etc.), the necessity to implement machine learning algorithms and their complexity.</p>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-4 h-4  rounded-full bg-[#52B7B7] flex items-center justify-center mt-1'>
                                    <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                    </svg>
                                </div>
                                <p className='text-gray-700'>Required application types – web, mobile, desktop – and a number of platforms supported (for mobile).</p>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-4 h-4  rounded-full bg-[#52B7B7] flex items-center justify-center mt-1'>
                                    <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                    </svg>
                                </div>
                                <p className='text-gray-700'>Application availability, performance, security, latent capacity and scalability requirements.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Approach Section */}
                <section className="px-8 py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className='text-3xl font-semibold mb-8'>Edvenswa&apos;s approach to managing costs:</h2>
                        <div className='space-y-8'>
                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#52B7B7] flex items-center justify-center text-white text-sm font-semibold'>1</div>
                                <p className='text-gray-700'>Defining an optimal feature set based on your business needs – no unnecessary functionality to pay for.</p>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#52B7B7] flex items-center justify-center text-white font-semibold'>2</div>
                                <p className='text-gray-700'>Developing software iteratively to implement the most important operational functions first and enable faster payback from software implementation.</p>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#52B7B7] flex items-center justify-center text-white font-semibold'>3</div>
                                <p className='text-gray-700'>Using proven frameworks, platforms, and ready-made components where possible to streamline development and ensure reliable software quality.</p>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#52B7B7] flex items-center justify-center text-white font-semibold'>4</div>
                                <p className='text-gray-700'>Defining different feasible targets for availability and performance of the solution&apos;s modules (depending on how business-critical the processes the module covers are).</p>
                            </div>
                        </div>

                        <div className='mt-12 text-left'>
                            <Link href="/tech/contact-us" className='inline-block bg-[#52B7B7] text-white px-8 py-3 rounded-md hover:bg-teal-600 transition-colors'>
                                Get an estimate
                            </Link>
                        </div>
                    </div>
                </section>

                
                {/* Experience Section */}
                <section className="px-8 py-16 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h3 className='uppercase text-sm font-semibold text-gray-600 mb-4'>WHY CHOOSE US</h3>
                        <h2 className='text-3xl font-semibold mb-8'>Our Customers Can Rely on Our Experience in IT</h2>
                        
                        <div className='space-y-6 mb-12'>
                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                <p className='text-gray-700'>Expertise in software consulting and development for companies in 30 industries, including manufacturing, retail & wholesale, professional services, and healthcare firms.</p>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                <p className='text-gray-700'>Skills in advanced techs:</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12'>
                            <div className='bg-[#1E1E1E] p-6 rounded-lg text-white'>
                                <h3 className='text-[#52B7B7] text-4xl font-bold mb-4'>15 years</h3>
                                <p className='text-sm'>In data science and prediction algorithms</p>
                            </div>

                            <div className='bg-[#1E1E1E] p-6 rounded-lg text-white'>
                                <h3 className='text-[#52B7B7] text-4xl font-bold mb-4'>9 years</h3>
                                <p className='text-sm'>In big data</p>
                            </div>

                            <div className='bg-[#1E1E1E] p-6 rounded-lg text-white'>
                                <h3 className='text-[#52B7B7] text-4xl font-bold mb-4'>12 years</h3>
                                <p className='text-sm'>In BI and data visualization</p>
                            </div>

                            <div className='bg-[#1E1E1E] p-6 rounded-lg text-white'>
                                <h3 className='text-[#52B7B7] text-4xl font-bold mb-4'>9 years</h3>
                                <p className='text-sm'>In image analysis</p>
                            </div>

                            <div className='bg-[#1E1E1E] p-6 rounded-lg text-white'>
                                <h3 className='text-[#52B7B7] text-4xl font-bold mb-4'>11 years</h3>
                                <p className='text-sm'>In the Internet of Things (IoT)</p>
                            </div>
                        </div>

                        <div className='space-y-6'>
                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                <p className='text-gray-700'>In-house project management office and a mature quality management system in place (confirmed by the ISO 9001 certificate) to ensure the implementation of high-quality consulting projects on time and within budget.</p>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                <p className='text-gray-700'>Guaranteed security of the customers&apos; data we access proved by the ISO 27001 certificate.</p>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                <p className='text-gray-700'>Quick project start (1-2 weeks).</p>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                <p className='text-gray-700'>Partnerships with Microsoft, Amazon, and Oracle.</p>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                <p className='text-gray-700'>Our excellence in business process improvement is proven by our inclusion in the top 10% service providers by Aclety.</p>
                            </div>
                        </div>
                    </div>
                </section>

                
                {/* Service Options Section */}
                <section className="px-8 py-16 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className='text-3xl font-semibold mb-8'>Choose Your Service Option</h2>
                        
                        {/* Operations Management Software Consulting */}
                        <div className='bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-8'>
                            <h3 className='text-xl font-semibold'>Operations Management Software Consulting</h3>
                            
                            <div className='mt-8'>
                                <h4 className='text-lg font-medium mb-4'>What We Do</h4>
                                <div className='space-y-4'>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Analyze your business needs and related operations workflows (by using fitting business analysis methodologies and interviewing your subject-matter experts).</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Research how operations are currently supported by technology: review applications in use, their architecture, functionality, and integrations between them to identify gaps.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Elicit software requirements in collaboration with your subject-matter experts and involved managers (operations/production managers, asset and inventory managers, etc.) and transform them into a detailed software specification for the development team.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Design custom software architecture in alignment with your performance, security, and compliance requirements. Choose technology stack. Prepare UX and UI mockups.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Select the best fitting off-the-shelf software and prepare a customization and integrations specification.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Prepare solution implementation plan, including cost estimation and feasibility study (optional).</p>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-8'>
                                <h4 className='text-lg font-medium mb-4'>What You Get</h4>
                                <div className='space-y-4'>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Software & hardware (barcode / RFID / IoT techs) requirements specification. The level of elaboration is agreed upon individually.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Solution architecture design.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>UX and UI (re)design.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Off-the-shelf software comparison.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>A project plan with time and budget estimation based on business priorities, financial and technical limitations.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Feasibility study report and a business case (expected costs and financial outcomes, ROI or NPV).</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Risk management plan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Operations Management Software Implementation */}
                        <div className='bg-white p-8 rounded-lg shadow-md border border-gray-200'>
                            <h3 className='text-xl font-semibold'>Operations Management Software Implementation</h3>
                            
                            <div className='mt-8'>
                                <h4 className='text-lg font-medium mb-4'>What We Do</h4>
                                <div className='space-y-4'>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Develop a Proof-of-Concept (optional).</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Implement a custom operations management solution OR customize off-the-shelf software.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Integrate the solution or its components with each other and with your existing systems.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Integrate and install hardware (if applicable, e.g., for IoT-driven systems).</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Run end-to-end system testing (covering functional, UI, API, performance testing).</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Migrate necessary data from currently used systems.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Deploy the solution and conduct user training.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Provide after-launch support.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-8'>
                                <h4 className='text-lg font-medium mb-4'>What You Get</h4>
                                <div className='space-y-4'>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Documented code with unit tests.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>API descriptions.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Test documentation, including automated tests (API and UI tests).</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Infrastructure configurations.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>User documentation.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>Regular status reports.</p>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                        <p className='text-gray-700'>System KPI and maintenance reports.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </section>
    );
}