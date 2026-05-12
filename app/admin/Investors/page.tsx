// app/admin/Investors/page.tsx
'use client'; // This directive is necessary for client-side components in Next.js 13+

import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { PlusCircleIcon, MagnifyingGlassIcon, XMarkIcon, PencilIcon, TrashIcon, LinkIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'; // Importing icons

interface InvestorDocument {
  id: number;
  doc_title: string;
  doc_uuid: string;
  doc_full_url: string;
  doc_type: string; // Added doc_type to interface
  created_at: string;
  web_url:string;
  action_type:string;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
}

export default function InvestorsPage() {
  const [documents, setDocuments] = useState<InvestorDocument[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pagination>({ total: 0, page: 1, limit: 10 });

  const [newDocTitle, setNewDocTitle] = useState<string>('');
  const [newweburl,setNewweburl]=useState<string>('');
  const [weburl,Setweburl] =useState<string>('');
  const [actiontype,Setactiontype]=useState<string>('');
  const [newDocType, setNewDocType] = useState<string>(''); // State for new doc type
  const [newDocFile, setNewDocFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
  const [docToDelete, setDocToDelete] = useState<number | null>(null);

  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [editDoc, setEditDoc] = useState<InvestorDocument | null>(null);
  const [editDocTitle, setEditDocTitle] = useState<string>('');
  const [editweburl,Seteditweburl]=useState<string>('');
  const [editDocType, setEditDocType] = useState<string>(''); // State for edit doc type
  const [editing, setEditing] = useState<boolean>(false);
  const [editaction_type,Seteditaction_type]=useState<string>('');
 

  const [showAddModal, setShowAddModal] = useState<boolean>(false); // New state for Add Document modal

  const API_BASE_URL = '/api/admin/investor-docs'; // Relative API endpoint

  // Define document types for the dropdown (refined years for quarterly announcements)
  const docTypes = [
    { value: "", label: "Select Document Type" }, // Added an empty default option
    { value: "annual_report", label: "Annual Report Year-wise" },
    { value: "share_holding_pattern", label: "Share Holding Pattern" },
    { value: "right_issue", label: "Right Issue" },
    { value: "announcements", label: "Announcements" },
    { value: "policies", label: "Policies" },
    { value: "annual_reports", label: "Annual Reports" },
    { value: "preferential_issue", label: "Preferential Issue" },
    { value: "quarterly_announcements", label: "Quarterly Announcements" },
    { value: "quarterly_announcements_2024", label: "Quarterly Announcements 2024" },
    { value: "quarterly_announcements_2025", label: "Quarterly Announcements 2025" },
    { value: "quarterly_announcements_2026", label: "Quarterly Announcements 2026" },
    { value: "quarterly_announcements_2027", label: "Quarterly Announcements 2027" },
    { value: "quarterly_announcements_2028", label: "Quarterly Announcements 2028" },
    { value: "quarterly_announcements_2029", label: "Quarterly Announcements 2029" },
    { value: "quarterly_announcements_2030", label: "Quarterly Announcements 2030" },
  ];
  const action_Types=[
    {value:"file",label:"File"},
    {value:"url",label:"URL"}
  ]

  // Function to fetch investor documents
  const fetchDocuments = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
      });
      if (searchQuery) {
        params.append('search', searchQuery);
      }

      const response = await fetch(`${API_BASE_URL}?${params.toString()}`);
      if (!response.ok) {
        // Attempt to parse error message from response if available
        const errorData = await response.json().catch(() => ({ error: `HTTP error! status: ${response.status}` }));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        setDocuments(data.data);
        setPagination(data.pagination);
      } else {
        setError(data.error || 'Failed to fetch documents');
      }
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred while fetching documents.');
      console.error('Error fetching documents:', err);
    } finally {
      setLoading(false);
    }
  };

  // useEffect to fetch documents on component mount and pagination/search changes
  useEffect(() => {
    fetchDocuments();
  }, [pagination.page, pagination.limit, searchQuery]); // Dependencies array

  // Handle file input change for new upload and edit modal
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setNewDocFile(e.target.files[0]);
    } else {
      setNewDocFile(null);
    }
  };

  // Handle document upload/creation or update with file
  const handleCreateOrUpdateDocument = async (e: FormEvent) => {
    e.preventDefault();
    setUploading(true);
    setUploadMessage(null);
    setError(null);

    const currentDocTitle = editDoc ? editDocTitle : newDocTitle;
    const currentweburl=editDoc ? editweburl :newweburl;
    const currentDocType = editDoc ? editDocType : newDocType;
    const currentaction_type=editDoc ?editaction_type:actiontype;

    if (!currentDocTitle.trim()) {
      setError("Document title cannot be empty.");
      setUploading(false);
      return;
    }

    if (!currentDocType.trim()) {
        setError("Document type cannot be empty. Please select a type.");
        setUploading(false);
        return;
    }

    // For file upload, `newDocFile` must be present for new creations
    // For updates, `newDocFile` is optional (if only title/type changes)
    // if (!newDocFile && !editDoc) { 
    //     setError("Please select a file to upload.");
    //     setUploading(false);
    //     return;
    // }

    const formData = new FormData();
    formData.append('doc_title', currentDocTitle);
    formData.append('web_url',currentweburl);
    formData.append('action_type',currentaction_type);
    formData.append('doc_type', currentDocType); // Append doc_type

    // Only append file if a new one is selected/provided
    if (newDocFile) {
      formData.append('file', newDocFile);
    }
    
    // If editing, append the existing ID
    if (editDoc && editDoc.id) {
        formData.append('id', editDoc.id.toString());
    }

    try {
        // For file uploads, always use POST. The backend logic handles create/update based on 'id'.
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.success) {
            setUploadMessage(data.message);
            // Clear form fields only if it was a new upload or successful edit within the add modal
            if (!editDoc) { // If it was a new document creation
                setNewDocTitle('');
                setNewDocType('');
                setNewDocFile(null);
                setNewweburl('');
                Setactiontype('');
            }
            fetchDocuments(); // Refresh the list
            if (editDoc) { // If it was an edit from the table row
                setShowEditModal(false);
                setEditDoc(null);
                setNewDocFile(null); // Clear file selection in edit modal
            }
            if (showAddModal) { // If it was an upload from the add modal
                setShowAddModal(false);
            }
        } else {
            setError(data.error || 'Failed to upload document');
        }
    } catch (err: any) {
        setError(err.message || 'An unknown error occurred during upload.');
        console.error('Upload/Update Error:', err);
    } finally {
        setUploading(false);
    }
};

  // Handle document deletion
  const handleDeleteDocument = async () => {
    if (docToDelete === null) return;

    setUploading(true); // Reusing uploading state for deletion status
    setUploadMessage(null);
    setError(null);

    try {
      const response = await fetch(API_BASE_URL, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: docToDelete }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setUploadMessage(data.message);
        fetchDocuments(); // Refresh the list
      } else {
        setError(data.error || 'Failed to delete document');
      }
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred during deletion.');
      console.error('Delete Error:', err);
    } finally {
      setUploading(false);
      setShowConfirmationModal(false);
      setDocToDelete(null);
    }
  };

  // Open confirmation modal
  const openDeleteConfirmation = (id: number) => {
    setDocToDelete(id);
    setShowConfirmationModal(true);
  };

  // Open edit modal
  const openEditModal = (doc: InvestorDocument) => {
    setEditDoc(doc);
    setEditDocTitle(doc.doc_title);
    Seteditweburl(doc.web_url);
    setEditDocType(doc.doc_type); // Set doc type for edit modal
    setNewDocFile(null); // Clear any previously selected file when opening edit modal
    setShowEditModal(true);
    Seteditaction_type(doc.action_type);
  };

  // Function to open the Add Document modal
  const openAddDocumentModal = () => {
    setNewDocTitle(''); // Clear fields for new document
    setNewDocType('');
    setNewweburl('');
    Setactiontype('');
    setNewDocFile(null);
    setUploadMessage(null); // Clear previous messages
    setError(null); // Clear previous errors
    setShowAddModal(true);
  };

  // Handle update for just title/type (if not uploading a new file via POST)
  // This PUT handler is used for updates where NO FILE is changed.
  const handleUpdateTitleAndTypeOnly = async (e: FormEvent) => {
    e.preventDefault();
    if (!editDoc) return;
    setEditing(true);
    setUploadMessage(null);
    setError(null);

    if (!editDocTitle.trim()) {
        setError("Document title cannot be empty.");
        setEditing(false);
        return;
    }

    if (!editDocType.trim()) {
        setError("Document type cannot be empty. Please select a type.");
        setEditing(false);
        return;
    }

    try {
      const response = await fetch(API_BASE_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: editDoc.id, doc_title: editDocTitle, doc_type: editDocType ,web_url:editweburl,action_type:editaction_type}),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setUploadMessage(data.message);
        fetchDocuments(); // Refresh the list
        setShowEditModal(false);
        setEditDoc(null);
      } else {
        setError(data.error || 'Failed to update document title/type');
      }
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred during update.');
      console.error('Update Title/Type Error:', err);
    } finally {
      setEditing(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 font-sans">
      {/* Header section with breadcrumbs, matching Blogs/Jobs pages */}
      <div className="flex justify-between items-center mb-8 px-4 py-2 bg-white rounded-lg shadow-md border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Investor Documents</h1>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-600">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-emerald-600 font-medium">Investor Documents</span> {/* Changed to emerald color */}
        </div>
      </div>

      {/* Main content area */}
      <div className="w-full bg-white p-8 rounded-xl shadow-2xl mb-10 border border-gray-200">
        {/* Search and Add New Document Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-full md:w-2/3">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-full text-base"
            />
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
                title="Clear search"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="flex items-center space-x-4 w-full md:w-1/3 justify-end">
            <label htmlFor="limitSelect" className="text-base font-medium text-gray-700">Show:</label>
            <select
              id="limitSelect"
              value={pagination.limit}
              onChange={(e) => setPagination(prev => ({ ...prev, limit: parseInt(e.target.value), page: 1 }))}
              className="block px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-base appearance-none bg-white"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <button
              onClick={openAddDocumentModal}
              className="flex items-center px-6 py-3 border border-transparent rounded-xl shadow-md text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-300 ease-in-out whitespace-nowrap"
            >
              <PlusCircleIcon className="h-5 w-5 mr-2" /> Add New Document
            </button>
          </div>
        </div>

        {/* Conditional rendering for loading, error, or documents */}
        {loading ? (
          <p className="text-center text-gray-600 text-lg py-10">Loading documents...</p>
        ) : error ? (
          <div className="text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline ml-2">{error}</span>
            <p className="text-sm mt-2">Please check your browsers developer console for more details (F12).</p>
          </div>
        ) : documents.length === 0 ? (
          <p className="text-center text-gray-600 text-lg py-10">No documents found.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Doc Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Uploaded On
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    URL
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {documents.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {doc.doc_title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {docTypes.find(type => type.value === doc.doc_type)?.label || doc.doc_type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(doc.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a href={doc.doc_full_url} target="_blank" rel="noopener noreferrer" 
                         className="text-emerald-600 hover:text-emerald-800 hover:underline flex items-center space-x-2 transition duration-150 ease-in-out">
                        <LinkIcon className="h-4 w-4" /> <span>View Document</span>
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => openEditModal(doc)}
                        className="text-blue-600 hover:text-blue-800 mr-3 p-2 rounded-full hover:bg-blue-100 transition duration-150 ease-in-out"
                        title="Edit Document"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => openDeleteConfirmation(doc.id)}
                        className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-100 transition duration-150 ease-in-out"
                        title="Delete Document"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Controls */}
        {documents.length > 0 && (
          <nav
            className="flex items-center justify-between pt-6"
            aria-label="Pagination"
          >
            <div className="flex-1 flex justify-between sm:justify-end items-center space-x-4">
              <button
                onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                disabled={pagination.page <= 1}
                className="relative inline-flex items-center px-5 py-2 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition duration-150 ease-in-out"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" /> Previous
              </button>
              <span className="text-base font-medium text-gray-700 mx-2">
                Page {pagination.page} of {Math.ceil(pagination.total / pagination.limit) || 1}
              </span>
              <button
                onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                disabled={pagination.page * pagination.limit >= pagination.total}
                className="relative inline-flex items-center px-5 py-2 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition duration-150 ease-in-out"
              >
                Next <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            </div>
          </nav>
        )}
      </div>

      {/* Add New Document Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-3xl p-8 w-full max-w-md transform transition-all duration-300 ease-out scale-100 opacity-100">
            <h3 className="text-xl font-bold text-gray-900 mb-5 text-center">Add New Document</h3>
            <form onSubmit={handleCreateOrUpdateDocument} className="space-y-6">
              <div>
                <label htmlFor="newDocTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                  Document Title
                </label>
                <input
                  type="text"
                  id="newDocTitle"
                  value={newDocTitle}
                  onChange={(e) => setNewDocTitle(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-base"
                  placeholder="e.g., Q1 2024 Financial Report"
                  required
                />
              </div>
              <div>
                <label htmlFor="newDocType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Document Type
                </label>
                <select
                  id="newDocType"
                  value={newDocType}
                  onChange={(e) => setNewDocType(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-base appearance-none bg-white pr-8"
                  required
                >
                  {docTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>File/URL:</label>
                <select id="action_type" value={actiontype}
                onChange={(e)=> Setactiontype(e.target.value)}>
                  {action_Types.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="newDocFile" className="block text-sm font-semibold text-gray-700 mb-2">
                  Select File
                </label>
                <input
                  type="file"
                  id="newDocFile"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-base text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-100 file:text-emerald-700 hover:file:bg-emerald-200 cursor-pointer"
               
                />
                {newDocFile && (
                  <p className="mt-3 text-sm text-gray-600">Selected: <span className="font-medium">{newDocFile.name}</span></p>
                )}
              </div>
              <div>
                <label htmlFor="web_url" className="block text-sm font-semibold text-gray-700 mb-2">
                  Web URL:
                </label>
                <input
                  type="text"
                  id="web_url"
                  value={newweburl}
                  onChange={(e) => setNewweburl(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-base"
                  placeholder="e.g., http://"
              
                />
              </div>
              
              <div className="flex justify-end space-x-4 mt-8">
                <button
                  type="button"
                  onClick={() => { setShowAddModal(false); }}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 border border-transparent rounded-lg text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 shadow-md transition duration-150 ease-in-out"
                  disabled={uploading}
                >
                  {uploading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading...
                    </>
                  ) : 'Upload Document'}
                </button>
              </div>
              
            </form>
            {uploadMessage && showAddModal && ( // Only show messages if this modal is active
                <p className="mt-6 text-base text-green-700 text-center bg-green-50 p-3 rounded-lg border border-green-200">
                    {uploadMessage}
                </p>
            )}
            {error && showAddModal && ( // Only show messages if this modal is active
                <p className="mt-6 text-base text-red-700 text-center bg-red-50 p-3 rounded-lg border border-red-200">
                    {error}
                </p>
            )}
          </div>
        </div>
      )}


      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-3xl p-8 w-full max-w-sm transform transition-all duration-300 ease-out scale-100 opacity-100">
            <h3 className="text-xl font-bold text-gray-900 mb-5 text-center">Confirm Deletion</h3>
            <p className="text-base text-gray-700 mb-7 text-center">
              Are you sure you want to delete this document? This action cannot be undone.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={() => setShowConfirmationModal(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteDocument}
                className="px-6 py-2 border border-transparent rounded-lg text-base font-medium text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 shadow-md transition duration-150 ease-in-out"
                disabled={uploading} // Reusing uploading state
              >
                {uploading ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && editDoc && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-3xl p-8 w-full max-w-md transform transition-all duration-300 ease-out scale-100 opacity-100">
            <h3 className="text-xl font-bold text-gray-900 mb-5 text-center">Edit Document: {editDoc.doc_title}</h3>
            {/* The form submission logic is now split:
                - If a new file is selected, `handleCreateOrUpdateDocument` (POST) is used.
                - If no new file is selected, `handleUpdateTitleAndTypeOnly` (PUT) is used. */}
            <form onSubmit={newDocFile ? handleCreateOrUpdateDocument : handleUpdateTitleAndTypeOnly} className="space-y-6">
              <div>
                <label htmlFor="editDocTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                  Document Title
                </label>
                <input
                  type="text"
                  id="editDocTitle"
                  value={editDocTitle}
                  onChange={(e) => setEditDocTitle(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="editDocType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Document Type
                </label>
                <select
                  id="editDocType"
                  value={editDocType}
                  onChange={(e) => setEditDocType(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-base appearance-none bg-white pr-8"
                  required
                >
                  {docTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
               <div>
                <label htmlFor="editaction_type" className="block text-sm font-semibold text-gray-700 mb-2">
                 File/URL
                </label>
                <select
                  id="editaction_type"
                  value={editaction_type}
                  onChange={(e) => Seteditaction_type(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-base appearance-none bg-white pr-8"
                  required
                >
                  {action_Types.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="editDocFile" className="block text-sm font-semibold text-gray-700 mb-2">
                  Replace File (Optional)
                </label>
                <input
                  type="file"
                  id="editDocFile"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-base text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-100 file:text-emerald-700 hover:file:bg-emerald-200 cursor-pointer"
                />
                {newDocFile && (
                  <p className="mt-3 text-sm text-gray-600">New file selected: <span className="font-medium">{newDocFile.name}</span></p>
                )}
                {!newDocFile && editDoc.doc_full_url && (
                    <p className="mt-3 text-sm text-gray-600">Current file: <a href={editDoc.doc_full_url} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-medium">{editDoc.doc_full_url.split('/').pop()}</a></p>
                )}
              </div>
              <div>
                <label htmlFor="editweburl" className="block text-sm font-semibold text-gray-700 mb-2">
                  Web URL
                </label>
                <input
                  type="text"
                  id="editweburl"
                  value={editweburl}
                  onChange={(e) => Seteditweburl(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-base"
                 
                />
              </div>
              
              <div className="flex justify-end space-x-4 mt-8">
                <button
                  type="button"
                  onClick={() => { setShowEditModal(false); setEditDoc(null); setNewDocFile(null); }}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                >
                  Cancel
                </button>
                <button
                  type="submit" 
                  className="px-6 py-2 border border-transparent rounded-lg text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 shadow-md transition duration-150 ease-in-out"
                  disabled={uploading || editing} // Disable if either operation is in progress
                >
                  {(uploading || editing) ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
