"use client"
import React from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import { ServiceCard } from '@/components/Card';
import BlackCard from '@/components/BlackCard';
import { Truck, HandHeart } from 'lucide-react';
import PageMetadata from '@/components/PageMetaData';

export default function Business() {
    return (
        <section>
            <TechNavigation />
            <PageMetadata 
        title="Fleet-Management - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div>
                {/* Hero Section */}
                <div className="relative w-full h-[60vh] md:h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-[40%] pt-20 px-4 md:pl-8">
                        <p className="text-3xl md:text-5xl font-bold">Fleet Management Software Development​</p>
                        <p className="pt-5 text-base md:text-lg font-normal">Upgrade Your Fleet Management Process</p>
                        <p className="pt-8 pb-8 text-sm md:text-md font-normal text-teal">
                            Fleet management software provides visibility into vehicles’ location, condition, and fuel consumption and gives insights into drivers’ behavior. In fleet management since 2012, Edvenswa delivers dedicated applications to optimize vehicle maintenance, reduce operational costs, and improve driver safety.
                        </p>
                        <Link href="/tech/contact-us" className="inline-block bg-teal-500 text-white px-4 py-2 rounded text-sm md:text-base">
                            Get in touch
                        </Link>
                    </div>
                    {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/fleet management.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
                </div>

                <div className="px-4 md:px-10 py-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-5">Challenges Fleet Management Software by Edvenswa Solves</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-10">
                        <ServiceCard
                            icon={Truck}
                            title={"For Fleet Owners"}
                            services={["Troubled compliance of fleet operations with federal and industry-specific fleet management regulations.",
                                "Need for higher operational efficiency due to fluctuating fuel prices and low margin.",
                                "Difficulty in planning vehicle purchasing and low visibility over fleet operations and maintenance expenses.",
                                "Financial losses due to frequent accidents and inability to guarantee driver safety.",
                                "Compliance with federal and industry-specific fleet management regulations due to an automated collection and recording of vehicles’ operating parameters needed to ensure compliance.",
                                "Optimized fuel management, lower fuel consumption and expenses.",
                                "Full control over vehicle purchasing and a complete visibility into fleet operations and maintenance activities and expenses.",
                                "Low risk of accidents and improved driver safety due to driving behavior and speeding violation monitoring."
                                ]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={HandHeart}
                            title={"End-to-end fleet management application development"}
                            services={["Expenses on your ready-made product grow together with your customer base.",
                                "Unmet customer needs due to a problematic implementation of custom functionality in a ready-made product.",
                                "Low user satisfaction due to a complex interface and issues at the code level.",
                                "Optimized Total Cost of Ownership as you don’t need to pay subscription fees.",
                                "Meeting unique customer needs due to customizations being easier and cheaper to implement.",
                                "On-point UX/UI and guaranteed application reliability.",
                                "Automation of key fleet management processes."

                                ]}
                            desc={null}
                        />
                    </div>
                </div>

                <div className="px-4 md:px-10 py-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-5">Fleet Management Solutions We Deliver</h2>
                    <h2 className="text-lg md:text-xl font-bold text-gray-500 pb-5">
                        We pack your fleet management application with a range of functional modules combined according to your needs, including:
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10">
                        <ServiceCard
                            icon={"Settings"}
                            title={"Fleet Maintenance"}
                            services={["Preventative fleet maintenance",
                                "Maintenance scheduling and alerting",
                                "Out-of-order alerts",
                                "Maintenance completion reports",
                                "Vehicles’ parts inventory management (e.g., purchase order creation, tracking)",
                                "Repair orders tracking",
                                "Vehicle warranty and insurance information management"]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Wifi"}
                            title={"Fleet Tracking"}
                            services={["Real-time tracking of vehicles",
                                "Fleet availability dashboards",
                                "Drivers’ behavior monitoring (e.g., driving speed, unnecessary stops)",
                                "Fuel consumption tracking"]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Headset"}
                            title={"Dispatch Management"}
                            services={["Route calculation and optimization",
                                "Delivery scheduling and task list generation (for drivers and employees)",
                                "Automated vehicle assignment",
                                "Vehicle service history tracking",
                                "Real-time trip monitoring",
                                "Convenient communication between call center reps and drivers",
                                "Dispatch document management (e.g., invoices, dispatch details reports)"
                                ]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Ambulance"}
                            title={"Accident Detection & Claim Management"}
                            services={["Automated detection of a vehicle collision",
                                "Automatic accident notifications to fleet managers",
                                "Accident details reports",
                                "Towing service management",
                                "Repair process management"
                                ]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Map"}
                            title={"Route Optimization & Geofencing"}
                            services={["Optimal route planning and dynamic route adjustment (in case of accidents, roadblocks, etc.)",
                                "Route schedules optimization (e.g., based on distance, priorities, and deadlines)",
                                "Notifications to fleet managers on vehicles entering or leaving certain geographic areas"
                                ]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"ClipboardList"}
                            title={"Budgeting & Expense Management"}
                            services={["Fuel management optimization",
                                "Vehicle maintenance and expenses budgeting",
                                "Vehicle insurance and warranty expiration notifications",
                                "Towing service management",
                                "Repair process management"
                                ]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Scroll"}
                            title={"Policies & Compliance Monitoring"}
                            services={["Automated tracking of vehicles’ operating parameters (e.g., fuel consumption, vehicle speed) to ensure compliance with fleet management regulations (e.g., Department of Transport)",
                                "Remote monitoring of tachograph data compliance with applicable regulations (e.g., recorded periods of driving and rest, traveled distance, timely tachograph data download)",
                                "Vehicle warranty expiration dates and insurance information tracking"
                                ]}
                            desc={null}
                        />
                    </div>
                </div>

                <div className="px-4 md:px-10 py-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-5">Choose Your Service Option</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10">
                        <ServiceCard
                            icon={null}
                            title={"Fleet management application"}
                            services={["Analyze your needs or elaborate on your idea",
                                "Review application architecture or design one from scratch",
                                "Advise on an optimal tech stack",
                                "Audit or design a thought-out user experience"
                                ]}
                            desc={"For you to build a robust and scalable fleet management application, we: "}
                        />
                        <ServiceCard
                            icon={null}
                            title={"End-to-end fleet management application development"}
                            services={["Business analysis",
                                "User experience design",
                                "Architecture and tracking algorithms design",
                                "Application development",
                                "Testing and QA",
                                "Support and evolution"
                                ]}
                            desc={"For you to get an application ready to bring ROI right away, we unfold the development process: "}
                        />
                        <ServiceCard
                            icon={""}
                            title={"Fleet management solution evolution"}
                            services={[]}
                            desc={"We audit the application you currently use, design and implement new functional modules so that you get an opportunity to generate new value with legacy software. "}
                        />
                    </div>
                </div>

                <div className="px-4 md:px-10 pt-10 mt-10">
                    <p className="text-2xl md:text-3xl font-medium text-center">Why You Shouldn’t Postpone Developing Your Fleet Management System</p>
                    <p className="text-base md:text-xl text-center text-gray-600 pt-6">
                        Deciding to hold off the development of your fleet management application, you miss the benefits promised by custom fleet management software, namely:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 mt-5">
                        <BlackCard percentage="15%" text="Reduction in fuel expenses and operational costs" />
                        <BlackCard percentage="30%" text="Lower risk of accidents" />
                        <BlackCard percentage="25%" text="Higher driver retention rate" />
                        <BlackCard percentage="50%" text="Higher customer satisfaction rate" />
                        <BlackCard percentage="25%" text="Increase in revenue" />
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    );
}