"use client"
import React from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import {ServiceCard} from '@/components/Card';
import { CircleCheck} from 'lucide-react';
import { useEffect, useState } from 'react';
import Records from '@/components/ExpandableSectionReusable';
import PageMetadata from '@/components/PageMetaData';


const LogoSlider = () => {
  const logos = [
    { src: "/logos/hewlett-packard-enterprise-silver-partner-vector-logo-q6os1sgajydacxw5tchzdzjwpehx8be1kph6dluoe8.png", alt: "Logo 1" },
    { src: "/logos/LenovoBP-POS-color-q6os1sgajydacxw5tchzdzjwpehx8be1kph6dluoe8.png", alt: "Logo 2" },
    { src: "/logos/pngfind.com-registered-logo-png-2230159-q6os1te4qsekojusnuwlyhbdasdag0hrwu4nuvta80.png", alt: "Logo 3" },
    { src: "/logos/cisco.png", alt: "Logo 4" },
    { src: "/logos/Ubiqity.png", alt: "Logo 5" },
    { src: "/logos/Acronis.png", alt: "Logo 6" },
    { src: "/logos/Intel.png", alt: "Logo 7" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 7;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [logos.length]);

  // Create circular window of 5 logos
  const getVisibleLogos = () => {
    const visible: { src: string; alt: string; }[] = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(logos[(startIndex + i) % logos.length]);
    }
    return visible;
  };

  const visibleLogos = getVisibleLogos();

  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center gap-4 transition-all duration-700 ease-in-out">
          {visibleLogos.map((logo, idx) => (
            <div key={idx} className="relative w-28 h-16">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                style={{ objectFit: 'contain' }}
                sizes="20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialSlider = () => {
    const testimonials = [
      {
        id: 1,
        quote: "We were very impressed by their robust recruitment process, which is one of the main reasons we chose to work with them. They have a strong team of highly qualified resources.",
        name: "Kevin Parks",
        title: "Co-Founder & COO, Stolle",
        avatar: "/ameer-basheer-ABuzWPku1Ug-unsplash.jpg"
      },
      {
        id: 2,
        quote: "Tecnologia proactive collaborative approach has been critical in helping us build an IT infrastructure that enables our success today and supports our long-term positioning strategy.",
        name: "Sarah Johnson",
        title: "CTO, TechVision Inc",
        avatar: "/andrew-power-y9L5-wmifaY-unsplash.jpg"
      },
      {
        id: 3,
        quote: "I’ve been a customer for more than a decade. Tecnologia is an example of the way Managed Services should be done. They do their very best to make sure you succeed.",
        name: "Michael Chen",
        title: "Product Manager, InnovateLab",
        avatar: "/GettyImages-1290488236-150x150.jpg"
      }
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
  
    const nextTestimonial = () => {
      if (isAnimating) return;
      
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 150);
    };
  
    const prevTestimonial = () => {
      if (isAnimating) return;
      
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 150);
    };
  
    const currentTestimonial = testimonials[currentIndex];
  
    return (
      <div className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-4">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
              WHAT OUR CUSTOMERS SAY
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Customers Say
            </h2>
            <div className="w-12 h-1 bg-teal-400 mx-auto"></div>
          </div>
  
          {/* Testimonial Content */}
          <div className="relative min-h-64 flex items-center justify-center">
            <div 
              className={`transition-all duration-300 ease-in-out ${
                isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
              }`}
            >
              {/* Quote */}
              <div className="mb-8">
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  &quot;{currentTestimonial.quote}&quot;
                </blockquote>
              </div>
  
              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-800 text-lg">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {currentTestimonial.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Navigation */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-gray-300 hover:border-teal-400 hover:bg-teal-50 transition-colors duration-200 group"
              disabled={isAnimating}
            >
              <svg 
                className="w-6 h-6 text-gray-600 group-hover:text-teal-600 transition-colors duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
  
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating && index !== currentIndex) {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentIndex(index);
                        setIsAnimating(false);
                      }, 150);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex 
                      ? 'bg-teal-500' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
  
            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-gray-300 hover:border-teal-400 hover:bg-teal-50 transition-colors duration-200 group"
              disabled={isAnimating}
            >
              <svg 
                className="w-6 h-6 text-gray-600 group-hover:text-teal-600 transition-colors duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
  
          {/* Counter */}
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              {currentIndex + 1} of {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    );
  };

const testingTypes = [
{
    id: 0,
    title: "Risk-free Co-operation",
    content: ["We analyze economic feasibility of financial software implementation for each company-specific case.", "Also, we can develop a Proof of Concept to test the viability of a required financial management solution in real life."]
},
{
    id: 1,
    title: "Effective Collaboration",
    content: ["We render digital finance consulting services in close collaboration with project stakeholders to get an in-depth understanding of the client&apos;s corporate finance needs and tailor the service accordingly.", "We define tailored sets of KPIs to track the quality of services we deliver and ensure service transparency by submitting regular reports."]
},
{
    id: 2,
    title: "Bringing Business Value",
    content: ["Having proven expertise in cloud, AI and ML, big data, blockchain, we choose the best-fitting advanced technologies for each financial management solution to deliver additional value across finance workflows for our customers."]
},
{
    id: 3,
    title: "Pragmatic Approach",
    content: ["We analyze a client’s business needs to define an optimal feature set for the finance solution and avoid packing it with unnecessary functionality.", "We advise on proven frameworks, platforms, and ready-made components that help streamline financial software development and cut its cost."]
},
{
    id: 4,
    title: "Flexible Co-operation Options",
    content: ["Depending on a client’s needs, we can fully take over financial software implementation and provide knowledge transfer to their in-house IT team.", "Or co-implement the finance solution with the customer’s in-house developers (Edvenswa’s team will cover up to 30% of the tasks)."]
},
{
    id: 3,
    title: "Guaranteed Compliance",
    content: ["We devise a strategy to ensure a solution’s compliance with GAAP (specifically ASC 606 and IFRS 15), SOC1 and SOC2, SOX, PCI DSS, GDPR (for the EU), ZATCA regulations (for Saudi Arabia), other relevant global, country- and industry-specific standards and regulations."]
},
{
    id: 4,
    title: "Focus on Security",
    content: ["We design solutions powered with multi-layer data encryption, role-based access control, intelligent fraud detection algorithms, and other security capabilities to ensure the safety of financial and business data and minimize the risk of malicious user activities."]
},
];


export default function Business() {
    return (
        <section>
            <TechNavigation />
            <PageMetadata 
        title="Financial-Management - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div>
            <div className="relative w-full h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-[38%] pt-20 px-4 md:pl-8">
                    <p className="text-3xl md:text-5xl font-bold">Digital Financial Management Consulting Services​</p>
                    <p className="pt-5 text-base md:text-lg font-normal">Revamp Financial Management</p>
                    <p className="pt-5 text-sm md:text-lg font-normal pb-5">
                        Since 2007, Edvenswa provides companies in 30+ industries with advisory and practical assistance on the design and implementation of reliable financial management software to improve their corporate finance processes.
                    </p>
                    <Link href="/tech/contact-us" className="inline-block bg-teal-500 text-white px-4 py-2 rounded text-sm md:text-base">
                        Get in touch
                    </Link>
                </div>
                {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/Financial Management.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
            </div>

            <div>
                <h2 className="text-gray-500 text-base md:text-xl px-4 py-6">
                    Digital financial management consulting services aim to help companies drive improvements across corporate financial management processes and target ambitious business goals with the help of robust finance software and advanced technologies, such as cloud, AI and ML, big data, blockchain.
                </h2>
            </div>

            {/* service card section */}
            <div className="px-4 md:px-10 pb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 pb-5 pt-10">Edvenswa’s Service Scope</h2>
                <h2 className="text-lg md:text-2xl text-gray-700 pb-5 pt-2">
                    Our digital financial management consulting services are customized to clients’ business needs and may cover:
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-16 mt-10">
                    
                    <ServiceCard
                        icon={null}
                        title={"Financial Management System Landscape Analysis"}
                        services={ [
                            "Increased efficiency of the financial software landscape.",
                            "Optimized costs of currently used financial solutions.",
                            "Improved security of sensitive financial and business data financial systems store, and more."
                          ]}
                        desc={"Auditing a client’s existing financial management tools and their integration points, evaluating technical and economic pains of existing financial software, planning financial software ecosystem improvements with software-only changes. Edvenswa’s services aim to ensure:"}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Advanced Technologies Consulting"}
                        services={[
                            "Ensuring high availability, scalability and security of a financial solution.",
                            "Automated aggregation and comprehensive analysis of multi-dimensional finance data to predict particular aspects of the company’s financial performance.",
                            "Getting intelligent recommendations on optimal decisions across financial processes.",
                            "Facilitated traceability of financial transactions, and more."
                          ]}
                        desc={"Consulting on the use of cloud, AI and ML, big data, blockchain for:"}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Financial Software Development Consulting"}
                        services={[
                            "Designing a financial management solution based on the customer's unique business needs.",
                            "Choosing an optimal tech stack for solution development.",
                            "Introducing an integration plan with relevant enterprise software and third-party systems (e.g., financial data marketplaces, trading platforms)."
                          ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Financial Software Modernization Consulting"}
                        services={[
                            "Planning gradual transition of a customer's financial software to modern techs without disrupting critical financial management operations.",
                            "Increasing the value of financial software investment through legacy transformation."
                          ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Financial Software Implementation"}
                        services={[
                            "Financial software implementation in collaboration with a client's in-house IT team.",
                            "Covering up to 100% financial software implementation tasks and knowledge transfer to a client's in-house IT team."
                          ]}
                        desc={null}
                    />
                </div>
            </div>          

            {/* fourth section */}
            <div className='px-4 pb-5'>
            <h2 className='text-3xl font-bold text-gray-800 pb-5 pt-10 pl-4'>Key Steps of Digital Financial Management Consulting by Edvenswa</h2>
            <h2 className='text-xl  text-gray-500 pb-5 pl-4'>We at Edvenswa help companies bridge the gap between a high-level digital transformation strategy and its actual fulfilment. Our typical digital financial management consulting process flow looks as follows:</h2>
                <div className='pl-6 pt-2 flex items-start gap-2 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 mt-1" />
                    <p>
                    Analyzing financial management needs and eliciting requirements to a corporate finance solution.</p>
                </div>
                <div className='pl-6 pt-2 flex items-start gap-2 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 mt-1" />
                    <p>Auditing the existing financial software landscape, analyzing its weaknesses and opportunities.</p>
                </div>
                <div className='pl-6 pt-2 flex items-start gap-2 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 mt-1" />
                    <p>
                    Preparing a business case for financial software development / modernization.</p>
                </div>
                <div className='pl-6 pt-2 flex items-start gap-2 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 mt-1" />
                    <p>
                    Elaborating a technical requirements specification for the financial management solution.</p>
                </div>
                <div className='pl-6 pt-2 flex items-start gap-2 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 mt-1" />
                    <p>
                    Introducing a project plan for corporate finance digitization / evolution of legacy financial tools.</p>
                </div>
            <h2 className=' pl-4 text-xl text-gray-500 pb-5 pt-10'>Additionally, we are ready to cover end-to-end financial software development / modernization, including its integration with relevant business-critical systems, and provide continuous maintenance and support of the delivered solution.</h2>
                
            </div>

            {/* service card section */}
            <div className='px-4 pb-5'>
                <h2 className='text-4xl font-bold text-gray-800 pb-5 pt-10'>Financial Management Solutions Edvenswa Specializes In</h2>
                <h2 className='text-2xl text-gray-700 pb-5 pt-2'>We provide consulting for the successful implementation of one or several integrated financial management solutions:</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-10 px-10 '>
                    <ServiceCard
                        icon={null}
                        title={"Financial Process Automation"}
                        services={[
                            "Improving financial data accuracy.",
                            "Eliminating manual efforts across tasks involved in bookkeeping, invoicing, payroll accounting, financial planning and analysis, revenue management, tax management, investment and financial risk management, and more."
                          ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Automated Accounting Solutions"}
                        services={[
                            "Eliminating manual accounting tasks",
                            "Multi-entity bookkeeping and invoicing",
                            "Accounts Payable (AP) and Accounts Receivable (AR) automation",
                            "Expense management and multi-location inventory accounting",
                            "Financial data reconciliation and country-specific reporting"
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Enterprise Accounting Software"}
                        services={[
                            "General ledger management",
                            "Payables, receivables, taxes, and payroll",
                            "Asset and inventory accounting",
                            "Automated invoicing and reconciliation",
                            "Streamlined accounting for complex operations"
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"General Ledger Software"}
                        services={[
                            "Real-time aggregation of multi-entity financial transactions",
                            "Transaction structuring and reconciliation",
                            "Accurate multi-entity recording and reporting",
                            "Faster financial close processes"
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Accounts Receivable Automation Software"}
                        services={[
                            "Automated customer invoicing",
                            "Real-time receivables tracking",
                            "Collection procedure management to reduce DSO",
                            "Elimination of manual errors in the order-to-cash cycle"
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Automated Billing System"}
                        services={[
                            "Automated invoicing workflow",
                            "Payment tracking and processing",
                            "Industry-specific billing (medical, telecom, transportation)",
                            "Increased invoicing speed and accuracy",
                            "Reduced revenue leakage"
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"E-invoicing Software"}
                        services={[
                            "Automated e-invoice generation, processing, and exchange",
                            "Real-time invoice tracking",
                            "Compliance with global, regional, and industry-specific regulations",
                            "Supports standards like ZATCA (Saudi Arabia) and Directive 2014/55/EU (EU)"
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Invoice Processing Automation Software"}
                        services={[
                            "Invoice data capture and validation",
                            "Invoice routing for payment approval",
                            "Posting to the general ledger",
                            "Reduced invoice processing costs and storage",
                            "Shorter invoice-to-pay cycle"
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Revenue Management Software"}
                        services={[
                            "Real-time revenue tracking",
                            "Advanced revenue analysis",
                            "Automated revenue recognition per latest accounting standards",
                            "Faster revenue close",
                            "Simplified compliance and precise forecasting"
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Pricing Software"}
                        services={[
                            "Automated price calculation and updates across channels",
                            "Price performance visibility",
                            "Streamlined price segmentation and discount management",
                            "Analytics-driven price optimization for maximum profitability"
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Cash Management System"}
                        services={[
                            "Forecasting, tracking, and reporting corporate cash flows",
                            "Multi-currency cash management",
                            "Streamlined management across international branches",
                            "Handling complex bank account structures"
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Treasury Software"}
                        services={[
                            "Providing automation across corporate treasury activities, including cash, investment, debt, trade finance, and financial risk management.",
                            "Streamlining management and enhancing visibility of investment and financing activities.",
                            "Reducing idle cash, liquidity and credit risks."
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Financial Modeling Software"}
                        services={[
                            "Streamlining financial planning and analysis, improving decision-making on strategic activities.",
                            "Creating and managing financial models (including multi-dimensional models).",
                            "Automated calculations for various financial models.",
                            "Simulating, analyzing and forecasting financial scenarios of any complexity."
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Cost Control Software"}
                        services={[
                            "Automated cost estimation, budgeting, cost allocation, real-time cost tracking, and variance analysis at the company, department, and project level.",
                            "Streamlining cost control and decreasing budget variance."
                        ]}
                        desc={null}
                    />
                </div>
            </div>

            {/* fourth section */}
            <div className='px-4 pb-5'>
            <h2 className='text-3xl font-bold text-gray-800 pb-5 pt-10'>Why Choose Digital Financial Management Consulting with Edvenswa</h2>
                <LogoSlider />
                <div className='pl-6 pt-8 flex items-start gap-4 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                    <p>Since 2007 in corporate finance software development.</p>
                </div>
                <div className='pl-6 pt-2 flex items-start gap-4 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                    <p>IT consultants and project managers having experience with 30+ industries, including manufacturing, retail, healthcare, telecoms, financial services.</p>
                </div>
                <div className='pl-6 pt-2 flex items-start gap-4 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                    <p>Since 16 years in data science to introduce AI and ML-powered financial analytics.</p>
                </div>
                <div className='pl-6 pt-2 flex items-start gap-4 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                    <p>Since 2007 in cybersecurity to ensure world-class security of financial software and sensitive financial data it stores.</p>
                </div>
                <div className='pl-6 pt-2 flex items-start gap-4 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                    <p>In-house compliance experts with 5–20 years of experience to ensure financial management software compliance with industry- and region-specific regulations.</p>
                </div>
                <div className='pl-6 pt-2 flex items-start gap-4 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                    <p>High quality of digital financial management consulting services and customers&apos; data security proven by ISO 9001 and ISO 27001 certificates.</p>
                </div>
            </div>

            {/* testimonials */}
            {/* <div>
                <TestimonialSlider/>
            </div> */}

            {/* Expandale section */}
            <div className='pl-0'>
                <Records
                    title="Edvenswa's Concept of Application Services"
                    items={testingTypes}
                    defaultExpandedId={0}
                />
            </div>

            {/* service card section */}
            <div className='px-4 pb-10'>
                <h2 className='text-4xl font-bold text-gray-800 pb-5 pt-10'>Choose Your Service Option</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-16 mt-10 px-10 '>
                    <ServiceCard
                        icon={null}
                        title={"Digital Financial Management Consulting"}
                        services={[
                            "Analyse your financial management needs and elicit requirements for the financial management solution.",
                            "Develop a Proof of Concept.",
                            "Advise on advanced technologies.",
                            "Suggest optimal features and architecture for a financial management solution, and a go-to tech stack for its implementation.",
                            "Prepare an integration plan with ERP, CRM, an inventory management system, a BI solution, etc.",
                            "Prepare an integration plan with ERP, CRM, an inventory management system, a BI solution, etc." // Appears duplicated
                          ]}
                        desc={"We create a roadmap to financial management digitalization, modernization of your existing digital financial management environment, or adoption of new financial management solutions and advanced techs."}
                    />
                    <ServiceCard
                        icon={null}
                        title={"Financial Software Advisory & Implementation"}
                        services={[
                            "Analyse your financial management needs.",
                            "Conceptualize a financial management solution.",
                            "Design architecture.",
                            "Develop and test the financial management software.",
                            "Integrate the solution with relevant corporate systems (ERP, CRM, an inventory management system, a BI solution, etc.).",
                            "Help your employees adopt the solution.",
                            "Continuously support and evolve the solution (if required)."
                          ]}
                        desc={"We design and develop custom financial management software tailored to your business-specific needs, or customize and implement a selected platform-based financial solution."}
                    />
                </div>
            </div>

            <Footer />
            </div>
        </section>
    );
}

