"use client"
import NavigationMenu from "@/components/NavigationMenu"
import React from "react"
import {
    FaBrain,
    FaChartBar,
    FaCheckCircle,
    FaEye,
    FaProjectDiagram,
    FaRobot,
    FaCloud,
    FaLock,
    FaMicrochip,
    FaDesktop,
    FaDraftingCompass,
} from "react-icons/fa"
import Footer from "@/components/Footer"

export default function AIDigitalTransformationPage() {
    const services = [
        {
            title: "Data, Analytics & AI",
            description:
                "Harness the power of AI and advanced analytics to drive data-driven decision-making and improve business agility.",
            icon: <FaChartBar />,
        },
        {
            title: "AI-powered Software Quality",
            description:
                "Automate testing processes with AI, improving accuracy, reliability, and reducing release cycles.",
            icon: <FaCheckCircle />,
        },
        {
            title: "AI-powered CX & Product Quality Analytics",
            description:
                "Leverage AI to analyze customer experience and product quality, delivering actionable insights for growth.",
            icon: <FaBrain />,
        },
        {
            title: "AI-powered Visual Inspection",
            description:
                "Deploy computer vision and AI algorithms to detect defects, optimize quality, and reduce operational costs.",
            icon: <FaEye />,
        },
        {
            title: "Business Analysis & Transformation",
            description:
                "Enable organizations to align IT with business objectives and deliver measurable ROI from transformation initiatives.",
            icon: <FaProjectDiagram />,
        },
        {
            title: "Hyperautomation",
            description:
                "Integrate AI, RPA, and machine learning to automate complex workflows and accelerate digital transformation.",
            icon: <FaRobot />,
        },
        {
            title: "Digital Twin & Digital Thread",
            description:
                "Create virtual replicas of assets and processes to improve design, simulation, and lifecycle management.",
            icon: <FaDraftingCompass />,
        },
        {
            title: "Cloud-based Development",
            description:
                "Accelerate innovation with scalable, secure, and flexible cloud-native development environments.",
            icon: <FaCloud />,
        },
        {
            title: "DevSecOps as a Service",
            description:
                "Embed security seamlessly into the DevOps pipeline to ensure faster, safer, and compliant software delivery.",
            icon: <FaLock />,
        },
        {
            title: "IoT & Edge Computing",
            description:
                "Connect devices, analyze real-time data at the edge, and unlock smart, responsive systems.",
            icon: <FaMicrochip />,
        },
        {
            title: "Advanced UI & User Experience",
            description:
                "Design intuitive, engaging, and intelligent interfaces that enhance customer satisfaction and adoption.",
            icon: <FaDesktop />,
        },
    ]

    return (
        <section className="w-full min-h-screen bg-white overflow-hidden">
            {/* Navigation */}
            <NavigationMenu />


            {/* Hero Section */}
            <div className="w-full h-[75vh] bg-gradient-to-r from-sky-100 to-cyan-200 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
                <div className="text-gray-900 text-3xl md:text-5xl font-semibold max-w-xl mb-10 md:mb-0">
                    AI & Digital Transformation
                </div>

                <div className="relative flex-shrink-0">
                    <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center bg-cyan-300 rounded-md shadow-md skew-x-[-12deg] relative">
                        <FaRobot className="text-white text-5xl md:text-6xl skew-x-12" />
                    </div>
                </div>
            </div>



            {/* About Section */}
            <section className="w-full bg-white py-16 px-6 md:px-16">
                <div className=" text-left">
                    <h2 className="text-teal-600 font-bold text-xl md:text-2xl tracking-wide uppercase mb-6">
                        Accelerating digital journeys with intelligence and automation.          </h2>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        We help leading industries successfully navigate complex digital transformations and deliver measurable ROI. Our services are designed for IT and digital departments, enabling them to better align technology with business operations and unlock new revenue opportunities. By applying advanced AI and digital engineering, we empower enterprises to become more agile, data-driven, and resilient in an ever-evolving market landscape.
                    </p>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Our expertise spans across automation, AI-driven analytics, digital twins, cloud-native development, IoT, and human-centered design. From enhancing customer experience through AI-powered insights to building secure, scalable DevSecOps pipelines, we provide end-to-end solutions that bridge the gap between business strategy and digital execution. Whether optimizing existing operations or driving disruptive innovation, we ensure organizations can thrive in the digital-first economy.
                    </p>
                </div>
            </section>

            {/* Services Cards */}
            <section className="w-full bg-gray-50 py-16 px-6 md:px-16">
                <h3 className="text-center text-teal-600 font-bold text-xl md:text-2xl mb-10 uppercase">
                    Our Digital Transformation Services
                </h3>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6 group hover:bg-teal-600 hover:text-white transition-colors duration-300"
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

            {/* Footer */}
            <Footer />
        </section>
    )
}
