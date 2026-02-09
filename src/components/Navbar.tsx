import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm py-4 border-b border-black/5" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="font-sans-condensed text-3xl font-bold tracking-tighter uppercase">
          Early Birds<span className="text-black/40">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {["Shop", "Story", "Team", "Journal"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-widest hover:text-black/60 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="font-mono text-xs uppercase tracking-widest hover:text-black/60 transition-colors hidden md:block">
            Login
          </button>
          <button className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-black/60 transition-colors">
            <span>Cart</span>
            <span className="bg-black text-white px-2 py-0.5 rounded-full text-[10px]">(0)</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-off-white z-30 p-6 md:hidden animate-accordion-down border-t border-black/5">
          <div className="flex flex-col gap-6 items-center pt-12">
            {["Shop", "Story", "Team", "Journal", "Login"].map((item) => (
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
    </nav>
  );
};

export default Navbar;
