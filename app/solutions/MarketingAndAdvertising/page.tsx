"use client"
import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import {ServiceCard} from '@/components/Card';
import BlackCard from '@/components/BlackCard';
import { CircleCheck } from 'lucide-react';
import PageMetadata from '@/components/PageMetaData';

export default function Marketing() {
    return (
        <section>
            <TechNavigation />
            <PageMetadata 
        title="Marketing-And-Advertisement - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div>


 <div className="relative w-full h-[60vh] md:h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-[32%] pt-20 px-4 md:pl-8">
            <p className="text-3xl md:text-5xl font-bold">Custom Marketing Software Development​</p>
            <p className="pt-5 text-base md:text-lg font-normal">Custom marketing software development is the service for all companies aiming to enhance their marketing initiatives. We develop software applications with advanced functionality to help enterprises improve efficiency of their marketing plans and enable them with proper software</p>
            
            <Link href="/tech/contact-us" className="inline-block bg-teal-500 text-white px-4 py-2 rounded text-sm md:text-base">
              Get in touch
            </Link>
          </div>
          {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/marketing and advertisement.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
        </div>






            <div className="min-h-screen bg-gray-50">
            

            {/* Main Content */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
                    Software That Drives Markets
                </h2>

                <div className="space-y-8">
                    {/* Trade promotion Management Software */}
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <div className="flex items-start space-x-6">
                        <div className="bg-teal-100 p-4 rounded-lg">
                        <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Trade promotion Management Software
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Trade promotion management (TPM) applications enable you to achieve growth for your brand by
                        </p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Planning promotion campaigns and forecasting sales volume
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Connecting how the commitments to retailers are executed
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Reviewing the campaign results including the amount of shipped goods and promotion costs
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Analyzing sales based on the data from the consumer research company and retailers
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    {/* Advertising Planning */}
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <div className="flex items-start space-x-6">
                        <div className="bg-teal-100 p-4 rounded-lg">
                        <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Advertising Planning
                        </h3>
                        <p className="text-gray-600">
                            Analyze and plan all advertising across multiple media channels such as TV, Internet, radio, content stores and out of home commercials. Combine all the media types in one plan to find the optimal advertising strategy tailored to your needs. Enjoy comprehensive visualized reports reduced from sophisticated mathematical models on a single platform.
                        </p>
                        </div>
                    </div>
                    </div>

                    {/* Social Marketing Solutions */}
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <div className="flex items-start space-x-6">
                        <div className="bg-teal-100 p-4 rounded-lg">
                        <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Social Marketing Solutions
                        </h3>
                        <p className="text-gray-600 mb-6">
                            We develop marketing software to help you turn social networks into a customer acquisition tool
                        </p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Social marketing applications
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Social analytics to track user activity and prepare analytical reports
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Campaign applications integrated with social networks
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    {/* Loyalty Software */}
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <div className="flex items-start space-x-6">
                        <div className="bg-teal-100 p-4 rounded-lg">
                        <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Loyalty Software
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Ensure more loyal relationships with your clients by tracking and analyzing what makes them satisfied
                        </p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Customer account management: build prospect interest through personalized offers and track the purchase history, promotion response and more
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Mobile loyalty applications: personalize promotions and provide relevant product information, both in store and at home
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Analytics and reporting: analyze promotions impact and loyalty program ROI, track trends in customer behavior and forecast sales
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    {/* Marketing Data Analysis */}
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <div className="flex items-start space-x-6">
                        <div className="bg-teal-100 p-4 rounded-lg">
                        <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Marketing Data Analysis
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Make smarter marketing decisions thanks to
                        </p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Consumer survey analysis: collecting and processing survey data to uncover the real drivers of consumer behavior
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Marketing campaign analysis: tracking key campaign metrics and monitoring overall performance
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Sales analysis: processing and linking data to estimate growth potential as well as optimize sales and marketing activities
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Data warehouse (DWH) implementation
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Online analytical processing (OLAP): cubes, reporting and visualization
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Predictive analytics
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    {/* Real-time Bidding in Online Advertisement */}
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <div className="flex items-start space-x-6">
                        <div className="bg-teal-100 p-4 rounded-lg">
                        <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Real-time Bidding in Online Advertisement
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Leverage cost-efficient and optimized ad campaigns with the help of RTB systems or its key components
                        </p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Demand side platforms (DSPs)
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Supply side platforms (SSPs)
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Data management platforms (DMPs)
                            </li>
                            <li className="flex items-start">
                            <span className="text-teal-500 mr-3">•</span>
                            Analytics
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
            <Footer />
            </div>
        </section>
    );
}