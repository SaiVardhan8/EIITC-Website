import React, { useState } from 'react';

const TestingTypesAccordion = () => {
  const [expandedItem, setExpandedItem] = useState(0); // Integration Testing is expanded by default

  const testingTypes = [
    {
      id: 0,
      title: "Functionality Testing",
      content: "Edvenswa specializes in comprehensive functional testing services to ensure the flawless performance of your software applications. Our experienced testing team meticulously verifies and validates each functionality, feature, and component to guarantee optimal functionality and user experience. With a focus on precision and thoroughness, Edvenswa’s functional testing solutions provide peace of mind and confidence in the reliability of your software."
    },
    {
      id: 1,
      title: "Integration Testing",
      content: "Edvenswa specializes in integration testing, a crucial aspect of software development. Our dedicated integration testing team ensures seamless compatibility and smooth interaction between various components and systems within your software ecosystem. We meticulously validate data transfers, API integrations, and overall system behavior to identify and address any potential issues or bottlenecks. By conducting comprehensive integration testing, we ensure the robustness and reliability of your software solution."
    },
    {
      id: 2,
      title: "Compatibility Testing",
      content: "Edvenswa specializes in Compatibility Testing to ensure seamless performance across different platforms, devices, and software configurations. Our dedicated team rigorously tests your applications to identify any compatibility issues that may arise. We cover a wide range of compatibility scenarios, including operating systems, browsers, hardware, and software versions. By conducting thorough compatibility testing, we help you deliver a consistent and reliable user experience across diverse environments."
    },
    {
      id: 3,
      title: "Accessibility Testing",
      content: "Edvenswa specializes in Accessibility Testing, ensuring that your digital products and services are inclusive and accessible to all users. We employ industry best practices and adhere to international accessibility standards to identify and address potential barriers. Our team of experts conducts comprehensive evaluations, providing actionable recommendations to enhance the accessibility of your website or application. By prioritizing accessibility, we help you reach a broader audience, comply with regulations, and demonstrate a commitment to inclusivity."
    },
    {
      id: 4,
      title: "Regression Testing",
      content: "At Edvenswa, we understand the critical importance of regression testing in ensuring the stability and reliability of software systems. Our dedicated regression testing services enable us to thoroughly assess the impact of changes made to your software, ensuring that existing functionalities remain intact. By meticulously identifying and fixing any regression issues, we help you maintain a robust and error-free software solution. With our expertise and comprehensive regression testing approach, you can confidently release updates and enhancements to your software while mitigating risks and maximizing user satisfaction."
    },
    {
      id: 5,
      title: "Exploratory Testing",
      content: "Discover the true potential of your software with Edvenswa’s Exploratory Testing services. Our experienced testers employ a flexible and intuitive approach to uncover hidden defects, identify usability issues, and evaluate overall system behavior. By diving deep into your application, we go beyond scripted tests to simulate real-world user interactions and provide valuable insights. With Edvenswa’s Exploratory Testing, you can ensure optimal software quality and enhance the user experience."
    },
    {
      id: 6,
      title: "Testing of Newly Introduce Software Functions",
      content: "At Edvenswa, we specialize in testing newly introduced software functions with precision and expertise. Our dedicated team of testing professionals ensures that every aspect of your software’s new functions is thoroughly evaluated for functionality, performance, and reliability. With our rigorous testing processes, we provide you with actionable insights and recommendations to enhance the quality and user experience of your software. Trust Edvenswa to validate and optimize the performance of your newly introduced software functions, allowing you to deliver a seamless and robust product to your users."
    },
    {
      id: 7,
      title: "Performance Testing",
      content: "Experience unparalleled software performance with Edvenswa’s comprehensive performance testing services. Our expert team specializes in meticulously evaluating and optimizing the performance of your applications, ensuring they can handle heavy workloads and deliver exceptional user experiences. With a focus on scalability, responsiveness, and stability, we conduct rigorous performance testing to identify bottlenecks, optimize resource utilization, and enhance overall system efficiency. Trust Edvenswa to help you achieve peak performance, exceed user expectations, and drive business success."
    },
    {
        id: 8,
        title: "Security Testing",
        content: "Ensure the utmost security of your software with Edvenswa’s comprehensive security testing services. Our experienced team of security experts meticulously assesses your applications, identifying vulnerabilities and potential risks. We employ cutting-edge tools and methodologies to perform thorough penetration testing, code reviews, and vulnerability assessments. With our tailored security testing approach, we help safeguard your systems, protect sensitive data, and provide you with the confidence to face today’s evolving cyber threats."
    },
    {
        id: 9,
        title: "Usability Testing",
        content: "At Edvenswa, we understand the critical role of usability in creating exceptional user experiences. Our usability testing services are designed to ensure that your software or digital products are intuitive, user-friendly, and meet the needs of your target audience.Our experienced usability testing experts meticulously analyze user interactions and behavior, identifying pain points, usability issues, and areas for improvement. Through comprehensive testing scenarios and user feedback, we provide valuable insights that help optimize your product’s design and functionality.With Edvenswa’s usability testing, you can enhance customer satisfaction, increase engagement, and drive business success by delivering a seamless and enjoyable user experience."
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
        {testingTypes.map((item, index) => (
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
      
    </div>
  );
};

export default TestingTypesAccordion;