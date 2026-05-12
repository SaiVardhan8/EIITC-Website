'use client'
import PageMetadata from '@/components/PageMetaData';
import { useState } from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';

const BoardOfDirectorsPage = () => {
  const [activeTab, setActiveTab] = useState('board-of-directors');

  const leftTabs = [
    { id: 'board-of-directors', name: 'Board of Directors', active: true },
    { id: 'audit-committee', name: 'Audit Committee' },
    { id: 'stakeholders-committee', name: 'Stakeholders Relationship Committee' },
    { id: 'nomination-remuneration-committee', name: 'Nomination & Remuneration Committee' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TechNavigation />
      <PageMetadata 
        title="Board Of Directors - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-teal-600 mb-4">Edvenswa Board of Directors</h1>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar with Tabs */}
          <div className="md:w-80 w-full">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {leftTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-6 py-4 border-b border-gray-200 transition-colors ${
                    activeTab === tab.id
                      ? 'bg-teal-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium">{tab.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              {/* Board of Directors Content */}
              {activeTab === 'board-of-directors' && (
                <div>
                  <div className="mb-8">
                    <h2 className="font-bold text-gray-900 mb-2">
                      1. Chairman And Managing Director - Mr. Sreenivasa Sreekanth Uppuluri
                    </h2>
                    <div className="text-gray-700 leading-relaxed">
                      Mr. Sreenivasa Sreekanth Uppuluri is a Promoter, Executive Chairman, and Managing Director of our Company. He is a graduate in Bachelor of Science (Engineering) from the Regional Institute of Technology, Jamshedpur (currently known as National Institute of Technology, Jamshedpur). He has more than two decades of experience in the field of Software Project Management and Solution Architecture. He is a co-founder of Virinchi Limited, Edvenswa Consultancy Services, and Edvenswa Tech. He was also a Principal Incubation lead at the business Innovation center for Konica Minolta in Bay Area, USA. He is a Co-Founder and Vice President of Lucid Act Health and Incub 8 ventures.
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="font-bold text-gray-900 mb-2">
                      2. Independent Director - Mr. Ravikanth Andhavarapu
                    </h2>
                    <div className="text-gray-700 leading-relaxed">
                      Mr. Ravikanth Andhavarapu is a graduate from Indian Institute of Technology, Madras. He possesses over two decades of experience in the IT Sector. He was Project lead for the aerial vehicle built in IIT Madras, where he started his Aeromodelling Club. He was Team Leader for the first team of IIT Madras which participated in the International Aerial Robotics. Currently, along with being associated with our Company as an independent director, he is Head of Strategy in Biliti Electric India Private Limited.
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="font-bold text-gray-900 mb-2">
                      3. Independent Director - Mrs. Srivani Nandiraju
                    </h2>
                    <div className="text-gray-700 leading-relaxed">
                      Mrs. Srivani Nandiraju has a Master’s Degree in Business Administration with significant executive leadership experience in business, philanthropy, and the non-profit sector.
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="font-bold text-gray-900 mb-2">
                      4. Independent Director - Mr. Garimella Jayachand
                    </h2>
                    <div className="text-gray-700 leading-relaxed">
                      Mr. Garimella Jayachand is a graduate in B.Tech (Civil), from REC Jamshedpur, Ranchi University. He has more than sixteen years of experience in the IT industry. His area of expertise includes technologies like Agile, Scrum, Java, Microservices, and AS/400.
                    </div>
                  </div>
                </div>
              )}

              {/* Audit Committee Content */}
              {activeTab === 'audit-committee' && (
                <div>
                  <div className="mb-8">
                    <h2 className="font-bold mb-4">Audit Committee</h2>
                    <p className="text-gray-900 mb-2">Mr. A. Ravikanth - Independent Director (Chairman)</p>
                    <p className="text-gray-900 mb-2">Mr. Jayachand - Independent Director (Member)</p>
                    <p className="text-gray-900 mb-2">Mr. Sreenivasa Sreekanth Uppuluri - Chairman And Managing Director (Member)</p>
                  </div>
                </div>
              )}

              {/* Other Committees */}
              {activeTab === 'stakeholders-committee' && (
                <div>
                  <div className="mb-8">
                    <h2 className="font-bold mb-4">Stakeholders Relationship Committee</h2>
                    <p className="text-gray-900 mb-2">Mr. A. Ravikanth - Independent Director (Chairman)</p>
                    <p className="text-gray-900 mb-2">Mr. Jayachand - Independent Director (Member)</p>
                    <p className="text-gray-900 mb-2">Mr. Sreenivasa Sreekanth Uppuluri - Chairman And Managing Director (Member)</p>
                  </div>
                </div>
              )}

              {activeTab === 'nomination-remuneration-committee' && (
                <div>
                  <div className="mb-8">
                    <h2 className="font-bold mb-4">Nomination & Remuneration Committee</h2>
                    <p className="text-gray-900 mb-2">Mr. Jayachand - Independent Director (Chairman)</p>
                    <p className="text-gray-900 mb-2">Mr. A. Ravikanth - Independent Director (Member)</p>
                    <p className="text-gray-900 mb-2">Mrs. Srivani Nandiraju - Independent Director (Member)</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BoardOfDirectorsPage;
