"use client"
import React from "react";

import { FaLightbulb, FaFlask, FaLeaf, FaRocket, FaBolt, FaCar, FaChargingStation } from "react-icons/fa"

const services = [
  {
    title: "Design Thinking & Lean Startup",
    description: "Empower teams to rapidly validate ideas, reduce risk, and deliver solutions customers actually need.",
    icon: <FaLightbulb className="text-3xl text-teal-600" />,
  },
  {
    title: "Innovation Lab",
    description: "Hands-on experimental lab space that fosters creativity, prototyping, and fast innovation cycles.",
    icon: <FaFlask className="text-3xl text-teal-600" />,
  },
  {
    title: "Sustainable Design & Lifecycle Assessment",
    description: "Integrate sustainability from the start — optimize materials, reduce waste, and build eco-friendly products.",
    icon: <FaLeaf className="text-3xl text-teal-600" />,
  },
  {
    title: "Go-to-Market Strategies",
    description: "Define commercialization strategies that accelerate product launch and ensure market success.",
    icon: <FaRocket className="text-3xl text-teal-600" />,
  },
  {
    title: "Hydrogen & Energy Solutions",
    description: "Innovating renewable and hydrogen-based energy systems for a clean and sustainable future.",
    icon: <FaBolt className="text-3xl text-teal-600" />,
  },
  {
    title: "Autonomous Mobility",
    description: "Advancing self-driving technologies, smart infrastructure, and next-gen transport solutions.",
    icon: <FaCar className="text-3xl text-teal-600" />,
  },
  {
    title: "E-Mobility",
    description: "Electrification of transport with EV design, charging infrastructure, and sustainable mobility services.",
    icon: <FaChargingStation className="text-3xl text-teal-600" />,
  },
]

export default function InnovationServices() {
  return (
    <section className="bg-teal-50 py-16 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          With expertise across innovation, sustainability, and mobility, we help R&T managers
          accelerate go-to-market innovations and achieve Sustainable Development Goals (SDGs).
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md p-6 hover:bg-teal-600 transition-colors duration-300"
          >
            <div className="mb-4">
              {React.cloneElement(service.icon, {
                className:
                  "text-3xl text-teal-600 transition-colors duration-300 group-hover:text-white",
              })}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-white">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
