import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-off-white border-t border-black/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        {/* Column 1: Brand */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center font-sans-condensed text-xl font-bold border-2 border-transparent hover:border-black hover:bg-white hover:text-black transition-all duration-300">
            EB
          </div>
          <h3 className="font-sans-condensed text-2xl font-bold tracking-tighter uppercase mt-2">
            Early Birds Coffee.
          </h3>
          <p className="font-mono text-xs text-gray-500 max-w-xs mx-auto md:mx-0 leading-relaxed">
            Specialty coffee roasters focused on sustainable sourcing and modern aesthetics.
            <br />Established 2024.
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-4">Explore</h4>
          <ul className="space-y-2">
            {['Shop All', 'Subscriptions', 'Wholesale', 'Locations', 'About Us', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="font-sans-condensed text-lg uppercase tracking-wide hover:underline decoration-1 underline-offset-4 decoration-black/30 transition-all">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-4">Stay Connected</h4>
          <p className="font-mono text-xs text-gray-500 mb-4">
            Join our newsletter for exclusive drops and brewing guides.
          </p>
          <div className="flex border-b border-black py-2">
            <input
              type="email"
              placeholder="YOUR@EMAIL.COM"
              className="bg-transparent w-full font-mono text-xs outline-none placeholder:text-gray-400 uppercase"
            />
            <button className="font-sans-condensed text-sm uppercase font-bold hover:text-gray-600 transition-colors">
              Join
            </button>
          </div>
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="p-2 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center font-mono text-[10px] text-gray-400 uppercase tracking-widest">
        <p>&copy; 2024 Early Birds Coffee Co. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
