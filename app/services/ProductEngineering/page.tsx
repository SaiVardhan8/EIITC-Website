"use client"
import NavigationMenu from "@/components/NavigationMenu"
import React from "react"
import { FaCogs, FaCube, FaDraftingCompass, FaMicrochip, FaProjectDiagram, FaShieldAlt, FaStream, FaIndustry } from "react-icons/fa"
import Footer from "@/components/Footer"

export default function ProductEngineeringPage() {
    const services = [
        {
            title: "Model-based Systems Engineering",
            description:
                "Streamline product development with model-driven approaches that enhance design accuracy and system validation.",
            icon: <FaProjectDiagram />,
        },
        {
            title: "Advanced Materials & Processes",
            description:
                "Innovating lightweight, durable, and sustainable materials with cutting-edge manufacturing techniques.",
            icon: <FaCube />,
        },
        {
            title: "Mechanical Product Design & Engineering",
            description:
                "Comprehensive mechanical design solutions that meet performance, safety, and compliance standards.",
            icon: <FaDraftingCompass />,
        },
        {
            title: "Embedded Systems & Software",
            description:
                "Developing reliable embedded software and electronics to power intelligent, connected products.",
            icon: <FaMicrochip />,
        },
        {
            title: "FPGA & Electronics",
            description:
                "Design and verification of FPGA and advanced electronics for high-performance applications.",
            icon: <FaCogs />,
        },
        {
            title: "RAMS & ILS Engineering",
            description:
                "Ensuring reliability, availability, maintainability, and safety while reducing lifecycle costs.",
            icon: <FaStream />,
        },
        {
            title: "Product & OT Cybersecurity",
            description:
                "Protecting connected systems and critical infrastructures with resilient cybersecurity solutions.",
            icon: <FaShieldAlt />,
        },
        {
            title: "Product & Process Lifecycle Management",
            description:
                "End-to-end lifecycle management that improves efficiency, traceability, and regulatory compliance.",
            icon: <FaIndustry />,
        },
    ]

    return (
        <section className="w-full min-h-screen bg-white overflow-hidden">
            {/* Navigation */}
            <NavigationMenu />

            {/* Hero Section */}
            <div className="w-full h-[75vh] bg-gradient-to-r from-blue-100 to-cyan-200 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
                <div className="text-gray-900 text-3xl md:text-5xl font-semibold max-w-xl mb-10 md:mb-0">
                    Product Engineering
                </div>

                <div className="relative flex-shrink-0">
                    <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center bg-cyan-400 rounded-md shadow-md skew-x-[-12deg] relative">
                        <FaCogs className="text-white text-5xl md:text-6xl skew-x-12" />
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section className="w-full bg-white py-16 px-6 md:px-16">
                <div className="text-left">
                    <h2 className="text-teal-600 font-bold text-xl md:text-2xl tracking-wide uppercase mb-6">
                        Transforming ideas into market-ready, future-proof products.          </h2>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        We deliver comprehensive product engineering services to the automotive, aerospace, defence, railway, and energy industries. From concept design to
                        certification, our cross-functional teams ensure reliable, on-time, and cost-effective delivery of products that meet stringent end-user and regulatory
                        requirements.
                    </p>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        By combining expertise in mechanical, electrical, and digital engineering, we support our clients through every stage of the product lifecycle.
                        Whether it's creating innovative materials, developing embedded systems, or implementing product cybersecurity, we help businesses bring high-quality,
                        market-ready solutions to life while meeting the challenges of modern industry standards.
                    </p>
                </div>
            </section>

            {/* Services Cards */}
            <section className="w-full bg-gray-50 py-16 px-6 md:px-16">
                <h3 className="text-center text-teal-600 font-bold text-xl md:text-2xl mb-10 uppercase">
                    Our Product Engineering Services
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
