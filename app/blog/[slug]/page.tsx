"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft, Calendar, Clock, Bookmark, Eye,
  Tag, User, Twitter, Facebook, Linkedin, Link2
} from "lucide-react";
import { motion } from "framer-motion";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
interface BlogPost {
  id: number;
  slug:string;
  blog_title: string;
  blog_content: string;
  blog_image: string;
  blog_cateogry: string;
  created_at: string;
  author?: string;
  readTime?: string;
  views?: number;
}

const BlogPostDetail = () => {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  const router = useRouter();

  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchBlogPost = async () => {
      try {
        const res = await fetch(`/api/blog/${slug}`);
        if (!res.ok) throw new Error("Blog not found");
        const data = await res.json();
        setBlogPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setBlogPost(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blogPost?.blog_title || "";

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      copy: url,
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], "_blank");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#019c9d]"></div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <button
            onClick={() => router.back()}
            className="text-[#019c9d] hover:underline"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
 <NavigationMenu/>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      {/* <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button 
            onClick={() => router.back()}
            className="flex items-center text-[#019c9d] hover:text-[#019c9d]/80 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 py-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#019c9d]/10 text-[#019c9d] rounded-full text-sm font-medium mb-4">
                <Tag size={14} className="inline mr-1" />
                {blogPost.blog_cateogry}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {blogPost.blog_title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
                <div className="flex items-center"><User size={16} className="mr-2" /><span>{blogPost.author || "Anonymous"}</span></div>
                <div className="flex items-center"><Calendar size={16} className="mr-2" /><span>{new Date(blogPost.created_at).toLocaleDateString()}</span></div>
                <div className="flex items-center"><Clock size={16} className="mr-2" /><span>{blogPost.readTime || "5 min read"}</span></div>
                <div className="flex items-center"><Eye size={16} className="mr-2" /><span>{blogPost.views || 0} views</span></div>
              </div>
              <div className="flex items-center justify-between border-b pb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Share:</span>
                  <button onClick={() => handleShare('twitter')} className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"><Twitter size={16} /></button>
                  <button onClick={() => handleShare('facebook')} className="p-2 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200"><Facebook size={16} /></button>
                  <button onClick={() => handleShare('linkedin')} className="p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200"><Linkedin size={16} /></button>
                  <button onClick={() => handleShare('copy')} className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"><Link2 size={16} /></button>
                </div>
                <button onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-2 rounded-full transition-colors ${isBookmarked ? 'bg-[#019c9d] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  <Bookmark size={16} className={isBookmarked ? 'fill-current' : ''} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <img src={blogPost.blog_image} alt={blogPost.blog_title} className="w-full h-full object-contain bg-white" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white dark:bg-gray-800 pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-[#019c9d] prose-strong:text-gray-900 dark:prose-strong:text-white"
          >
            {blogPost.blog_content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h4 key={index} className="text-lg font-semibold mt-4 mb-2">{paragraph.replace(/\*\*/g, '')}</h4>;
              } else if (paragraph.startsWith('- ')) {
                return <li key={index} className="ml-4">{paragraph.replace('- ', '')}</li>;
              } else if (paragraph.trim()) {
                return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
              }
              return null;
            })}
          </motion.div>
        </div>
      </section>
      <Footer/>
    </div>
    </>
  );
};

export default BlogPostDetail;
