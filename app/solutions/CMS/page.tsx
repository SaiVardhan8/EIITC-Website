"use client"
import React from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import {ServiceCard} from '@/components/Card';
import { CircleCheck} from 'lucide-react';
import {  useState } from 'react';
import Records from '@/components/ExpandableSectionReusable';
import BlackCard from '@/components/BlackCard';
import PageMetadata from '@/components/PageMetaData';


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
      <div className="py-10 px-4 md:py-16 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-4">
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-2">
              WHAT OUR CUSTOMERS SAY
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Our Customers Say
            </h2>
            <div className="w-12 h-1 bg-teal-400 mx-auto"></div>
          </div>
  
          {/* Testimonial Content */}
          <div className="relative min-h-48 md:min-h-64 flex items-center justify-center">
            <div 
              className={`transition-all duration-300 ease-in-out ${
                isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
              }`}
            >
              {/* Quote */}
              <div className="mb-6 md:mb-8">
                <blockquote className="text-sm md:text-xl text-gray-700 leading-relaxed max-w-full md:max-w-3xl mx-auto px-4">
                  &quot;{currentTestimonial.quote}&quot;
                </blockquote>
              </div>
  
              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                <img 
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                />
                <div className="text-center md:text-left">
                  <p className="font-semibold text-gray-800 text-sm md:text-lg">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {currentTestimonial.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 md:space-x-8 mt-6 md:mt-8">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="p-2 md:p-3 rounded-full border border-gray-300 hover:border-teal-400 hover:bg-teal-50 transition-colors duration-200 group"
              disabled={isAnimating}
            >
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-teal-600 transition-colors duration-200" 
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
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
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
              className="p-2 md:p-3 rounded-full border border-gray-300 hover:border-teal-400 hover:bg-teal-50 transition-colors duration-200 group"
              disabled={isAnimating}
            >
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-teal-600 transition-colors duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
  
          {/* Counter */}
          <div className="mt-4 md:mt-6">
            <p className="text-xs md:text-sm text-gray-500">
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
    title: "Conceptualization Stage",
    content: [
        "Analyzing a company’s information architecture and content management workflows",
        "Defining the content management needs",
        "Outlining the solution’s scope",
        "Specifying the future CMS users and their roles"
      ]
      
},
{
    id: 1,
    title: "Planning Stage",
    content: [
        "Deciding on a content governance strategy.",
        "Defining the core CMS features.",
        "Creating a CMS requirements specification.",
        "Choosing a suitable platform/tech stack.",
        "Planning CMS integrations with enterprise systems.",
        "Creating a CMS development plan and a business case."
      ]
      
},
{
    id: 2,
    title: "Design Stage",
    content: [
        "Designing content management workflows.",
        "Creating personas and user journey maps.",
        "Building CMS prototypes.",
        "Conducting usability testing of the prototypes."
      ]
      
},
{
    id: 3,
    title: "Development Stage",
    content: [
        "Developing a CMS solution from scratch or on the basis of the chosen platform.",
        "Integrating the solution with necessary third-party or legacy systems."
      ]   
},
{
    id: 4,
    title: "Testing & QA Stage",
    content: [
        "Creating a CMS test plan, test scenarios and test cases.",
        "Conducting comprehensive CMS testing.",
        "Fixing the defects detected during the testing."
      ]   
},
{
    id: 5,
    title: "Data Migration Stage",
    content: [
        "Creating a data migration plan.",
        "Defining the content eligible for migration.",
        "Checking the legacy content for errors and duplication, outdated or inconsistent data.",
        "Conducting content migration.",
        "Testing the transferred data and content."
      ]   
},
{
    id: 6,
    title: "User Training & Launching Stage",
    content: [
        "Creating documentation on the CMS use.",
        "Conducting training sessions for CMS users.",
        "Performing user acceptance testing.",
        "Collecting user feedback and implementing relevant improvements.",
        "Launching the CMS to the production environment."
      ]      
},
{
    id: 7,
    title: "After Launch Support Stage",
    content:[
        "Resolving user issues.",
        "Adjusting the solution to the changing business needs.",
        "Monitoring and improving CMS regulatory compliance."
      ]      
},

];


export default function Business() {
    return (
        <section>
            <TechNavigation />
            <PageMetadata 
        title="CMS - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div>
            <div className="relative w-full h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center" >
                <div className="w-[38%] pt-20 pl-8">
                    <p className='text-5xl font-bold'>Custom CMS Development Services​</p>
                    <p className='pt-5 text-sm md:text-lg font-normal pb-5 max-w-full md:max-w-2xl'>In CMS development since 16 years, Edvenswa competently delivers custom CMS solutions that combine responsive UI, rich functionality, strong data security, and high scalability. </p>
                    <Link href="/tech/contact-us" className='inline-block bg-teal-500 text-white px-3 py-1 rounded'>Get in touch</Link>
                </div>
                {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/CMS.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
            </div>

            <div>
                <h2 className='px-4 py-10 text-gray-500 text-xl'>Content management system (CMS) development is needed to create intuitive, customizable, scalable, and SEO-oriented solutions for handling your corporate content. 
                    CMS development by Edvenswa helps companies ensure prompt and cost-effective web content management and encourage website lead generation.</h2>
            </div>
            {/* black card section */}
            <div className='px-4 py-10'>
                <h1 className='text-4xl font-bold'>Why Opt for CMS Development Right Now</h1>
                <h2 className='text-xl '>With a robust CMS, you can get the following benefits:</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-0 mt-10'>
                    <BlackCard percentage="200-400%" text="Annual CMS ROI due to an optimal feature value/cost ratio, cost-effective website development and optimized maintenance" />
                    <BlackCard percentage="+10-50%" text="Website traffic due to faster web content publishing and updating as a result of automation " />
                    <BlackCard percentage="+2-10%" text="Conversion rate due to integrations with SEO tools, user behavior analytics software, and more" />
                    <BlackCard percentage="30–60%" text="Growth in content managers’ productivity due to simplified content management (no technical skills like visual design or coding are required) and real-time collaboration on web content" />
                    <BlackCard percentage="1.2-1.5x" text="Reduced number of content managers needed to handle a website due to efficient workflows, fast content creation and search, web content reuse, and more" />
                </div>
            </div>

            {/* service card section */}
            <div className='px-4 pb-10'>
                <h2 className='text-4xl font-bold text-gray-800 pb-5 pt-10'>Our Services</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-16 mt-10 px-10 '>
                    <ServiceCard
                        icon={"user"}
                        title={"Content Creation & Storage"}
                        services={[
                            "WYSIWYG editor and content templates",
                            "Content hierarchy taxonomy",
                            "Indexing and full-text search",
                            "Integrated file managers",
                            "AI-powered auto-tagging and metadata creation",
                            "Content archiving"
                          ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={"users"}
                        title={"CMS Administration"}
                        services={[
                            "Content governance",
                            "Reporting and analytics (e.g., content usage, user behavior)",
                            "Integrated help desk",
                            "Alerts and notifications (e.g., about content publishing, modification)"
                          ]
                          }
                        desc={null}
                    />
                    <ServiceCard
                        icon={"Handshake"}
                        title={"Content Publishing & Promotion"}
                        services={[
                            "Built-in SEO tools and SEO-friendly URLs",
                            "Customizable content approval and publishing workflows, including non-linear, multistep processes",
                            "AI-driven content personalization (smart suggestions)",
                            "Multisite and multilanguage support",
                            "Accessibility on mobile devices"
                          ]
                          }
                        desc={null}
                    />
                    <ServiceCard
                        icon={"Handshake"}
                        title={"Security & Compliance"}
                        services={[
                            "Access control and multi-factor user authentication",
                            "Role-based permissions",
                            "Versioning and audit trail",
                            "Content retention and deletion policies",
                            "Technical compliance (e.g., WCAG 2)",
                            "Industry-specific compliance (e.g., GLBA, SOX, HIPAA)"
                          ]
                          }
                        desc={null}
                    />
                </div>
            </div>

            {/* Black card */}
            <div className='px-10 mt-10'>
                <h2 className='px-4 pb-10 text-2xl text-gray-800'>
                    Useful CMS Integrations We Implement
                </h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-16'>
                    <div className="py-10 bg-gray-800 rounded-lg shadow-lg p-6">
                        <ul className="list-[square] list-inside text-white space-y-2">
                            <li>ERP</li>
                            <li>CRM</li>
                            <li>PIM</li>
                            <li>Ecommerce Software</li>
                            <li>Marketing Automation Software</li>
                        </ul>
                    </div>

                    <div className="py-10 bg-gray-800 rounded-lg shadow-lg p-6">
                        <ul className="list-[square] list-inside text-white space-y-2">
                            <li>Social Media</li>
                            <li>Collaboration Solutions</li>
                            <li>BI Solutions</li>
                            <li>Web Analytics Tools</li>
                            <li>CRO Tools</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* expandable section */}
            <div className='pl-0'>
                <Records
                    title="CMS Development Process"
                    items={testingTypes}
                    defaultExpandedId={0}
                />
            </div>

            {/* service card section */}
            <div className='px-4 pb-10'>
                <h2 className='text-4xl font-bold text-gray-800 pb-5 pt-10'>Our CMS Capabilities</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-16 mt-10 px-10 '>
                    <ServiceCard
                    icon={"Star"}
                    title={"Reliable & High Performing Architecture"}
                    services={[
                        "Multi-layered CMS structure",
                        "Microservices approach",
                        "Separation of concerns (SoC)",
                        "High concurrency design"
                    ]}
                    desc={null}
                    />
                    <ServiceCard
                    icon={"Star"}
                    title={"Optimized Development Costs"}
                    services={[
                        "Use of proven third-party components",
                        "Public API integrations",
                        "Optimized cloud service usage"
                    ]}
                    desc={null}
                    />
                    <ServiceCard
                    icon={"Star"}
                    title={"Guaranteed CMS Quality"}
                    services={[
                        "Regular code reviews",
                        "Integrated application performance monitoring",
                        "Systematic QA & automated testing"
                    ]}
                    desc={null}
                    />
                    <ServiceCard
                    icon={"Star"}
                    title={"Fast CMS Delivery"}
                    services={[
                        "Agile development practices",
                        "First working version in 2–3 months",
                        "CI/CD pipelines & DevOps approach"
                    ]}
                    desc={null}
                    />
                </div>
            </div>


            {/* service card section */}
            <div className='px-4 pb-10'>
                <h2 className='text-4xl font-bold text-gray-800 pb-5 pt-10'>Our CMS Development Services</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-10 px-10'>
                    <ServiceCard
                    icon={"settings"} // You can change this based on the icon library you're using
                    title={"Custom CMS Development"}
                    services={[
                        "Create an optimal CMS feature set",
                        "Select a tech stack for CMS implementation",
                        "Design CMS architecture and UX/UI",
                        "Develop and test a CMS solution",
                        "Conduct user training",
                        "Perform CMS support and evolution (on demand)"
                    ]}
                    desc={null}
                    />
                    <ServiceCard
                    icon={"layers"}
                    title={"Platform-Based CMS Development"}
                    services={[
                        "Select a fitting CMS platform",
                        "Configure, customize, and integrate with other systems",
                        "Provide QA and user training",
                        "Support and evolve the CMS as needed"
                    ]}
                    desc={null}
                    />
                    <ServiceCard
                    icon={"package"}
                    title={"CMS Module Development"}
                    services={[
                        "Specify requirements for a CMS module",
                        "Design architecture, UX, and UI",
                        "Develop and integrate the module",
                        "Perform CMS module QA"
                    ]}
                    desc={null}
                    />
                </div>
            </div>

            {/* service card section */}

            {/* second section */}
            <div className='px-4 pt-10 my-10'>
                <p className='pl-4 text-2xl font-medium'>Timeframes for Our CMS Development Services</p>
                <p className='pl-4 text-xl text-gray-500 font-medium'>Edvenswa suggests taking into consideration the following cost factors when planning cms management software implementation:</p>
                <div className='pl-6 pt-8 flex items-start gap-2 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 mt-1" />
                    <p>
                    MVP development: 2-3 months.</p>
                </div>
                <div className='pl-6 pt-2 flex items-start gap-2 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 mt-1" />
                    <p>MVP with an innovative component: 4-6 months.</p>
                </div>
                <div className='pl-6 pt-2 flex items-start gap-2 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 mt-1" />
                    <p>
                    Creation of a CMS module with basic features (e.g., content creating, storing, organizing, publishing): 1-2 months.</p>
                </div>
                <div className='pl-6 pt-2 flex items-start gap-2 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 mt-1" />
                    <p>
                    Investment payback period: 0.4-1.2 years.</p>
                </div>
                <div className='pl-6 pt-2 flex items-start gap-2 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 mt-1" />
                    <p>
                    Releases: every 2-6 weeks.</p>
                </div>
                <div className='pl-6 pt-2 flex items-start gap-2 text-xl font-medium text-gray-500'>
                    <CircleCheck className="text-teal-500 mt-1" />
                    <p>
                    Minor changes and hotfixes: several times a day.</p>
                </div>
            </div>

            {/* testimonials */}
            {/* <div className='pt-10'>
                <TestimonialSlider/>
            </div> */}
            <Footer />
            </div>
        </section>
    );
}

