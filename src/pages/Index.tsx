import React from "react";
import ShippingBanner from "@/components/ShippingBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Team from "@/components/Team";
import Reservation from "@/components/Reservation";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-black selection:text-white">
      <ShippingBanner />
      <Navbar />
      <main>
        <Hero />

        <section id="shop" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-sans-condensed text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
              Featured <br/> Roasts
            </h2>
            <a href="/shop" className="font-mono text-xs uppercase tracking-widest border-b border-black pb-1 hover:pb-2 transition-all">
              View All Products
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              image="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Ethiopian Yirgacheffe"
              price="$24.00"
              description="Floral notes with hints of jasmine and citrus. Light roast."
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Colombia Huila"
              price="$22.00"
              description="Balanced body with caramel sweetness and nutty undertones. Medium roast."
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Early Birds Blend"
              price="$20.00"
              description="Our signature house blend. Smooth, chocolatey, and perfect for daily brewing."
            />
          </div>
        </section>

        <Team />
        <Reservation />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
