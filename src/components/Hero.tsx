import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-coffee.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cozy coffee atmosphere"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark/90 via-background/70 to-coffee-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="font-dancing text-6xl md:text-8xl font-bold coffee-gold leading-tight">
            Cozy Cups
          </h1>
          
          {/* Subheading */}
          <h2 className="font-dancing text-3xl md:text-4xl text-coffee-cream mb-6">
            Academia de Baristas & Cafetería Artesanal
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-coffee-cream/90 max-w-3xl mx-auto leading-relaxed">
            Aprende de los mejores baristas y sumérgete en el fascinante mundo del café. 
            Desde técnicas de extracción hasta arte latte, te convertiremos en un experto.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="golden" 
              size="lg" 
              className="text-lg px-8 py-6 shadow-glow transition-bounce hover:scale-105"
            >
              Ver Nuestros Cursos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 bg-background/10 hover:bg-background/20 border-coffee-cream text-coffee-cream"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="font-dancing text-4xl font-bold coffee-gold">500+</div>
              <div className="text-coffee-cream">Estudiantes</div>
            </div>
            <div className="text-center">
              <div className="font-dancing text-4xl font-bold coffee-gold">15+</div>
              <div className="text-coffee-cream">Cursos</div>
            </div>
            <div className="text-center">
              <div className="font-dancing text-4xl font-bold coffee-gold">10</div>
              <div className="text-coffee-cream">Años</div>
            </div>
            <div className="text-center">
              <div className="font-dancing text-4xl font-bold coffee-gold">98%</div>
              <div className="text-coffee-cream">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-coffee-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-coffee-gold rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;