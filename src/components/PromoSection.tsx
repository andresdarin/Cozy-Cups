import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PromoSection = () => {
    const promoProducts = [
        {
            id: "p1",
            name: "ARABICA BEKELE",
            price: "$44.00",
            image: "/2.png",
        },
        {
            id: "p2",
            name: "ROBUSTA SANTA",
            price: "$35.00",
            image: "/3.png",
        }
    ];

    return (
        <section className="w-full flex flex-col md:flex-row border-b border-black md:min-h-[600px]">
            {/* Left: Brand Message */}
            <div className="w-full md:w-1/2 py-24 px-6 md:p-32 bg-[#F3EFE0] flex flex-col justify-center border-r border-black relative grainy">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-sans-condensed text-5xl md:text-6xl font-extrabold uppercase tracking-wide leading-tight mb-8">
                        OUR BLENDS DELIVER ON THE PROMISE OF <br />
                        BALANCE AND CONSISTENCY, <span className="relative inline-block">
                            ROASTED TO
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-black/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span> <br />
                        MAXIMIZE SWEETNESS.
                    </h2>
                    <p className="font-sans text-gray-600 mb-12 max-w-md leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
                    </p>
                    <a
                        href="#journal"
                        className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest font-bold"
                    >
                        VIEW MORE
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ArrowRight className="w-4 h-4" />
                        </motion.span>
                    </a>
                </motion.div>
            </div>

            {/* Right: Promo Products */}
            <div className="w-full md:w-1/2 flex flex-col md:flex-row bg-[#F3EFE0] grainy">
                {promoProducts.map((product) => (
                    <div key={product.id} className="flex-1 py-24 px-6 md:p-20 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-black last:border-0 hover:bg-black/5 transition-colors cursor-pointer group">
                        <div className="w-full aspect-[3/4] mb-8 relative flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-4/5 h-4/5 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Fake label for senior aesthetic */}
                            <div className="absolute inset-x-0 bottom-4 text-center">
                                <div className="w-12 h-[1px] bg-black/20 mx-auto mb-2" />
                                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-black/40">Premium Select</span>
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 className="font-sans-condensed text-2xl font-bold uppercase tracking-tight text-center mb-1">
                                {product.name}
                            </h3>
                            <p className="font-mono text-sm text-center text-gray-500">
                                {product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PromoSection;
