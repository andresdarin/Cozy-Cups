import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const SocialFooter = () => {
    const socialItems = [
        { type: 'image', src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop' },
        { type: 'quote', text: '“Coffee is a language in itself.”', author: 'Jackie Chan' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=400&h=400&fit=crop' },
        { type: 'quote', text: '“I never laugh until I’ve had my coffee.”', author: 'Clark Gable' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=400&fit=crop' },
        { type: 'quote', text: '“Life happens, coffee helps.”', author: 'Unknown' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop' },
        { type: 'quote', text: '“But first, coffee.”', author: 'Everyone' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=400&fit=crop' },
    ];

    return (
        <footer className="w-full bg-white border-t border-black">
            {/* Social Grid */}
            <div className="w-full py-20 px-6 border-b border-black">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="font-sans-condensed text-4xl md:text-6xl uppercase tracking-wide mb-4">Follow Us For More</h2>
                    <span className="font-mono text-sm tracking-widest text-gray-400">@EARLYBIRDSCOFFEE</span>
                </div>

                <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
                    {socialItems.map((item, index) => (
                        <div key={index} className="aspect-square w-full rounded-lg overflow-hidden group relative">
                            {item.type === 'image' ? (
                                <>
                                    <img
                                        src={item.src}
                                        alt="Social post"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <Instagram className="text-white w-8 h-8" />
                                    </div>
                                </>
                            ) : (
                                <div className="w-full h-full bg-[#FFF9C4] flex flex-col items-center justify-center p-6 text-center">
                                    <p className="font-dancing text-xl md:text-2xl mb-4 leading-relaxed">
                                        {item.text}
                                    </p>
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                                        — {item.author}
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Final Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">

                {/* Column 1: Logo & Address */}
                <div className="flex flex-col items-start gap-6">
                    <div className="w-20 h-20 rounded-full border border-black flex items-center justify-center bg-black text-white font-sans-condensed text-2xl font-bold tracking-tight mb-2">
                        EB
                    </div>
                    <address className="font-mono text-sm text-gray-600 not-italic leading-loose">
                        123 Roast Blvd, <br/>
                        Brewing District, NY 10012 <br/>
                        <a href="mailto:hello@earlybirds.com" className="hover:text-black transition-colors underline decoration-1 underline-offset-4">hello@earlybirds.com</a>
                    </address>
                </div>

                {/* Column 2: Account Links */}
                <div className="flex flex-col items-center md:items-start gap-6 pt-4">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Account</span>
                    <a href="#" className="font-sans-condensed text-xl uppercase tracking-wide hover:underline decoration-1 underline-offset-4 decoration-black transition-all">
                        My Account
                    </a>
                    <a href="#" className="font-sans-condensed text-xl uppercase tracking-wide hover:underline decoration-1 underline-offset-4 decoration-black transition-all">
                        Checkout
                    </a>
                    <a href="#" className="font-sans-condensed text-xl uppercase tracking-wide hover:underline decoration-1 underline-offset-4 decoration-black transition-all">
                        Cart (0)
                    </a>
                </div>

                {/* Column 3: Social Links Vertical */}
                <div className="flex flex-col items-end md:items-end gap-6 pt-4">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Socials</span>
                    <a href="#" className="group flex items-center gap-2 font-mono text-sm uppercase tracking-widest hover:text-gray-600 transition-colors">
                        Instagram
                        <Instagram size={16} />
                    </a>
                    <a href="#" className="group flex items-center gap-2 font-mono text-sm uppercase tracking-widest hover:text-gray-600 transition-colors">
                        Twitter
                        <Twitter size={16} />
                    </a>
                    <a href="#" className="group flex items-center gap-2 font-mono text-sm uppercase tracking-widest hover:text-gray-600 transition-colors">
                        Facebook
                        <Facebook size={16} />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-black/10 py-8 text-center">
                 <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                    &copy; 2024 Early Birds Coffee Co.
                 </span>
            </div>
        </footer>
    );
};

export default SocialFooter;
