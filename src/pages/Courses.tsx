import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Barista Basics",
      subtitle: "Introduction to Brewing",
      description: "Master the fundamentals of espresso extraction and milk steaming.",
      price: "€150",
      duration: "4 Hours",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Latte Art",
      subtitle: "Advanced Pouring",
      description: "Learn to pour hearts, tulips, and rosettas with professional guidance.",
      price: "€120",
      duration: "3 Hours",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Sensory Skills",
      subtitle: "Cupping & Tasting",
      description: "Develop your palate and learn to identify complex flavor notes.",
      price: "€90",
      duration: "2.5 Hours",
      level: "All Levels"
    }
  ];

  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-black selection:text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-48 pb-32 px-6 max-w-[1400px] mx-auto w-full">
        <header className="mb-24 border-b border-black/10 pb-12 flex flex-col md:flex-row justify-between items-end">
            <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 block">
                    Academy
                </span>
                <h1 className="font-sans-condensed text-7xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.85]">
                    Learn <br/> Coffee
                </h1>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 max-w-xs text-right hidden md:block pb-2">
                Professional training for enthusiasts and future baristas.
            </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
                <div key={course.id} className="group border border-black/10 bg-white p-8 hover:border-black transition-colors duration-300 flex flex-col justify-between h-full">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <span className="font-mono text-[10px] uppercase tracking-widest bg-black text-white px-2 py-1">{course.level}</span>
                            <span className="font-sans-condensed text-2xl font-bold">{course.price}</span>
                        </div>
                        <h3 className="font-sans-condensed text-4xl font-bold uppercase leading-none mb-2">{course.title}</h3>
                        <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6 border-b border-black/10 pb-4">{course.subtitle}</p>
                        <p className="font-sans text-gray-600 mb-8 leading-relaxed">
                            {course.description}
                        </p>
                    </div>

                    <div className="flex justify-between items-center pt-6 border-t border-black/10">
                        <div className="flex items-center gap-2 font-mono text-xs text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                        </div>
                        <Button variant="outline" className="rounded-none border-black hover:bg-black hover:text-white font-mono text-[10px] uppercase tracking-widest h-8">
                            Book Now
                        </Button>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
