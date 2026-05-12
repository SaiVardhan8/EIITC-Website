"use client"
import React from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import { ServiceCard } from '@/components/Card';
import Card from '@/components/whiteCard';
import PageMetadata from '@/components/PageMetaData';

export default function Business() {
    return (
        <section>
            <TechNavigation />
            <PageMetadata 
        title="Document-Management - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div>
                <div className="relative w-full h-[60vh] md:h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-[38%] pt-20 px-4 md:pl-8">
                        <p className="text-3xl md:text-5xl font-bold">Documentation Automation Software&#8203;</p>
                        <p className="pt-5 text-base md:text-lg font-normal pb-5">
                          Documentation automation software reduces the drafting time of highly formalized documents by employing reusable document templates that leverage conditional logic and connected data sources. 
                          And integrates with OCR, DMS, CRM software, etc. The implementation costs of platform-based documentation automation solutions are around $30,000 – $50,000.
                        </p>
                        <Link href="/tech/contact-us" className="inline-block bg-teal-500 text-white px-4 py-2 rounded text-sm md:text-base">
                            Get in touch
                        </Link>
                    </div>
                    {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/Document management.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
                </div>

                <div className="px-4 md:px-16 py-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-5">Documentation Automation Software: Key Functionality</h2>
                    <h2 className="text-lg md:text-xl font-bold text-gray-500 pb-5">
                        Based on Edvenswa&apos;s experience in similar projects, our consultants have outlined the core features of documentation automation software.
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mt-10">
                        <ServiceCard
                            icon={null}
                            title={"Template Creation & Management"}
                            services={[
                                "A template editor for creating intelligent templates consisting of dynamic fields and interview forms with complex branching logic.",
                                "Converting an org&apos;s electronic documents (e.g., contracts, invoices) stored in DMS or other repositories into intelligent templates.",
                                "Template approval workflow.",
                                "AI-based conversion of scanned documents into readable documents (e.g., in PDF format) and extracting data from them into intelligent templates using built-in or integrated OCR software.",
                                "Centralized storage of intelligent templates.",
                                "Templates search by titles, full text and metadata."
                              ]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={null}
                            title={"Document Generation & Management"}
                            services={[
                                "Document creation using interview form answers or due to automated data extraction from integrated data sources (e.g., enterprise systems, databases) into intelligent document templates.",
                                "Batch document generation (e.g., contracts, invoices, letters, applications, claims).",
                                "Document assembly workflow.",
                                "Built-in e-signature.",
                                "Alerts and notifications (e.g., document creation or approval, template modification)."
                              ]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={null}
                            title={"Document Output & Distribution"}
                            services={[
                                "Multiple output formats (.pdf, .docx, .pptx, .html).",
                                "Document output in different languages.",
                                "Mobile access to documents and mobile signature capture.",
                                "Offline access to documents.",
                                "Automated distribution of created documents via email."
                              ]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={null}
                            title={"Document Security & Compliance"}
                            services={[
                                "Data encryption.",
                                "Role-based access control.",
                                "Multifactor authentication.",
                                "Document versioning and audit trail.",
                                "Document archiving and retention/deletion policies.",
                                "Document backup and recovery.",
                                "Document compliance management (e.g., HIPAA, GDPR, GLBA, SOX)."
                              ]}
                            desc={null}
                        />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                        Recommended Integrations for Documentation Automation Software
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                        Edventure recommends integrating various documentation automation software with third-party software and data sources to enable documentation of business processes and workflows with minimal manual input from users.
                    </p>
                    <img src="/doc_software_integrations.svg" alt="Integrations" className="w-full" />
                </div>
                <div className="px-4 md:px-14 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 mt-10">
                    <Card title="+ Data Sources" text="(CRM, ERP, DMS, and HR systems, databases, email services, etc.) To enable auto-population of intelligent templates with relevant data. For example, integration with CRM allows automatically populate templates for contracts and sales proposals with customer data (e.g., names, legal addresses)." />
                    <Card title="+ DMS" text="To fully automate a document life cycle from creation to e-signing due to intelligent templates of documentation automation software and workflow capabilities of DMS." />
                    <Card title="+ BI" text="To build visualized reports on the use of automatically generated documentation (e.g., number of approved/rejected/pending documents, document flow by department) in BI software to evaluate the efficiency of documentation automation software." />
                    <Card title="+ OCR" text="To convert scanned documents into readable formats like PDF and extract data from them into intelligent templates." />
                </div>

                <div className="px-4 md:px-10 py-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                    Documentation Automation Success Factors
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                      Based on Edvenswa&apos;s ample experience in software development, we&apos;ve defined the key factors, which if covered, help maximize ROI of documentation automation software.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 mt-10">
                        <ServiceCard
                            icon={"Settings"}
                            title={"Easy Integration"}
                            services={["With data sources (e.g., CRM, ERP, HR system, databases, email services) from which business data is extracted into intelligent document templates."]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"FileChartColumnIncreasing"}
                            title={"No-code document template editor"}
                            services={["To enable even non-technical users to create intelligent document templates."]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Smartphone"}
                            title={"Mobile and offline access"}
                            services={["To allow users to generate documents at any time, at any place, using any device and without dependence on the Internet connection. "]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"UserLock "}
                            title={"Strong security features"}
                            services={["To comply with governmental and industry-specific regulations like GDPR, SOX, GLBA, HIPAA, and more."]}
                            desc={null}
                        />
                    </div>
                </div>

                <div className="px-4 md:px-10 py-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Platforms We Recommend
                    </h2>
                    <p className="text-gray-600 mb-12 max-w-8xl mx-auto text-base md:text-xl">
                    Edvenswa doesn&apos;t recommend open source options for large enterprises and organizations from highly regulated industries like healthcare. 
                    They may lack important features like multilingual support and an e-signature workflow and are less likely to meet the required government and industry-specific compliance regulations. 
                    As for commercial products, we recommend the following feature-rich and the most used ones:
                    </p>
                </div>

                <div className="px-4 md:px-10 pt-2 pb-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Documentation Automation Software Implementation by Edvenswa
                    </h2>   
                    <p className="text-gray-600 mb-4 max-w-8xl mx-auto text-sm md:text-md">
                        Experienced in developing document management software, Edvenswa provides consultancy and implements solutions for automated document generation.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-10">
                        <ServiceCard
                            icon={"Settings"}
                            title={"Documentation Automation Software Consulting"}
                            services={[
                                "Analyzing your company’s document workflows and types of docs to select documents for automation (e.g., invoices, financial statements or reports).",
                                "Prioritizing features for your document automation solution.",
                                "Deciding on a fitting implementation option: platform-based or custom development.",
                                "Suggesting necessary integrations based on data sources required for intelligent documents (CRM, ERP, HR, ecommerce, accounting software, and more)."
                              ]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"FileText "}
                            title={"Documentation Automation Software Implementation"}
                            services={[
                                "Drawing up technical requirements for document automation software",
                                "Configuring and customizing based on your business process and requirements",
                                "Migrating with automated systems (e.g., CRM, ERP, BI/DMS, other core systems)",
                                "Quality assurance",
                                "Post-implementation support"
                              ]}
                            desc={null}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    );
}