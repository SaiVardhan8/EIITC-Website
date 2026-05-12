"use client";
import React from "react";
import Link from "next/link";
import TechNavigation from "@/components/TechNavigation";
import Footer from "@/components/Footer";
import PageMetadata from "@/components/PageMetaData";
import ContactForm from '@/components/ContactForm';

const cards = [
  { title: "Board of Directors", image: "/img/investors/board of directors.jpg", href: "/Investors/board-of-directors" },
  { title: "Financials", image: "/img/investors/financials.jpg", href: "/Investors/financials" },
  { title: "Contacts", image: "/img/investors/contacts2.jpg", href: "/Investors/contacts" },
  { title: "Rights Issue", image: "/img/investors/Rights issue2.png", href: "/Investors/rights-issue" },
  { title: "Policies", image: "/img/investors/Policies.png", href: "/Investors/policies" },
  { title: "Annual Reports", image: "/img/investors/AnnualReports.png", href: "/Investors/annual-reports" },
  { title: "Preferential Issue", image: "/img/investors/Rights issue2.png", href: "/Investors/preferential-issue" },
];

export default function Investors() {
  return (
    <section>
      <TechNavigation />
      <PageMetadata
        title="Investors - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center py-12 px-4">
          <h2 className="text-teal-600 text-xl font-semibold italic">Investors</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto my-6"></div>
        </div>

        {/* Row (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, idx) => (
            <Link href={card.href} key={idx}>
              <div className="bg-white shadow-md hover:shadow-lg transition overflow-hidden aspect-square w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-3/4 object-cover"
                />
                <div className="h-1/4 flex items-center justify-center px-2 bg-white">
                  <h2 className="text-center text-base font-semibold">
                    {card.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-4">
                <ContactForm />
            </div>

      <Footer />
    </section>
  );
}
