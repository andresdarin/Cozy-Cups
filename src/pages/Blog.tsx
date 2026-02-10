import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-black selection:text-white">
      <Navbar />

      <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 block">
                    Journal
                </span>
                <h1 className="font-sans-condensed text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
                    Coffee <br/> Culture
                </h1>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="group block">
              <div className="w-full aspect-[4/3] overflow-hidden mb-8 border border-black/5">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-black/10 pb-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{post.date}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{post.author}</span>
                </div>
                <h2 className="font-sans-condensed text-4xl font-bold uppercase tracking-tight leading-none group-hover:underline decoration-1 underline-offset-4 decoration-black/30 transition-all">
                    {post.title}
                </h2>
                <p className="font-sans text-base text-gray-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                </p>
                <div className="mt-4">
                    <span className="font-mono text-xs uppercase tracking-widest border-b border-black pb-1 group-hover:bg-black group-hover:text-white group-hover:px-2 group-hover:py-1 group-hover:border-transparent transition-all duration-300">Read Article</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
