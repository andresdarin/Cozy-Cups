import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
    {
        rating: 4.9,
        text: "ANOTHER REASON PEOPLE JUST CAN'T KEEP AWAY FROM THEIR LOCAL COFFEE SHOP IS THE QUALITY OF COFFEE THAT'S ON OFFER.",
        author: "Henry Monro"
    }
];

const ReviewsSection = () => {
    return (
        <section className="w-full">
            {/* 1. Phrase Banner */}
            <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt="Coffee background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 font-sans-condensed text-5xl md:text-8xl font-extrabold text-white text-center uppercase tracking-tighter max-w-4xl px-6 leading-none"
                >
                    MORE THAN JUST A <br /> COFFEE SHOP
                </motion.h2>
            </div>

            {/* 2. Reviews Split Section */}
            <div className="flex flex-col md:flex-row min-h-[500px] border-b border-black">
                {/* Left: Review Text */}
                <div className="w-full md:w-1/2 p-12 md:p-24 bg-white flex flex-col items-center justify-center text-center border-r border-black relative grainy">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-md"
                    >
                        {/* Stars */}
                        <div className="flex gap-1 justify-center mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-[#F5E642] text-[#F5E642]" />
                            ))}
                        </div>

                        <p className="font-sans-condensed text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight mb-8">
                            "{reviews[0].text}"
                        </p>

                        <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                            {reviews[0].author}
                        </span>

                        {/* Pagination Dots (Decorative) */}
                        <div className="flex gap-2 justify-center mt-12">
                            <div className="w-1.5 h-1.5 border border-black rotate-45" />
                            <div className="w-1.5 h-1.5 bg-black rotate-45" />
                            <div className="w-1.5 h-1.5 border border-black rotate-45" />
                        </div>
                    </motion.div>
                </div>

                {/* Right: Product Image */}
                <div className="w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden bg-off-white flex items-center justify-center p-12 relative grainy">
                    <img
                        src="https://images.unsplash.com/photo-1544787210-28271d7b6009?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="Coffee cup minimal"
                        className="w-4/5 h-4/5 object-contain mix-blend-multiply hover:scale-105 transition-transform duration-1000"
                    />
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
