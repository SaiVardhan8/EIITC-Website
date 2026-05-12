'use client';

import { useState } from 'react';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import PageMetadata from '@/components/PageMetaData';
const solutions = [
  {
    title: 'CRM',
    description: 'Since 2008, Edvenswa has been working with CRM systems to build effective and rewarding sales, marketing and customer service processes for our clients.',
    image: "/solutions/CRM.jpg",
    link:"/solutions/CRM",
  },
  {
    title: 'Marketing & Advertisement',
    description: 'Custom marketing software development is the service for all companies aiming to enhance their marketing initiatives. We develop software applications with advanced functionality to help enterprises improve efficiency of their marketing plans and enable them with proper software',
    image: '/solutions/marketing and advertisement.jpg',
    link:"/solutions/MarketingAndAdvertising",
  },
  {
    title: 'Human Resources',
    description: 'Having 16 years of experience in HR software development, Edvenswa provides technical product management consulting, product development, UX and UI design, QA, maintenance and support services to create powerful HR systems that help you increase competitiveness in the SaaS HR software market and reduce product development costs and risks.',
    image: '/solutions/Human Resources.jpg',
    link:"/solutions/HR",
  },
  {
    title: 'E-Learning',
    description: 'Since 16, Edvenswa has been building eLearning solutions that drive digital transformation of corporate learning resulting in human capital ROI growth.',
    image: '/solutions/E-Learning.jpg',
    link:"/solutions/E-Learning",
  },
  {
    title: 'Document Management',
    description: 'Documentation automation software reduces the drafting time of highly formalized documents by employing reusable document templates that leverage conditional logic and connected data sources. And integrates with OCR, DMS, CRM software, etc. The implementation costs of platform-based documentation automation solutions are around $30,000 – $50,000.',
    image: '/solutions/Document management.jpg',
    link:"/solutions/Document-Management",
  },
  {
    title: 'Supply Chain Management',
    description: 'Since 2012, Edvenswa provides companies in 30+ industries with consulting and practical assistance on the design and implementation of reliable supply chain management software.',
    image: '/solutions/supply chain management.jpg',
    link:"/solutions/SupplyChainManagement",
  },
  {
    title: 'Fleet Management',
    description: 'Fleet management software provides visibility into vehicles, location, condition, and fuel consumption and gives insights into drivers, behavior. In fleet management since 2012, Edvenswa delivers dedicated applications to optimize vehicle maintenance, reduce operational costs, and improve driver safety.',
    image: '/solutions/fleet management.jpg',
    link:"/solutions/Fleet-Management",
  },
  {
    title: 'Financial Management',
    description: 'Since 2007, Edvenswa provides companies in 30+ industries with advisory and practical assistance on the design and implementation of reliable financial management software to improve their corporate finance processes.',
    image: '/solutions/Financial Management.jpg',
    link:"/solutions/financial-management",
  },
  {
    title: 'ERP',
    description: 'Edvenswa brings in 16 years of experience in end-to-end ERP development and support to help companies boost the efficiency of their unique business workflows, minimize operational risks, and optimize costs.',
    image: '/solutions/ERP.jpg',
    link:"/solutions/ERP",
  },
  {
    title: 'Operations Management',
    description: 'Digital operations consulting will help you streamline production or service execution and reduce related costs. The services of Edvenswa cover technical design of operations management software and, if required, its implementation and continuous support.',
    image: '/solutions/Operations management.jpg',
    link:"/solutions/OM",
  },
  {
    title: 'Asset Management',
    description: 'Enterprise asset management (EAM) consulting serves to digitalize asset management for maximized ROA. In software development since 2007, Edvenswa designs, develops, implements, and supports EAM solutions for tech-driven asset planning and optimization.',
    image: '/solutions/asset management.jpg',
    link:"/solutions/Asset-Management",
  },
  {
    title: 'Project Management',
    description: 'With 16 years in software development, Edvenswa provides project management consulting and development services for custom project and portfolio management software.',
    image: '/solutions/project management.jpg',
    link:"/solutions/ProjectManagement",
  },
  {
    title: 'Data Analytics',
    description: 'Data analytics implies building an infrastructure for data aggregation, analysis, and reporting. 16 years in data analytics services, Edvenswa delivers tailored business analytics solutions and helps companies plan future actions based on historical insights.',
    image: '/solutions/Data analytics.jpg',
    link:"/solutions/data-analytics",
  },
  {
    title: 'E-Commerce',
    description: 'At its core, digital commerce is selling and buying goods and services online. The market is highly competitive, and businesses need to strive for more and more excellence to stay resilient, even though consumer demand for online shopping is remarkably strong now. Edvenswa brings in technology expertise and a problem-oriented approach to drive positive and tangible changes across your business resulting in cost savings and revenue growth.',
    image: '/solutions/E-commerce.jpg',
    link:"/solutions/E-Commarce",
  },
  {
    title: 'Web Portals',
    description: 'In web portal development since 2007, Edvenswa will diligently study the goals of your future portal and pack the needed functionality into a usable custom web app.',
    image: '/solutions/web portals.jpg',
    link:"/solutions/web-portal",
  },
  {
    title: 'CMS',
    description: 'In CMS development since 16 years, Edvenswa competently delivers custom CMS solutions that combine responsive UI, rich functionality, strong data security, and high scalability.',
    image: '/solutions/CMS.jpg',
    link:"/solutions/CMS",
  },
];

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState('solutions');

  return (
    <div className="min-h-screen bg-white text-black">
      <TechNavigation />
      <PageMetadata 
        title="Solutions - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
      <div className="text-center py-12 px-4">
        <h2 className="text-teal-600 text-xl font-semibold italic">Solutions</h2>
        <p className="mt-4 text-lg font-semibold">
          Our solutions range from data management to decision support in a wide range of verticals – banking and financials,
          healthcare & life sciences, supply chain and logistics, energy, education and environment and so on.
        </p>
        <div className="w-16 h-1 bg-red-500 mx-auto my-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-12">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-64 overflow-hidden">
                <Link href={solution.link}>
                <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-full object-cover object-center"
                /></Link>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
              <p className="text-gray-700">
        {solution.description.length > 100
          ? `${solution.description.slice(0, 100)}...`
          : solution.description}
      </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
