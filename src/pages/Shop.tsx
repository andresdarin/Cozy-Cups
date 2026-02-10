import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Shop = () => {
  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-black selection:text-white">
      <Navbar />
      
      <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 block">
                    Catalog
                </span>
                <h1 className="font-sans-condensed text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
                    Shop <br/> Coffee
                </h1>
            </div>
            <div className="flex gap-4 font-mono text-xs uppercase tracking-widest">
                <button className="border-b border-black pb-1">All</button>
                <button className="text-gray-400 hover:text-black transition-colors">Beans</button>
                <button className="text-gray-400 hover:text-black transition-colors">Equipment</button>
                <button className="text-gray-400 hover:text-black transition-colors">Merch</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
