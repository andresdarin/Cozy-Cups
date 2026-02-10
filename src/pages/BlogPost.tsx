import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { posts } from "@/data/posts";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
        <div className="min-h-screen bg-off-white font-sans text-black flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center pt-32">
                <h1 className="font-sans-condensed text-6xl uppercase mb-4">Post Not Found</h1>
                <Link to="/blog">
                    <Button variant="outline" className="font-mono text-xs uppercase tracking-widest">Back to Blog</Button>
                </Link>
            </div>
            <Footer />
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-black selection:text-white">
      <Navbar />

      <article className="pt-32 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-500 hover:text-black mb-12 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
            </Link>

            <header className="mb-16 text-center">
                <div className="flex justify-center gap-8 mb-6 font-mono text-[10px] uppercase tracking-widest text-gray-500 border-b border-black/10 pb-6">
                    <span>{post.date}</span>
                    <span>By {post.author}</span>
                </div>
                <h1 className="font-sans-condensed text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">
                    {post.title}
                </h1>
            </header>

            <div className="w-full aspect-video mb-16 overflow-hidden border border-black/5 bg-gray-100">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div
                className="prose prose-lg prose-headings:font-sans-condensed prose-headings:uppercase prose-p:font-serif prose-p:text-gray-700 prose-p:leading-loose mx-auto"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
