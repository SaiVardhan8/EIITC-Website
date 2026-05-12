"use client"
import React from 'react';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import PageMetadata from '@/components/PageMetaData';
import Image from 'next/image';


export default function newsroom() {
    return (
        <section>
            <TechNavigation />
            <div>
                <PageMetadata 
        title="EdVision - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div className="pt-20 text-center my-10">
                <h2 className="inline-block uppercase tracking-wider text-gray-800 font-semibold bg-gray-200 px-2">
                    EdVision
                </h2>
            </div>
            <div className="w-full h-64 md:h-96 relative bg-gray-200">
        <Image 
          src="/edvision_banner.jpg" 
          alt="Edvenswa Team in Office" 
          layout="fill" 
          objectFit="cover"
          priority
        />
        
      </div>

            <div className='text-md px-10 space-y-4 py-6 text-grey-500'>
                <h2 className="text-xl font-semibold text-teal-500 mt-6 mb-3 italic">
                    <span className="underline">Walk through your Warehouse right from your chair</span>
                </h2>

                <p>
                    EdVision is Edvenswa’s innovative asset visualization tool to enable organizations to virtually walk through warehouse floors without physically visiting the facility. 
                    Besides offering cost savings, EdVision enables floor managers to zone and organize the floor space efficiently, without any physical movement of products.
                </p>

                <h2 className="text-xl font-semibold text-teal-500 mt-6 mb-3 italic">
                    <span className="underline">Build Warehouse model in minutes</span>
                </h2>
                <p>With minimal configuration settings, build a custom warehouse layout complete with rack and other specifications, which represents your warehouse.</p>

                <h2 className="text-xl font-semibold text-teal-500 mt-6 mb-3 italic">
                    <span className="underline">Real-time Inventory</span>
                </h2>
                <p>Our plug and play web services-based integration model enables integration with any proprietary warehouse management system for real-time inventory display, colour coded to uniquely represent each client in the visual layout.</p>

                <h2 className="text-xl font-semibold text-teal-500 mt-6 mb-3 italic">
                    <span className="underline">Search</span>
                </h2>
                <p>Search inventory by various attributes such as product name, customer, location, product date, expiry etc., to generate a partial view of warehouse, without the distraction of other products in the same location, for analysis.</p>
            </div>
            <div className='px-4'>
                <ContactForm />
            </div>
            <Footer />
            </div>
        </section>
    );
}