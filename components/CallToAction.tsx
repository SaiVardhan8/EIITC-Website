import React from 'react';
import Link from 'next/link';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 px-4 border-t border-gray-200">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">Come on board! Learn more about Edvenswa</h2>
        <p className="text-gray-700 mb-8">
          Join our dynamic team and be part of a company that values innovative thinking, client satisfaction, continuous learning, and fostering personal growth. Experience a place where your ideas matter.
        </p>
        <Link href="/about" className="bg-brand-teal text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
          Learn more about us
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
