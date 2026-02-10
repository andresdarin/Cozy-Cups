import React from 'react';

const Team = () => {
  const teamMembers = [
    { name: "Alex R.", role: "Head Roaster", color: "bg-[#FDE1D3]" },
    { name: "Sarah M.", role: "Barista Lead", color: "bg-[#E2F0CB]" },
    { name: "James K.", role: "Sourcing Manager", color: "bg-[#CBAACB]" },
    { name: "Chloe T.", role: "Operations", color: "bg-[#FFFFB5]" },
  ];

  return (
    <section className="py-32 bg-off-white" id="team">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 block">
                    Our People
                </span>
                <h2 className="font-sans-condensed text-6xl md:text-8xl font-bold uppercase tracking-wide leading-tight">
                    Meet the <br/> Crew
                </h2>
            </div>
            <p className="font-mono text-sm text-gray-600 max-w-sm mb-4 border-l border-black pl-6 leading-loose">
                The passionate individuals behind every cup. Dedicated to the craft and the community.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col gap-4 group cursor-pointer">
              <div className={`aspect-[4/5] ${member.color} relative overflow-hidden rounded-none border border-black/5 group-hover:border-black transition-colors duration-300`}>
                <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                    alt={member.name}
                    className="w-full h-full object-cover transform translate-y-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-sans-condensed text-2xl uppercase font-bold tracking-wide">
                    {member.name}
                </h3>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                    {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
