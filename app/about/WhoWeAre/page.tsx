"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Users, Euro, Building, Phone } from "lucide-react";
import NavigationMenu from "@/components/NavigationMenu";
import { Plane, Car, Zap, Hospital, CreditCard, Cpu } from "lucide-react";
import Footer from "@/components/Footer";

export default function WhoWeAre() {
    // Counter animation
    const [experts, setExperts] = useState(0);
    const [countries, setCountries] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const industries = [
        { name: "Aerospace", icon: Plane },
        { name: "Automotive", icon: Car },
        { name: "Energy", icon: Zap },
        { name: "Healthcare", icon: Hospital },
        { name: "Finance", icon: CreditCard },
        { name: "Technology", icon: Cpu },
    ];

    useEffect(() => {
        let exp = 0, ctry = 0, rev = 0;
        const interval = setInterval(() => {
            if (exp < 19000) exp += 500;
            if (ctry < 30) ctry += 1;
            if (rev < 1.4) rev += 0.1;
            setExperts(exp);
            setCountries(ctry);
            setRevenue(Number(rev.toFixed(1)));
        }, 80);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <NavigationMenu />
            <div className="font-sans text-gray-800">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-teal-600 to-green-200 text-white py-20 px-6 text-center">
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                        AT A GLANCE
                    </p>
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Who We Are
                    </motion.h1>
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                        A trusted partner for your innovation journey. As a global engineering, technology and consulting service provider, Expleo is ideally positioned to help you achieve your ambitions and future-proof your business. With a smart blend of bold thinking and reliable execution, we’re able to fast-track innovation through each step of your value chain.
                    </p>
                    {/* <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl shadow-md font-semibold hover:bg-gray-100 transition">
          Discover Our Story
        </button> */}
                </section>

                {/* Strength in Numbers */}
                <section className="py-16 px-6 bg-gray-50">
                    <h2 className="text-3xl font-bold text-center mb-12">Strength in Numbers</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white rounded-2xl shadow p-8">
                            <Users className="mx-auto mb-4 text-blue-600" size={40} />
                            <h3 className="text-2xl font-bold">{experts}+</h3>
                            <p>Innovation-driven experts</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-8">
                            <Globe className="mx-auto mb-4 text-purple-600" size={40} />
                            <h3 className="text-2xl font-bold">{countries}+</h3>
                            <p>Countries in action</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-8">
                            <Euro className="mx-auto mb-4 text-green-600" size={40} />
                            <h3 className="text-2xl font-bold">€{revenue}bn</h3>
                            <p>Revenue</p>
                        </div>
                    </div>
                </section>

                                <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                            Strategically positioned to <span className="text-indigo-600">build value</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                            With strong pan-European presence and worldwide excellence centres,
                            we deliver best-in-class technological solutions. Wherever you are,
                            whatever your challenge, we’re as global and local as you need us to be.
                        </p>

                        {/* Button */}
                        <div className="mb-12">
                            <a
                                href="#locations"
                                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
                            >
                                Click here to see our locations
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </div>

                        {/* Map Section */}
                        <div className="relative flex justify-center">
                            <Image
                                src="/worldmap.jpg" // replace with your map image/svg
                                alt="Global Locations"
                                width={900}
                                height={500}
                                className="rounded-2xl shadow-xl"
                            />
                            {/* Optional glowing dots for active locations */}
                            <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-indigo-500 rounded-full animate-ping"></div>
                            <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-indigo-500 rounded-full animate-ping"></div>
                        </div>
                    </div>
                </section>

                {/* Industries */}
<section className="relative bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* <Image
          src="/Banner1.jpg" // your image path
          alt="City Skyline"
          fill
          className="object-cover brightness-75"
          priority
        /> */}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Block */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-teal-400 uppercase">
            Industries
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
            Take advantage of <span className="text-teal-400">our expertise</span> 
            across industries
          </h1>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Benefit from our deep sector knowledge in fields like AI engineering, 
            cybersecurity, hyper-automation, and data science. We’re committed 
            to sustainable, secure, and ethical practices that create real value.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="#industries"
              className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-teal-400 transition"
            >
              Explore Industries <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Optional Decorative Image/Stats */}
        <div className="hidden md:block">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-teal-400">Key Sectors</h3>
            <ul className="mt-4 space-y-3 text-gray-200">
              <li>✔ Artificial Intelligence</li>
              <li>✔ Cybersecurity</li>
              <li>✔ Hyper-Automation</li>
              <li>✔ Data Science</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

                {/* Services */}
                <section className="bg-gray-50 py-16 px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                        {[
                            "Innovation Management & Solutions",
                            "Transformation Consultancy",
                            "Digital Transformation",
                            "Product Engineering",
                            "Manufacturing & Supply Chain",
                            "Quality & Testing",
                            "Customer Support & Maintenance",
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                className="bg-white rounded-2xl shadow p-6 hover:bg-blue-50 transition"
                                whileHover={{ scale: 1.03 }}
                            >
                                <h3 className="font-semibold text-lg">{service}</h3>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Contact Form */}
                <section className="py-20 px-6 bg-white">
                    <h2 className="text-3xl font-bold text-center mb-8">Let’s Talk</h2>
                    <p className="text-center text-gray-600 mb-12">
                        Want to learn more about Expleo? Fill out the form below and we’ll be in touch.
                    </p>
                    <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl shadow p-8">
                        <form className="grid md:grid-cols-2 gap-6">
                            <input type="text" placeholder="First Name" className="p-3 rounded-lg border" />
                            <input type="text" placeholder="Last Name" className="p-3 rounded-lg border" />
                            <input type="text" placeholder="Country" className="p-3 rounded-lg border" />
                            <input type="text" placeholder="Company" className="p-3 rounded-lg border" />
                            <input type="text" placeholder="Industry" className="p-3 rounded-lg border" />
                            <input type="text" placeholder="Reason for Contact" className="p-3 rounded-lg border" />
                            <textarea
                                placeholder="Message"
                                className="p-3 rounded-lg border md:col-span-2 h-28"
                            ></textarea>
                            <button className="md:col-span-2 bg-blue-600 text-white py-3 rounded-xl shadow hover:bg-blue-700 transition">
                                Get in Touch
                            </button>
                        </form>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
