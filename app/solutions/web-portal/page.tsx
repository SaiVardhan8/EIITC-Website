"use client"
import React from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
// import Image from 'next/image';
import {ServiceCard} from '@/components/Card';
// import { CircleCheck,MessageSquare,Cog,Gauge,CodeXml,Monitor,Smartphone,Globe,Mail ,Cloudy,ShieldPlus,Flame,ShieldHalf  } from 'lucide-react';
import {  useState } from 'react';
// import Records from '@/components/ExpandableSectionReusable';
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
              <div className="mb-6 md:mb-8">
                <blockquote className="text-base md:text-xl text-gray-700 leading-relaxed max-w-full md:max-w-3xl mx-auto px-4">
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
              className="p-2 md:p-3 rounded-full border border-gray-300 hover:border-teal-400 hover:bg-teal-50 transition-colors duration-200 group"
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
    content: "For 33 years, we’ve been accumulating the experience from multiple projects and learned the tricks to tame the systems of various nature and architectural patterns."
},
{
    id: 2,
    title: "We Are Flexible In Terms of Co-operation",
    content: "We are ready to cooperate with third-party vendors and together deliver business value to the customers. If the customer’s needs and priorities change, we can adjust the responsibility scope on the go and adapt service timelines to the new context."
},
{
    id: 3,
    title: "We Focus on TCO of The Solutions We Deliver & Manage",
    content: "We analyze how to optimize operational, maintenance, and other costs during a solution’s life cycle."
},
{
    id: 4,
    title: "We've Established Reliable, Disciplined Processes",
    content: "We have ISO 9001 certified quality management, ISO 27001 certified information security management, ISO 13485 certified quality management for medical devices and Software as a Medical Device and more."
},

];


export default function Business() {
    return (
        <section>
            <TechNavigation />
            <PageMetadata 
        title="Web-Portal - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div>
            <div className="relative w-full h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center">
                <div className="w-[38%] pt-20 pl-8">
                    <p className='text-5xl font-bold'>Web Portal Development Services​</p>
                    <p className='pt-5 text-lg font-normal'>In web portal development since 2007, Edvenswa will diligently study the goals of your future portal and pack the needed functionality into a usable custom web app.</p>
                    <Link href="/tech/contact-us" className='inline-block bg-teal-500 text-white px-3 py-1 rounded'>Get in touch</Link>
                </div>
                {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/web portals.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
            </div>

            <div>
                <h2 className='px-4 py-10 text-gray-500 text-xl'>Web portal development is an end-to-end service to plan and implement a secure and user-friendly digital space to serve your customers, partners, and employees. 
                    Web portals enable self-service functions for target users and give access to services, products, information, and communication tools.</h2>
            </div>

            {/* service card section */}
            <div className='px-4 pb-10'>
                <h2 className='text-4xl font-bold text-gray-800 pb-5 pt-10'>The Essence of Project Management Software</h2>
                <h2 className='text-xl text-gray-500 pb-5 pt-10'>A web portal is a secure web-based platform that gives access to varied functionality and content via an easy-to-navigate interface. 
                    A web portal development company with expertise in full-stack web techs, Edvenswa can help you create a web portal of any type to cover your specific needs in engaging with the audience, be it your customers, partners, or employees.</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-10 px-10 '>
                <ServiceCard
                    icon={"building"}
                    title={"Vendor Portals"}
                    services={[
                        "We improve procurement processes for manufacturers and non-manufacturers (banks, education establishments, government institutions)."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"handshake"}
                    title={"B2B Portals"}
                    services={[
                        "We digitally support any processes between businesses: trading, procurement, manufacturing, distribution."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"user-circle"}
                    title={"Self Service Portals"}
                    services={[
                        "We aggregate information on your company’s products or services and allow registered users to request the information, activate / de-activate and schedule services, contact the company’s representatives, resolve issues."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"users"}
                    title={"Customer Portals"}
                    services={[
                        "We create a digital space where your customers can access your products and place online orders, subscribe for services, submit maintenance requests, share their experience with you and other users."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"user-gear"}
                    title={"Employee Portals"}
                    services={[
                        "We implement a secure platform for your employees to submit and manage requests for HR, IT, and facility-related services, access structured corporate data, collaborate, and stay up-to-date with corporate events."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"user-medical"}
                    title={"Patient Portals"}
                    services={[
                        "We provide your patients with secure access to their personal health information (PHI), enable self-scheduling of appointments and telehealth visits."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"shopping-bag"}
                    title={"Ecommerce Portals"}
                    services={[
                        "We create intuitive buying experience for business buyers and individual consumers, and can integrate an ecommerce portal into an omnichannel retail ecosystem."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"chart-line"}
                    title={"Sales Portals"}
                    services={[
                        "We set up a space where your sales agents and business partners can access sales materials (case studies, white papers, product specifications, etc.)."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"book-open"}
                    title={"E-Learning Portals"}
                    services={[
                        "We create portals for commercial training providers and corporate training programs."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"users"}
                    title={"Community Portals"}
                    services={[
                        "We connect people with similar interests and encourage them to acquire new knowledge and share their experience via forums, blogs, chats, and other communication means."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"shield-check"}
                    title={"Insurance Portals"}
                    services={[
                        "We introduce seamless digital experiences and process automation for insurers’ clients, employees, agent teams, and suppliers."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"briefcase"}
                    title={"Investor Portals"}
                    services={[
                        "We help you streamline investor onboarding and communication, promptly and securely share investment data and documents."
                    ]}
                    desc={null}
                />

                </div>
            </div>

            <div>
                <h2 className='text-3xl font-bold text-gray-800 pb-5 pl-10'>Innovative Tech Solutions</h2>
                <h2 className='pl-10 text-2xl text-gray-600 py-4'>
                    Edvenswa offers cutting-edge technology solutions to enhance your business and customer experience:
                </h2>
                <div className="px-10 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-xl text-gray-500 pb-5">
                    {/* Card 1 */}
                    <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center">
                    <h3 className="text-teal-500 font-semibold mb-2">AI Chatbots</h3>
                    <p>For faster, yet helpful, customer service.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center">
                    <h3 className="text-teal-500 font-semibold mb-2">AI Powered Personalization</h3>
                    <p>To create dynamic digital experience.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center">
                    <h3 className="text-teal-500 font-semibold mb-2">Telemedicine</h3>
                    <p>To enable remote healthcare services.</p>
                    </div>
                    {/* Card 4 */}
                    <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center">
                    <h3 className="text-teal-500 font-semibold mb-2">AR-powered User Manuals</h3>
                    <p>To explain visually each installation or repair step.</p>
                    </div>
                    {/* Card 5 */}
                    <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center">
                    <h3 className="text-teal-500 font-semibold mb-2">AR-powered Learning Programs</h3>
                    <p>To visualize the concepts being taught and create interactive content.</p>
                    </div>
                    {/* Card 6 */}
                    <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center">
                    <h3 className="text-teal-500 font-semibold mb-2">Crypto Payments</h3>
                    <p>To enable intermediary-free transactions.</p>
                    </div>
                    {/* Card 7 */}
                    <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center">
                    <h3 className="text-teal-500 font-semibold mb-2">Live Video Consultations</h3>
                    <p>To replace one-to-one customer service.</p>
                    </div>
                    {/* Card 8 */}
                    <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center">
                    <h3 className="text-teal-500 font-semibold mb-2">Remote Servicing</h3>
                    <p>To monitor functioning and provide remote after-sales support of sold complex machinery or devices.</p>
                    </div>
                    {/* Card 9 */}
                    <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center">
                    <h3 className="text-teal-500 font-semibold mb-2">Voice-controlled Navigation</h3>
                    <p>For content search and input.</p>
                    </div>
                </div>
            </div>

            <div className='px-4 pb-10'>
                <h2 className='text-4xl font-bold text-gray-800 pb-5 pt-10'>Laying the Foundation for Great User Experience</h2>
                <h2 className='text-xl text-gray-500 pb-5 pt-10'>
                    Each web portal is a unique solution that is created strictly for the needs of a particular company and often combines the features of 2-3 portal types. 
                    And while the functionality and design of a portal are discussed individually, there are certain characteristics that we always specify in functional and non-functional requirements as they are essential for user experience.
                </h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 px-10 '>
                    <ServiceCard
                    icon={null}
                    title={"Convenient User On-boarding"}
                    services={[
                        "Step-wise registration process",
                        "User identity verification",
                        "Two-factor authentication to protect confidential data",
                        "E-signature management",
                        "A possibility to upload digital documents",
                    ]}
                    desc={null}
                    />
                    <ServiceCard
                    icon={null}
                    title={"Diverse User Engagement"}
                    services={[
                        "Mobile-friendly, adaptive web design",
                        "Interactive tools like feedback forms, calculators, contact forms",
                        "Content personalization based on user roles and interaction history",
                        "Media-rich pages displaying embedded media, uploaded or hosted externally",
                        "Straightforward website navigation",
                    ]}
                    desc={null}
                    />
                    <ServiceCard
                    icon={null}
                    title={"Easy Content Management"}
                    services={[
                        "All types of content pages: catalogs, real-time pricing, galleries, blogs",
                        "Drag-and-drop page builder",
                        "Unified content publishing styles for consistency",
                        "User-generated content",
                        "Content versioning and scheduled publishing",
                    ]}
                    desc={null}
                    />
                </div>
            </div>

            
            <div>
                <h2 className='px-4 py-10 text-gray-800 text-3xl font-bold'>How We Set Up Web Portal Pricing</h2>
                <h2 className='px-4 pb-5 text-gray-500 text-xl'>The choice between platform-based or custom web portal development is one of the most price-determining decisions we make at the project start. See the benefits and limitations of each approach and reach out to our web development team to get your individual proposal and project estimation.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                    {/* Card 1 */}
                    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Platform Based Development</h2>

                        <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-700">Pros</h3>
                        <ul className="list-disc list-inside text-gray-600 ml-4 mt-1">
                            <li>Quick project progress from a portal concept to deployment.</li>
                        </ul>
                        </div>

                        <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-700">Cons</h3>
                        <ul className="list-disc list-inside text-gray-600 ml-4 mt-1 space-y-1">
                            <li>Rigid portal functionality and design.</li>
                            <li>Hard to scale if newly required components are not provided out-of-the-box.</li>
                            <li>Full reliance on a platform’s vendor for functional updates and security patches.</li>
                        </ul>
                        </div>

                        <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-700">Example</h3>
                        <p className="text-gray-600 ml-4">A SharePoint-based eLearning portal.</p>
                        </div>

                        <div>
                        <h3 className="text-lg font-semibold text-gray-700">Cost</h3>
                        <p className="text-gray-600 ml-4">Starts at $15,000</p>
                        </div>
                    </div>

                    {/* Card 2 (Updated Custom Development) */}
                    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Custom Development</h2>

                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-700">Pros</h3>
                            <ul className="list-disc list-inside text-gray-600 ml-4 mt-1">
                            <li>No functional limits.</li>
                            <li>User experience is designed in the context of your target audience: their motivation, lifestyle, needs.</li>
                            <li>Built for scalability.</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-700">Cons</h3>
                            <ul className="list-disc list-inside text-gray-600 ml-4 mt-1 space-y-1">
                            <li>Potentially large, but delayed ROI due to long software development time.</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-700">Example</h3>
                            <p className="text-gray-600 ml-4">A customer self-service portal to support wide-ranged functions (e.g., payments, multichannel customer service, booking, surveys).</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Cost</h3>
                            <p className="text-gray-600 ml-4">Starts at $70,000</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* service card section */}
            <div className='px-4 pb-10'>
                <h2 className='text-4xl font-bold text-gray-800 pb-5 pt-10'>Our Services</h2>
                <h2 className='text-xl text-gray-500 pb-5 pt-10'>
                    Since 2007, Edvenswa provides all-around services for online portal development: from consulting, planning and designing to portal deployment and after-launch support. We have ISO 9001 certified quality management and ISO 27001 certified information security management and provide compliance with HIPAA, GAMP, FDA, PCI DSS, SOC 3, GDPR, and more.
                </h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-16 mt-10 px-10'>
                    <ServiceCard
                    icon={"user"}  // Replace with appropriate icon if needed
                    title={"Consulting"}
                    services={[
                        "Retrieve business and user needs.",
                        "Define portal functionality and tech stack.",
                        "Develop a business case.",
                        "Estimate portal ROI.",
                        "Design a portal architecture for high performance, security and scalability.",
                        "Deliver UX/UI mock-ups.",
                        "Provide project management and implementation scenario, project cost & time estimates."
                    ]}
                    desc={"Our consultants:"}
                    />
                    <ServiceCard
                    icon={"users"}  // Replace with appropriate icon if needed
                    title={"Full Cycle Development"}
                    services={[
                        "Portal consulting and planning.",
                        "Custom and platform-based portal development.",
                        "Mobile app development (if required).",
                        "Integration with third-party systems.",
                        "User training.",
                        "After-launch support.",
                        "Continuous portal management and evolution (on demand)."
                    ]}
                    desc={"Our team offers:"}
                    />
                </div>
            </div>


           {/* black card section */}
            <div className='px-4 py-10'>
                <h1 className='text-4xl font-bold'>Our Services</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 mt-10'>

                    <BlackCard
                    percentage="Planning"
                    text="We start by exploring your business needs, regulatory constraints, stakeholder expectations, and draw up detailed portal requirements and technical specs."
                    />
                    <BlackCard
                    percentage="Design"
                    text="We create the portal architecture design and deliver UX/UI designs tailored to your needs."
                    />
                    <BlackCard
                    percentage="Iterative Development"
                    text="Building backend, frontend and APIs with quick iterations and major releases every 2-4 weeks."
                    />
                    <BlackCard
                    percentage="Portal Integration"
                    text="We integrate your portal with ERP, CRM, PDM, MES, HIE, LMS, and other tools you use."
                    />
                    <BlackCard
                    percentage="QA &amp; Testing"
                    text="Our QA team reviews requirements, tests security and functionality, and uses automation to reduce time and costs."
                    />
                    <BlackCard
                    percentage="Deployment & Setup"
                    text="We deploy your portal, train your support team, and provide user guides."
                    />
                    <BlackCard
                    percentage="After Release Support"
                    text="We offer 1-3 months of support, managing incidents, configuration changes and updates."
                    />
                    <BlackCard
                    percentage="Ongoing Monitoring"
                    text="Optional performance management, troubleshooting, evolution and change management to keep your portal relevant."
                    />

                </div>
            </div>

            <Footer />
            </div>
        </section>
    );
}

