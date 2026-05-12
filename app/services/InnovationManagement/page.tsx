"use client"
import NavigationMenu from "@/components/NavigationMenu"
import React from "react"
import { FaLightbulb, FaFlask, FaLeaf, FaRocket, FaBolt, FaCar, FaChargingStation } from "react-icons/fa"
import Footer from "@/components/Footer"

export default function InnovationsPage() {
  const services = [
    {
      title: "Design Thinking & Lean Startup",
      description:
        "Empower teams to rapidly validate ideas, reduce risk, and deliver solutions customers actually need.",
      icon: <FaLightbulb />,
    },
    {
      title: "Innovation Lab",
      description:
        "Hands-on experimental lab space that fosters creativity, prototyping, and fast innovation cycles.",
      icon: <FaFlask />,
    },
    {
      title: "Sustainable Design & Lifecycle Assessment",
      description:
        "Integrate sustainability from the start — optimize materials, reduce waste, and build eco-friendly products.",
      icon: <FaLeaf />,
    },
    {
      title: "Go-to-Market Strategies",
      description:
        "Define commercialization strategies that accelerate product launch and ensure market success.",
      icon: <FaRocket />,
    },
    {
      title: "Hydrogen & Energy Solutions",
      description:
        "Innovating renewable and hydrogen-based energy systems for a clean and sustainable future.",
      icon: <FaBolt />,
    },
    {
      title: "Autonomous Mobility",
      description:
        "Advancing self-driving technologies, smart infrastructure, and next-gen transport solutions.",
      icon: <FaCar />,
    },
    {
      title: "E-Mobility",
      description:
        "Electrification of transport with EV design, charging infrastructure, and sustainable mobility services.",
      icon: <FaChargingStation />,
    },
  ]

  return (
    <section className="w-full min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <NavigationMenu />

      {/* Hero Section */}
      <div className="w-full h-[75vh] bg-gradient-to-r from-violet-100 to-indigo-200 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
        <div className="text-gray-900 text-3xl md:text-5xl font-semibold max-w-xl mb-10 md:mb-0">
          Innovation Management & Solutions
        </div>

        <div className="relative flex-shrink-0">
          <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center bg-indigo-300 rounded-md shadow-md skew-x-[-12deg] relative">
            <FaLightbulb className="text-white text-5xl md:text-6xl skew-x-12" />
          </div>
        </div>
      </div>


      {/* About Section */}
      <section className="w-full bg-white py-16 px-6 md:px-16">
        <div className=" text-left">
          <h2 className="text-teal-600 font-bold text-xl md:text-2xl tracking-wide uppercase mb-6">
            Innovation that powers growth and future-readiness.          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            With our open innovation approach and cross-functional engineering-technology expertise, we help R&T managers accelerate go-to-market
            innovations, stay ahead of the competition, and achieve Sustainable Development Goals (SDGs). Our philosophy is rooted in collaboration,
            experimentation, and sustainability. We believe innovation is no longer limited to internal R&D departments but thrives when organizations
            actively co-create with partners, startups, research institutes, and customers. This enables a faster, more efficient, and more impactful pathway
            to developing transformative solutions.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            In today’s competitive environment, companies must continually adapt to emerging trends, disruptive technologies, and shifting customer needs.
            Our approach ensures that innovation initiatives are not only aligned with business goals but also embedded within broader societal priorities such as
            climate responsibility, clean energy, mobility, and digital transformation. By leveraging design thinking, lean startup methodologies, and agile frameworks,
            we empower teams to test, validate, and refine ideas quickly. This reduces development risks and provides clear visibility into which solutions are scalable and commercially viable.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="w-full bg-gray-50 py-16 px-6 md:px-16">
        <h3 className="text-center text-teal-600 font-bold text-xl md:text-2xl mb-10 uppercase">
          Our Innovation Services
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
