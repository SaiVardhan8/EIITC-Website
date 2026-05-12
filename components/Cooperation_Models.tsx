import React, { useState } from 'react';

const CooperationModelsAccordian = () => {
  const [expandedItem, setExpandedItem] = useState(0); // Integration Testing is expanded by default

  const Cooperation_Models = [
    {
      id: 0,
      title: "Testing Teams",
      content: ["Ideal for: complex software solutions such as SaaS platforms, multi-module enterprise software, and complete enterprise IT environments. Edvenswa offers dedicated self-managed testing teams, consisting of a test lead and skilled test engineers, assigned per software module. Our flexible approach allows us to scale the number and composition of testing teams based on the specific requirements of your project. Furthermore, we can provide an additional testing team specialized in test automation to enhance efficiency within your testing project"]
    },
    {
      id: 1,
      title: "Managed Testing Professionals",
      content: ["Ideal for software of medium complexity such as mobile apps and websites, Edvenswa is your trusted QA partner. Our QA company offers experienced and self-managed testing experts with in-depth knowledge of specific industries and software types, such as mobile apps and various CRM systems. With 8-15 years of testing experience, our experts are adept at working independently while delivering exceptional testing performance, ensuring thorough and reliable testing for your software projects."]
    },
    {
      id: 2,
      title: "Testing Team Augmentation",
      content: ["Ideal for companies with experienced QA managers already in place, Edvenswa offers the option to supplement your testing team with individual testing professionals who work under your in-house QA management. This approach allows you to address any gaps in specific technology, industry knowledge, testing types, or regulatory expertise within your existing QA team. By leveraging our skilled professionals, you can enhance your testing capabilities and ensure comprehensive coverage for your projects."]
    }
  ];

  const toggleItem = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white pt-10">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Highlights of Testing Types We Perform at Edvenswa
      </h1>

      {/* Accordion Container */}
      <div className="space-y-0 border border-gray-300 rounded-lg shadow-md">
        {Cooperation_Models.map((item, index) => (
          <div
            key={item.id}
            className={`overflow-hidden ${index !== 0 ? 'border-t border-gray-200' : ''}`}
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between group"
            >
              <div className="flex items-center">
                <div className="mr-4 flex-shrink-0">
                  {expandedItem === item.id ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
                  {item.title}
                </h3>
              </div>
            </button>

            {/* Accordion Content */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                expandedItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-6 py-6 bg-white border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed text-base">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action */}

      {/* Floating Action Button */}
      {/* <div className="fixed bottom-8 right-8">
        <button className="w-14 h-14 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition-colors duration-300 flex items-center justify-center group">
          <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default CooperationModelsAccordian;