import React from 'react';
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: "FRENCH ROAST",
        price: "$37.00",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        tag: null
    },
    {
        id: 2,
        name: "DECAF ESPRESSO",
        price: "$41.00",
        image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        tag: "NEW"
    },
    {
        id: 3,
        name: "COSTA RICA",
        price: "$36.00",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        tag: null
    },
    {
        id: 4,
        name: "DECAF FRENCH ROAST",
        price: "$45.00",
        image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        tag: "SOLD"
    }
];

const ProductGridSection = () => {
    return (
        <section className="w-full border-b border-black bg-white">
            <div className="p-12 md:p-20 border-b border-black">
                <h2 className="font-sans-condensed text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-tight">
                    THE COFFEE THAT'S RIGHT FOR YOU
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <div key={product.id} className="border-b sm:border-b-0 sm:border-r border-black last:border-r-0 p-8 flex flex-col items-center group cursor-pointer hover:bg-black/5 transition-colors relative">
                        {product.tag && (
                            <div className={`absolute top-0 right-0 px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-widest ${product.tag === 'SOLD' ? 'bg-black text-white' : 'bg-[#F5E642] text-black'}`}>
                                {product.tag}
                            </div>
                        )}

                        <div className="w-full aspect-[4/5] mb-8 relative flex items-center justify-center overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-4/5 h-4/5 object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                        <div className="w-full text-left">
                            <h3 className="font-sans-condensed text-xl font-bold uppercase tracking-tight mb-2">
                                {product.name}
                            </h3>
                            <p className="font-mono text-xs text-gray-500">
                                {product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductGridSection;
