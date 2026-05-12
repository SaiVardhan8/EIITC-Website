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
        title="Z-Security - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div className="pt-20 text-center my-10">
                <h2 className="inline-block uppercase tracking-wider text-gray-800 font-semibold bg-gray-200 px-2">
                    Z-Security
                </h2>
                <img className="px-6 pt-10 mx-auto" src="/UniOne.png" alt=""  />
            </div>
            
            <div className='text-center'>
                <h2 className="inline-block uppercase text-teal-500 font-semibold px-2 text-xl">Z-Security</h2>
            </div>

            <div className='text-md px-10 space-y-4 py-6 text-grey-500'>
                

                <p>Finally, a comprehensive tool to manage security services—both local and global—has arrived.
ZSecurity is the only app that streamlines your operational security needs. From scheduling and payroll, to monitoring and shift management, we help companies improve efficiency, accuracy, and accountability, so they can concentrate on what they do best: keeping you safe.</p>

                <h2 className="text-xl font-semibold text-teal-500 mt-6 mb-3 italic">
                    <span className="underline">Applications</span>
                </h2>

                <p>In the world of security services, reliability is the bottom line. In fact, it is the only thing that matters. We are proud to have created the first—and only—tool that improves management assurance.</p>

                           </div>

            
            <div className='px-4'>
            <ContactForm />
            </div>
            <Footer />
            </div>
        </section>
    );
}