import ShippingBanner from "@/components/ShippingBanner";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import PromoSection from "@/components/PromoSection";
import ReviewsSection from "@/components/ReviewsSection";
import Team from "@/components/Team";
import Reservation from "@/components/Reservation";
import News from "@/components/News";
import FeaturedRoastsAccordion from "@/components/FeaturedRoastsAccordion";
import ProductGridSection from "@/components/ProductGridSection";
import ServicesSection from "@/components/ServicesSection";
import BaristaSchools from "@/components/BaristaSchools";
import TrustedSupplies from "@/components/TrustedSupplies";
import SplitMenu from "@/components/SplitMenu";
import SocialFooter from "@/components/SocialFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <HeroSlider />

        {/* Tags Bar */}
        <div className="w-full border-b border-black py-4 flex items-center justify-center gap-8 bg-white overflow-x-auto no-scrollbar">
          {["fairtrade", "Organic", "Climate neutral"].map((tag, i) => (
            <div key={tag} className="flex items-center gap-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] whitespace-nowrap text-gray-800">
                {tag}
              </span>
              {i < 2 && <span className="text-gray-300">|</span>}
            </div>
          ))}
        </div>

        <PromoSection />
        <ReviewsSection />

        <section id="shop" className="pb-32 border-b border-black bg-white">
          <div className="w-full px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            <h2 className="font-sans-condensed text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none whitespace-nowrap">
              Featured Roasts
            </h2>
            <a href="/shop" className="font-mono text-xs uppercase tracking-widest border-b border-black hover:border-b-2 transition-all shrink-0">
              View All Products
            </a>
          </div>

          <div className="w-full">
            <FeaturedRoastsAccordion />
          </div>
        </section>

        <ProductGridSection />
        <ServicesSection />

        <Team />
        <Reservation />
        <News />
        <BaristaSchools />
        <TrustedSupplies />
        <SplitMenu />
      </main>
      <SocialFooter />
    </div>
  );
};

export default Index;
