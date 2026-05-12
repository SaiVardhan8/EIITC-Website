import React from 'react';

const SoftwarePortfolio = () => {
  const portfolioSections = [
    {
      title: "Business & Project Management",
      items: [
        "ERP",
        "Project management",
        "Task management",
        "Risk and issue management",
        "Compliance management",
        "Document management"
      ]
    },
    {
      title: "Sourcing & Stock Management",
      items: [
        "Procurement management software",
        "Vendor management",
        "Transportation management",
        "Supply chain management",
        "Inventory management",
        "Warehouse management"
      ]
    },
    {
      title: "Asset Management",
      items: [
        "Asset utilization planning and control",
        "Remote asset monitoring",
        "MRO, including predictive maintenance, AR for maintenance",
        "Asset warranty and contract management"
      ]
    },
    {
      title: "Sales, Marketing & Customer Service",
      items: [
        "Customer relationship management",
        "Sales & marketing automation tools",
        "AdTech & MarTech",
        "Online catalogs",
        "Order management",
        "Customer feedback tools",
        "Promotions management software"
      ]
    },
    {
      title: "Corporate Finance Management",
      items: [
        "Financial accounting and reporting",
        "General ledger software. Accounts receivable automation software",
        "Billing and invoicing. Cost control software",
        "Revenue management software",
        "Pricing software",
        "Treasury management",
        "Cash management systems"
      ]
    },
    {
      title: "Business Analytics",
      items: [
        "BI solutions (DW/ris, OLAP/ROLAP cubes, visualization and reporting)",
        "Big data solutions",
        "Data science (including AI and ML) solutions"
      ]
    },
    {
      title: "HR, Talent & Productivity Management",
      items: [
        "HR policy management",
        "Recruitment management",
        "Onboarding management",
        "Workforce scheduling",
        "Employee performance monitoring",
        "Compensation & benefits management",
        "Corporate learning and development systems",
        "Central employee Help Desk"
      ]
    },
    {
      title: "Communication",
      items: [
        "Project team collaboration tools",
        "Secure messengers",
        "Secure videoconferencing. Intranets",
        "Vendor portals",
        "Customer portals",
        "Partner portals"
      ]
    },
    {
      title: "Security & Emergency",
      items: [
        "Information security systems",
        "Video surveillance",
        "Incident management systems",
        "Emergency response systems"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-gray-800 rounded-full text-sm font-medium mb-8 border border-gray-700">
            OUR PORTFOLIO
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            60+ Software Types in Our Portfolio
          </h1>
          
          <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
            Along with the deep knowledge of software architecting and coding principles, we have accumulated vast domain experience and understanding of the context that our software operates in.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolioSections.map((section, index) => (
            <div key={index} className="group">
              {/* Section Header */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {section.title}
                </h2>
                <div className="w-12 h-0.5 bg-cyan-400"></div>
              </div>

              {/* Items List */}
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="flex items-start text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0 opacity-70"></div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="mt-20 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg">
            Explore Our Full Portfolio
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div> */}
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600 rounded-full opacity-5 blur-3xl"></div>
      </div>
    </div>
  );
};

export default SoftwarePortfolio;