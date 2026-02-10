import React from 'react';

const TrustedSupplies = () => {
  const supplies = [
    { name: "LA MARZOCCO", logo: "https://api.dicebear.com/7.x/initials/svg?seed=LM&backgroundColor=transparent&textColor=black" },
    { name: "MAHLKÖNIG", logo: "https://api.dicebear.com/7.x/initials/svg?seed=MK&backgroundColor=transparent&textColor=black" },
    { name: "HARIO", logo: "https://api.dicebear.com/7.x/initials/svg?seed=HO&backgroundColor=transparent&textColor=black" },
    { name: "FELLOW", logo: "https://api.dicebear.com/7.x/initials/svg?seed=FE&backgroundColor=transparent&textColor=black" },
    { name: "ACME", logo: "https://api.dicebear.com/7.x/initials/svg?seed=AC&backgroundColor=transparent&textColor=black" },
  ];

  return (
    <section className="w-full border-t border-black bg-white">
      <div className="w-full text-center py-12 border-b border-black">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400">Trusted By Professionals</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 border-b border-black">
        {supplies.map((supply, index) => (
          <div
            key={index}
            className="
              aspect-[3/2] flex items-center justify-center p-8
              border-r border-black even:border-r-0 md:even:border-r md:last:border-r-0
              border-b border-black md:border-b-0 last:border-b-0
              hover:bg-off-white transition-colors duration-300 group
            "
          >
            <div className="flex flex-col items-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
               {/* Placeholder for actual logo */}
               <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center bg-gray-50 group-hover:bg-white">
                  <span className="font-sans-condensed font-bold text-xl tracking-tighter">{supply.name.substring(0, 2)}</span>
               </div>
               <span className="font-mono text-[10px] uppercase tracking-widest hidden md:block">{supply.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedSupplies;
