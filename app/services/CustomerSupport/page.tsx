"use client"
import NavigationMenu from "@/components/NavigationMenu"
import React from "react"
import { FaHeadset, FaChartLine, FaCogs, FaMoneyCheckAlt, FaServer } from "react-icons/fa"
import Footer from "@/components/Footer"

export default function CustomerSupportPage() {
    const services = [
        {
            title: "Omnichannel Customer Data Analysis",
            description:
                "Leverage predictive insights from multi-channel data to better understand customer needs and behaviors.",
            icon: <FaChartLine />,
        },
        {
            title: "Predictive Maintenance",
            description:
                "Use advanced analytics and AI to anticipate failures and minimize downtime.",
            icon: <FaCogs />,
        },
        {
            title: "Customer Support & Serial Engineering",
            description:
                "Provide seamless support and engineering services to ensure long-term system reliability.",
            icon: <FaHeadset />,
        },
        {
            title: "Life Cycle Cost Optimisation",
            description:
                "Maximize ROI and reduce the total cost of ownership with tailored cost-optimization strategies.",
            icon: <FaMoneyCheckAlt />,
        },
        {
            title: "Software Monitoring & Maintenance",
            description:
                "Ensure continuous performance, security, and updates with end-to-end software monitoring and maintenance.",
            icon: <FaServer />,
        },
    ]

    return (
        <section className="w-full min-h-screen bg-white overflow-hidden">
            {/* Navigation */}
            <NavigationMenu />

            {/* Hero Section */}
            <div className="w-full h-[75vh] bg-gradient-to-r from-teal-100 to-green-200 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
                <div className="text-gray-900 text-3xl md:text-5xl font-semibold max-w-xl mb-10 md:mb-0">
                    Customer Support & Maintenance
                </div>

                <div className="relative flex-shrink-0">
                    <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center bg-teal-500 rounded-md shadow-md skew-x-[-12deg] relative">
                        <FaHeadset className="text-white text-5xl md:text-6xl skew-x-12" />
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section className="w-full bg-white py-16 px-6 md:px-16">
                <div className="text-left">
                    <h2 className="text-teal-600 font-bold text-xl md:text-2xl tracking-wide uppercase mb-6">
                        Empowering businesses with efficient service and lifecycle optimization.          </h2>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        We enable businesses to improve customer satisfaction and reduce operational costs by combining predictive data analytics with advanced maintenance strategies.
                        Our expertise ensures proactive problem-solving and efficient customer service workflows that minimize downtime and disruptions.
                    </p>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        By integrating automation, serial engineering support, and lifecycle optimization, we help leading manufacturers and service providers
                        deliver exceptional end-user experiences while achieving the lowest Total Cost of Ownership (TCO).
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="w-full bg-gray-50 py-16 px-6 md:px-16">
                <h3 className="text-center text-teal-600 font-bold text-xl md:text-2xl mb-10 uppercase">
                    Our Support & Maintenance Services
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
