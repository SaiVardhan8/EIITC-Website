"use client";

import React, { useState, useEffect, Suspense } from "react";
import RichTextEditor from '@/components/RichTextEditor'; // Import your custom RichTextEditor

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
  Tag,
  Sparkles
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter, useSearchParams } from 'next/navigation';

interface BlogFormData {
  blog_title: string;
  slug:string;
  blog_content: string;
  blog_image: string;
  blog_cateogry: string;
}

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#019c9d]"></div>
      <p className="text-gray-600 dark:text-gray-400">Loading...</p>
    </div>
  </div>
);

// Separate component that uses useSearchParams
const AddBlogContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingContent, setIsGeneratingContent] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [formData, setFormData] = useState<BlogFormData>({
    blog_title: "",
    slug: "",
    blog_content: "",
    blog_image: "",
    blog_cateogry: "",
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogId = searchParams.get('id');
  const [editingPost, setEditingPost] = useState(null);

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

  useEffect(() => {
    if (blogId) {
      fetchBlog(blogId);
    }
  }, [blogId]);

  const fetchBlog = async (id: string) => {
    try {
      const response = await fetch(`/api/blogs/${id}`);
      const data = await response.json();
      setFormData({
        blog_title: data.blog_title,
        slug: data.slug,
        blog_content: data.blog_content,
        blog_image: data.blog_image,
        blog_cateogry: data.blog_cateogry,
      });
      setImagePreview(data.blog_image);
      setEditingPost(data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  // Function to generate slug from title
  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
  };

  // Updated handleInputChange function
  const handleInputChange = (field: keyof BlogFormData, value: string) => {
    setFormData(prev => {
      const updatedData = {
        ...prev,
        [field]: value
      };
      
      // Auto-generate slug when blog_title changes
      if (field === 'blog_title') {
        updatedData.slug = generateSlug(value);
      }
      
      return updatedData;
    });
  };

  // Handler for RichTextEditor content changes
  const handleRichTextChange = (html: string) => {
    setFormData(prev => ({
      ...prev,
      blog_content: html
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
    // Clear the file input
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const resetForm = () => {
    setFormData({
      blog_title: "",
      slug: "",
      blog_content: "",
      blog_image: "",
      blog_cateogry: "",
    });
    clearImage();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const submitData = new FormData();
      submitData.append('blog_title', formData.blog_title);
      submitData.append('slug', formData.slug);
      submitData.append('blog_content', formData.blog_content);
      submitData.append('blog_cateogry', formData.blog_cateogry);
      
      // Add image if selected
      if (blogId && !selectedImage && formData.blog_image) {
        submitData.append('existing_image_path', formData.blog_image);
      }
      if (selectedImage) {
        submitData.append('image', selectedImage);
      }
  
      const url = blogId ? `/api/blogs/${blogId}` : "/api/blogs";
      const method = blogId ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        body: submitData, // Send FormData instead of JSON
      });
  
      if (response.ok) {
        resetForm();
        router.push('/Admin-blog-panel');
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

  const handleGenerateContent = async () => {
    if (!formData.blog_title) {
      alert("Please enter a blog title before generating content.");
      return;
    }

    setIsGeneratingContent(true);
    try {
      const response = await fetch("/api/blogs/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blogtitle: formData.blog_title }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok && data.content) {
        setFormData((prev) => ({
          ...prev,
          blog_content: data.content,
        }));
      } else {
        alert("Failed to generate content.");
        console.error(data);
      }
    } catch (err) {
      console.error("Error generating content:", err);
      alert("An error occurred while generating content.");
    } finally {
      setIsGeneratingContent(false);
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{blogId ? 'Edit Blog' : 'Add New Blog'}</h2>
        <nav className="text-sm text-gray-500">
          <a href="/admin/dashboard" className="hover:underline">Home</a> / <a href="/Admin-blog-panel" className="hover:underline">Blogs</a> / <span>{blogId ? 'Edit Blog' : 'Add Blog'}</span>
        </nav>
      </div>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-4xl mx-auto"> 
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>{blogId ? 'Edit Blog Post' : 'Create New Blog Post'}</CardTitle>

              <div className="flex justify-end">
                <Button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={handleGenerateContent}
                  disabled={!formData.blog_title || isGeneratingContent}
                >
                  <Sparkles size={16} className="mr-2" />
                  {isGeneratingContent ? "Generating..." : "Generate Content by AI"}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Book size={16} className="mr-2" />
                    Blog Title
                  </label>
                  <Input
                    value={formData.blog_title}
                    onChange={(e) => handleInputChange("blog_title", e.target.value)}
                    placeholder="Enter blog title..."
                    required
                  />
                </div>
                 <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Book size={16} className="mr-2" />
                    Slug
                  </label>
                  <Input
                    value={formData.slug}
                    onChange={(e) => handleInputChange("slug", e.target.value)}
                    placeholder="Enter slug..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Tag size={16} className="mr-2" />
                    Category
                  </label>
                  <Select
                    value={formData.blog_cateogry}
                    onValueChange={(value) => handleInputChange("blog_cateogry", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <ImageIcon size={16} className="mr-2" />
                    Blog Image
                  </label>
                  <div className="space-y-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#019c9d] file:text-white hover:file:bg-[#017879] cursor-pointer"
                    />
                    {imagePreview && (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-32 object-contain rounded-md border"
                        />
                        <button
                          type="button"
                          onClick={clearImage}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                      <Edit3 size={16} className="mr-2" />
                    Blog Content
                  </label>


                  <div className="border rounded-md">
                    <RichTextEditor
                      value={formData.blog_content}
                      onChange={handleRichTextChange}
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push('/Admin-blog-panel')}
                    disabled={isLoading}
                  >
                    <X size={16} className="mr-2" />
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#019c9d] hover:bg-[#017879] disabled:opacity-50"
                  >
                    <Save size={16} className="mr-2" />
                    {isLoading ? "Saving..." : editingPost ? "Update Blog" : "Create Blog"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

// Main component with Suspense boundary
const AddBlog = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AddBlogContent />
    </Suspense>
  );
};

export default AddBlog;