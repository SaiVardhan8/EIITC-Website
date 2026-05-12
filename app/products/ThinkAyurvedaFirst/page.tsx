"use client"
import React from 'react';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import PageMetadata from '@/components/PageMetaData';
import Image from 'next/image';

export default function ThinkAyurveda() {
    return (
        <section>
            <TechNavigation />
            <div>
                <PageMetadata 
        title="ThinkAyurvedaFirst - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div className="pt-20 text-center my-10">
                <h2 className="inline-block uppercase tracking-wider text-gray-800 font-semibold bg-gray-200 px-2">
                ThinkAyurvedaFirst
                </h2>
            </div>
            <div className="w-full h-64 md:h-96 relative bg-gray-200">
        <Image 
          src="/ThinkAyurvedaFirst.jpg" 
          alt="Edvenswa Team in Office" 
          layout="fill" 
          objectFit="cover"
          priority
        />
        
      </div>
            <div className='text-md px-10 space-y-4 py-6 text-grey-500'>
                <p>ThinkAyurvedaFirst is an integrated platform for managing Ayurvedic healthcare services, focusing on patient care, treatment tracking, and holistic health management.</p>

                <p>ThinkAyurvedaFirst's objective is to provide a comprehensive solution for tracking patient treatments, managing consultations, and ensuring that every aspect of Ayurvedic care is properly documented and analyzed. It offers a seamless experience for both healthcare providers and patients, ensuring consistent, personalized, and high-quality treatments.</p>

                <p>With ThinkAyurvedaFirst, healthcare providers can easily manage patient profiles, track prescriptions, monitor treatment progress, and schedule follow-ups. The system allows practitioners to customize treatment plans based on Ayurvedic principles while maintaining a patient-centric approach.</p>

                <h2 className="text-xl font-semibold text-teal-500 mt-6 mb-3 italic">
                    <span className="underline">Applications</span>
                </h2>

                <p>ThinkAyurvedaFirst is a health management platform specifically designed for Ayurvedic clinics and hospitals. It can be used for Patient Care Management, Herbal Medicine Tracking, Consultation Scheduling, Inventory Management, Billing & Payments</p>

                <h2 className="text-xl font-semibold text-teal-500 mt-6 mb-3 italic"><span className="underline">Tools & Software Systems</span></h2>

                <p>Developed using a modern technology stack, ThinkAyurvedaFirst is built on technologies –  React.js,  Node.js and Express MongoDB  the system can be integrated with</p>
            </div>

            <ul className="list-none space-y-3 px-10 pb-10">
                <li className="flex items-start">
                    <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                    &gt;
                    </div>
                    <span>Health Management Systems (HMS)</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                    &gt;
                    </div>
                    <span>Human Resource Management (HRM) Systems</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                    &gt;
                    </div>
                    <span>Inventory and Pharmacy Management Systems</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                    &gt;
                    </div>
                    <span>Billing and Payment Systems</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                    &gt;
                    </div>
                    <span>Electronic Health Records (EHR) Systems</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                    &gt;
                    </div>
                    <span> Supply Chain Management (SCM)</span>
                </li>
               
            </ul>
            <div className='px-4'>
                <ContactForm />
            </div>
            <Footer />
            </div>
        </section>
    );
}