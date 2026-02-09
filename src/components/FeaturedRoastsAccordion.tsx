import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface RoastItem {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  origin: string;
  notes: string[];
}

const roasts: RoastItem[] = [
  {
    id: "1",
    title: "Ethiopian Yirgacheffe",
    price: "$24.00",
    description: "Floral notes with hints of jasmine and citrus. Light roast.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    origin: "Yirgacheffe, Ethiopia",
    notes: ["Jasmine", "Citrus", "Floral"]
  },
  {
    id: "2",
    title: "Colombia Huila",
    price: "$22.00",
    description: "Balanced body with caramel sweetness and nutty undertones. Medium roast.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    origin: "Huila, Colombia",
    notes: ["Caramel", "Nuts", "Balanced"]
  },
  {
    id: "3",
    title: "Early Birds Blend",
    price: "$20.00",
    description: "Our signature house blend. Smooth, chocolatey, and perfect for daily brewing.",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    origin: "Multi-Region Blend",
    notes: ["Chocolate", "Smooth", "House Blend"]
  },
  {
    id: "4",
    title: "Sumatra Mandheling",
    price: "$26.00",
    description: "Deep, earthy flavor with a full body and low acidity. Dark roast.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    origin: "Sumatra, Indonesia",
    notes: ["Earthy", "Full Body", "Spice"]
  },
  {
    id: "5",
    title: "Guatemala Antigua",
    price: "$23.00",
    description: "Elegant and complex with subtle notes of spice and cocoa. Medium roast.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    origin: "Antigua, Guatemala",
    notes: ["Cocoa", "Spice", "Elegant"]
  },
  {
    id: "6",
    title: "Kenya AA",
    price: "$28.00",
    description: "Bright and vibrant with intense berry notes and a wine-like acidity. Light/Medium roast.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    origin: "Nyeri, Kenya",
    notes: ["Berry", "Vibrant", "Winey"]
  }
];

const FeaturedRoastsAccordion = () => {
  const [expandedId, setExpandedId] = useState<string | null>(roasts[0].id);

  return (
    <div className="w-full border border-black overflow-hidden flex flex-col md:flex-row h-[600px] bg-off-white">
      {roasts.map((roast) => {
        const isExpanded = expandedId === roast.id;

        return (
          <motion.div
            key={roast.id}
            initial={false}
            animate={{
              flex: isExpanded ? 5 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`relative flex flex-col md:flex-row overflow-hidden border-b md:border-b-0 md:border-r border-black last:border-0 cursor-pointer ${!isExpanded ? "hover:bg-gray-100" : ""
              }`}
            onClick={() => setExpandedId(roast.id)}
          >
            {/* Collapsed View / Vertical Header */}
            <div
              className={`flex-shrink-0 flex items-center justify-center py-6 md:w-20 transition-colors duration-300 ${isExpanded ? "bg-black text-white" : "bg-transparent text-black"
                }`}
            >
              <h3 className="font-sans-condensed text-2xl md:text-3xl font-bold uppercase tracking-tighter md:-rotate-90 whitespace-nowrap">
                {roast.title}
              </h3>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex-grow flex flex-col md:flex-row h-full overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="w-full md:w-3/5 h-1/2 md:h-full relative p-8">
                    <div className="w-full h-full relative overflow-hidden">
                      <img
                        src={roast.image}
                        alt={roast.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-black px-4 py-2">
                        <span className="font-mono text-xs uppercase tracking-widest text-black">
                          {roast.origin}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details Container */}
                  <div className="w-full md:w-2/5 p-8 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2 block">
                        Featured Selection
                      </span>
                      <h2 className="font-sans-condensed text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-6">
                        {roast.title}
                      </h2>
                      <div className="space-y-6">
                        <p className="font-sans text-lg text-gray-800 leading-relaxed max-w-sm">
                          {roast.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {roast.notes.map((note) => (
                            <span key={note} className="font-mono text-[10px] uppercase tracking-widest border border-black/20 px-2 py-1">
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-black/10">
                      <div className="flex justify-between items-center mb-6">
                        <span className="font-mono text-2xl font-bold">{roast.price}</span>
                        <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">In Stock</span>
                      </div>
                      <Button
                        className="w-full rounded-none bg-black text-white hover:bg-gray-800 font-sans-condensed text-xl uppercase py-6 tracking-wide"
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FeaturedRoastsAccordion;
