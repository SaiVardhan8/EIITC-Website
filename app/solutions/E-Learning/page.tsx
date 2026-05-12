"use client"
import React from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import { ServiceCard } from '@/components/Card';
import BlackCard from '@/components/BlackCard';
import { CircleCheck } from 'lucide-react';
import PageMetadata from '@/components/PageMetaData';

export default function Business() {
    return (
        <section>
            <TechNavigation />
            <PageMetadata 
        title="E-Learning - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
            <div>
                <div className="relative w-full h-[60vh] md:h-screen bg-gradient-to-b from-[#52B7B7] to-white border-b-2 border-gray-200 flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-[38%] pt-20 px-4 md:pl-8">
                        <p className="text-3xl md:text-5xl font-bold">E-Learning Software Development Services​</p>
                        <p className="pt-5 text-base md:text-lg font-normal">Since 16, Edvenswa has been building eLearning solutions that drive digital transformation of corporate learning resulting in human capital ROI growth.</p>
                        <p className="pt-8 pb-8 text-sm md:text-md font-normal text-teal">
                            Edvenswa’s team is ready to streamline your corporate learning with technology or modernize your current e-Learning software.
                        </p>
                        <Link href="/tech/contact-us" className="inline-block bg-teal-500 text-white px-4 py-2 rounded text-sm md:text-base">
                            Get in touch
                        </Link>
                    </div>
                     {/* Image added here */}
                    <div className="w-full md:w-[40%] h-full flex items-center justify-center p-4">
                        <img
                            src="/solutions/E-Learning.jpg"
                            alt="Digital Transformation"
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="pl-4 md:pl-10 text-lg md:text-2xl text-gray-600 py-4">
                        The goal of eLearning development is creating tools like LMS, LCMS, and LXP to help organizations increase learning efficiency and cut learning costs.
                    </h2>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-5 pl-4 md:pl-10">
                        Types of E-Learning Solutions Edvenswa Develops
                    </h2>
                    <div className="px-4 md:px-10 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 text-base md:text-xl text-gray-500 pb-5">
                        {/* Card 1 */}
                        <div className="flex-1 border-2 border-gray-500 rounded-md p-4 md:p-6 shadow-md text-center">
                            <h3 className="text-teal-500 font-semibold mb-2">Learning Management System</h3>
                        </div>
                        {/* Card 2 */}
                        <div className="flex-1 border-2 border-gray-500 rounded-md p-4 md:p-6 shadow-md text-center">
                            <h3 className="text-teal-500 font-semibold mb-2">E-Learning Portals</h3>
                        </div>

                        {/* Card 3 */}
                        <div className="flex-1 border-2 border-gray-500 rounded-md p-4 md:p-6 shadow-md text-center">
                            <h3 className="text-teal-500 font-semibold mb-2">Learning Experience Platforms</h3>
                        </div>

                        {/* Card 4 */}
                        <div className="flex-1 border-2 border-gray-500 rounded-md p-4 md:p-6 shadow-md   text-center">
                            <h3 className="text-teal-500 font-semibold mb-2">Remote Proctoring Software</h3>
                        </div>
                        {/* Card 5 */}
                        <div className="flex-1 border-2 border-gray-500 rounded-md p-4 md:p-6 shadow-md text-center">
                            <h3 className="text-teal-500 font-semibold mb-2">Learning Content Management Systems</h3>
                        </div>

                        {/* Card 6 */}
                        <div className="flex-1 border-2 border-gray-500 rounded-md p-4 md:p-6 shadow-md text-center">
                            <h3 className="text-teal-500 font-semibold mb-2">Mobile Learning Solutions</h3>
                        </div>

                        {/* Card 7 */}
                        <div className="flex-1 border-2 border-gray-500 rounded-md p-4 md:p-6 shadow-md text-center">
                            <h3 className="text-teal-500 font-semibold mb-2">Knowledge Management Solutions</h3>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-5 pl-4 md:pl-10">
                        Key Features of E-Learning Software We Deliver
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10 mt-10">
                        <ServiceCard
                            icon={"SquarePen"}
                            title={"Learning Content Development & Management"}
                            services={["Multiple content types (e.g., text, images, video, audio, AR/VR).",
                                    "Built-in content authoring (e.g., eLearning course development).",
                                    "Learner-generated, third-party, and corporate content aggregation.",
                                    "Reusable content and templates.",
                                    "Content tagging and intelligent search.",
                                    "Support of technical standards like SCORM, AICC, xAPI and LTI.",
                                    "Compliance with corporate and industry-specific regulations like HIPAA, SOX, GLBA"]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"CalendarDays"}
                            title={"Learning Process Administration & Delivery"}
                            services={["Support of various types of learning (instructor-led online learning, blended learning, microlearning, self-paced learning, and more).",
                                "Automated enrollment to courses based on job roles, required skills, learning history, etc.",
                                "Learning event scheduling (e.g., trainings, workshops, exams)",
                                "Automated reminders and notifications (e.g., new courses, deadlines).",
                                "AI-driven personalized learning paths and content recommendations.",
                                "Performance assessment.",
                                "Online proctoring (e.g., tests, exams).",
                                "VR and AR simulators."]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"SlidersHorizontal"}
                            title={"Social Features"}
                            services={["Learners’ profile pages.",
                                    "Learning communities.",
                                    "Discussion boards, chats and forums for learners.",
                                    "Interactions with content via likes, shares, comments.",
                                    "Gamification (scores, badges, leaderboards, levels, rewards)."]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"ChartColumn"}
                            title={"Analytics & Reporting"}
                            services={["Learning history.",
                                "Learners’ feedback gathering.",
                                "Content usage, user activity, and performance assessment dashboards.",
                                "User regulatory compliance reporting."]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Puzzle"}
                            title={"Integrations"}
                            services={["ERP.",
                                "CRM.",
                                "HR software.",
                                "Content management systems.",
                                "Knowledge management systems.",
                                "Task management software.",
                                "Video conferencing software.",
                                "Social media"]}
                            desc={null}
                        />
                    </div>
                </div>

                <div className="px-4 md:px-10 py-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-5 pl-4 md:pl-10">
                        See How You Benefit from Partnering with Edvenswa
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                        <ServiceCard
                            icon={"Star"}
                            title={"Excellent Software Quality"}
                            services={["Due to our quality-first approach to service delivery based on a mature ISO 9001-certified quality management system."]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Star"}
                            title={"Fast Delivery"}
                            services={["Of a viable MVP (within 3-5 months) due to agile iterative development and applying CI/CD practices."]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Star"}
                            title={"Cost-Efficiency"}
                            services={["Due to using OOTB software components, public APIs, and cloud-native architectures and continuous project cost optimization by Edvenswa’s PMs."]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Star"}
                            title={"Guaranteed Security"}
                            services={["Of our customers’ data due to Edvenswa’s robust security management practices supported by an ISO 27001 certificate. "]}
                            desc={null}
                        />
                    </div>
                </div>

                <div className="px-4 md:px-10 py-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-5 pl-4 md:pl-10">
                        Choose Your Service Option
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                        <ServiceCard
                            icon={"Star"}
                            title={"Custom E-Learning Development"}
                            services={["Learning needs analysis.",
                                    "Selection of a suitable type of an eLearning solution (LMS, LXP, eLearning portal), an optimal feature set.",
                                    "Selection of platform or a tech stack, and an implementation methodology.",
                                    "End-to-end eLearning software development.",
                                    "Quality assurance.",
                                    "User training.",
                                    "Post-implementation support and evolution"]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Star"}
                            title={"Revamp of Legacy Learning Software"}
                            services={["Learning needs analysis.",
                            "Redesign of learning processes.",
                            "Suggesting new eLearning functionality (e.g., course publishing workflows, gamification).",
                            "Cloud migration of an eLearning solution, if required.",
                            "Implementing and testing new eLearning features.",
                            "Implementing UX and UI improvements to the eLearning solution."]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Star"}
                            title={"Adding Advanced Functionality To Your Current E-Learning Solution"}
                            services={["Defining learning processes to transform with innovative techs (AI, VR, AR, big data) and redesigning the learning processes accordingly.",
                                "A business case including costs, outcomes, ROI or NPV.",
                                "Implementation, integration and testing of new features.",
                                "User training and support."]}
                            desc={null}
                        />
                        <ServiceCard
                            icon={"Star"}
                            title={"Customization of an Open-Source E-Learning Platform"}
                            services={["Eliciting eLearning requirements.",
                                "Advising on an optimal open-source platform.",
                                "Customizing an open-source eLearning platform. (e.g., to support complex content approval workflows, unique assessments).",
                                "eLearning solution testing.",
                                "User training and support."]}
                            desc={null}
                        />
                    </div>
                </div>

                <div className="px-4 md:px-10 py-6">
                    <div className="px-4 md:px-10 py-2">
                        <h2 className="text-lg md:text-2xl font-bold text-gray-800 pt-10">
                            Timeframes for Our E-Learning Software Development Services
                        </h2>
                        <div className="pl-4 md:pl-6 pt-8 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500">
                            <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                            <p>MVP development: 3-5 months</p>
                        </div>

                        <div className="pl-4 md:pl-6 pt-4 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500">
                            <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                            <p>MVP with an innovative component to increase learner engagement: 4-6 months</p>
                        </div>

                        <div className="pl-4 md:pl-6 pt-4 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500">
                            <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                            <p>Creation of an eLearning module with basic features or automation of one learning management process (e.g., performance assessment): 1-3 months</p>
                        </div>

                        <div className="pl-4 md:pl-6 pt-4 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500">
                            <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                            <p>Investment payback period: 0.1-0.9 years (due to high value from innovative tech)</p>
                        </div>

                        <div className="pl-4 md:pl-6 pt-4 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500">
                            <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                            <p>Releases: every 2-6 weeks</p>
                        </div>

                        <div className="pl-4 md:pl-6 pt-4 flex items-start gap-4 text-sm md:text-md font-medium text-gray-500">
                            <CircleCheck className="text-teal-500 flex-shrink-0 w-6 h-6" />
                            <p>Minor changes and hotfixes: several times a day</p>
                        </div>
                    </div>
                </div>

                <div className="px-4 md:px-10">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-800 pt-10 text-center">
                        Why opt for E-Learning Software Development Right Now
                    </h2>
                    <h2 className="text-base md:text-xl font-bold text-gray-500 pt-4 text-center">
                        With a professionally implemented eLearning solution, you can get the following benefits:
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                        <BlackCard percentage="120-430%" text="Annual ROI of eLearning solutions due to an optimal feature value/cost ratio and use of innovative techs." />
                        <BlackCard percentage="-25-50%" text="Learning costs due to saving money on materials, equipment, dedicated staff and trainers." />
                        <BlackCard percentage="+30-60%" text="Employee productivity due to improved knowledge and skills, policy awareness and on-demand access to learning" />
                        <BlackCard percentage="+25-60%" text="Knowledge retention due to diversity of eLearning content and higher learning impact." />

                    </div>
                </div>
                <Footer />
            </div>
        </section>
    );
}