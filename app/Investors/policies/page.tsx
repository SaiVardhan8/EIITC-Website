'use client';

import React from 'react';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import PageMetadata from '@/components/PageMetaData';
import { useState ,useEffect} from 'react';

interface Documents {
  id: string;
  doc_uuid: string;
  doc_title: string;
  doc_full_url: string;
  created_at: string;
  doc_type: string;
}

export default function Policies() {
  const [policies, Setpolicies] = useState<Documents[]>([]);
   useEffect(() => {
      const fetchdocs = async () => {
        try {
          // const response = await fetch("/api/documents",{ "doc_type":"announcements"});
          const response = await fetch("/api/documents", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              doc_type: "policies"
            })
          });
          const data = await response.json();
  
          // Ensure the response is an array
          if (Array.isArray(data)) {
            Setpolicies(data);
            console.log("Fetched blog posts:", JSON.stringify(data));
          } else {
            console.error("Invalid data format: Expected an array");
            Setpolicies([]); // Fallback to an empty array
          }
        } catch (error) {
          console.error("Error fetching blogs:", error);
          Setpolicies([]); // Fallback to an empty array in case of error
        }
      };
  
      fetchdocs();
    }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <TechNavigation />
      <PageMetadata 
        title="Policies - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-teal-600 mb-4">Policies</h1>
        </div>

        {/* Announcements Section */}
        <div className='flex flex-col items-center justify-center text-center m-10'>
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            Edvenswa Policies
          </h3>

          <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ul>
              {policies.map((document) => (

                <div key={document.id}>
                  <li>
                    <a
                      href={document.doc_full_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link1 flex items-center mb-3"
                    >

                      <img
                        style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                        src="/img/pdf.png"
                        alt="PDF Icon"
                      />{' '}
                      {document.doc_title}
                    </a>
                  </li>
                </div>
              ))}
            </ul>
          </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
