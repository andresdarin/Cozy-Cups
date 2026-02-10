import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Shop = () => {
  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-black selection:text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-48 pb-32 px-6 max-w-[1600px] mx-auto w-full">
        <header className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-black/10 pb-12">
            <div className="space-y-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 block">
                    Catalog 001
                </span>
                <h1 className="font-sans-condensed text-7xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.85]">
                    Shop <br/> Coffee
                </h1>
            </div>
            <div className="flex flex-wrap gap-8 font-mono text-[10px] md:text-xs uppercase tracking-widest pb-2">
                <button className="border-b border-black pb-1 transition-all">All Products</button>
                <button className="text-gray-400 hover:text-black transition-colors">Beans</button>
                <button className="text-gray-400 hover:text-black transition-colors">Equipment</button>
                <button className="text-gray-400 hover:text-black transition-colors">Merch</button>
            </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.name}
              price={product.price}
              description={product.description}
              category={product.category}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
