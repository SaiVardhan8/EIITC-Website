"use client"
import React from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import {ServiceCard} from '@/components/Card';
import { CircleCheck} from 'lucide-react';
import { useEffect, useState } from 'react';
import Records from '@/components/ExpandableSectionNestedArrays';
import PageMetadata from '@/components/PageMetaData';


const LogoSlider = () => {
  const logos = [
    { src: "/logos/hewlett-packard-enterprise-silver-partner-vector-logo-q6os1sgajydacxw5tchzdzjwpehx8be1kph6dluoe8.png", alt: "Logo 1" },
    { src: "/logos/LenovoBP-POS-color-q6os1sgajydacxw5tchzdzjwpehx8be1kph6dluoe8.png", alt: "Logo 2" },
    { src: "/logos/pngfind.com-registered-logo-png-2230159-q6os1te4qsekojusnuwlyhbdasdag0hrwu4nuvta80.png", alt: "Logo 3" },
    { src: "/logos/cisco.png", alt: "Logo 4" },
    { src: "/logos/Ubiqity.png", alt: "Logo 5" },
    { src: "/logos/Acronis.png", alt: "Logo 6" },
    { src: "/logos/Intel.png", alt: "Logo 7" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 7;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [logos.length]);

  // Create circular window of 5 logos
  const getVisibleLogos = () => {
    const visible: { src: string; alt: string; }[] = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(logos[(startIndex + i) % logos.length]);
    }
    return visible;
  };

  const visibleLogos = getVisibleLogos();

  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center gap-4 transition-all duration-700 ease-in-out">
          {visibleLogos.map((logo, idx) => (
            <div key={idx} className="relative w-28 h-16">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                style={{ objectFit: 'contain' }}
                sizes="20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const testingTypes = [
    {
      id: 0,
      title: "EAM Advisory",
      content: [
        {
          title: "Timeline: 4-8 weeks",
          content: [
            "Analysis of EAM and implementation drivers.",
            "Assessment of the current EAM processes supported by technology (the automation level of the asset-related processes, features in and out of use, integrations, etc.).",
            "EAM solution conceptualization and design.",
            "Selection of a suitable EAM platform, optimal plan/edition selection with the list of needed modules and features, customization and integrations specification (if required).",
            "Custom EAM solution architecture and infrastructure design, tech stack selection, UX and UI design.",
            "EAM solution implementation planning, including cost and time budget estimation, etc."
          ]
        },
        {
            title: "Technical documentation:",
            content: [
              "Asset management solution architecture (for custom solutions).",
              "Off-the-shelf software comparison (if required).",
              "Software & hardware requirements specification (for custom solutions).",
              "Configuration guides (for off-the-shelf software).",
              "Infrastructure design.",
              "UX and UI (re)design (for custom software)."
            ]
          },
          {
            title: "Project documentation:",
            content: [
              "Feasibility study report and business case (asset management solution cost, outcomes, ROI, etc.).",
              "Project plan with budget estimations and technical limitations.",
              "Cost optimization plan.",
              "Risk management plan.",
              "Asset management KPI system to measure asset management software quality and business value."
            ]
          }
      ]
    },
    {
      id: 1,
      title: "EAM Advisory + Implementation & Support",
      content: [
        {
          title: "Timeline: ~2-10 months",
          content: [
            "EAM needs analysis and solution conceptualization.",
            "EAM software architecture design (for custom solutions).",
            "PoC implementation (optional).",
            "EAM software development/customization.",
            "Integration of the EAM solution/solution components into the existing IT ecosystem.",
            "Hardware installation and integration (if applicable).",
            "EAM quality assurance (functional, UI, API testing, etc.).",
            "Data migration.",
            "Deployment to production and user training.",
            "After-launch support and evolution.",
            "SLA-based EAM solution administration, monitoring and maintenance."
          ]
        },
        {
          title: "Deliverables:",
          content: [
            "Infrastructure configurations.",
            "Documented code with unit tests.",
            "API descriptions.",
            "Test documentation.",
            "Automated tests (API and UI tests).",
            "User documentation.",
            "Regular status reports.",
            "Asset management KPI reports with recommendations for their improvement.",
            "Asset management system maintenance reports."
          ]
        }
      ]
    }
  ];
  


export default function Business() {
    return (
        <section>
            <TechNavigation />
            <PageMetadata 
        title="Asset-Management - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div>
            <div className="relative w-full h-[60vh] md:h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-[38%] pt-20 px-4 md:pl-8">
                    <p className="text-3xl md:text-5xl font-bold">Enterprise Asset Management Consulting Services​</p>
                    <p className="pt-5 text-sm md:text-lg font-normal pb-5">
                        Enterprise asset management (EAM) consulting serves to digitalize asset management for maximized ROA. In software development since 2007, Edvenswa designs, develops, implements, and supports EAM solutions for tech-driven asset planning and optimization.
                    </p>
                    <Link href="/tech/contact-us" className="inline-block bg-teal-500 text-white px-4 py-2 rounded text-sm md:text-base">
                        Get in touch
                    </Link>
                </div>
                {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/asset management.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
            </div>

            {/* Service Card Section */}
            <div className="px-4 md:px-10 pb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 pb-5 pt-10">
                    Go-to Functionality Modules and Integrations for EAM Solutions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-16 mt-10">
                    
                <ServiceCard
                    icon={"Search"}
                    title={"Asset Tracking & Monitoring"}
                    services={[
                        "Up to 50% reduced asset downtime.",
                        "Up to 24% asset productivity increase."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"Bolt"} // You can choose a more relevant icon if needed
                    title={"Asset Maintenance Management"}
                    services={[
                        "Up to 25% reduced maintenance costs",
                        "Up to 70% fewer asset breakdowns",
                        "Up to 12% fewer scheduled repairs"
                    ]}
                    desc={null}
                />
                <ServiceCard
                    icon={"CalendarCheck"} // You can change this icon to suit your design
                    title={"Asset Planning & Optimization"}
                    services={[
                        "Up to 21% OEE increase",
                        "Up to 5% reduced capital investment"
                    ]}
                    desc={null}
                />

                </div>
            </div>          

            <div className="flex flex-col px-4 md:px-10">
                <h2 className="text-gray-800 font-bold text-3xl md:text-4xl pb-10">
                    Key Integrations for EAM Software
                </h2>
                <img src="/Asset_management.png" alt="Asset Management" className="w-full max-w-md mx-auto" />
            </div>
            
            {/* Fourth Section */}
            <div className="px-4 md:px-10 pb-10 my-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-5 pt-10">Enterprise Asset Management Investments</h2>
                <h2 className="text-sm md:text-xl text-gray-500 pb-5">
                    The cost and duration of the EAM solutions Edvenswa implements and supports depends on multiple factors, including:
                </h2>
                <div className="pl-4 md:pl-6 pt-2 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500">
                    <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                    <p>Types of assets, their number and growth rate.</p>
                </div>
                <div className="pl-4 md:pl-6 pt-2 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500">
                    <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                    <p>
                        The number and diversity of the functional modules of EAM software. If case-specific functionality is required (e.g., asset condition monitoring, ML-based asset maintenance cost forecasting, real-time object recognition).
                    </p>
                </div>
                <div className="pl-4 md:pl-6 pt-2 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500">
                    <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                    <p>
                    Number and complexity of systems to integrate with (custom and off-the-shelf software, hardware (barcodes, tags, chips, etc.).).</p>
                </div>
                <div className="pl-4 md:pl-6 pt-2 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500">
                    <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                    <p>
                    Complexity of the required asset analytics reports and dashboards.</p>
                </div>
                <div className="pl-4 md:pl-6 pt-2 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500">
                    <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                    <p>
                    Solution availability, performance, security, latent capacity and scalability requirements.</p>
                </div>
                
                <div className="pl-4 md:pl-6 pt-2 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500">
                    <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                    <p>
                    Number of platforms supported (web, mobile, desktop).</p>
                </div>
            <h2 className=" pl-4 text-xl text-gray-500 pb-5 pt-10">Additionally, we are ready to cover end-to-end financial software development / modernization, including its integration with relevant business-critical systems, and provide continuous maintenance and support of the delivered solution.</h2>
                
            </div>

            {/* Service Card Section */}
            <div className="px-4 md:px-10 pb-5">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 pb-5 pt-10">
                    Why Consider Edvenswa as Your EAM Consultant
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-16 mt-10">
                    <ServiceCard
                        icon={"user"}
                        title={"Solid Experience in Advanced Technologies"}
                        services={[
                            "34 years in data analytics, data science, ML and AI.",
                            "18 years in BI solutions and data visualization.",
                            "12 years in IoT (expertise in all components of an asset tracking ecosystem, including IoT data capture, storage and analysis).",
                            "10 years in big data.",
                            "10 years in image analysis, including defect recognition and machine vision-supported remote monitoring."
                          ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={"users"}
                        title={"Strong Team of Consultants"}
                        services={[
                            "25+ business analysts with hands-on experience in manufacturing, logistics, oil & gas, telecom, retail, healthcare, professional services.",
                            "20+ software architects.",
                            "In-house Project Management Office experienced in complex projects on software integration and elaborate enterprise systems, e.g., ERP solutions with 500+ functions."
                          ]}
                        desc={null}
                    />
                    <ServiceCard
                        icon={"Handshake"}
                        title={"Proven Tech Capabilities"}
                        services={[
                            "Partnerships with Microsoft, Amazon, and Oracle.",
                            "ISO 9001 and ISO 27001-certified assuring the quality of the services provided and the security of our customers' data."
                          ]}
                        desc={null}
                    />
                </div>
            </div>

            <div>
                <LogoSlider />
            </div>

            {/* Expandable Section */}
            <div className="pl-0">
                <Records
                    title="Edvenswa's Concept of Application Services"
                    items={testingTypes}
                    defaultExpandedId={0}
                />
            </div>

            <Footer />
            </div>
        </section>
    );
}

