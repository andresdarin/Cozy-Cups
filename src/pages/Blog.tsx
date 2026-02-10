import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-black selection:text-white flex flex-col">
      <Navbar />

      <div className="flex-grow pt-48 pb-32 px-6 max-w-[1600px] mx-auto w-full">
        <header className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black/10 pb-12">
            <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 block">
                    Journal
                </span>
                <h1 className="font-sans-condensed text-7xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.85]">
                    Coffee <br/> Culture
                </h1>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 max-w-xs text-right hidden md:block pb-2">
                Stories from the source, brewing guides, and community highlights.
            </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {posts.map((post, index) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className={`group block ${index === 0 ? 'md:col-span-2' : ''}`}>
              <div className={`w-full overflow-hidden mb-8 border border-black/5 ${index === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-6 max-w-4xl">
                <div className="flex justify-between items-center border-b border-black/10 pb-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{post.date}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{post.author}</span>
                </div>
                <h2 className={`${index === 0 ? 'text-5xl md:text-7xl' : 'text-4xl md:text-5xl'} font-sans-condensed font-bold uppercase tracking-tight leading-none group-hover:text-gray-600 transition-colors duration-300`}>
                    {post.title}
                </h2>
                <p className="font-sans text-lg text-gray-600 line-clamp-3 leading-relaxed max-w-2xl">
                    {post.excerpt}
                </p>
                <div className="mt-2">
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
