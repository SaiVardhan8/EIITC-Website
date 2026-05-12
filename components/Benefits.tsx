import React from 'react';
import Link from 'next/link';

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Competitive salaries and benefits packages recognizing your valuable contributions."
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hours, options, and supportive environment."
    },
    {
      title: "Professional Development",
      description: "Extensive training programs, mentorship, and advancement opportunities."
    },
    {
      title: "Global Exposure",
      description: "Interaction with global teams and markets with diverse teams."
    },
    {
      title: "Collaboration and Teamwork",
      description: "Open communication and feedback channels. Working together in a supportive environment to drive growth."
    },
    {
      title: "Employee Support Programs",
      description: "Health and wellness initiatives and counseling services."
    },
    {
      title: "Growth Opportunities",
      description: "Internal promotions, cross-functional training, and skill development through challenging projects."
    },
    {
      title: "Fun events",
      description: "Regular team building and other fun events with the team."
    }
  ];

  return (
    <section className="py-12 bg-teal-100 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Best-in-class benefits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/JobPostings" className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
            Explore Open Positions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Benefits;