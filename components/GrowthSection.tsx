import React from 'react';

const GrowthSection: React.FC = () => {
  return (
    <section className="py-12 px-4 border-t border-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl text-brand-teal font-semibold mb-4 text-teal-500">
          Edvenswa - New Destination for Growth
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              At Edvenswa, we believe in fostering an environment where every individual&apos;s potential can be driven and developed. Being a global company we proudly exemplifies the amalgamation of diverse perspectives. We encourage open communication, innovative thinking, continuous improvement, collective contributions, and exceptional talent that our employees bring to their roles. This collective mechanism is guided by our values of integrity, accountability, and excellence. We place a crucial in defining our reputation and contributing to our overall success as a company.
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              We&apos;re dedicated to providing our employees with the tools they need and the opportunity to thrive in your career, whether it&apos;s within your local community or across international borders. At an organization like Edvenswa, we foster growth by encouraging entrance diverse cultures, traditions, and professional journeys, enabling you to broaden your horizons and gain the invaluable advantage of global exposure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;