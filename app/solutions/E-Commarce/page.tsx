"use client"
import React from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import {ServiceCard} from '@/components/Card';
import { Pizza, Bike, Footprints, SprayCan, Sofa, Hammer, Gem, HeartPulse } from 'lucide-react';
import { useState } from 'react';
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
        title="E-Commerce - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div>
                <div className="relative w-full h-[60vh] md:h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-[38%] pt-20 px-4 md:pl-8">
                        <p className="text-3xl md:text-5xl font-bold">Digital Commerce Agency​</p>
                        <p className="pt-5 text-base md:text-lg font-normal">Revamp E-commerce Management</p>
                        <p className="pt-5 text-sm md:text-lg font-normal pb-5">
                            At its core, digital commerce is selling and buying goods and services online. The market is highly competitive, and businesses need to strive for more and more excellence to stay resilient, even though consumer demand for online shopping is remarkably strong now. Edvenswa brings in technology expertise and a problem-oriented approach to drive positive and tangible changes across your business resulting in cost savings and revenue growth.
                        </p>
                        <Link href="/tech/contact-us" className="inline-block bg-teal-500 text-white px-4 py-2 rounded text-sm md:text-base">
                            Get in touch
                        </Link>
                    </div>
                    {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/E-commerce.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
                </div>  

                {/* Black Card Section */}
                <div className="px-4 py-10">
                    <h1 className="text-sm md:text-xl text-gray-500">
                        Every day, we unpack and communicate a transformative value IT brings to business. Our result-oriented approach is recognized worldwide.
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                        <BlackCard percentage="Located in the US" text="International presence in Europe" />
                        <BlackCard percentage="20 years" text="In ecommerce services" />
                        <BlackCard percentage="750+ talents" text="Across diverse IT domains" />
                    </div>
                </div>

                {/* Service Card Section */}
                <div className="px-4 pb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 pb-5 pt-10">
                        Benefits of Building IT Solutions for Transportation and Logistics with Edvenswa
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 mt-10 px-4 md:px-10">
                    <ServiceCard
                        icon={"shopping-cart"}
                        title={"Ecommerce Development"}
                        services={[
                            "Obtain a clean-coded and high-performing ecommerce solution."
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={"handshake"}
                        title={"Ecommerce Consulting"}
                        services={[
                            "Secure the best ROI for implemented technology solutions."
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={"layout"}
                        title={"UI & UX Web Design"}
                        services={[
                            "Communicate your brand’s unique personality through website design."
                        ]}
                        desc={null}
                    />
                    </div>
                </div>

                <div className="px-4 pb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 pb-5 pt-10">Digital Marketing Automation</h2>
                    <h2 className="text-sm md:text-xl text-gray-500 pb-5">
                        We help to implement proper marketing automation tools and organize effectively omnichannel customer communication:
                    </h2>
                    <ul className="list-[square] list-inside px-4 md:px-10 text-sm md:text-lg text-gray-700 custom-bullets">
                        <li>Email Marketing</li>
                        <li>Social Media Marketing</li>
                        <li>Content Marketing</li>
                        <li>SEO Marketing</li>
                        <li>Landing Page Design</li>
                    </ul>
                </div>

                {/* Boxes Section */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-5 pl-4 md:pl-10">
                        Benefits of Building IT Solutions for Transportation and Logistics with Edvenswa
                    </h2>
                    <div className="px-4 md:px-10 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm md:text-xl text-gray-500 pb-5">
                        {/* Card 1 */}
                        <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center flex flex-col items-center justify-center space-y-2">
                            <Pizza className="text-teal-500" size={40} />
                            <h3 className="text-teal-500 font-semibold text-lg">Food & Beverage</h3>
                        </div>
                        {/* Card 2 */} 
                        <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center flex flex-col items-center justify-center space-y-2">
                            <Bike className="text-teal-500" size={40} />
                            <h3 className="text-teal-500 font-semibold text-lg">Food Delivery</h3>
                        </div>

                        {/* Card 3 */}
                        <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center flex flex-col items-center justify-center space-y-2">
                            <Footprints className="text-teal-500" size={40} />
                            <h3 className="text-teal-500 font-semibold text-lg">Apparel & Footwear</h3>
                        </div>

                        {/* Card 4 */}
                        <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center flex flex-col items-center justify-center space-y-2">
                            <SprayCan className="text-teal-500" size={40} />
                            <h3 className="text-teal-500 font-semibold text-lg">Beauty & Personal Care</h3>
                        </div>
                        {/* Card 5 */}
                        <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center flex flex-col items-center justify-center space-y-2">
                            <Sofa className="text-teal-500" size={40} />
                            <h3 className="text-teal-500 font-semibold text-lg">Furniture & Household Goods</h3>
                        </div>

                        {/* Card 6 */}
                        <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center flex flex-col items-center justify-center space-y-2">
                            <Hammer className="text-teal-500" size={40} />
                            <h3 className="text-teal-500 font-semibold text-lg">Auto-parts & Accessories</h3>
                        </div>
                        {/* Card 7 */}
                        <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center flex flex-col items-center justify-center space-y-2">
                            <Gem className="text-teal-500" size={40} />
                            <h3 className="text-teal-500 font-semibold text-lg">Jewelry</h3>
                        </div>

                        {/* Card 5 */}
                        <div className="flex-1 border-2 border-gray-500 rounded-2xl p-6 shadow-md text-center flex flex-col items-center justify-center space-y-2">
                            <HeartPulse className="text-teal-500" size={40} />
                            <h3 className="text-teal-500 font-semibold text-lg">Healthcare & Medicine</h3>
                        </div>
                    </div>
                </div>

                {/* Starting in Ecommerce Section */}
                <div className="px-4 pb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 pb-5 pt-10">
                        Starting in Ecommerce? Grab Our Knowledge for a Happy Launch
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 mt-10">
                    <ServiceCard
                        icon={null}
                        title={"How to Start a Successful Online Business"}
                        services={[
                            "Business & tech tips for a successful online launch: business models, competitive advantages and expected investment into starting an ecommerce business."
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"How to Sell Grocery Online"}
                        services={[
                            "Guidelines on how to find a place in the online grocery market: viable business models, specifics of technology implementations, an ecosystem example, competitive advantages, and investment."
                        ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={null}
                        title={"How to Choose an Ecommerce Platform"}
                        services={[
                            "Functional portfolio of ecommerce platforms and top 10 shortlisted by Edvenswa."
                        ]}
                        desc={null}
                    />

                    </div>
                </div>

                <Footer />
            </div>
        </section>
    );
}

