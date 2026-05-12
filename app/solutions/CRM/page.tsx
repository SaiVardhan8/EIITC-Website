"use client"
import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import { ServiceCard } from '@/components/Card';
import BlackCard from '@/components/BlackCard';
import { CircleCheck } from 'lucide-react';
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
            <div key={idx} className="relative w-20 h-12 md:w-28 md:h-16">
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

export default function Business() {
  return (
    <section>
      <TechNavigation />
      <PageMetadata 
        title="CRM - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
      <div>
        <div className="relative w-full h-[60vh] md:h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-[32%] pt-20 px-4 md:pl-8">
            <p className="text-3xl md:text-5xl font-bold">CRM Services​</p>
            <p className="pt-5 text-base md:text-lg font-normal">Get All the Help to Serve Your Customers in the Best Way</p>
            <p className="pt-8 pb-8 text-sm md:text-md font-normal text-teal">
              Since 2008, Edvenswa has been working with CRM systems to build effective and rewarding sales, marketing and customer service processes for our clients.
            </p>
            <Link href="/tech/contact-us" className="inline-block bg-teal-500 text-white px-4 py-2 rounded text-sm md:text-base">
              Get in touch
            </Link>
          </div>
          {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/CRM.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
        </div>

        <div className="px-4 pt-10">
          <p className="pt-5 text-2xl md:text-4xl font-normal">All-Round Assistance for Your CRM Goals</p>
          <p className="pt-5 text-sm md:text-xl text-gray-500">
            CRM services are aimed to power marketing, sales and customer service processes with advanced automation functions. Our assistance may take place at any stage of your project.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            <ServiceCard
              icon={"User"}
              title={"CRM Consulting"}
              services={["CRM strategy consulting: design of marketing, sales and customer service digital tools that will help your team build positive relations with customers.",
                "CRM project consulting: a strategy for your CRM implementation, revamp, migration or consolidation"]}
              iconColor={"text-teal-500"}
              desc={null}
            />
            <ServiceCard
              icon={"Settings"}
              title={"CRM Implementation"}
              services={["End-to-end CRM implementation, leveraging the capabilities of market-leading CRM platforms.",
                "We cover the entire project scope, including requirements engineering, CRM configuration and customization, and its further inbound and outbound integrations."]}
              desc={null}
            />
            <ServiceCard
              icon={"SlidersHorizontal"}
              title={"Custom CRM Development"}
              services={["CRM development from scratch: designing custom workflows, building functional modules and connecting them into a coherent CRM system.",
                "Development of custom apps and add-ons for platform-based CRM."]}
              desc={null}
            />
            <ServiceCard
              icon={"Database"}
              title={"CRM Migration​"}
              services={["We analyze the bottlenecks you see in your current CRM and plan the migration strategy to achieve higher process efficiency, better usability, and lower ownership cost.",
                "We take care of an end-to-end migration process from building a new CRM to accurately transferring your historical data."]}
              desc={null}
            />
            <ServiceCard
              icon={"Bug"}
              title={"CRM Testing"}
              services={["Includes functional, integration, performance, usability, and security testing.",
                "Our testing services are aimed at providing you with insights on your CRM functioning and identifying the ways to better your existing solution."]}
              desc={null}
            />
            <ServiceCard
              icon={"UserRoundCheck"}
              title={"CRM Support & Evolution"}
              services={["Administration support, including daily administration, data administration, 24/7 CRM system monitoring, monthly system health checks and user help desk.",
                "Development support, including troubleshooting and CRM system evolution."]}
              desc={null}
            />
          </div>
        </div>

        <div className="px-4 pt-10 mt-10">
          <p className="text-3xl md:text-5xl font-medium text-teal-500">Impressive Results of Companies Working with a Professional CRM</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            <BlackCard percentage="-70%" text="In manual effort across sales, marketing, and customer service" />
            <BlackCard percentage="+30%" text="In sales productivity" />
            <BlackCard percentage="-25%" text="In customer service ticket volume" />
            <BlackCard percentage="+30%" text="In lead volume" />
            <BlackCard percentage="+60%" text="In lead conversion rate" />
            <BlackCard percentage="+50%" text="In customer retention" />
          </div>
        </div>

        <div className="px-4 pt-10 my-10">
          <p className="text-xl md:text-2xl font-medium">Take a Moment to Know Edvenswa Better</p>
          <div className="pl-4 md:pl-6 pt-8 flex flex-col gap-4 text-sm md:text-xl font-medium text-gray-500">
            <div className="flex items-start gap-4">
              <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
              <p>Our company was founded in 2007 by a group of visionaries and has grown to a team of 750+ intelligent, hardworking and ambitious IT experts.</p>
            </div>
            <div className="flex items-start gap-4">
              <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
              <p>In 2008, we successfully completed our first CRM project and got really captured by the width of functional capabilities that CRM systems may offer and business impact they may have.</p>
            </div>
            <div className="flex items-start gap-4">
              <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
              <p>To date, our CRM team has helped 40+ companies from diverse business verticals set up effective software for customer relationship management. Among business spheres, we have clients from banking, healthcare, media, logistics, and retail.</p>
            </div>
            <div className="flex items-start gap-4">
              <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
              <p>We’ve been working with the most robust CRM platforms and earned the partnership status with Salesforce and Microsoft.</p>
            </div>
            <div className="flex items-start gap-4">
              <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
              <p>We follow a quality-first approach based on a mature ISO 9001-certified quality management system.</p>
            </div>
            <div className="flex items-start gap-4">
              <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
              <p>We rely on ISO 27001-certified security management and guarantee the security of your business and customer data, also in strictly regulated industries.</p>
            </div>
          </div>
        </div>

        <div className="pt-10 mx-auto max-w-7xl">
          <LogoSlider />
        </div>

        <div className="px-4 pt-10 my-10">
          <p className="text-2xl md:text-4xl font-bold">Core Technologies We Use in CRM Projects</p>
          <img className="w-full md:px-6 pt-4" src="/logos/usedTechnologies.png" alt="technologies" />
        </div>
        <Footer />
      </div>
    </section>
  );
}