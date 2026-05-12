'use client';

import React, { useState, useEffect } from 'react';
import { UserCircle, Edit, Trash2, Search } from 'lucide-react';
import { useCallback } from 'react';

interface User {
 id: number;
 name: string;
 email: string;
 role: string;
 status: 'active' | 'inactive';
 account_id: string;
 last_login: string;

}

interface UserFormData {
 name: string;
 email: string;
 role: string;
 status: 'active' | 'inactive';
 password?: string; // Optional for edit
}

interface PaginationParams {
 page: number;
 limit: number;
 total: number;
}

const UsersPage = () => {
 const [users, setUsers] = useState<User[]>([]);
 const [showModal, setShowModal] = useState(false);
 const [selectedUser, setSelectedUser] = useState<User | null>(null);
 const [formData, setFormData] = useState<UserFormData>({
   name: '',
   email: '',
   role: 'user',
   status: 'active'
 });
 const [pagination, setPagination] = useState<PaginationParams>({
   page: 1,
   limit: 10,
   total: 0
 });
 const [search, setSearch] = useState('');
 const [selectedRole, setSelectedRole] = useState('all');
 const [isLoading, setIsLoading] = useState(false);


 const fetchUsers = useCallback(async () => {
  try {
    setIsLoading(true);
    const params = new URLSearchParams({
      page: pagination.page.toString(),  
      limit: pagination.limit.toString(),
      search,
      role: selectedRole !== 'all' ? selectedRole : ''
    });

    const response = await fetch(`/api/users?${params}`);
    const data = await response.json();
    
    if (data.success) {
      setUsers(data.data);
      setPagination(prev => ({ 
        ...prev, 
        total: data.pagination?.total || 0 
      }));
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    setIsLoading(false);
  }
}, [pagination.page, pagination.limit, search, selectedRole]);

 useEffect(() => {
   const debounceTimer = setTimeout(() => {
     fetchUsers();
   }, 300);

   return () => clearTimeout(debounceTimer);
 }, [pagination.page, search, selectedRole,, fetchUsers]);

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = selectedUser ? '/api/users' : '/api/users';
      const method = selectedUser ? 'PUT' : 'POST';
      const body = selectedUser ? 
        { 
          ...formData, 
          id: selectedUser.id,
          // Only include password if changed
          ...(formData.password ? { password: formData.password } : {})
        } : formData;
   
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
   
      if (response.ok) {
        setShowModal(false);
        fetchUsers();
        resetForm();
      }
    } catch (error) {
      console.error('Error saving user:', error);
    }
   }; 

 const handleEdit = (user: User) => {
   setSelectedUser(user);
   setFormData({
     name: user.name,
     email: user.email,
     role: user.role,
     status: user.status,
     password: '' // Empty password when editing
   });
   setShowModal(true);
 };

 const handleDelete = async (id: number) => {
   if (confirm('Are you sure you want to delete this user?')) {
     try {
       const response = await fetch('/api/users', {
         method: 'DELETE',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ id })
       });

       if (response.ok) {
         fetchUsers();
       } else {
         alert('Failed to delete user');
       }
     } catch (error) {
       console.error('Error deleting user:', error);
       alert('Failed to delete user');
     }
   }
 };

 const resetForm = () => {
   setSelectedUser(null);
   setFormData({
     name: '',
     email: '',
     role: 'user',
     status: 'active',
     password: ''
   });
 };

 const totalPages = Math.ceil(pagination.total / pagination.limit);

 const handlePageChange = (newPage: number) => {
   setPagination(prev => ({ ...prev, page: newPage }));
 };

 return (
   <div className="space-y-6">

<div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Users</h2>
        <nav className="text-sm text-gray-500">
          <a href="/admin/dashboard" className="hover:underline">Home</a> / <span>Users</span>
        </nav>
      </div>


    

  {/* Filters */}
<div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow">
  <div className="flex-1">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  </div>
  <div className="flex gap-3 items-center">
    <select
      value={selectedRole}
      onChange={(e) => setSelectedRole(e.target.value)}
      className="rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="all">All Roles</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
      <option value="editor">Editor</option>
    </select>
    
    <button 
      onClick={() => setShowModal(true)}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
    >
      Add User
    </button>
  </div>
</div>

     { /*<div className="flex justify-between items-center">
       <h2 className="text-2xl font-bold"></h2>


       
       <button 
         onClick={() => setShowModal(true)}
         className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
       >
         Add User
       </button>
     </div> */ }




     {/* Users Table */}
     <div className="bg-white rounded-lg shadow overflow-hidden">
       {isLoading ? (
         <div className="p-8 text-center text-gray-500">Loading...</div>
       ) : users.length === 0 ? (
         <div className="p-8 text-center text-gray-500">No users found</div>
       ) : (
         <div className="overflow-x-auto">
           <table className="min-w-full divide-y divide-gray-200">
             <thead className="bg-gray-50">
               <tr>
                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Account ID</th>
                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
               </tr>
             </thead>
             <tbody className="bg-white divide-y divide-gray-200">
               {users.map((user) => (
                 <tr key={user.id} className="hover:bg-gray-50">
                   <td className="px-6 py-2 whitespace-nowrap">
                     <div className="flex items-center">
                       <UserCircle className="w-8 h-8 text-gray-400" />
                       <div className="ml-4">
                         <div className="text-sm font-medium text-gray-900">{user.name}</div>
                         <div className="text-sm text-gray-500">{user.email}</div>
                       </div>
                     </div>
                   </td>
                   <td className="px-6 py-2 whitespace-nowrap">
                     <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                       {user.role}
                     </span>
                   </td>
                   <td className="px-6 py-2 whitespace-nowrap">
                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                       user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                     }`}>
                       {user.status}
                     </span>
                   </td>
                   <td className="px-6 py-2 whitespace-nowrap">
                       {user.account_id }
                    
                   </td>
                   { /* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                     {new Date(user.last_login).toLocaleString()}
                   </td> */ }
                   <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium space-x-2">
                     <button 
                       onClick={() => handleEdit(user)} 
                       className="text-blue-600 hover:text-blue-900"
                     >
                       <Edit className="w-4 h-4" />
                     </button>
                     <button 
                       onClick={() => handleDelete(user.id)} 
                       className="text-red-600 hover:text-red-900"
                     >
                       <Trash2 className="w-4 h-4" />
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       )}
     </div>

     {/* Pagination */}
     <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white px-4 py-3 rounded-lg shadow">
       <div className="flex-1 text-sm text-gray-700 mb-4 md:mb-0">
         Showing {((pagination.page - 1) * pagination.limit) + 1} to{' '}
         {Math.min(pagination.page * pagination.limit, pagination.total)} of{' '}
         {pagination.total} results
       </div>
       <div className="flex items-center justify-center space-x-2">
         <button
           onClick={() => handlePageChange(pagination.page - 1)}
           disabled={pagination.page === 1}
           className="px-3 py-1 rounded border disabled:opacity-50 hover:bg-gray-50"
         >
           Previous
         </button>
         {[...Array(totalPages)].map((_, i) => {
           const pageNum = i + 1;
           // Show first page, last page, current page, and pages around current page
           if (
             pageNum === 1 ||
             pageNum === totalPages ||
             (pageNum >= pagination.page - 2 && pageNum <= pagination.page + 2)
           ) {
             return (
               <button
                 key={pageNum}
                 onClick={() => handlePageChange(pageNum)}
                 className={`px-3 py-1 rounded ${
                   pagination.page === pageNum
                     ? 'bg-blue-500 text-white'
                     : 'border hover:bg-gray-50'
                 }`}
               >
                 {pageNum}
               </button>
             );
           }
           // Show ellipsis
           if (
             pageNum === pagination.page - 3 ||
             pageNum === pagination.page + 3
           ) {
             return <span key={pageNum}>...</span>;
           }
           return null;
         })}
         <button
           onClick={() => handlePageChange(pagination.page + 1)}
           disabled={pagination.page === totalPages}
           className="px-3 py-1 rounded border disabled:opacity-50 hover:bg-gray-50"
         >
           Next
         </button>
       </div>
     </div>

     {/* Modal Form */}
     {showModal && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-white p-6 rounded-lg w-full max-w-md">
           <h3 className="text-lg font-bold mb-4">
             {selectedUser ? 'Edit User' : 'Add User'}
           </h3>
           <form onSubmit={handleSubmit} className="space-y-4">
             <div>
               <label className="block text-sm font-medium text-gray-700">Name</label>
               <input
                 type="text"
                 value={formData.name}
                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                 className="mt-1 block w-full px-3 py-2  border border-gray-300 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                 required
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700">Email</label>
               <input
                 type="email"
                 value={formData.email}
                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                 className="mt-1 block w-full px-3 py-2  border border-gray-300  rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                 required
               />
             </div>
             <div>
 <label className="block text-sm font-medium text-gray-700">Password</label>
 <input
   type="password"
   value={formData.password || ''}
   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
   className="mt-1 block w-full px-3 py-2  border rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
   required={!selectedUser} // Required only for new users
   minLength={6}
 />
</div>
             <div>
               <label className="block text-sm font-medium text-gray-700">Role</label>
               <select
                 value={formData.role}
                 onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                 className="mt-1 block w-full px-3 py-2  border  rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
               >
                 <option value="admin">Admin</option>
                 <option value="cms user">CMS User</option>
                 <option value="recruiter">Recruiter</option>
                 <option value="investor">Investor</option>

               </select>
             </div>

             <div>
               <label className="block text-sm font-medium text-gray-700">Status</label>
               <select
                 value={formData.status}
                 onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
                 className="mt-1 block w-full px-3 py-2  border rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
               >
                 <option value="active">Active</option>
                 <option value="inactive">Inactive</option>
               </select>
             </div>
             <div className="flex justify-end space-x-2">
               <button
                 type="button"
                 onClick={() => {
                   setShowModal(false);
                   resetForm();
                 }}
                 className="px-4 py-2 text-gray-600 hover:text-gray-800"
               >
                 Cancel
               </button>
               <button
                 type="submit"
                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
               >
                 {selectedUser ? 'Update' : 'Create'}
               </button>
             </div>
           </form>
         </div>
       </div>
     )}
   </div>
 );
};

export default UsersPage;