import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Menu = () => {
  const menuCategories = [
    {
      name: "Coffee",
      items: [
        { name: "Double Espresso", price: "3.50", desc: "Our signature blend, rich and complex." },
        { name: "Filter Coffee", price: "4.00", desc: "Daily single origin rotation." },
        { name: "Flat White", price: "4.50", desc: "Silky microfoam over double ristretto." },
        { name: "Cold Brew", price: "5.00", desc: "Steeped for 24 hours." }
      ]
    },
    {
      name: "Pastries",
      items: [
        { name: "Croissant", price: "3.50", desc: "AOP Isigny butter." },
        { name: "Pain au Chocolat", price: "4.00", desc: "Valrhona chocolate." },
        { name: "Banana Bread", price: "4.50", desc: "Toasted with espresso butter." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-black selection:text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-48 pb-32 px-6 max-w-[1400px] mx-auto w-full">
        <header className="mb-24 border-b border-black/10 pb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 block">
                Cafe
            </span>
            <h1 className="font-sans-condensed text-7xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.85]">
                Our <br/> Menu
            </h1>
        </header>

        <div className="grid md:grid-cols-2 gap-24">
            {menuCategories.map((category, index) => (
                <div key={index}>
                    <h2 className="font-sans-condensed text-4xl uppercase tracking-tight mb-12 border-b border-black pb-4">{category.name}</h2>
                    <div className="space-y-12">
                        {category.items.map((item, idx) => (
                            <div key={idx} className="group flex justify-between items-baseline border-b border-dashed border-black/10 pb-4 hover:border-black/30 transition-colors">
                                <div>
                                    <h3 className="font-sans-condensed text-2xl uppercase tracking-tight mb-1">{item.name}</h3>
                                    <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">{item.desc}</p>
                                </div>
                                <span className="font-mono text-lg font-bold">€{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
