import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        title: "ENJOY LIFE SIP BY SIP",
        subtitle: "with love!",
        color: "bg-off-white"
    },
    {
        image: "https://images.unsplash.com/photo-1509785303752-92e8d8495c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        title: "FRESHLY ROASTED DAILY",
        subtitle: "from bean to cup.",
        color: "bg-off-white"
    },
    {
        image: "https://images.unsplash.com/photo-1511537632536-b7a575845363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        title: "ARTISANAL COFFEE CRAFT",
        subtitle: "pure passion.",
        color: "bg-off-white"
    },
    {
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        title: "MOMENTS OF CALM",
        subtitle: "shared daily.",
        color: "bg-off-white"
    }
];

const HeroSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="relative w-full h-[calc(100vh-110px)] mt-[110px] overflow-hidden border-b border-black">
            <div className="overflow-hidden h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {slides.map((slide, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 h-full flex flex-col md:flex-row">
                            {/* Left: Image with Overlay Menu (Decorative) */}
                            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group border-r border-black/10">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/5" />
                            </div>

                            {/* Right: Content */}
                            <div className={`w-full md:w-1/2 h-1/2 md:h-full ${slide.color} flex flex-col items-center justify-center p-8 md:p-20 relative grainy`}>
                                {/* Badge Overlay */}
                                <div className="absolute top-10 right-10 md:top-20 md:right-32 w-28 h-28 md:w-36 md:h-36 rounded-full border border-black/10 flex items-center justify-center">
                                    <svg viewBox="0 0 100 100" className="w-full h-full p-3 animate-spin-slow">
                                        <path id={`curve-${index}`} d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                        <text className="text-[10px] font-mono uppercase tracking-[0.2em] fill-black">
                                            <textPath href={`#curve-${index}`}>
                                                • PREMIUM QUALITY • NATURAL PRODUCT
                                            </textPath>
                                        </text>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <img
                                            src="https://api.dicebear.com/7.x/shapes/svg?seed=coffee&backgroundColor=transparent"
                                            alt="stamp"
                                            className="w-16 h-16 opacity-10"
                                        />
                                    </div>
                                </div>

                                <div className="max-w-xl text-center md:text-left">
                                    <motion.h1
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="font-sans-condensed text-7xl md:text-9xl font-extrabold uppercase tracking-tighter leading-[0.85] mb-4"
                                    >
                                        {slide.title.split(' ').map((word, i) => (
                                            <span key={i} className="block">{word}</span>
                                        ))}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                        className="font-dancing text-3xl md:text-5xl coffee-gold italic mt-4"
                                    >
                                        {slide.subtitle}
                                    </motion.p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#F5E642] border-y border-r border-black h-16 w-16 md:h-20 md:w-20 flex items-center justify-center group hover:bg-black transition-colors duration-300"
            >
                <ChevronLeft className="w-8 h-8 group-hover:text-white transition-colors" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#F5E642] border-y border-l border-black h-16 w-16 md:h-20 md:w-20 flex items-center justify-center group hover:bg-black transition-colors duration-300"
            >
                <ChevronRight className="w-8 h-8 group-hover:text-white transition-colors" />
            </button>
        </section>
    );
};

export default HeroSlider;
