import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "DELIVERY",
        description: "Vivamus hendrerit at sapien nec mattis. Quisque quis arcu",
        link: "#"
    },
    {
        title: "WHOLESALE",
        description: "Pellentesque in tempor lorem, vel porttitor est.",
        link: "#"
    },
    {
        title: "CONSISTENCY",
        description: "Aliquam ut arcu sodales, gravida quam vitae.",
        link: "#"
    },
    {
        title: "QUALITY",
        description: "Nam at sapien ligula. Morbi maximus scelerisque mi sed.",
        link: "#"
    }
];

const ServicesSection = () => {
    return (
        <section className="w-full flex flex-col md:flex-row border-b border-black min-h-[600px]">
            {/* Left Block: Food & Aesthetic */}
            <div className="w-full md:w-1/2 bg-[#F3EFE0] py-24 px-6 md:p-32 flex flex-col justify-between relative grainy border-r border-black overflow-hidden">
                <div className="relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-sans-condensed text-6xl md:text-8xl font-black uppercase tracking-wide leading-none mb-12"
                    >
                        SWING BY OUR PLACE <br />
                        WE ALSO HAVE FOOD
                    </motion.h2>

                    <div className="relative w-48 h-48 md:w-64 md:h-64 mt-12">
                        {/* Sketchy Circle Graphic */}
                        <svg className="absolute inset-0 w-full h-full text-black/20" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="animate-spin-slow" />
                        </svg>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                            <span className="font-dancing text-4xl md:text-5xl block -rotate-12 mb-2">menu</span>
                            <span className="font-dancing text-3xl md:text-4xl block rotate-6">Food</span>
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                            alt="Pastry"
                            className="absolute -bottom-8 -right-8 w-32 h-32 md:w-48 md:h-48 object-contain mix-blend-multiply rotate-12 group-hover:rotate-0 transition-transform duration-1000"
                        />
                    </div>
                </div>
            </div>

            {/* Right Block: Services List */}
            <div className="w-full md:w-1/2 bg-[#F3EFE0] flex flex-col grainy">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex-1 p-12 md:p-20 border-b border-black last:border-b-0 flex flex-col md:flex-row justify-between items-start md:items-center group hover:bg-black/5 transition-colors cursor-pointer"
                    >
                        <div className="max-w-md">
                            <h3 className="font-sans-condensed text-2xl md:text-3xl font-bold uppercase tracking-wide mb-2">
                                {service.title}
                            </h3>
                            <p className="font-mono text-xs text-gray-500 leading-loose">
                                {service.description}
                            </p>
                        </div>

                        <a href={service.link} className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold mt-4 md:mt-0 opacity-40 group-hover:opacity-100 transition-opacity">
                            VIEW MORE
                            <svg className="w-6 h-3" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
                                <path d="M0 6H22M22 6L17 1M22 6L17 11" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
