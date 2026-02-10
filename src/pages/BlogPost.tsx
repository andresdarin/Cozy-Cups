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
            <div className="flex-1 flex flex-col items-center justify-center pt-48">
                <h1 className="font-sans-condensed text-6xl uppercase mb-4">Post Not Found</h1>
                <Link to="/blog">
                    <Button variant="outline" className="font-mono text-xs uppercase tracking-widest rounded-none border-black hover:bg-black hover:text-white">Back to Blog</Button>
                </Link>
            </div>
            <Footer />
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-black selection:text-white flex flex-col">
      <Navbar />

      <article className="pt-48 pb-32 px-6 flex-grow w-full max-w-[1400px] mx-auto">

        <header className="mb-24 text-center max-w-5xl mx-auto relative">
            <Link to="/blog" className="absolute left-0 top-0 hidden md:inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors group">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                Back
            </Link>

            <div className="flex justify-center gap-8 mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 border-b border-black/10 pb-8 mx-auto w-fit">
                <span>{post.date}</span>
                <span>•</span>
                <span>By {post.author}</span>
            </div>
            <h1 className="font-sans-condensed text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.85] mb-12">
                {post.title}
            </h1>
        </header>

        <div className="w-full aspect-[21/9] mb-24 overflow-hidden border-y border-black/5 bg-gray-100">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover parallax-effect" />
        </div>

        <div className="max-w-2xl mx-auto">
            <div
                className="prose prose-lg prose-headings:font-sans-condensed prose-headings:uppercase prose-p:font-serif prose-p:text-gray-800 prose-p:leading-loose prose-a:text-black prose-a:no-underline prose-a:border-b prose-a:border-black/20 hover:prose-a:border-black transition-all"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-24 pt-12 border-t border-black/10 flex justify-between items-center">
                <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Share this article</span>
                <div className="flex gap-4">
                    <button className="w-8 h-8 border border-black/10 hover:bg-black hover:text-white transition-colors flex items-center justify-center font-mono text-xs">FB</button>
                    <button className="w-8 h-8 border border-black/10 hover:bg-black hover:text-white transition-colors flex items-center justify-center font-mono text-xs">TW</button>
                    <button className="w-8 h-8 border border-black/10 hover:bg-black hover:text-white transition-colors flex items-center justify-center font-mono text-xs">LN</button>
                </div>
            </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
