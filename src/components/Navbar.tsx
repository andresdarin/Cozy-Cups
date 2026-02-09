import { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Banner */}
      <div className="bg-black text-[10px] py-2 md:py-3 text-white text-center font-mono uppercase tracking-[0.2em] border-b border-white/10">
        Welcome to Early Birds. We ship every Tuesday and Thursday. Free shipping above €25 in The Netherlands.
      </div>

      <nav
        className={`transition-all duration-300 border-b border-black/10 bg-white`}
      >
        <div className="w-full flex items-stretch">
          {/* Main Content Area */}
          <div className="flex-grow flex flex-col">
            <div className="flex justify-between items-center px-6 md:px-12 h-20 md:h-24">
              {/* Left: Navigation Links */}
              <div className="hidden md:flex items-center gap-8">
                {["Home", "Pages", "Shop", "Blog"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="font-mono text-[11px] uppercase tracking-widest border-b border-transparent hover:border-black transition-all"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Center: Logo */}
              <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                <a href="/" className="font-sans-condensed text-4xl md:text-5xl font-extrabold tracking-tighter uppercase leading-none">
                  Early Birds
                </a>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] -mt-1 ml-12 italic opacity-60">coffee</span>
              </div>

              {/* Right: Tools */}
              <div className="flex items-center gap-8">
                <button className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest hover:text-black/60 transition-colors">
                  <span>cart(0)</span>
                </button>
                <button className="font-mono text-[11px] uppercase tracking-widest hover:text-black/60 transition-colors flex items-center gap-2">
                  <span>search</span>
                </button>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Side Decorative Section */}
          <div className="hidden md:flex w-24 border-l border-black items-center justify-center bg-white group hover:bg-black transition-colors duration-500 cursor-pointer">
            <Sparkles className="w-10 h-10 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[110px] bg-off-white z-30 p-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300 border-t border-black/10">
          <div className="flex flex-col gap-6 items-center pt-12">
            {["Home", "Pages", "Shop", "Blog"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-sans-condensed text-4xl uppercase tracking-tighter"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
