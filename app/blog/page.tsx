"use client";
import PageMetadata from '@/components/PageMetaData';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Book, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import NavigationMenu from '@/components/NavigationMenu';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  slug:string;
  blog_title: string;
  blog_content: string;
  blog_image: string;
  blog_cateogry: string;
  date: string;
}

const Blog = () => {
  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();

        // Ensure the response is an array
        if (Array.isArray(data)) {
          setBlogPosts(data);
          console.log("Fetched blog posts:", JSON.stringify(data));
        } else {
          console.error("Invalid data format: Expected an array");
          setBlogPosts([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogPosts([]); // Fallback to an empty array in case of error
      }
    };

    fetchBlogs();
  }, []);
console.log("blogs",blogPosts); 
  return (
<>
    <NavigationMenu />
    <PageMetadata 
        title="Blog - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
    <div className="min-h-screen">
      {/* <PageMetadata 
        title="Blog - Industry Insights & Tech Trends"
        description="Explore expert insights, industry trends, and innovative solutions from our team of specialists across our family of companies."
        keywords="blog, AI insights, tech trends, industry news, business transformation, Edvenswa blog, AI innovations"
        ogUrl="/blog"
        canonicalUrl="/blog"
      /> */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            {/* <Button
              variant="ghost"
              onClick={() => router.push("/")}
              className="flex self-start justify-start text-left text-[#019c9d] hover:text-[#019c9d]/80 p-3 h-auto relative z-10"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </Button> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 bg-[#019c9d]/10 text-[#019c9d] rounded-full text-sm font-medium mb-4"
            >
              Industry Insights
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-6"
            >
              Our Insights
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-foreground/70 text-lg"
            >
              Explore expert insights, industry trends, and innovative solutions
              from our team of specialists across our family of companies.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-black/20 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div
        onClick={() => router.push(`/blog/${post.slug}`)} // Redirect when clicking anywhere on the post
        className="cursor-pointer"
      >

               
                <div
                  className="h-48 bg-gray-200 relative"
                  style={{
                    backgroundImage: `url(${post.blog_image})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="absolute top-4 left-4 bg-[#019c9d] text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.blog_cateogry}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-foreground/60 mb-3">
                    {/* <Book size={14} className="mr-2" /> */}
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {post.blog_title}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {post.blog_content.split(" ").slice(0, 20).join(" ")}...
                  </p>
                  <div className="flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#019c9d] hover:text-[#019c9d]/80 p-0 h-auto"
                      onClick={() => router.push(`/blog/${post.id}`)}
                    >
                      Read More <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>
                 </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            {/* <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination> */}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    </>
  );
};

export default Blog;
