'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TechNavigation from '@/components/TechNavigation';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PageMetadata from '@/components/PageMetaData';


interface Documents {
  id: string;
  doc_uuid: string;
  doc_title: string;
  doc_full_url: string;
  created_at: string;
  doc_type: string;
  web_url: string;
  action_type: string;
}

const FinancialsPage = () => {
  const [activeTab, setActiveTab] = useState('Annual report');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [annualreports, Setannualreports] = useState<Documents[]>([]);
  const [quaterlyannouncements, Setquaterlyannouncements] = useState<Documents[]>([]);
  const [shareholding, Setshareholding] = useState<Documents[]>([]);
  const [announcements_2023, Setannouncements_2023] = useState<Documents[]>([]);
  const [announcements_2024, Setannouncements_2024] = useState<Documents[]>([]);
  const [announcements_2025, Setannouncements_2025] = useState<Documents[]>([]);




  useEffect(() => {
    const fetchdocs = async () => {
      try {

        const response = await fetch("/api/documents", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            doc_type: "annual_report"
          })
        });
        const data = await response.json();

        // Ensure the response is an array
        if (Array.isArray(data)) {
          Setannualreports(data);
          console.log("Fetched blog posts:", JSON.stringify(data));
        } else {
          console.error("Invalid data format: Expected an array");
          Setannualreports([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        Setannualreports([]); // Fallback to an empty array in case of error
      }
    };

    fetchdocs();
  }, []);

  useEffect(() => {
    const fetchdocs = async () => {
      try {

        const response = await fetch("/api/documents", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            doc_type: "quarterly_announcements"
          })
        });
        const data = await response.json();

        // Ensure the response is an array
        if (Array.isArray(data)) {
          Setquaterlyannouncements(data);
          console.log("Fetched blog posts:", JSON.stringify(data));
        } else {
          console.error("Invalid data format: Expected an array");
          Setquaterlyannouncements([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        Setquaterlyannouncements([]); // Fallback to an empty array in case of error
      }
    };

    fetchdocs();
  }, []);



  useEffect(() => {
    const fetchdocs = async () => {
      try {
        // const response = await fetch("/api/documents",{ "doc_type":"announcements"});
        const response = await fetch("/api/documents", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            doc_type: "share_holding_pattern"
          })
        });
        const data = await response.json();

        // Ensure the response is an array
        if (Array.isArray(data)) {
          Setshareholding(data);
          console.log("Fetched blog posts:", JSON.stringify(data));
        } else {
          console.error("Invalid data format: Expected an array");
          Setshareholding([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        Setshareholding([]); // Fallback to an empty array in case of error
      }
    };

    fetchdocs();
  }, []);

  useEffect(() => {
    const fetchdocs = async () => {
      try {
        const response = await fetch("/api/documents", {
          method: "POST",
          headers: {
            "Content-Type": "applications/json"
          },
          body: JSON.stringify({
            doc_type: "quarterly_announcements_2023"
          })
        })
        const data = await response.json();
        if (Array.isArray(data)) {
          Setannouncements_2023(data);
        }
        else {
          console.error("Invalid data format: Expected an array");
          Setannouncements_2023([]); // Fallback to an empty array
        }
      }
      catch (error) {
        console.error("Error fetching blogs:", error);
        Setannouncements_2023([]); // Fallback to an empty array in case of error
      }
    };
    fetchdocs();
  }, [])


  useEffect(() => {
    const fetchdocs = async () => {
      try {
        // const response = await fetch("/api/documents",{ "doc_type":"announcements"});
        const response = await fetch("/api/documents", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            doc_type: "quarterly_announcements_2024"
          })
        });
        const data = await response.json();

        // Ensure the response is an array
        if (Array.isArray(data)) {
          Setannouncements_2024(data);
          console.log("Fetched blog posts:", JSON.stringify(data));
        } else {
          console.error("Invalid data format: Expected an array");
          Setannouncements_2024([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        Setannouncements_2024([]); // Fallback to an empty array in case of error
      }
    };

    fetchdocs();
  }, []);

  useEffect(() => {
    const fetchdocs = async () => {
      try {
        // const response = await fetch("/api/documents",{ "doc_type":"announcements"});
        const response = await fetch("/api/documents", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            doc_type: "quarterly_announcements_2025"
          })
        });
        const data = await response.json();

        // Ensure the response is an array
        if (Array.isArray(data)) {
          Setannouncements_2025(data);
          console.log("Fetched blog posts:", JSON.stringify(data));
        } else {
          console.error("Invalid data format: Expected an array");
          Setannouncements_2025([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        Setannouncements_2025([]); // Fallback to an empty array in case of error
      }
    };

    fetchdocs();
  }, []);








  const leftTabs = [
    { id: 'Annual report', name: 'Annual report', active: true },
    { id: 'Quarterly Announcements', name: 'Quarterly Announcements' },
    { id: 'Share Holding Pattern', name: 'Share Holding Pattern' },
    { id: 'Share Transfer Aggency', name: 'Share Transfer Aggency' },
    { id: 'ShareHolder Complaints', name: 'ShareHolder Complaints' }
  ];
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownVisible(!dropdownVisible);
  };
  const openCity = (event, cityId) => {
    event.preventDefault();
    setActiveTab(cityId);
    // setDropdownVisible(false);
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <TechNavigation />
      <PageMetadata
        title="Financials - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-teal-600 mb-4">Edvenswa Financials</h1>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar with Tabs */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Sidebar with Tabs */}
            <div className="md:w-80 w-full">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {leftTabs.map((tab) => (
                  <div key={tab.id} className="relative">
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-6 py-4 border-b border-gray-200 transition-colors ${activeTab === tab.id
                        ? 'bg-teal-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="font-medium">{tab.name}</div>
                        {tab.name === 'Quarterly Announcements' && (
                          <div
                            onClick={toggleDropdown}
                            className="ml-2 p-1 rounded hover:bg-black hover:bg-opacity-10"
                          >
                            {dropdownVisible ? (
                              <ChevronUp className="w-7 h-7" />
                            ) : (
                              <ChevronDown className="w-7 h-7" />
                            )}
                          </div>
                        )}
                      </div>
                    </button>

                    {/* Dropdown Menu */}
                    {tab.name === 'Quarterly Announcements' && dropdownVisible && (
                      <div className="bg-white border-l-4 border-teal-600 shadow-lg">
                        <button
                          onClick={(e) => openCity(e, 'Quaterly-announcement-item-2024-march-2025-april')}
                          className="w-full text-left px-8 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-100"
                        >
                          1st April 2024 - 31st March 2025
                        </button>
                        <button
                          onClick={(e) => openCity(e, 'Quaterly-announcement-item-2023-march-2024-april')}
                          className="w-full text-left px-8 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          1st April 2023 - 31st March 2024
                        </button>
                        <button
                          onClick={(e) => openCity(e, 'Quaterly-announcement-item-2022-march-2023-april')}
                          className="w-full text-left px-8 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          1st April 2022 - 31st March 2023
                        </button>

                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              {/* Board of Directors Content */}
              {activeTab === 'Annual report' && (
                <div>
                  <h2 className="font-bold text-xl mb-4 text-teal-700">Annual Reports</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ul>
                      {annualreports.map((document) => (

                        <div key={document.id}>
                          <li>
                            <a
                              href={document.doc_full_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link1 flex items-center mb-3"
                            >

                              <img
                                style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                                src="/img/pdf.png"
                                alt="PDF Icon"
                              />{' '}
                              {document.doc_title}
                            </a>
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>




                </div>
              )}
              {activeTab === 'Quarterly Announcements' && (

                <div id="Quaterly-Announcements" className="tabcontent" style={{ display: 'block' }}>
                  <h2 className="font-bold text-xl mb-4 text-teal-700">Quaterly-Announcements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ul>
                      {quaterlyannouncements.map((document) => (

                        <div key={document.id}>


                          {document.action_type === 'file' ? (
                            <li>
                              <a
                                href={document.doc_full_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link1 flex items-center mb-3"
                              >
                                <img
                                  style={{ width: '20px', height: '20px', objectFit: 'contain', }}
                                  src="/img/pdf.png"
                                  alt="PDF Icon"
                                />
                                {'   '}
                                {document.doc_title}
                              </a>
                            </li>
                          ) : (
                            <li>

                              
                              <a
                                href={document.web_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link1 flex items-center mb-3"
                              >
                                <img
                                  style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                                  src="/img/pdf.png" // use a link icon or globe icon here
                                  alt="Web Icon"
                                />
                                {' '}
                                {document.doc_title}
                              </a>
                            </li>
                          )}
                        </div>
                      ))}
                    </ul>
                  </div>


                  {/* Repeat the same structure for all your links */}
                </div>)}

              {activeTab === 'Share Holding Pattern' && (
                <div>
                  <h2 className="font-bold text-xl mb-4 text-teal-700">Share Holding Pattern</h2>
                  {/* Financial Year Reports */}


                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ul>
                      {shareholding.map((document) => (

                        <div key={document.id}>
                            {document.action_type === 'file' ? (
                            <li>
                              <a
                                href={document.doc_full_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link1 flex items-center mb-3"
                              >
                                <img
                                  style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                                  src="/img/pdf.png"
                                  alt="PDF Icon"
                                />
                                {' '}
                                {document.doc_title}
                              </a>
                            </li>
                          ) : (
                            <li>

                              
                              <a
                                href={document.web_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link1 flex items-center mb-3"
                              >
                                <img
                                  style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                                  src="/img/pdf.png" // use a link icon or globe icon here
                                  alt="Web Icon"
                                />
                                {' '}
                                {document.doc_title}
                              </a>
                            </li>
                          )}
                        </div>
                      ))}
                    </ul>
                  </div>

                </div>
              )}
              {activeTab === 'Quaterly-announcement-item-2024-march-2025-april' && (
                <div
                  id="Quaterly-announcement-item-2024-march-2025-april"
                  className="tabcontent"
                  style={{ display: 'block' }}
                >
                  <a
                    href="/docs/quarterly compliances/Q1-2024-2025/Q1- Standalone and Consolidated Financial Statements 2024-2025"
                    style={{ textDecoration: 'none', color: 'Black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                  >
                    <img
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    Q1- Standalone and Consolidated Financial Statements 2024-2025
                  </a>

                  <a
                    href="/docs/quarterly compliances/Q1-2024-2025/Q2-Standalone and Consolidated Financial Statements 2024-2025"
                    style={{ textDecoration: 'none', color: 'Black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                  >
                    <img
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    Q2-Standalone and Consolidated Financial Statements 2024-2025
                  </a>

                  <a
                    href="/docs/quarterly compliances/Q1-2024-2025/Q3-Standlaone and Consolidated Financail Results"
                    style={{ textDecoration: 'none', color: 'Black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                  >
                    <img
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    Q3-Standlaone and Consolidated Financail Results
                  </a>

                </div>
              )}

              {activeTab === 'Quaterly-announcement-item-2023-march-2024-april' && (
                <div>
                  <a
                    href="/docs/quarterly compliances/Q1-2023-2024/EEL Q1 of FY 2023-24  Financial results.pdf"
                    style={{ textDecoration: 'none', color: 'Black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                  >
                    <img
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    EEL Q1 of FY 2023-24 Financial results
                  </a>

                  <a
                    href="/docs/quarterly compliances/Q1-2023-2024/EEL-Q2- FOR FY 2023-2024.pdf"
                    style={{ textDecoration: 'none', color: 'Black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                  >
                    <img
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    EEL Q2 of FY 2023-24 Financial results
                  </a>

                  <a
                    href="/docs/quarterly compliances/Q1-2023-2024/EEL Q3 FOR FY 2023-2024.pdf"
                    style={{ textDecoration: 'none', color: 'Black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                  >
                    <img
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    EEL Q3 of FY 2023-24 Financial results
                  </a>

                  <a
                    href="/docs/quarterly compliances/Q1-2023-2024/CG30-06-2023"
                    style={{ textDecoration: 'none', color: 'Black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                  >
                    <img
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    CG 30-06-2023
                  </a>

                  <a
                    href="/docs/quarterly compliances/Q1-2023-2024/CG 30-09-2023"
                    style={{ textDecoration: 'none', color: 'Black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                  >
                    <img
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    CG 30-09-2023
                  </a>

                  <a
                    href="/docs/quarterly compliances/Q1-2023-2024/CG 30-12-2023"
                    style={{ textDecoration: 'none', color: 'Black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                  >
                    <img
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    CG 30-12-2023
                  </a>

                  <a
                    href="/docs/quarterly compliances/Q1-2023-2024/CG 31-03-2024"
                    style={{ textDecoration: 'none', color: 'Black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                  >
                    <img
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    CG 31-03-2024
                  </a>

                  <a
                    href="/docs/quarterly compliances/Q1-2023-2024/SHP 30-06-2023"
                    style={{ textDecoration: 'none', color: 'Black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                  >
                    <img
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    SHP 30-06-2023
                  </a>

                  <a
                    href="/docs/quarterly compliances/Q1-2023-2024/SHP 30-09-2023"
                    style={{ textDecoration: 'none', color: 'Black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                  >
                    <img
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    SHP 30-09-2023
                  </a>

                  <a
                    href="/docs/quarterly compliances/Q1-2023-2024/SHP 31-12-2023"
                    style={{ textDecoration: 'none', color: 'Black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                  >
                    <img
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    SHP 31-12-2023
                  </a>

                  <a
                    href="/docs/quarterly compliances/Q1-2023-2024/SHP 31-03-2024.xml"
                    style={{ textDecoration: 'none', color: 'Black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                  >
                    <img
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    SHP 31-03-2024
                  </a>
                </div>
              )}




              {activeTab === 'Quaterly-announcement-item-2022-march-2023-april' && (

                <div id="Quaterly-announcement-item-2022-march-2023-april" className="tabcontent block">
                  <a
                    href="../../docs/quarterly compliances/Financial Results -Q1/Intimation of BM q1 results_removed.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"

                    style={{ textDecoration: "none" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />

                    Intimation of BM q1 results_removed
                  </a>


                  <a
                    href="../../docs/quarterly compliances/Financial Results -Q1/Outcome of Board Meeting-Ver-2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />

                    Outcome of Board Meeting-Ver-2
                  </a>


                  <a
                    href="../../docs/quarterly compliances/Financials q2/Intimation of BM for q2 results_new.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />

                    Intimation of BM for q2 results_new
                  </a>


                  <a
                    href="../../docs/quarterly compliances/Financials q2/Newspaper publictaion intimation to BSE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />

                    Newspaper publication intimation to BSE
                  </a>


                  <a
                    href="../../docs/quarterly compliances/Financials q2/Non-applicability of Related Party -30 Sep 2022-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />

                    Non-applicability of Related Party -30 Sep 2022-1
                  </a>


                  <a
                    href="../../docs/quarterly compliances/Financials q2/Outcome of BM as per Regulation 33 of LODR.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"

                    />

                    Outcome of BM as per Regulation 33 of LODR
                  </a>

                  <a
                    href="../../docs/quarterly compliances/Financials q3/Final copy of q3 to be uploaded on bse cs signed.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"

                    style={{ textDecoration: "none" }}
                  >

                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />

                    Final copy of q3 to be uploaded on bse cs signed
                  </a>

                  <a
                    href="../../docs/quarterly compliances/Financials q3/Intimation of BM for q3 results 1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />

                    Intimation of BM for q3 results 1
                  </a>
                  <a
                    href="../../docs/quarterly compliances/Financials q3/Regulation 47 news paper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    Regulation 47 news paper
                  </a>
                  <a
                    href="../../docs/quarterly compliances/q1-2021-2022/Closure of Trading Window June quarter.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    Closure of Trading Window June quarter
                  </a>
                  <a
                    href="../../docs/quarterly compliances/q1-2021-2022/Intimation of proposed Board meeting21072022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    Intimation of proposed Board meeting21072022
                  </a>

                  <a
                    href="../../docs/quarterly compliances/q1-2021-2022/INVESTOR GREIVENANCES.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    INVESTOR GREIVENANCES
                  </a>
                  <a
                    href="../../docs/quarterly compliances/q1-2021-2022/Non-applicability of Regulation 27 -1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    Non-applicability of Regulation 27 -1
                  </a>
                  <a
                    href="../../docs/quarterly compliances/q2-2021-2022/Closure of Trading Window September quarter 2022_ signed.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    Closure of Trading Window September quarter 2022 signed
                  </a>
                  <a
                    href="../../docs/quarterly compliances/q2-2021-2022/KLK-I.G-30092022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    KLK-I.G-30092022
                  </a>
                  <a
                    href="../../docs/quarterly compliances/q2-2021-2022/Non-applicability of Regulation 27 30th sep 2022-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    Non-applicability of Regulation 27 30th sep 2022-1
                  </a>
                  <a
                    href="../../docs/quarterly compliances/q3-2021-2022/Closure of Trading window december quarter.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    Closure of Trading window december quarter
                  </a>
                  <a
                    href="../../docs/quarterly compliances/q3-2021-2022/Covering letter RCSA 31st December 2022 signed.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    Covering letter RCSA 31st December 2022 signed
                  </a>
                  <a
                    href="../../docs/quarterly compliances/q3-2021-2022/edvenswa-investor complaints.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    edvenswa-investor complaints
                  </a>

                  <a
                    href="../../docs/quarterly compliances/q3-2021-2022/Non-applicability of Regulation 27 31st December 2022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    Non-applicability of Regulation 27 31st December 2022
                  </a>
                  <a
                    href="../../docs/quarterly compliances/q3-2021-2022/Non-applicability of Related party.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link1 flex items-center"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    <img
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      src="/img/pdf.png"
                      alt="PDF Icon"
                    />
                    Non-applicability of Related party
                  </a>

                </div>
              )}


              {activeTab === 'Share Transfer Aggency' && (
                <div>
                  <h2 className="font-bold text-xl mb-4 text-teal-700">Share Transfer Agency</h2>
                  <p className="text-gray-800 mb-2">M/s Aarthi Consultants Private Limited</p>
                  <p className="text-gray-800 mb-2">1-2-285, Domalguda,</p>
                  <p className="text-gray-800 mb-2">Hyderabad-500 049</p>
                  <p className="text-gray-800 mb-2">Telephone: 040-2763 8111</p>
                  <p className="text-gray-800">E-mail: <a href="mailto:info@aarthiconsultants.com" className="text-blue-600 underline">info@aarthiconsultants.com</a></p>
                </div>
              )}

              {activeTab === 'ShareHolder Complaints' && (
                <div>
                  <h2 className="font-bold text-xl mb-4 text-teal-700">Shareholder Complaints</h2>
                  <p className="text-gray-800 mb-2">Contact person: Mrs HimaBindu Dulipala</p>
                  <p className="text-gray-800 mb-2">Telephone: +91 91000 52964</p>
                  <p className="text-gray-800">E-mail: <a href="mailto:admin@klk.co.in" className="text-blue-600 underline">admin@klk.co.in</a></p>
                </div>

              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FinancialsPage;
