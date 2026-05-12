'use client';

import { useState } from 'react'; // Not strictly needed for this page, but keeping it if future state is planned
import Image from 'next/image'; // Keeping next/image for better optimization, but will use <img> as in your example for consistency
import Link from 'next/link';
import PageMetadata from '@/components/PageMetaData';

// Assume these components exist at these paths
import TechNavigation from '@/components/TechNavigation'; 
import Footer from '@/components/Footer';

// Define a type for your product items
interface ProductItem {
  title: string; // Changed from 'name' to 'title' to match SolutionsPage
  description: string;
  image: string; // Changed from 'imageSrc' to 'image' to match SolutionsPage
  href: string; // Added href for navigation
}

export default function ProductsPage() {
  const products: ProductItem[] = [
    {
      title: 'EmPortal',
      description: "EmPortal is an employee portal for tracking their tasks and timesheets. EmPortal's objective is to clearly engage associates and projects with their employers. Emportal enables the employer to track each activity of an employee by task vise. It gives overall information about a particular associate like how he/she is doing.",
      image: '/products/emportal.png', // Placeholder, adjust path if needed
      href: '/tech/products/EmPortal',
    },
    {
      title: 'EdVision',
      description: "EdVision is Edvenswa’s innovative asset visualization tool to enable organizations to virtually walk through warehouse floors without physically visiting the facility. Besides offering cost savings, EdVision enables floor managers to zone and organize the floor space efficiently, without any physical movement of products.",
      image: '/products/edvision_new.jpg', // Using the uploaded image as an example
      href: '/tech/products/EdVision',
    },
    {
      title: 'Z Security',
      description: "ZSecurity is the only app that streamlines your operational security needs. From scheduling and payroll, to monitoring and shift management, we help companies improve efficiency, accuracy, and accountability, so they can concentrate on what they do best: keeping you safe.",
      image: '/products/z-security.png', // Placeholder, adjust path if needed
      href: '/tech/products/z-security',
    },
    
    {
      title: 'Scool',
      description: "Scool is Edvenswa’s app for parents and Schools, for managing and tracking the day-to-day pick-up and drop-off schedules and logistics of the children. Scool app works on web, tablets, and mobiles. The web version for the School Staff makes their administration tasks easier, in assigning Students to a Bus/Carpool/Parent’s car, defining a schedule, sending notifications about the changes/delays, etc.",
      image: '/products/scool.png', // Placeholder, adjust path if needed
      href: '/tech/products/scool',
    },
     {
      title: 'ThinkAyurvedaFirst',
      description: "ThinkAyurvedaFirst is an integrated platform for managing Ayurvedic healthcare services, focusing on patient care, treatment tracking, and holistic health management.",
      image: '/products/thinkayurveda.png', // Placeholder, adjust path if needed
      href: '/tech/products/ThinkAyurvedaFirst',
    },
  ];

  // No activeTab state needed for this page layout unless you plan to add tabs later
  // const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="min-h-screen bg-white text-black">
      <PageMetadata 
        title="Products - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
      <TechNavigation />

      {/* Header Section - Replicated from SolutionsPage */}
      <div className="text-center py-12 px-4">
        <h2 className="text-teal-600 text-xl font-semibold italic">Products</h2>
        <p className="mt-4 text-lg font-semibold">
          Edvenswa’s software products are a suite of products addressing the productivity and time management challenges in a typical enterprise that has distributed workforce. Offered as both the on-premise and Cloud models, our products help enterprises achieve high resource productivity in various scenarios – be it in meeting complex compliances, in software engineering or in employee learning and training management.
        </p>
        <div className="w-16 h-1 bg-red-500 mx-auto my-6"></div>
      </div>

      {/* Product Grid Section - Using full width and capped at 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
            {/* Using Link to make the entire card clickable and navigate */}
            <Link href={product.href}>
              {/* Using <img> tag as in your Solutions example, but consider next/image for production */}
               <div style={{ minHeight:'170px' }}>
              <img src={product.image} alt={product.title} className="mx-auto block"   style={{ maxHeight:"200px"}}/>
               </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-gray-700">
                  {product.description.length > 100
                    ? `${product.description.slice(0, 100)}...`
                    : product.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}