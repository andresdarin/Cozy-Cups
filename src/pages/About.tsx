import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Coffee, Target, Lightbulb } from "lucide-react";
import coffeeBeansImage from "@/assets/coffee-beans-bg.jpg";

const About = () => {
  const team = [
    {
      name: "María González",
      role: "Fundadora & Master Barista",
      experience: "15 años de experiencia",
      specialty: "Especialista en métodos de extracción"
    },
    {
      name: "Carlos Rodríguez",
      role: "Instructor Principal",
      experience: "12 años de experiencia",
      specialty: "Campeón Nacional de Latte Art"
    },
    {
      name: "Ana Martínez",
      role: "Coordinadora Académica",
      experience: "8 años de experiencia",
      specialty: "Experta en catación y análisis sensorial"
    }
  ];

  const values = [
    {
      icon: Coffee,
      title: "Pasión",
      description: "Cada taza refleja nuestro amor por el café y la dedicación a la excelencia."
    },
    {
      icon: Heart,
      title: "Comunidad",
      description: "Creamos conexiones genuinas entre estudiantes, instructores y amantes del café."
    },
    {
      icon: Target,
      title: "Excelencia",
      description: "Buscamos la perfección en cada técnica, cada sabor y cada experiencia educativa."
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Combinamos tradición con las últimas tendencias en el mundo del café especializado."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={coffeeBeansImage}
            alt="Coffee beans background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-dancing text-6xl md:text-8xl font-bold coffee-gold mb-8">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl text-coffee-cream max-w-4xl mx-auto leading-relaxed">
            Más que una academia, somos una familia unida por la pasión del café. 
            Descubre nuestra historia, valores y el equipo que hace posible tu formación profesional.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-elegant">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-dancing text-5xl font-bold coffee-gold mb-6">
                  Nuestra Historia
                </h2>
                <div className="space-y-6 text-coffee-cream/90 leading-relaxed">
                  <p>
                    En 2014, María González abrió las puertas de Cozy Cups con un sueño simple pero ambicioso: 
                    crear un espacio donde la pasión por el café se transformara en conocimiento profesional 
                    y conexiones humanas auténticas.
                  </p>
                  <p>
                    Lo que comenzó como una pequeña cafetería con cursos básicos, se ha convertido en una 
                    de las academias de café más respetadas de la región, formando a más de 500 baristas 
                    profesionales que ahora trabajan en cafeterías de todo el país.
                  </p>
                  <p>
                    Cada estudiante que pasa por nuestras puertas no solo aprende técnicas; descubre una 
                    comunidad que lo apoyará durante toda su carrera en el fascinante mundo del café.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-secondary/50 p-6 rounded-xl text-center">
                  <div className="font-dancing text-4xl font-bold coffee-gold">2014</div>
                  <div className="text-coffee-cream">Fundación</div>
                </div>
                <div className="bg-secondary/50 p-6 rounded-xl text-center">
                  <div className="font-dancing text-4xl font-bold coffee-gold">500+</div>
                  <div className="text-coffee-cream">Graduados</div>
                </div>
                <div className="bg-secondary/50 p-6 rounded-xl text-center">
                  <div className="font-dancing text-4xl font-bold coffee-gold">98%</div>
                  <div className="text-coffee-cream">Empleabilidad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-dancing text-5xl font-bold coffee-gold mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-coffee-cream max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada taza que preparamos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-border hover:shadow-warm transition-smooth text-center group hover:scale-105"
              >
                <div className="mb-6">
                  <value.icon className="h-16 w-16 coffee-gold mx-auto group-hover:scale-110 transition-smooth" />
                </div>
                <h3 className="font-dancing text-3xl font-semibold coffee-gold mb-4">
                  {value.title}
                </h3>
                <p className="text-coffee-cream/90 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-dancing text-5xl font-bold coffee-gold mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-coffee-cream max-w-3xl mx-auto">
              Conoce a los expertos que harán de tu aprendizaje una experiencia extraordinaria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-border hover:shadow-elegant transition-smooth text-center group hover:scale-105"
              >
                <div className="w-24 h-24 bg-coffee-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Coffee className="h-12 w-12 coffee-gold" />
                </div>
                <h3 className="font-dancing text-2xl font-bold coffee-gold mb-2">
                  {member.name}
                </h3>
                <p className="text-coffee-gold/80 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-coffee-cream/80 mb-3">
                  {member.experience}
                </p>
                <p className="text-coffee-cream/90 text-sm">
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="golden" size="lg">
              Únete a Nuestro Equipo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;