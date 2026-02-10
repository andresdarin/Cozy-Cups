import React from 'react';

const SplitMenu = () => {
    const menuItems = [
        { name: "Espresso", price: "3.50" },
        { name: "Macchiato", price: "4.00" },
        { name: "Cortado", price: "4.25" },
        { name: "Cappuccino", price: "4.50" },
        { name: "Latte", price: "5.00" },
        { name: "Filter", price: "3.00" },
        { name: "Cold Brew", price: "4.50" },
        { name: "Mocha", price: "5.50" },
        { name: "Hot Chocolate", price: "4.00" },
        { name: "Matcha Latte", price: "5.50" }
    ];

    return (
        <section className="w-full flex flex-col md:flex-row min-h-screen border-b border-black">
            {/* Left: Menu */}
            <div className="w-full md:w-1/2 bg-white p-12 md:p-32 flex flex-col justify-center border-r border-black relative">
                 <div className="absolute top-12 left-12 md:top-24 md:left-24 rotate-90 origin-top-left translate-x-8">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-300">Daily Offerings</span>
                 </div>

                 <h2 className="font-sans-condensed text-6xl md:text-8xl font-black uppercase tracking-wide leading-none mb-16 self-start pl-12 md:pl-0">
                    Menu
                 </h2>

                 <div className="flex flex-col gap-6 w-full max-w-lg pl-12 md:pl-0">
                    {menuItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-baseline group cursor-pointer">
                            <span className="font-mono text-lg uppercase tracking-widest text-black group-hover:text-gray-500 transition-colors">
                                {item.name}
                            </span>
                            <div className="flex-grow border-b border-dotted border-black/20 mx-4 relative top-[-4px]" />
                            <span className="font-mono text-lg text-black font-bold">
                                {item.price}
                            </span>
                        </div>
                    ))}
                 </div>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen bg-black overflow-hidden group">
                <img
                    src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Coffee pour"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-black/20" />

                {/* Handwritten Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="transform -rotate-12 text-[#FFFDD0] font-dancing text-6xl md:text-8xl mix-blend-overlay opacity-90">
                        Our Coffee <br/> is Love
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SplitMenu;
