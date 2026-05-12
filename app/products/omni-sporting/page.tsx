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
        title="omni-sporting - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
                <div className="pt-20 text-center my-10">
                    <h2 className="inline-block uppercase tracking-wider text-gray-800 font-semibold bg-gray-200 px-2">
                        Omni Sporting
                    </h2>
                    <img className="px-6 pt-10 w-full" src="/Omni.png" alt="" />
                </div>

                <div className='text-md px-10 space-y-4 py-6 text-grey-500'>
                    <div className='text-center'>
                        <h2 className="inline-block text-teal-500 font-semibold px-2 text-xl">Omni Sporting</h2>
                    </div>
                    <p>
                        Omni Sporting is the online sporting platform developed by Edvenswa for conducting sporting events and collaborating online.
                    </p>

                    <p>Omni Sporting is a unique collaborative platform for sports enthusiasts, sponsors who want to participate, manage sporting events – for indoor and outdoor sports. 
                        In a way, it is the social media of sports. The platform enables individuals to register for a different type of sports of their interest. Independently, sponsors 
                        and managers can start a sporting event and invite the interested members to participate.</p>
                    
                    <p>
                        Native platforms such as iOS, Android and Microsoft Windows phones as well as cross-platform such as Ionic and Xamarin.
                    </p>

                    <h2 className="text-xl font-semibold text-teal-500 mt-6 mb-3 italic">
                        <span className="underline">Applications</span>
                    </h2>
                    <ul className="space-y-3 px-10 pb-5">
                        <li className="flex items-start">
                            <span>Indoor Sports events</span>
                        </li>
                        <li className="flex items-start">
                            <span>Outdoor Sports events</span>
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold text-teal-500 mt-6 mb-3 italic">
                        <span className="underline">Software Systems & Integration</span>
                    </h2>
                    <ul className="space-y-3 px-10 pb-5">
                        <li className="flex items-start">
                            <span>Omni Sporting platform can integrate with e-commerce sites and payment systems to target merchandise sales to the participants.</span>
                        </li>
                    </ul>
                    <p>The platform can also be integrated with the backend, ERP systems of Suppliers of sports items.</p>
                </div>
            <div className='px-4'>
                <ContactForm />
            </div>
            <Footer />
            </div>
        </section>
    );
}