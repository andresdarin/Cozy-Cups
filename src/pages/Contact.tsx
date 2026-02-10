import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Prinsengracht 123", "1015 AM Amsterdam", "The Netherlands"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+31 20 123 4567"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@earlybirds.com", "wholesale@earlybirds.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 08:00 - 18:00", "Sat - Sun: 09:00 - 17:00"]
    }
  ];

  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-black selection:text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-48 pb-32 px-6 max-w-[1400px] mx-auto w-full">
        <header className="mb-24 border-b border-black/10 pb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 block">
                Get in Touch
            </span>
            <h1 className="font-sans-condensed text-7xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.85]">
                Contact <br/> Us
            </h1>
        </header>

        <div className="grid lg:grid-cols-2 gap-24">

            {/* Contact Info */}
            <div className="space-y-16">
                <div className="grid sm:grid-cols-2 gap-12">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="space-y-4">
                            <info.icon className="w-6 h-6" strokeWidth={1.5} />
                            <h3 className="font-sans-condensed text-2xl uppercase tracking-tight">{info.title}</h3>
                            <div className="space-y-1 font-mono text-xs uppercase tracking-widest text-gray-500">
                                {info.details.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full aspect-video bg-gray-200 border border-black/5 grayscale">
                    {/* Map Placeholder */}
                    <div className="w-full h-full flex items-center justify-center font-mono text-xs uppercase tracking-widest text-gray-400">
                        [Map View]
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-12 border border-black/5">
                <h2 className="font-sans-condensed text-4xl uppercase tracking-tight mb-8">Send us a message</h2>
                <form className="space-y-8">
                    <div className="space-y-2">
                        <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Name</label>
                        <Input className="rounded-none border-black/20 h-12 bg-transparent focus-visible:ring-black" />
                    </div>
                    <div className="space-y-2">
                        <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Email</label>
                        <Input type="email" className="rounded-none border-black/20 h-12 bg-transparent focus-visible:ring-black" />
                    </div>
                    <div className="space-y-2">
                        <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Message</label>
                        <Textarea className="rounded-none border-black/20 min-h-[150px] bg-transparent focus-visible:ring-black resize-none" />
                    </div>
                    <Button className="w-full h-14 rounded-none bg-black text-white hover:bg-gray-800 font-mono text-xs uppercase tracking-[0.2em]">
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
