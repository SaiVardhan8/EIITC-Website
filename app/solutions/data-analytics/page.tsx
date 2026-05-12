"use client"
import React from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import {ImageServiceCard} from '@/components/CardWithImage';
import TestingTypesAccordion from '@/components/ExpandableSections';
import CooperationModelsAccordion from '@/components/Cooperation_Models';
import Records from '@/components/ExpandableSectionReusable';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import {ServiceCard} from '@/components/Card';
import {useState, useEffect} from 'react';
import PageMetadata from '@/components/PageMetaData';

export default function Business() {
    return (
        <section>
            <TechNavigation />
            <div>
                <PageMetadata 
        title="Data-Analytics - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
           <div>
            <div className="relative w-full h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center" >
                <div className="w-[48%] pt-200 pl-8">
                    <p className='text-5xl font-bold'>Data Analytics Services​</p>
                    <p className="pt-5 text-base md:text-lg font-normal">Even the Most Voluminous and High-Velocity Data Will Be Organized</p>
                    <p className='pt-5 text-sm md:text-lg font-normal pb-5 max-w-full md:max-w-2xl'>Data analytics implies building an infrastructure for data aggregation, analysis, and reporting. 16 years in data analytics services, Edvenswa delivers tailored business analytics solutions and helps companies plan future actions based on historical insights. </p>
                    <Link href="/tech/contact-us" className='inline-block bg-teal-500 text-white px-3 py-1 rounded'>Get in touch</Link>
                </div>
                {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/Data analytics.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
            </div>
    
</div>

            {/* first two checks */}
            <div className='px-4 py-10'>
                <h2 className="inline-block uppercase tracking-wider text-gray-800 font-semibold bg-gray-200 px-2">
                Your Benefits
                </h2>
                <h2 className='text-3xl font-bold text-gray-800 pb-5 pt-10'>How You Benefit from Edvenswa as Your Analytics Partner</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-10 px-10 '>
                <ServiceCard
                    icon={"AlarmClockCheck"}
                    title={"Time Saving Automation"}
                    services={[
                        "We set up automated data management and governance processes and implement self-service BI to ensure you can easily create ad hoc reports without any coding skills, and your IT team doesn’t have to manage data manually."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"FileOutput"}
                    title={"Easy-To-Read Reports"}
                    services={[
                        "We use various data visualization techniques to highlight the most important analytics insights in each report and make them easy to scan at one glance."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"Award"}
                    title={"Reliable Insights"}
                    services={[
                        "We consolidate your disparate data sources into a DWH to serve as a single point of truth for enterprise-wide analytics. Our robust ETL processes will guarantee your data is always accurate, consistent, and complete to facilitate dependable analytics."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"Trophy"}
                    title={"Value Focused Data Analytics"}
                    services={[
                        "As an expert analytics consultancy, we don’t simply build reports — our goal is to help you fully utilize the potential of your analytics solution and discover new optimization opportunities hidden in your data (e.g., for operational cost reduction, productivity improvements)."
                    ]}
                    desc={null}
                />

                </div>
            </div>

            <div className='px-4 py-10 text-center'>
                <h2 className="inline-block uppercase tracking-wider text-gray-800 font-semibold bg-gray-200 px-2">
                Data Analytics
                </h2>
                <h2 className='text-3xl font-bold text-gray-800 pb-5 pt-10'>Building Data Analytics Solutions for Different Domains​</h2>
                <h2 className='text-xl  text-gray-500 pb-5 pt-10'>A data analytics company, Edvenswa helps businesses from 30+ industries integrate, aggregate, and analyze various data types from multiple data sources to address their most deliberate needs at department and enterprise levels.</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-16 mt-10 px-4 md:px-10'>
                <ServiceCard
                    icon={"ChartColumn"}
                    title={"Financial Analytics"}
                    services={[
                        "Monitoring revenue, expenses and profitability of a company.",
                        "Profitability analysis and financial performance management.",
                        "Budget planning, formulating long-term business plans.",
                        "Financial risk forecasting and management."
                    ]}
                    desc={null}
                />
                <ServiceCard
                    icon={"Users"}
                    title={"Customer Analytics"}
                    services={[
                        "Customer behavior analysis and predictive modeling.",
                        "Customer segmentation for tailored sales and marketing campaigns.",
                        "Personalized cross-selling and upselling offers for extended customer lifetime value.",
                        "Predicting customer attrition and customer churn risk management.",
                        "Customer sentiment analysis."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={"ShoppingBasket"}
                    title={"Sales & Product Analytics"}
                    services={[
                        "Sales channel analytics.",
                        "Pricing analytics to design pricing strategies.",
                        "Identifying and predicting sales trends.",
                        "Conducting product performance analysis.",
                        "Tracking customer interactions with a product to identify pain points leading to churn.",
                        "Conducting competitor benchmarking."
                    ]}
                    desc={null}
                />
                <ServiceCard
                    icon={"Boxes"}
                    title={"Asset Analytics"}
                    services={[
                        "Real-time asset monitoring and tracking.",
                        "Predictive and preventive maintenance, developing asset maintenance strategies.",
                        "Planning asset investments.",
                        "Asset usage analytics, planning and scheduling asset modernization/replacement/disposal strategies."
                    ]}
                    desc={null}
                />
                <ServiceCard
                    icon={"Headset"}
                    title={"HR Analytics"}
                    services={[
                        "Employee/department performance monitoring and analysis.",
                        "Employee experience and satisfaction analysis.",
                        "Employee retention strategy optimization and management.",
                        "Employee hiring strategy analysis and optimization.",
                        "Labor cost analytics."
                    ]}
                    desc={null}
                />
                <ServiceCard
                    icon={"Truck"}
                    title={"Supply Chain Analytics"}
                    services={[
                        "Identifying demand drivers, consumer demand forecasting and planning.",
                        "Supplier performance monitoring and evaluation.",
                        "Predictive route optimization.",
                        "Determining the optimal level of inventory to meet the demand and prevent stockouts, inventory planning and management.",
                        "Identifying patterns and trends throughout the supply chain for enhanced supply chain risks management."
                    ]}
                    desc={null}
                />
                <ServiceCard
                    icon={"Truck"}
                    title={"Transportation & Logistics"}
                    services={[
                        "Operational capacity planning and optimization based on the analysis of incoming shipments, customer delivery schedules, vehicles availability, and personnel shift schedules.",
                        "Predictive analytics for vehicle maintenance (failure prediction, recommendation of maintenance actions, etc.).",
                        "Vehicle demand forecasting.",
                        "Predicting optimal amounts of fuel needed based on the analysis of driving patterns.",
                        "IoT data analytics (data on cargo temperature, humidity, etc.; data on driver behavior, data on vehicle condition, etc.) for safe cargo delivery"
                    ]}
                    desc={null}
                />
                <ServiceCard
                    icon={"Factory"}
                    title={"Manufacturing Analytics"}
                    services={[
                        "Overall equipment effectiveness analysis and optimization.",
                        "Manufacturing process quality optimization.",
                        "Equipment maintenance scheduling.",
                        "Power consumption forecasting and optimization.",
                        "Production loss root cause analysis."
                    ]}
                    desc={null}
                />
                <ServiceCard
                    icon={"HandHeart"}
                    title={"Healthcare Analytics"}
                    services={[
                        "Patient health condition monitoring, condition-based alerting.",
                        "Patient treatment optimization.",
                        "Assessment of patient risks and personalized care plan recommendations.",
                        "Proactive care (defining trends and patterns in patient condition requiring a doctor’s attention).",
                        "Fraud detection in healthcare insurance.",
                        "Medical staff workload prediction and work shifts optimization.",
                        "Optimization of clinical space and equipment usage."
                    ]}
                    desc={null}
                />
                <ServiceCard
                    icon={"Store"}
                    title={"Retail Analytics"}
                    services={[
                        "Retail business performance analysis, monitoring sales and profitability.",
                        "Demand analysis and forecasting.",
                        "Multi-echelon inventory optimization.",
                        "Assortment and merchandising planning and optimization.",
                        "Data-driven recommendations on optimal product promotion activities."
                    ]}
                    desc={null}
                />

                </div>
            </div>

            {/* circle checks 2 */}
            <div className='px-4 py-10'>
                <h2 className='inline-block uppercase tracking-wider text-gray-800 text-2xl md:text-3xl pt-10 font-bold px-4'>
                    How We Ensure Smooth Sailing of Our Projects
                </h2>
                <h2 className='inline-block tracking-wider text-gray-500 text-sm md:text-xl pt-5 pb-5 px-4'>
                    With over three decades of experience in analytics services, we have established mature processes to guarantee that we always deliver on our promises.
                </h2>
                <div className='px-4 py-0'>
                    <div className='pl-4 md:pl-6 pt-6 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500'>
                        <CircleCheck className="text-teal-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        <p>We utilize our ISO 9001-certified quality management system throughout the project life cycle.</p>
                    </div>

                    <div className='pl-4 md:pl-6 pt-2 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500'>
                        <CircleCheck className="text-teal-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        <p>We assess project risks in advance to provide realistic time & budget estimations.</p>
                    </div>

                    <div className='pl-4 md:pl-6 pt-2 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500'>
                        <CircleCheck className="text-teal-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        <p>We foster cooperation, trust, and respect to achieve effective teamwork.</p>
                    </div>

                    <div className='pl-4 md:pl-6 pt-2 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500'>
                        <CircleCheck className="text-teal-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        <p>Being ISO 27001-certified, we guarantee that we collect and store your business data securely.</p>
                    </div>

                    <div className='pl-4 md:pl-6 pt-2 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500'>
                        <CircleCheck className="text-teal-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        <p>We maintain and update accurate project documentation to support future software evolution.</p>
                    </div>

                    <div className='pl-4 md:pl-6 pt-2 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500'>
                        <CircleCheck className="text-teal-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        <p>We ensure full transparency of project progress with the help of tailored KPIs, frequent reporting, and efficient task-tracking systems.</p>
                    </div>

                    <div className='pl-4 md:pl-6 pt-2 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500'>
                        <CircleCheck className="text-teal-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        <p>Having worked with 30+ diverse industries, we speak your language and understand your domain&apos;s unique challenges and needs.</p>
                    </div>

                    <div className='pl-4 md:pl-6 pt-2 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500'>
                        <CircleCheck className="text-teal-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        <p>To ensure high user adoption and smooth knowledge transfer, we are ready to conduct user training for your team.</p>
                    </div>
                </div>
            </div>

            <div className='px-4 pb-10'>
                <h2 className='inline-block uppercase tracking-wider text-gray-800 text-3xl pt-10 font-bold px-4'>About Edvenswa</h2>
                <div className='px-4 py-5'>
                    <div className='pl-6 pt-6 flex items-start gap-2 text-md font-medium text-gray-500'>
                        <CircleCheck className="text-teal-500 mt-1 w-6 h-6 flex-shrink-0" />
                        <p>16 years in data analytics and data science.</p>
                    </div>

                    <div className='pl-6 pt-2 flex items-start gap-2 text-md font-medium text-gray-500'>
                        <CircleCheck className="text-teal-500 mt-1 w-6 h-6 flex-shrink-0" />
                        <p>18 years in business intelligence and data warehouse services.</p>
                    </div>

                    <div className='pl-6 pt-2 flex items-start gap-2 text-md font-medium text-gray-500'>
                        <CircleCheck className="text-teal-500 mt-1 w-6 h-6 flex-shrink-0" />
                        <p>7 years in Microsoft Power BI services.</p>
                    </div>

                    <div className='pl-6 pt-2 flex items-start gap-2 text-md font-medium text-gray-500'>
                        <CircleCheck className="text-teal-500 mt-1 w-6 h-6 flex-shrink-0" />
                        <p>Competencies in machine learning, artificial intelligence, data science, and image analysis.</p>
                    </div>

                    <div className='pl-6 pt-2 flex items-start gap-2 text-md font-medium text-gray-500'>
                        <CircleCheck className="text-teal-500 mt-1 w-6 h-6 flex-shrink-0" />
                        <p>ISO 9001 and ISO 27001-certified to assure the quality of the data analysis services and the security of the customers&apos; data.</p>
                    </div>
                </div>
            </div>

            {/* last two sections */}
            
            <div className='px-4 py-10'>
                <h2 className="inline-block uppercase tracking-wider text-gray-800 font-semibold bg-gray-200 px-2">
                How we Do
                </h2>
                <h2 className='text-3xl font-bold text-gray-800 pb-5 pt-10'>Flexible Service Approaches</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-10 px-10 '>
                <ServiceCard
                    icon={null}
                    title={"Analytics as a Service (AaaS)"}
                    services={[
                        "Within a subscription fee, you carry out data analysis on a fully customized cloud analytics platform built and maintained by Edvenswa."
                    ]}
                    desc={null}
                />
                <ServiceCard
                    icon={null}
                    title={"Managed Data Analysis"}
                    services={[
                        "Edvenswa’s data analysts collect and process your data to deliver quick one-time or recurrent analytics insights to you."
                    ]}
                    desc={null}
                />
                <ServiceCard
                    icon={null}
                    title={"Data Analytics Consulting"}
                    services={[
                        "Edvenswa’s consultants help you choose an optimal data analytics strategy and guide you on designing, developing, implementing and improving a proprietary data analytics solution."
                    ]}
                    desc={null}
                />
                <ServiceCard
                    icon={null}
                    title={"Data Analytics Implementation"}
                    services={[
                        "We design and implement an analytics solution with the basic functionality to address your current data analytics needs and scale up as they grow. Your data analytics solution may include such elements as DWH, OLAP cubes, data visualization, data science, big data components etc."
                    ]}
                    desc={null}
                />
                <ServiceCard
                    icon={null}
                    title={"Data Analytics Modernization"}
                    services={[
                        "Edvenswa helps upgrade the existing data analytics solution to achieve maximum ROI and meet the new data analytics needs."
                    ]}
                    desc={null}
                />
                <ServiceCard
                    icon={null}
                    title={"Data Management Services"}
                    services={[
                        "Edvenswa implements a robust data management framework to organize your processes of data collection, storage, access, security, analysis, etc."
                    ]}
                    desc={null}
                />

                </div>
            </div>

            <div className='px-4 py-10'>
                <h2 className="inline-block uppercase tracking-wider text-gray-800 font-semibold bg-gray-200 px-2">
                Our Solution
                </h2>
                <h2 className='text-3xl font-bold text-gray-800 pb-5 pt-10'>Edvenswa&apos;s Solutions – from Automation to Advanced Data Analytics</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-10 px-10 '>
                <ServiceCard
                    icon={null}
                    title={"Data Integration & Data Warehousing"}
                    services={[
                        "Data governance (data security, quality, availability, etc.) implementation.",
                        "Profitability analysis and financial performance management.",
                        "Data warehouse and data marts design and implementation."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={null}
                    title={"Big Data"}
                    services={[
                        "Big data infrastructure setup and support.",
                        "Big data quality and security management.",
                        "Big data capture, analysis and reporting."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={null}
                    title={"Data Science"}
                    services={[
                        "Data preparation and management.",
                        "Development and tuning of machine learning (ML) (including deep learning) models.",
                        "Development and tuning of data mining models.",
                        "Designing and implanting AI solutions.",
                        "Image analysis software development."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={null}
                    title={"Business Intelligence"}
                    services={[
                        "Business intelligence and data analytics infrastructure design and implementation.",
                        "Ad hoc and scheduled analytics querying and reporting.",
                        "Natural language user interface."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={null}
                    title={"Artificial Intelligence"}
                    services={[
                        "Data gathering and cleansing for ML model training.",
                        "ML modeling.",
                        "Development of software modules that will use ML output."
                    ]}
                    desc={null}
                />

                <ServiceCard
                    icon={null}
                    title={"Data Visualization"}
                    services={[
                        "Interactive dashboarding.",
                        "Custom and pre-built visuals.",
                        "Multiple visualization techniques (symbol maps, line charts, bar charts, pie charts, etc.)."
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

