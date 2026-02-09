import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Ethiopian Yirgacheffe",
      price: "$24.00",
      description: "Floral notes with hints of jasmine and citrus. Light roast.",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Colombia Huila",
      price: "$22.00",
      description: "Balanced body with caramel sweetness and nutty undertones. Medium roast.",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Sumatra Mandheling",
      price: "$25.00",
      description: "Full body with earthy, herbal flavors and low acidity. Dark roast.",
      image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Early Birds Blend",
      price: "$20.00",
      description: "Our signature house blend. Smooth, chocolatey, and perfect for daily brewing.",
      image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Ceramic V60 Dripper",
      price: "$28.00",
      description: "Classic ceramic dripper for pour-over coffee. Size 02.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Precision Scale",
      price: "$45.00",
      description: "Digital scale with timer for precise brewing measurements.",
      image: "https://images.unsplash.com/photo-1517080315816-62734f664539?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-black selection:text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
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
              image={product.image}
              title={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
