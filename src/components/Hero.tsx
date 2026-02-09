import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row">

      {/* Left: Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-off-white flex flex-col justify-center px-8 md:px-20 relative z-10">

        {/* Badge */}
        <div className="absolute top-10 right-10 md:top-20 md:right-20 w-24 h-24 md:w-32 md:h-32 rounded-full border border-black flex items-center justify-center animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="text-[11px] font-mono uppercase tracking-[0.2em]">
                    <textPath href="#curve">
                        100% Natural Product • Organic Coffee •
                    </textPath>
                </text>
            </svg>
            <div className="absolute w-2 h-2 bg-black rounded-full" />
        </div>

        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">
          Est. 2024
        </span>

        <h1 className="font-sans-condensed text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
          Pure <br/>
          <span className="text-gray-400">Roast</span> <br/>
          Experience
        </h1>

        <p className="font-mono text-xs md:text-sm text-gray-600 max-w-sm leading-relaxed mb-10 border-l border-black pl-6">
          Sourced from the finest highland plantations. Roasted in small batches for maximum flavor profile retention.
        </p>

        <div className="flex gap-4">
          <Button className="bg-black text-white rounded-none hover:bg-gray-800 font-sans-condensed text-lg uppercase px-8 h-12 tracking-wide">
            Shop Now
          </Button>
          <Button variant="outline" className="border-black text-black rounded-none hover:bg-gray-100 font-sans-condensed text-lg uppercase px-8 h-12 tracking-wide flex gap-2">
            Our Story <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
