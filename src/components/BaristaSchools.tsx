import React from 'react';

const BaristaSchools = () => {
    return (
        <section className="w-full bg-[#BDD2C8] py-24 md:py-32 border-b border-black">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                {/* Left: Image */}
                <div className="w-full aspect-[4/5] md:aspect-square relative rounded-2xl overflow-hidden border border-black/10 shadow-lg">
                    <img
                        src="https://images.unsplash.com/photo-1507133750069-775b0f0da746?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="Barista pouring latte art"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    {/* Optional Overlay/Badge could go here */}
                </div>

                {/* Right: Content */}
                <div className="flex flex-col items-start text-left">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-black/60 mb-6 block">
                        Education
                    </span>
                    <h2 className="font-sans-condensed text-5xl md:text-7xl font-bold uppercase tracking-wide leading-tight mb-8 text-black">
                        Barista <br/> Schools
                    </h2>
                    <p className="font-sans text-lg text-black/80 max-w-md mb-12 leading-loose">
                        Master the craft of coffee. From bean to brew, learn the techniques that define world-class barista skills in our hands-on workshops.
                    </p>

                    <button className="bg-black text-white font-sans-condensed text-xl uppercase px-8 py-4 tracking-widest hover:bg-white hover:text-black hover:border-black border border-transparent transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                        <span className="relative z-10" style={{ fontFamily: 'Impact, sans-serif' }}>View More</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BaristaSchools;
