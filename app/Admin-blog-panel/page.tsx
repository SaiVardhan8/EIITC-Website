"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import AdminLayout from '@/components/layouts/AdminLayout';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Save, 
  X, 
  Book, 
  Image as ImageIcon,
  Calendar,
  Tag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPost {
  id: string;
  blog_title: string;
  blog_content: string;
  slug: string;
  blog_image: string;
  blog_cateogry: string;
  created_at: string;
}

interface PaginationParams {
  page: number;
  limit: number;
  total: number;
}

interface BlogFormData {
  blog_title: string;
  slug:string;
  blog_content: string;
  blog_image: string;
  blog_cateogry: string;
}

const AdminBlogPanel = () => {
  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [formData, setFormData] = useState<BlogFormData>({
    blog_title: "",
    slug:"",
    blog_content: "",
    blog_image: "",
    blog_cateogry: "",
  });

  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    limit: 5,
    total: 0
  });

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all'); // Changed from selectedRole to selectedCategory

  const categories = [
    "Technology",
    "AI & Machine Learning", 
    "Business Strategy",
    "Industry Insights",
    "Innovation",
    "Digital Transformation",
    "Data Analytics",
    "Software Development"
  ];

  // Fetch existing blogs
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchBlogs();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [pagination.page, search, selectedCategory, pagination.limit]);

const [allBlogPosts, setAllBlogPosts] = useState<BlogPost[]>([]);
const fetchBlogs = useCallback(async () => {
  try {
    setIsLoading(true);
    const params = new URLSearchParams({
      page: pagination.page.toString(),  
      limit: pagination.limit.toString(),
      search,
      category: selectedCategory !== 'all' ? selectedCategory : ''
    });
    
    const response = await fetch(`/api/blogs?${params}`);
    const data = await response.json();
    
    if (Array.isArray(data)) {
      setAllBlogPosts(data);
      const startIndex = (pagination.page - 1) * pagination.limit;
      const endIndex = startIndex + pagination.limit;
      const paginatedData = data.slice(startIndex, endIndex);
      
      setBlogPosts(paginatedData);
      setPagination(prev => ({ 
        ...prev, 
        total: data.length 
      }));
    } else if (data.success && Array.isArray(data.data)) {

      setBlogPosts(data.data);
      setPagination(prev => ({ 
        ...prev, 
        total: data.pagination?.total || data.data.length 
      }));
    } else {
      console.error("Unexpected API response format:", data);
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
  } finally {
    setIsLoading(false);
  }
}, [pagination.page, search, selectedCategory, pagination.limit]);

  const handleInputChange = (field: keyof BlogFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Image upload handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Clear image handler
  const clearImage = () => {
    setSelectedImage(null);
    setImagePreview("");
  };

  const resetForm = () => {
    setFormData({
      blog_title: "",
      slug: "",
      blog_content: "",
      blog_image: "",
      blog_cateogry: "",
    });
    setEditingPost(null);
    clearImage();
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   try {
  //     let imagePath = formData.blog_image; // Keep existing image path for edits
      
  //     // Upload image if a new one is selected
  //     if (selectedImage) {
  //       const imageFormData = new FormData();
  //       imageFormData.append('image', selectedImage);
        
  //       const imageResponse = await fetch('/api/upload-image', {
  //         method: 'POST',
  //         body: imageFormData,
  //       });
        
  //       if (imageResponse.ok) {
  //         const imageResult = await imageResponse.json();
  //         imagePath = imageResult.path; // Path returned from upload API
  //       } else {
  //         console.error('Failed to upload image');
  //         setIsLoading(false);
  //         return;
  //       }
  //     }

  //     // Prepare blog data
  //     const blogData = {
  //       ...formData,
  //       blog_image: imagePath
  //     };

  //     const url = editingPost ? `/api/blogs/${editingPost.id}` : "/api/blogs";
  //     const method = editingPost ? "PUT" : "POST";

  //     const response = await fetch(url, {
  //       method,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(blogData),
  //     });

  //     if (response.ok) {
  //       await fetchBlogs(); // Refresh the list
  //       setIsDialogOpen(false);
  //       resetForm();
  //     } else {
  //       console.error("Failed to save blog post");
  //     }
  //   } catch (error) {
  //     console.error("Error saving blog post:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      // Create FormData instead of JSON
      const submitData = new FormData();
      submitData.append('blog_title', formData.blog_title);
      submitData.append('slug', formData.slug);
      submitData.append('blog_content', formData.blog_content);
      submitData.append('blog_cateogry', formData.blog_cateogry);
      
      // Add image if selected
      if (selectedImage) {
        submitData.append('image', selectedImage);
      }
      
      // For edit mode, include existing image path
      if (editingPost && !selectedImage) {
        submitData.append('existing_image_path', formData.blog_image);
      }
  
      // const url = editingPost ? `/api/blogs/${editingPost.id}` : "/api/blogs";
      // const method = editingPost ? "PUT" : "POST"; // Changed to PATCH for edit

      // const method = "POST";
      // const url = editingPost ? `/api/blogs/${editingPost.id}?edit=true` : "/api/blogs";

      const url = editingPost ? `/api/blogs/${editingPost.id}?edit=true` : "/api/blogs";
      const method = editingPost ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: submitData, // Send FormData instead of JSON
        // Remove Content-Type header - browser will set it automatically for FormData
      });
  
      if (response.ok) {
        await fetchBlogs(); // Refresh the list
        setIsDialogOpen(false);
        resetForm();
      } else {
        const errorData = await response.json();
        console.error("Failed to save blog post:", errorData.error);
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error saving blog post:", error);
      alert("An error occurred while saving the blog post");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      blog_title: post.blog_title,
      slug:post.slug,
      blog_content: post.blog_content,
      blog_image: post.blog_image,
      blog_cateogry: post.blog_cateogry,
    });
    // Set image preview for existing image
    if (post.blog_image) {
      setImagePreview(post.blog_image);
    }
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        const response = await fetch(`/api/blogs/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          await fetchBlogs(); // Refresh the list
        } else {
          console.error("Failed to delete blog post");
        }
      } catch (error) {
        console.error("Error deleting blog post:", error);
      }
    }
  };

  const openNewPostDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const totalPages = Math.ceil(pagination.total / pagination.limit);

  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({ ...prev, page: newPage }));
  };


  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Blogs</h2>
        <nav className="text-sm text-gray-500">
          <a href="/admin/dashboard" className="hover:underline">Home</a> / <span>Blogs</span>
        </nav>
      </div>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
       <div className="d-flex w-100 justify-content-end mb-8">
          {/* <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Blog Admin Panel
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Manage your blog posts and content
            </p>
          </div> */}
          <div className="flex justify-end mb-8">
           <Button onClick={() => {}} className="bg-[#019c9d] hover:bg-[#017879]" style={{}}>
                <Plus size={16} className="mr-2" />
                <a href="/Admin-blog-panel/add-blog">New Blog Post</a>
              </Button>
          </div>
        </div>

        {/* Stats Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              <Book className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blogPosts.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Categories</CardTitle>
              <Tag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Set(blogPosts.map(post => post.blog_cateogry)).size}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent Posts</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {blogPosts.filter(post => {
                  const postDate = new Date(post.created_at);
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return postDate >= weekAgo;
                }).length}
              </div>
            </CardContent>
          </Card>
        </div> */}

        {/* Blog Posts List */}
        <Card>
          <CardHeader>
            <CardTitle>All Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {blogPosts.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No blog posts found. Create your first post!
                </div>
              ) : (
                blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                        {post.blog_image ? (
                          <img
                            src={post.blog_image}
                            alt={post.blog_title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <ImageIcon size={20} className="text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        
                        <h3 className="font-semibold text-lg">{post.blog_title}</h3>
                        <h3 className="font-semibold text-lg">{post.slug}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {post.blog_content.length > 100
                            ? `${post.blog_content.substring(0, 100)}...`
                            : post.blog_content}
                        </p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="bg-[#019c9d]/10 text-[#019c9d] px-2 py-1 rounded-full text-xs">
                            {post.blog_cateogry}
                          </span>
                          <span className="text-xs text-gray-500">{post.created_at}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          router.push(`/Admin-blog-panel/add-blog?id=${post.id}`);
                        }}
                      >
                        <Edit3 size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </CardContent>
          
        </Card>
          {/* Pagination - Same as Users page */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white px-4 py-3 rounded-lg shadow mt-6">
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
      </div>
    </div>
    </AdminLayout>
  );
};

export default AdminBlogPanel;
