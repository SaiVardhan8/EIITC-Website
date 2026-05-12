// Accordion.tsx
import React, { useState } from 'react';

// Define the types for the component props
interface RecordItem {
  id: number;
  title: string;
  content: string[];
}

interface RecordsProps {
  title?: string;
  items?: RecordItem[];
  defaultExpandedId?: number | null;
}

const Records: React.FC<RecordsProps> = ({ title, items = [], defaultExpandedId = null }) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(defaultExpandedId);

  const toggleItem = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="max-w-8xl mx-auto p-6 bg-white pt-10 px-10">
      {title && (
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {title}
        </h1>
      )}

      <div className="space-y-0 border border-gray-300 rounded-lg shadow-md">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`overflow-hidden ${index !== 0 ? 'border-t border-gray-200' : ''}`}
          >
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

            <div
              className={`transition-all duration-300 ease-in-out ${
                expandedItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-6 py-6 bg-white border-t border-gray-100">
                {Array.isArray(item.content) ? (
                  <ul className="list-disc pl-6 text-gray-700 leading-relaxed text-base">
                    {item.content.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 leading-relaxed text-base">
                    {item.content}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Records;