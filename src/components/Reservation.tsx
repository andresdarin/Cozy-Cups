import React from 'react';
import { Button } from "@/components/ui/button";

const Reservation = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden grainy border-t border-white/10" id="reserve">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-gray-400 mb-6 block">
                Book a Table
            </span>
            <h2 className="font-sans-condensed text-6xl md:text-8xl font-bold mb-16 uppercase tracking-wide leading-tight">
                Reserve Your Spot
            </h2>

            <form className="flex flex-col md:flex-row gap-8 md:gap-12 items-end justify-center max-w-3xl mx-auto">
                <div className="w-full md:flex-1">
                    <label className="block text-left text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-gray-700 font-sans-condensed text-2xl py-2 focus:outline-none focus:border-white transition-colors"
                    />
                </div>
                 <div className="w-full md:flex-1">
                    <label className="block text-left text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Date</label>
                    <input
                        type="text"
                        placeholder="Oct 24, 7:00 PM"
                        className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-gray-700 font-sans-condensed text-2xl py-2 focus:outline-none focus:border-white transition-colors"
                    />
                </div>
                 <div className="w-full md:w-32">
                    <label className="block text-left text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Guests</label>
                    <input
                        type="number"
                        placeholder="2"
                        className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-gray-700 font-sans-condensed text-2xl py-2 focus:outline-none focus:border-white transition-colors"
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full md:w-auto bg-white text-black hover:bg-gray-200 rounded-none font-sans-condensed text-xl uppercase px-10 h-12 tracking-wide"
                >
                    Confirm
                </Button>
            </form>

            <p className="mt-12 font-mono text-xs text-gray-600 uppercase tracking-widest">
                For groups larger than 8, please contact us directly.
            </p>
        </div>
    </section>
  );
};

export default Reservation;
