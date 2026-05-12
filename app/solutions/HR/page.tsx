"use client"
import React from 'react';
import { useState } from 'react';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import { ServiceCard } from '@/components/Card';
import BlackCard from '@/components/BlackCard';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';
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

export default function Marketing() {
    return (
        <section>
            <TechNavigation />
            <PageMetadata 
        title="HR - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div>
                <div className="min-h-screen bg-gray-50">
                    {/* Hero Section */}
                    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 ">
                        <div className="relative w-full h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center">
                            <div className="max-w-2xl pt-20 pl-4">
                                <h1 className="text-5xl font-bold mb-6 leading-tight">
                                    HR Software Development Services
                                </h1>
                                <p className="text-xl mb-8 leading-relaxed opacity-90">
                                    Having 16 years of experience in HR software development, Edvenswa provides technical product management consulting, product development, UX and UI design, QA, maintenance and support services to create powerful HR systems that help you increase competitiveness in the SaaS HR software market and reduce product development costs and risks.
                                </p>
                                <Link href="/tech/contact-us" className="inline-block bg-teal-500 text-white px-4 py-2 rounded text-sm md:text-base">
                                Get in touch
                                </Link>
                            </div>
                            {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/Human Resources.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
                        </div>
                        <div className="py-16 px-6 bg-gray-50">
                            <div className="max-w-6xl mx-auto">
                                {/* Introduction Text */}
                                <div className="mb-16 px-6 max-w-4xl mx-auto">
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        HR software development is aimed at creating human resource management software that streamlines various HR processes, including
                                        personnel tracking, payroll, benefits management, recruiting, onboarding, learning and development, and more.
                                    </p>
                                </div>

                                {/* Main Heading */}
                                <h2 className="text-4xl font-bold text-gray-800 mb-12">
                                    All-Round Assistance for Your CRM Goals
                                </h2>

                                {/* Cards Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {/* HR Administrative Tasks */}
                                    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                                        <div className="flex justify-center mb-6">
                                            <div className="bg-teal-100 p-4 rounded-full">
                                                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                                    <path d="M6 8a2 2 0 00-4 0 2 2 0 004 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                                            HR Administrative Tasks
                                        </h3>
                                        <div className="border-b-2 border-teal-400 w-12 mx-auto mb-6"></div>
                                        <ul className="space-y-3 text-gray-600">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Employee database.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Employee profiles.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Employment life cycle transactions.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Payroll management.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Employee benefits.
                                            </li>
                                        </ul>
                                    </div>

                                    {/* HR Service Management */}
                                    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                                        <div className="flex justify-center mb-6">
                                            <div className="bg-teal-100 p-4 rounded-full">
                                                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                                            HR Service Management
                                        </h3>
                                        <div className="border-b-2 border-teal-400 w-12 mx-auto mb-6"></div>
                                        <ul className="space-y-3 text-gray-600">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Corporate policies and procedures.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Employee handbook.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Organizational chart.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Employee knowledge base.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Employee self-service portal.
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Talent Management */}
                                    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                                        <div className="flex justify-center mb-6">
                                            <div className="bg-teal-100 p-4 rounded-full">
                                                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                                            Talent Management
                                        </h3>
                                        <div className="border-b-2 border-teal-400 w-12 mx-auto mb-6"></div>
                                        <ul className="space-y-3 text-gray-600">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Recruiting.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Onboarding.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Performance management.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Competency management.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Career and succession planning.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Internal job transfer.
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Labor Management */}
                                    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                                        <div className="flex justify-center mb-6">
                                            <div className="bg-teal-100 p-4 rounded-full">
                                                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                                            Labor Management
                                        </h3>
                                        <div className="border-b-2 border-teal-400 w-12 mx-auto mb-6"></div>
                                        <ul className="space-y-3 text-gray-600">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Absence management.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Worktime tracking.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Time and attendance evaluation.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Employee scheduling.
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Tasks and activities tracking.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Main Heading */}
                                <h2 className="text-4xl font-bold text-gray-800 mb-12 pt-10">
                                  Edvenswa&apos;s Key Cooperation Principles
                                </h2>

                                {/* Cards Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {/* Integrity Card */}
                                    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                                        <div className="flex justify-center mb-6">
                                            <div className="bg-teal-500 rounded-full p-4">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                                            Integrity
                                        </h3>

                                        <div className="border-b-2 border-teal-400 w-12 mx-auto mb-6"></div>

                                        <p className="text-gray-600 leading-relaxed text-center">
                                            We offer full-cycle development for your HR system, from ideation to continuous support and evolution.
                                        </p>
                                    </div>

                                    {/* Full Visibility Card */}
                                    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                                        <div className="flex justify-center mb-6">
                                            <div className="bg-teal-500 rounded-full p-4">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                                            Full Visibility
                                        </h3>

                                        <div className="border-b-2 border-teal-400 w-12 mx-auto mb-6"></div>

                                        <p className="text-gray-600 leading-relaxed text-center">
                                          We provide daily reports including such KPIs as implemented features, average time spent per task and work progress. We give you access to our project and task tracking systems like Jira.
                                        </p>
                                    </div>

                                    {/* Minimized Risks Card */}
                                    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                                        <div className="flex justify-center mb-6">
                                            <div className="bg-teal-500 rounded-full p-4">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                                            Minimized Risks
                                        </h3>

                                        <div className="border-b-2 border-teal-400 w-12 mx-auto mb-6"></div>

                                        <p className="text-gray-600 leading-relaxed text-center">
                                          To reduce development risks, we evaluate your development process to find the most fitting way to improve KPIs. To reduce financial risks, we conduct a feasibility study before starting a project and offer technical product management consulting.
                                        </p>
                                    </div>
                                </div>

                                {/*Skills and Competencies*/}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 pt-10">
                                        Our Competencies and Skills
                                    </h2>
                                    <p className='pt-2'>Edvneswa&apos;s experts have a wide range of tech competencies, including:</p>

                                    <p className="px-6 pt-4 px-8 py-3 rounded-lg font-semibold transition-colors">
                                        <span className="bg-gray-800 text-white px-2 py-1 rounded">WEB</span>
                                    </p>
                                    <img className="px-6 pt-4" src="/logos/web.png" alt="technologies" />
                                    <p className="px-6 pt-4 px-8 py-3 rounded-lg font-semibold transition-colors">
                                        <span className="bg-gray-800 text-white px-2 py-1 rounded">Mobile</span>
                                    </p>
                                    <img className="px-6 pt-4" src="/logos/mobile.png" alt="Mobile" />
                                    <p className="px-6 pt-4 px-8 py-3 rounded-lg font-semibold transition-colors">
                                        <span className="bg-gray-800 text-white px-2 py-1 rounded">Desktop</span>
                                    </p>
                                    <img className="px-6 pt-4" src="/logos/Desktop.png" alt="Mobile" />

                                    <p className="px-6 pt-4 px-8 py-3 rounded-lg font-semibold transition-colors">
                                        <span className="bg-gray-800 text-white px-2 py-1 rounded">Platforms</span>
                                    </p>
                                    <img className="px-6 pt-4" src="/logos/platform.png" alt="Mobile" />

                                    <p className="px-6 pt-4 px-8 py-3 rounded-lg font-semibold transition-colors">
                                        <span className="bg-gray-800 text-white px-2 py-1 rounded">Relational Databases / Data Storages</span>
                                    </p>
                                    <img className="px-6 pt-4" src="/logos/DB.png" alt="Mobile" />

                                    <p className="px-6 pt-4 px-8 py-3 rounded-lg font-semibold transition-colors">
                                        <span className="bg-gray-800 text-white px-2 py-1 rounded">Big Data</span>
                                    </p>
                                    <img className="px-6 pt-4" src="/logos/BigData.png" alt="Mobile" />

                                    <p className="px-6 pt-4 px-8 py-3 rounded-lg font-semibold transition-colors">
                                        <span className="bg-gray-800 text-white px-2 py-1 rounded">Machine Learning</span>
                                    </p>
                                    <img className="px-6 pt-4" src="/logos/MeachineLearning.png" alt="Mobile" />

                                    <p className="px-6 pt-4 px-8 py-3 rounded-lg font-semibold transition-colors">
                                        <span className="bg-gray-800 text-white px-2 py-1 rounded">DevOps</span>
                                    </p>
                                    <img className="px-6 pt-4" src="/logos/Devops.png" alt="Mobile" />

                                    <p className="px-6 pt-4 px-8 py-3 rounded-lg font-semibold transition-colors">
                                        <span className="bg-gray-800 text-white px-2 py-1 rounded">Test Automation Tools</span>
                                    </p>
                                    <img className="px-6 pt-4" src="/logos/Automation.png" alt="Mobile" />

                                    <p className="px-6 pt-4 px-8 py-3 rounded-lg font-semibold transition-colors">
                                        <span className="bg-gray-800 text-white px-2 py-1 rounded">Clouds</span>
                                    </p>
                                    <img className="px-6 pt-4" src="/logos/cloud.png" alt="Mobile" />

                                </div>

                                {/* <div className='pt-10'>
                                <TestimonialSlider/>
                                </div> */}

                                {/* Services Offered */}
                                <div>
                                    <h2 className="text-4xl font-bold text-gray-800 mb-12 pt-10">
                                      HR Software Development Services We Offer</h2>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 '>
                                        <ServiceCard
                                            icon={"User"}
                                            title={"HR Product Consulting"}
                                            services={["HR software market and competition analysis.",
                                                "HR solution conceptualization.",
                                                "Defining product differentiation and Unique Selling Proposition (USP).",
                                                "UX and UI design: UX audit and usability testing, interactive prototyping, creating a visual style guide, and more.",
                                                "Tech stack selection to build a HR product."]}
                                            iconColor={"text-teal-500"}
                                            desc={null}
                                        />
                                        <ServiceCard
                                            icon={"Settings"}
                                            title={"Developing an HR System from Scratch"}
                                            services={["Business needs analysis / Idea productization.",
                                                "Architecture design.",
                                                "UX and UI design.",
                                                "HR software development.",
                                                "Integration with the required systems.",
                                                "Quality assurance.",
                                                "Continuous support and evolution of an HR system."]}
                                            desc={null}
                                        />
                                        <ServiceCard
                                            icon={"SlidersHorizontal"}
                                            title={"Taking Over HR Product Development"}
                                            services={["Reduced development costs.",
                                                "Minimized risk of defects in production.",
                                                "Improved HR system’s metrics, such as code quality, service availability, response time, performance, security."]}
                                            desc={null}
                                        />
                                    </div>
                                </div>

                                {/* Timeframes and Pricing */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 pt-10">Timeframes for Our HR Software Development Services</h2>
                                    <div className='pl-6 pt-8 flex items-start gap-4 text-xl font-medium text-gray-500'>
                                        <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                                        <p>MVP development: 2-4 months</p>
                                    </div>

                                    <div className='pl-6 pt-8 flex items-start gap-4 text-xl font-medium text-gray-500'>
                                        <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                                        <p>MVP with an innovative component to increase competitiveness: 3-6 months</p>
                                    </div>

                                    <div className='pl-6 pt-8 flex items-start gap-4 text-xl font-medium text-gray-500'>
                                        <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                                        <p>Releases: every 2-6 weeks</p>
                                    </div>

                                    <div className='pl-6 pt-8 flex items-start gap-4 text-xl font-medium text-gray-500'>
                                        <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                                        <p>Minor changes and hotfixes: several times a day</p>
                                    </div>
                                </div>

                                {/* Pricing Models */}
                                <div>
                                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 pt-10">
                                        Pricing Models for HR System Development
                                    </h2>

                                    <div className="pt-8 flex flex-col md:flex-row gap-6 text-base md:text-xl text-gray-500">
                                        {/* Card 1 */}
                                        <div className="flex-1 border-2 border-gray-300 rounded-2xl p-6 shadow-md">
                                            <h3 className="text-teal-500 font-semibold mb-2 text-lg md:text-xl">Capped Time and Material</h3>
                                            <p>
                                                Used in case of agile iterative development to react to user feedback
                                                and changing requirements.
                                            </p>
                                        </div>

                                        {/* Card 2 */}
                                        <div className="flex-1 border-2 border-gray-300 rounded-2xl p-6 shadow-md">
                                            <h3 className="text-teal-500 font-semibold mb-2 text-lg md:text-xl">Fixed Price</h3>
                                            <p>
                                                Used in case of a well-defined and stable project scope. To reduce risks, 
                                                the project can be divided into phases that are estimated separately.
                                            </p>
                                        </div>

                                        {/* Card 3 */}
                                        <div className="flex-1 border-2 border-gray-300 rounded-2xl p-6 shadow-md">
                                            <h3 className="text-teal-500 font-semibold mb-2 text-lg md:text-xl">Fixed Monthly Fee</h3>
                                            <p>
                                                Used for mature SaaS HR products in the support mode.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 pt-10 text-center">Start Developing Your HR Product Right Now</h2>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-0 mt-10'>
                                        <BlackCard percentage="1.5-2x" text="Faster MVP development" />
                                        <BlackCard percentage="1.5-2.5x" text="Development costs reduction " />
                                        <BlackCard percentage="Over 90%" text="End-user satisfaction" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </section>
    );
}