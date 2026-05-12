"use client";
import Image from "next/image";

export default function IndustriesSection() {
  const industries = [
    "/s1.jpg",
    "/s2.jpg",
    "/s3.jpg",
    "/s4.jpg",
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left - Images */}
        <div className="grid grid-cols-2 gap-4 relative">
          {/* Thumbnails */}
          {industries.map((src, i) => (
            <div key={i} className="relative group">
              <Image
                src={src}
                alt={`Industry ${i + 2}`}
                width={300}
                height={200}
                className="rounded-lg shadow-md object-cover w-full h-full group-hover:opacity-80 transition ease-out"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition rounded-lg flex items-center justify-center text-white font-medium">
                View
              </div>
            </div>
          ))}
        </div>

        {/* Right - Content */}
        <div className="space-y-6">
          <p className="text-teal-600 font-semibold uppercase tracking-wide">SERVICES</p>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            We partner with industry leaders to design, build, and manage transformative products and services shaping the future.
          </h2>
          <p className="text-gray-600 text-lg">
            We accelerate innovation across every stage of your value chain, driving impactful results.
          </p>
          <button className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition">
            Discover Our Services →
          </button>
        </div>
      </div>
    </section>
  );
}
