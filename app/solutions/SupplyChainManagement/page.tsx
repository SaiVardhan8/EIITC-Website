"use client"
import React from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import { ServiceCard } from '@/components/Card';
import { CircleCheck } from 'lucide-react';
import PageMetadata from '@/components/PageMetaData';


export default function Business() {
    return (
        <section>
            <TechNavigation />
            <PageMetadata 
        title="Supply-Chain-Management - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div>
                {/* Hero Section */}
                <div className="relative w-full h-[60vh] md:h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-[40%] pt-20 px-4 md:pl-8">
                        <p className="text-3xl md:text-5xl font-bold">Supply Chain Software Development Services​</p>
                        <p className="pt-5 text-base md:text-lg font-normal">Upgrade Your Unique SCM Processes</p>
                        <p className="pt-8 pb-8 text-sm md:text-md font-normal text-teal">
                            Since 2012, Edvenswa provides companies in 30+ industries with consulting and practical assistance on the design and implementation of reliable supply chain management software.
                        </p>
                        <Link href="/tech/contact-us" className="inline-block bg-teal-500 text-white px-4 py-2 rounded text-sm md:text-base">
                            Get in touch
                        </Link>
                    </div>
                    {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/supply chain management.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
                </div>

                <div className="px-4 md:px-10 py-6">
                    <h2 className="text-lg md:text-xl font-bold text-gray-500 pb-5">Supply Chain software development aims to help companies drive improvements across their processes and innovate their business operations with the help of effective software and Supply Chain 4.0 techs: IoT, AI, big data, blockchain, AR and VR.</h2>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-5">Benefits of Digital Supply Chain Management</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                        <ServiceCard
                            icon={"Star"}
                            title={"Accurate Demand Forecasting"}
                            services={["Increased accuracy of demand forecasting"]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Star"}
                            title={"Supply Chain Visibility"}
                            services={["Improved visibility into an extended supply chain and efficiency of risk management activities"]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Star"}
                            title={"Optimized Inventory Planning"}
                            services={["Enhanced reliability of inventory planning and reduced inventory carrying costs"]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Star"}
                            title={"Efficient Resource Utilization"}
                            services={["Higher resource utilization (labor, transportation, etc.) "]}
                            desc={null}
                        />
                    </div>
                </div>

                <div className="px-4 md:px-10 py-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-5">SCM Solutions Edvenswa Specializes In</h2>
                    <h2 className="text-lg md:text-xl font-bold text-gray-500 pb-5">We offer development services for the implementation of one or several integrated SCM solutions:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-10">
                        <ServiceCard
                            icon={"Scale"}
                            title={"Supply Chain Planning & Optimization"}
                            services={["Demand forecasting.",
                            "AI-supported recommendations on supply chain optimization (e.g., how much and when to order).",
                            "Supply chain digital twin – a real-time supply chain model to test different supply chain action plans (e.g., safety stock planning, transportation optimization) and evaluate their impact before choosing the best one."]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"ListChecks"}
                            title={"Supply Chain Risk Management"}
                            services={["Supply chain control tower, offering real-time, AI-supported visibility into all supply chain operations, including operations of suppliers and external carriers.",
                                "Configurable dashboards for a unified view of supply chain processes and related KPIs (fill rate, order cycle time, etc.).",
                                "Collaborative issue resolution with suppliers via a shared space for issue discussions, issues status tracking and notifications, etc."]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Boxes"}
                            title={"Inventory & Warehouse Management"}
                            services={["Inventory levels and location tracking (with barcode or RFID technology).",
                                "Optimal safety stock calculation.",
                                "Automated replenishment triggers.",
                                "Lot and serial number tracking.",
                                "Expiration dates and shelf life monitoring."]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Truck"}
                            title={"Logistics Management"}
                            services={["Freight tracking.",
                                "Planning and optimization of route schedules.",
                                "Vehicle accident case management (accident notifications and reports, repair request issuing and routing, etc.).",
                                "IoT connectivity to monitor product condition during transportation."]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"BriefcaseBusiness"}
                            title={"Procurement Management"}
                            services={["Quick template-based creation of purchase requisitions, RFxs, and purchase orders.",
                                "Automated approval workflow for purchase requisitions and purchase orders.",
                                "Analytics-based recommendations on supplier assignment to purchase orders.",
                                "Creation and management of preferred supplier lists.",
                                "Automated three-way matching (purchase orders, order receipts, and supplier invoices are cross-compared to reveal inconsistencies if any).",
                                "Purchase order execution tracking (for several tiers if required).",
                                "Collaboration tools to discuss orders with suppliers."]}
                            desc={null}
                        /> 
                        <ServiceCard
                            icon={"Handshake"}
                            title={"Supplier Relationship Management"}
                            services={["Analytics-based supplier pre-qualification (financial viability, technical capabilities, ethical business processes, etc.).",
                                "Quick template-based creation of sourcing events (e-tenders, e-auctions).",
                                "Collaboration with internal teams on supplier selection and nomination.",
                                "Supplier performance analytics and ongoing compliance checks.",
                                "Supplier portal for improved capacity planning (via collaboration with suppliers), etc.",
                                "Automatic alerts for suppliers to update expiring data (accreditations, certifications)"]}
                            desc={null}
                        /> 
                        <ServiceCard
                            icon={"PackageOpen"}
                            title={"Order Management"}
                            services={["Centralized multichannel sales order processing.",
                            "Automated order routing to an optimal fulfillment location.",
                            "Support of multiple order fulfillment methods and types (BOPIS, ship-from-store, same-day delivery, etc.).",
                            "Return management."]}
                            desc={null}
                        />

                    </div>
                </div>

                <div className="px-4 md:px-10 pt-2 my-10">
                    <p className="text-lg md:text-2xl font-medium">Supply Chain Software Development Cost Factors</p>
                    <div className="pl-4 md:pl-6 pt-8 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500">
                        <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                        <p>The number and complexity of functional modules required to cover business needs.</p>
                    </div>
                    <div className="pl-4 md:pl-6 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500 pt-4">
                        <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                        <p>The number and complexity of integrations with corporate software, IoT devices, etc.</p>
                    </div>
                    <div className="pl-4 md:pl-6 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500 pt-4">
                        <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                        <p>Data volume used for analytics, the need to implement machine learning algorithms and their complexity.</p>
                    </div>
                    <div className="pl-4 md:pl-6 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500 pt-4">
                        <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                        <p>Data storage type (a centralized database or a private blockchain).</p>
                    </div>
                    <div className="pl-4 md:pl-6 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500 pt-4">
                        <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                        <p>Application availability, performance, security, and scalability requirements.</p>
                    </div>
                    <div className="pl-4 md:pl-6 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500 pt-4">
                        <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                        <p>Required application types – web, mobile, desktop – and a number of platforms supported (for mobile apps).</p>
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    );
}