"use client"
import React from "react"
import NavigationMenu from "@/components/NavigationMenu"
import Footer from "@/components/Footer"
import {
    FaProjectDiagram,
    FaUserTie,
    FaChartLine,
    FaLeaf,
    FaUsers,
    FaClipboardList,
    FaChalkboardTeacher,
    FaCogs,
    FaHandshake,
} from "react-icons/fa"

export default function TransformationPage() {
    const services = [
        {
            title: "Business Agility & Lean",
            description:
                "Empower organizations to embrace agile ways of working, streamline processes, and improve responsiveness to market shifts.",
            icon: <FaProjectDiagram className="text-3xl text-teal-600" />,
        },
        {
            title: "Strategic Consultancy & CX",
            description:
                "Define strategic priorities and enhance customer experiences with innovative, data-driven approaches.",
            icon: <FaUserTie className="text-3xl text-teal-600" />,
        },
        {
            title: "Digital Portfolio Management",
            description:
                "Ensure effective governance and prioritization of digital initiatives to maximize value delivery.",
            icon: <FaChartLine className="text-3xl text-teal-600" />,
        },
        {
            title: "New Business Models & Digital Services",
            description:
                "Develop disruptive business models and scalable digital services to drive long-term growth.",
            icon: <FaCogs className="text-3xl text-teal-600" />,
        },
        {
            title: "Climate & Environment Strategy",
            description:
                "Integrate sustainability into core strategy by reducing environmental footprint and innovating eco-friendly practices.",
            icon: <FaLeaf className="text-3xl text-teal-600" />,
        },
        {
            title: "People & Change Management",
            description:
                "Support organizations in cultural transformation, leadership development, and workforce adaptation.",
            icon: <FaUsers className="text-3xl text-teal-600" />,
        },
        {
            title: "Project Management Office",
            description:
                "Establish robust PMOs that ensure efficient execution, monitoring, and alignment with business objectives.",
            icon: <FaClipboardList className="text-3xl text-teal-600" />,
        },
        {
            title: "Training & Upskilling",
            description:
                "Equip employees with the latest digital, agile, and leadership skills to thrive in a fast-evolving environment.",
            icon: <FaChalkboardTeacher className="text-3xl text-teal-600" />,
        },
    ]

    return (
        <section className="w-full min-h-screen bg-white overflow-hidden">
            {/* Navigation */}
            <NavigationMenu />

            {/* Hero Section */}
            <div className="w-full h-[75vh] bg-gradient-to-r from-emerald-100 to-teal-200 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
                <div className="text-gray-900 text-3xl md:text-5xl font-semibold max-w-xl mb-10 md:mb-0">
                    Transformation Consultancy
                </div>

                <div className="relative flex-shrink-0">
                    <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center bg-teal-300 rounded-md shadow-md skew-x-[-12deg] relative">
                        <FaHandshake className="text-white text-5xl md:text-6xl skew-x-12" />
                    </div>
                </div>
            </div>


            {/* About Section */}
            <section className="w-full bg-white py-16 px-6 md:px-16">
                <div className=" text-left">
                    <h2 className="text-teal-600 font-bold text-xl md:text-2xl tracking-wide uppercase mb-6">
                        Driving transformation that delivers measurable impact.          </h2>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        Our management consulting services are designed to help executives and managers navigate complex challenges across sectors including automotive, aerospace, railway, defence, energy, banking, and insurance. With a blend of strategic insights and hands-on execution, we enable organizations to embrace change, accelerate growth, and ensure long-term competitiveness. By leveraging proven frameworks and cross-industry expertise, we guide leaders in shaping resilient strategies that balance innovation with operational excellence.
                    </p>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        At the heart of our approach lies a commitment to agility, digital transformation, and sustainability. We focus on building organizations that can quickly adapt to evolving markets, regulatory landscapes, and technological disruptions. From rethinking business models to empowering employees with future-ready skills, our consultancy provides tailored roadmaps that drive measurable impact. Whether it's climate responsibility, customer experience, or digital services, we partner with clients to deliver transformation that is both practical and visionary.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="w-full bg-gray-50 py-16 px-6 md:px-16">
                <h2 className="text-teal-600 font-bold text-xl md:text-2xl tracking-wide uppercase mb-10 text-center">
                    Our Services
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-md p-6 hover:bg-teal-600 hover:text-white transition-colors duration-300"
                        >
                            <div className="mb-4">
                                {React.cloneElement(service.icon, {
                                    className:
                                        "text-3xl text-teal-600 transition-colors duration-300 group-hover:text-white",
                                })}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </section>
    )
}
