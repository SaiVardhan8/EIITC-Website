"use client"
import NavigationMenu from "@/components/NavigationMenu"
import React from "react"
import { FaCheckCircle, FaClipboardList, FaBug, FaCogs, FaClipboardCheck, FaLaptopCode } from "react-icons/fa"
import Footer from "@/components/Footer"

export default function QualityTestingPage() {
    const services = [
        {
            title: "Quality Management Systems",
            description:
                "Design and implement robust quality management frameworks that align with international standards.",
            icon: <FaClipboardList />,
        },
        {
            title: "Programme & Project Quality",
            description:
                "Ensure project success with dedicated quality assurance across the entire programme lifecycle.",
            icon: <FaClipboardCheck />,
        },
        {
            title: "Product Testing & Validation",
            description:
                "Conduct thorough testing and validation to guarantee products meet performance and safety requirements.",
            icon: <FaCheckCircle />,
        },
        {
            title: "Manufacturing Quality",
            description:
                "Maintain world-class manufacturing standards by applying rigorous quality control methods.",
            icon: <FaCogs />,
        },
        {
            title: "Software Quality Assurance",
            description:
                "Deliver bug-free, reliable applications through structured quality assurance practices.",
            icon: <FaBug />,
        },
        {
            title: "Software Quality Engineering",
            description:
                "Implement modern testing frameworks and automation for continuous software quality improvement.",
            icon: <FaLaptopCode />,
        },
    ]

    return (
        <section className="w-full min-h-screen bg-white overflow-hidden">
            {/* Navigation */}
            <NavigationMenu />

            {/* Hero Section */}
            <div className="w-full h-[75vh] bg-gradient-to-r from-blue-100 to-indigo-200 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
                <div className="text-gray-900 text-3xl md:text-5xl font-semibold max-w-xl mb-10 md:mb-0">
                    Quality & Testing
                </div>

                <div className="relative flex-shrink-0">
                    <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center bg-indigo-500 rounded-md shadow-md skew-x-[-12deg] relative">
                        <FaCheckCircle className="text-white text-5xl md:text-6xl skew-x-12" />
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section className="w-full bg-white py-16 px-6 md:px-16">
                <div className="text-left">
                    <h2 className="text-teal-600 font-bold text-xl md:text-2xl tracking-wide uppercase mb-6">
                        Delivering bug-free, high-performing products and applications.          </h2>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        We support our clients through every stage of the product lifecycle — from design and build to operations.
                        Our mission is to embed strong quality practices that enable organizations to consistently deliver products
                        and applications that exceed expectations.
                    </p>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        By combining modern testing frameworks, automation, and proven quality assurance methodologies,
                        we help companies create flawless products and bug-free software. Whether in manufacturing or IT,
                        our expertise ensures resilience, compliance, and customer satisfaction.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="w-full bg-gray-50 py-16 px-6 md:px-16">
                <h3 className="text-center text-teal-600 font-bold text-xl md:text-2xl mb-10 uppercase">
                    Our Quality & Testing Services
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
