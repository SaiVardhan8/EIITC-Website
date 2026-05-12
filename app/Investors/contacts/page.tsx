import React from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import PageMetadata from '@/components/PageMetaData';
export default function Investors() {
  return (
    <section>
      <TechNavigation />
      <PageMetadata 
        title="Contacts - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-[#00A99D] mb-8">Edvenswa Contacts</h1>
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Edvenswa Enterprises Limited,</h2>
            <p className="text-gray-700">(Formerly known as KLK Electrical Limited)</p>
            <p className="text-gray-700">IQ 3-A2, First Floor,</p>
            <p className="text-gray-700">Cyber Towers, Hitech City, Madhapur, Shaikpet,</p>
            <p className="text-gray-700">Hyderabad, Telangana, 500081,</p>
            <p className="text-gray-700">India.</p>
          </div>
          
          <div className="mb-6">
            <p className="mb-2">
              <span className="font-bold">Compliance Officer:</span> Mrs. HimaBindu Dulipala
            </p>
          </div>
          
          <div className="mb-6">
            <p className="mb-2">
              <span className="font-bold">Phone:</span> +91 91000 52964
            </p>
          </div>
          
          <div className="mb-6">
            <p className="mb-2">
              <span className="font-bold">E-mail:</span> ir@edvenswaenterprises.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}