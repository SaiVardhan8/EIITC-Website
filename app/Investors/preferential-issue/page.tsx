'use client'

import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import PageMetadata from '@/components/PageMetaData';
import { useEffect, useState } from 'react';

interface Documents {
  id: string;
  doc_uuid: string;
  doc_title: string;
  doc_full_url: string;
  created_at: string;
  doc_type: string;
}

const AnnualReports = () => {
  const [documents, setDocuments] = useState<Documents[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // const response = await fetch("/api/documents",{ "doc_type":"announcements"});
        const response = await fetch("/api/documents", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            doc_type: "preferential_issue"
          })
        });
        const data = await response.json();

        // Ensure the response is an array
        if (Array.isArray(data)) {
          setDocuments(data);
          console.log("Fetched blog posts:", JSON.stringify(data));
        } else {
          console.error("Invalid data format: Expected an array");
          setDocuments([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setDocuments([]); // Fallback to an empty array in case of error
      }
    };

    fetchBlogs();
  }, []);

  console.log(documents);

  return (
    <div className="min-h-screen bg-white">
      <TechNavigation />
      <PageMetadata 
        title="Preferential Issues - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
       <div className="flex flex-col items-center justify-center text-center m-10">
  
        <h1 className="text-4xl font-bold text-teal-600 mb-4">Preferential Issue</h1>
        <h3 className=" text-left mb-5 font-bold text-[18px] mb-5">Preferential Issue - Edvenswa Enterprises Limited</h3>
      
        <div className="grid grid-cols-1 gap-8">
            <ul>
              {documents.map((document) => (

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
      
      <Footer />
    </div>
  );
};

export default AnnualReports;
