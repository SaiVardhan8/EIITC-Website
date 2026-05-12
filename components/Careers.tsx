import React from "react";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2">
          <h4 className="text-teal-600 font-semibold uppercase tracking-wide">
            Careers
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
            We are home to bold and reliable minds
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At Edvenswa, we are the nucleus of bold visionaries and dependable experts. Our teams embody the perfect balance – 
            the yin and yang of innovation and precision – thriving together through collaboration and smart execution. Here, 
            audacity and reliability are not opposites; they are our winning strategy.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            If you are ready to rise to the challenge and redefine possibilities, this is your place to thrive.
          </p>
          <button className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition">
            Join Us →
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/career.jpg" // replace with your image
            alt="Our Services"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
