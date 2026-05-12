'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for internal navigation, though not strictly needed for external PDFs
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
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
export default function RightsIssue() {
const [rightsissue, Setrightsissue] = useState<Documents[]>([]);
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
            doc_type: "right_issue"
          })
        });
        const data = await response.json();

        // Ensure the response is an array
        if (Array.isArray(data)) {
          Setrightsissue(data);
          console.log("Fetched blog posts:", JSON.stringify(data));
        } else {
          console.error("Invalid data format: Expected an array");
          Setrightsissue([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        Setrightsissue([]); // Fallback to an empty array in case of error
      }
    };

    fetchdocs();
  }, []);
  return (
    <section>
      <TechNavigation />
      <PageMetadata 
        title="Rights Issuse - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
      <div className="clearfix custom-styles">
        {/* The "end section" comment from your WordPress code */}
        {/* <div class="end section"></div> */}

        <div className="flex flex-col items-center justify-center text-center m-10">
          <h3 className="text-3xl font-bold text-[#00A99D] text-center mb-8">Rights Issue</h3>
        </div>

        <div className="flex flex-col items-center justify-center text-center m-10">
          <h3 className="font-semibold" style={{ fontSize: '18px', marginBottom: '20px' }}>Rights Issue - Edvenswa Enterprises Limited</h3>


          <div className="grid grid-cols-1 gap-8">
            <ul>
              {rightsissue.map((document) => (

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
</div></div>
      <Footer />
    </section>
  );
}