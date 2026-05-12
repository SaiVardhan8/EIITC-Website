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
        title="scool - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div className="pt-20 text-center my-10">
                <h2 className="inline-block uppercase tracking-wider text-gray-800 font-semibold bg-gray-200 px-2">
                    Scool
                </h2>
                <img className="px-6 pt-10" src="/product-school-lVTtqIY6pL0-unsplash-2048x551.jpg" alt="" />
            </div>

            <div className='text-center'>
                <h2 className="inline-block uppercase text-teal-500 font-semibold px-2 text-xl">Scool</h2>
            </div>

            <div className='text-md px-10 space-y-4 py-6 text-grey-500'>
                <p>Scool is Edvenswa’s app for parents and Schools, for managing and tracking the day-to-day pick-up and drop-off schedules and logistics of the children. 
                    Scool app works on web, tablets, and mobiles.</p>

                <p>The web version for the School Staff makes their administration tasks easier, in assigning Students to a Bus/Carpool/Parent’s car, defining a schedule, 
                    sending notifications about the changes/delays, etc.</p>

                <p>Tablet version is intended for Teachers/Staff of the School, to complete the boarding of children into the correct Bus, Car-pools. 
                    Teacher/Staff will also be able to scan QR code card held by the Student to identify the student. 
                    Mobile App for the Parents – To update their preference, receive notifications about changes/delays/, etc.</p>

                <h2 className="text-xl font-semibold text-teal-500 mt-6 mb-3 italic">
                    <span className="underline">Applications</span>
                </h2>
                <p>Typically, Scool can be deployed in all schools, to manage the routes, schedules and day-to-day pick-up and drop-off of school children. 
                    The application provides push-notifications, emailing of daily schedules and automatic reporting of the daily schedules and statuses.</p>

                <h2 className="text-xl font-semibold text-teal-500 mt-6 mb-3 italic"><span className="underline">Tools & Software Systems</span></h2>
                <p>Developed using the modern technology stack – Ionic, MongoDB, Node.js and AngularJS etc., the system can be integrated with</p>

                <ul className="list-none space-y-3 px-0 pb-10">
                    <li className="flex items-start">
                        <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                        &gt;
                        </div>
                        <span>Smart IDs, RFIDs</span>
                    </li>
                    <li className="flex items-start">
                        <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                        &gt;
                        </div>
                        <span>Biometrics & Facial Recognition Systems</span>
                    </li>
                    <li className="flex items-start">
                        <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                        &gt;
                        </div>
                        <span>School Information and Management system</span>
                    </li>
                    <li className="flex items-start">
                        <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                        &gt;
                        </div>
                        <span>Transportation and Logistics systems</span>
                    </li>
                    <li className="flex items-start">
                        <div className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-sm font-bold">
                        &gt;
                        </div>
                        <span>GPS</span>
                    </li>
                </ul>
            </div>
            <div className='px-4'>
                <ContactForm />
            </div>
            <Footer />
            </div>
        </section>
    );
}