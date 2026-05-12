"use client"
import NavigationMenu from "@/components/NavigationMenu"
import React from "react"
import { FaIndustry, FaCogs, FaChartLine, FaWrench, FaShippingFast, FaProjectDiagram, FaLeaf } from "react-icons/fa"
import Footer from "@/components/Footer"

export default function ManufacturingPage() {
    const services = [
        {
            title: "Industry 4.0 Implementation",
            description:
                "Transform operations with IoT, automation, and smart manufacturing technologies.",
            icon: <FaIndustry />,
        },
        {
            title: "Data-driven Manufacturing",
            description:
                "Leverage analytics and real-time monitoring to optimize production and reduce costs.",
            icon: <FaChartLine />,
        },
        {
            title: "Manufacturing Engineering",
            description:
                "Design, analyze, and improve manufacturing processes for efficiency and quality.",
            icon: <FaCogs />,
        },
        {
            title: "Mechanical Tooling Solutions",
            description:
                "Provide robust and reliable tooling solutions that enable precision manufacturing.",
            icon: <FaWrench />,
        },
        {
            title: "Supply Chain Excellence",
            description:
                "Build resilient, agile supply chains that ensure on-time, cost-effective delivery.",
            icon: <FaShippingFast />,
        },
        {
            title: "Predictive Analytics",
            description:
                "Apply advanced analytics to forecast demand, reduce downtime, and streamline supply chains.",
            icon: <FaProjectDiagram />,
        },
        {
            title: "Environment, Health & Safety Operations",
            description:
                "Ensure compliance, workplace safety, and sustainable practices in operations.",
            icon: <FaLeaf />,
        },
    ]

    return (
        <section className="w-full min-h-screen bg-white overflow-hidden">
            {/* Navigation */}
            <NavigationMenu />

            {/* Hero Section */}
            <div className="w-full h-[75vh] bg-gradient-to-r from-red-100 to-orange-200 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
                <div className="text-gray-900 text-3xl md:text-5xl font-semibold max-w-xl mb-10 md:mb-0">
                    Manufacturing & Supply Chain
                </div>

                <div className="relative flex-shrink-0">
                    <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center bg-red-500 rounded-md shadow-md skew-x-[-12deg] relative">
                        <FaIndustry className="text-white text-5xl md:text-6xl skew-x-12" />
                    </div>
                </div>
            </div>


            {/* About Section */}
            <section className="w-full bg-white py-16 px-6 md:px-16">
                <div className=" text-left">
                    <h2 className="text-teal-600 font-bold text-xl md:text-2xl tracking-wide uppercase mb-6">
                        Optimizing manufacturing and supply chains for agility and resilience.          </h2>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        Our consultants and engineers help manufacturing companies achieve superior performance by securing supply chains and designing efficient tools
                        and processes for operations. We combine advanced technologies, data-driven strategies, and industry expertise to empower businesses with resilient
                        and future-ready operations. From Industry 4.0 adoption to predictive analytics, we ensure seamless transformation and operational excellence.
                    </p>
                </div>
            </section>

            {/* Services Cards */}
            <section className="w-full bg-gray-50 py-16 px-6 md:px-16">
                <h3 className="text-center text-teal-600 font-bold text-xl md:text-2xl mb-10 uppercase">
                    Our Manufacturing & Supply Chain Services
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
