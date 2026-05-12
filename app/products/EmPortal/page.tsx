"use client"
import React from 'react';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import PageMetadata from '@/components/PageMetaData';

export default function newsroom() {
    return (
        <section>
            <TechNavigation />
            <div>
                <PageMetadata 
        title="EmPortal - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div className="pt-20 text-center my-10">
                <h2 className="inline-block uppercase tracking-wider text-gray-800 font-semibold bg-gray-200 px-2">
                    EmPortal
                </h2>
                <img className="px-6 pt-10 mx-auto" src="/Emportal.png" alt="" />
            </div>

            <div className='text-center'>
                <h2 className="inline-block uppercase text-teal-500 font-semibold px-2 text-xl">EmPortal</h2>
            </div>

            <div className='text-md px-10 space-y-4 py-6 text-grey-500'>
                <p>EmPortal is an employee portal for tracking their tasks and timesheets.</p>

                <p>EmPortal&apos;s objective is to clearly engage associates and projects with their employers. 
                    Emportal enables the employer to track each activity of an employee by task vise. 
                    It gives overall information about a particular associate like how he/she is doing.</p>

                <p>With EmPortal, enterprise clients will have the ability to set up – company profile, locations, roles, task categories, and checklists. 
                    Enterprise role hierarchy can be maintained while assigning the tasks.</p>

                <h2 className="text-xl font-semibold text-teal-500 mt-6 mb-3 italic">
                    <span className="underline">Applications</span>
                </h2>

                <p>EmPortal is a task and time management application that can be deployed for workforce management, project team management, billing in services industries and so on.</p>

                <h2 className="text-xl font-semibold text-teal-500 mt-6 mb-3 italic"><span className="underline">Tools & Software Systems</span></h2>

                <p>Developed using the modern technology stack – Ionic, MongoDB, Node.js and AngularJS etc., the system can be integrated with</p>
            </div>

            <ul className="list-none space-y-3 px-10 pb-10">
                <li className="flex items-start">
                    <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                    &gt;
                    </div>
                    <span>Software Engineering – Project resource utilization</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                    &gt;
                    </div>
                    <span>Human Resource Management (HRM)</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                    &gt;
                    </div>
                    <span>Customer Support</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                    &gt;
                    </div>
                    <span>Compliance management</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                    &gt;
                    </div>
                    <span>Labor Management Systems (LMS)</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                    &gt;
                    </div>
                    <span>Warehouse Management Systems (WMS)</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                    &gt;
                    </div>
                    <span>Supply Chain and Logistics Management Systems (SCM)</span>
                </li>
            </ul>
            <div className='px-4'>
                <ContactForm/>
            </div>
            <Footer />
            </div>
        </section>
    );
}