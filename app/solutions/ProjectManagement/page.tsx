"use client"
import React from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import PageMetadata from '@/components/PageMetaData';

export default function ProjectManagement() {
    return (
        <section>
            <TechNavigation />
            <PageMetadata 
        title="Project-Managemet - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div>
                {/* Hero Section */}
                <section className="relative w-full min-h-[70vh] bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center">
                    <div className="max-w-7xl mx-auto px-8 pt-20">
                        <h1 className='text-4xl font-bold mb-6'>Custom Project Management</h1>
                        <p className='text-lg font-normal text-gray-700 max-w-3xl mb-8'>
                        With 16 years in software development, Edvenswa provides project management consulting and development services for custom project and portfolio management software. 
                        </p>
                        <Link href="/tech/contact-us" className='inline-block bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors'>
                            Get in touch
                        </Link>
                    </div>
                    {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/project management.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
                </section>

                {/* Essence Section */}
                <section className="px-8 py-16 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className='text-3xl font-semibold mb-8'>The Essence of Project Management Software</h2>
                        <div className='bg-[#4169E1] text-white p-6 rounded-lg mb-8'>
                            <p>Custom project management (PM) software streamlines administrative decisions on projects and aligns collaboration between project managers, project team members, and other project stakeholders. PM software helps with:</p>
                        </div>
                        <div className='space-y-4'>
                            <div className='flex items-start gap-3'>
                                <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                <p className='text-gray-700'>Project planning.</p>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                <p className='text-gray-700'>Project team, budget, tasks, risks, and document management.</p>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                <p className='text-gray-700'>Project team collaboration.</p>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                <p className='text-gray-700'>Approval and prioritization of projects.</p>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                <p className='text-gray-700'>Project progress monitoring.</p>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='flex-shrink-0 w-2 h-2 bg-[#52B7B7] mt-2'></div>
                                <p className='text-gray-700'>Reporting on project effectiveness and resource consumption.</p>
                            </div>
                        </div>
                        <p className='text-gray-700 mt-8'>For project-intensive businesses, custom PM software can have extended functionality and cover portfolio project management (PPM).</p>
                    </div>
                </section>

                {/* Project Management Software Features Section */}
                <section className="px-8 py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className='text-3xl font-semibold mb-8'>The Essence of Project Management Software</h2>
                        <p className='text-gray-700 mb-8'>Based on Edvenswa&apos;s 16-year experience in software development, we can outline the core functionality of a custom project management system.</p>
                        <h3 className='text-2xl font-semibold mb-6'>Project Management Software Features -</h3>
                        
                        {/* Rest of the sections remain unchanged */}
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

                        {/* Call to Action Section */}
                        <section className="px-8 py-16">
                            <div className="max-w-7xl mx-auto text-center">
                                <h2 className='text-3xl font-semibold mb-6'>Ready to Optimize Your Operations?</h2>
                                <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
                                    Let&apos;s discuss how our operations management solutions can help streamline your business processes.
                                </p>
                                <Link href="/tech/contact-us" className='inline-block bg-[#52B7B7] text-white px-8 py-4 rounded-md hover:bg-teal-600 transition-colors font-medium'>
                                    Schedule a Consultation
                                </Link>
                            </div>
                        </section>

                    </div>
                   
                </section>
                 <Footer />
            </div>
        </section>
        
    );
}