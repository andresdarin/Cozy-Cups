import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Coffee, Heart, Target } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "María González",
      role: "Founder & Head Roaster",
      bio: "15 years of sourcing the finest beans.",
    },
    {
      name: "Carlos Rodríguez",
      role: "Lead Barista",
      bio: "National Latte Art Champion 2022.",
    },
    {
      name: "Ana Martínez",
      role: "Quality Control",
      bio: "Certified Q-Grader and sensory expert.",
    }
  ];

  const values = [
    {
      icon: Coffee,
      title: "Passion",
      description: "Every cup reflects our dedication to excellence."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building genuine connections through coffee."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Obsessive attention to detail in every roast."
    }
  ];

  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-black selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 block">
            Since 2014
          </span>
          <h1 className="font-sans-condensed text-7xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.85] mb-12">
            We Are <br/> Early Birds
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-800">
              More than just a coffee shop, we are a collective of obsessives, dreamers, and early risers dedicated to the craft of coffee.
            </p>
            <div className="font-mono text-sm leading-relaxed text-gray-600">
              <p className="mb-4">
                Founded in a small garage in Amsterdam, Early Birds has grown into a beacon for specialty coffee lovers. We believe in transparency, sustainability, and the simple joy of a perfectly brewed cup.
              </p>
              <p>
                Our mission is simple: to wake up the world with better coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 border-b border-black/10">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
                {values.map((value, index) => (
                    <div key={index} className="group">
                        <div className="mb-6 border border-black/10 w-16 h-16 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-500">
                            <value.icon strokeWidth={1.5} className="w-8 h-8" />
                        </div>
                        <h3 className="font-sans-condensed text-3xl uppercase font-bold mb-4 tracking-tight">
                            {value.title}
                        </h3>
                        <p className="font-sans text-gray-600 leading-relaxed">
                            {value.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-sans-condensed text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
                The Team
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-500 max-w-sm text-right">
                The people behind the brew.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group border border-black/5 bg-white p-8 hover:border-black transition-colors duration-300">
                <div className="w-full aspect-square bg-gray-100 mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  {/* Placeholder for team image */}
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 font-mono text-xs">
                    [Image]
                  </div>
                </div>
                <h3 className="font-sans-condensed text-3xl font-bold uppercase mb-1">
                  {member.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4 border-b border-black/10 pb-4">
                  {member.role}
                </p>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
