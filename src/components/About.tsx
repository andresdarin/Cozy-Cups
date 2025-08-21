import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Coffee } from "lucide-react";
import coffeeBeansImage from "@/assets/coffee-beans-bg.jpg";

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: "Pasión por el Café",
      description: "Más de 10 años dedicados al arte del café, explorando cada técnica y sabor."
    },
    {
      icon: Users,
      title: "Comunidad Cafetera",
      description: "Una familia de más de 500 estudiantes que comparten la pasión por el café perfecto."
    },
    {
      icon: Award,
      title: "Certificación Profesional",
      description: "Cursos certificados que te preparan para el mundo profesional del barismo."
    },
    {
      icon: Heart,
      title: "Ambiente Acogedor",
      description: "Un espacio cálido donde aprender, disfrutar y conectar con otros amantes del café."
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={coffeeBeansImage}
          alt="Coffee beans background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl font-bold coffee-gold mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-coffee-cream max-w-3xl mx-auto leading-relaxed">
            En Cozy Cups, creemos que cada taza cuenta una historia. Somos más que una academia; 
            somos un lugar donde la tradición se encuentra con la innovación, y donde cada estudiante 
            descubre su propia pasión por el café.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border hover:shadow-warm transition-smooth hover:scale-105"
            >
              <div className="mb-4">
                <feature.icon className="h-12 w-12 coffee-gold" />
              </div>
              <h3 className="font-dancing text-2xl font-semibold coffee-gold mb-3">
                {feature.title}
              </h3>
              <p className="text-coffee-cream/90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-elegant">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-dancing text-4xl font-bold coffee-gold mb-6">
                Nuestra Historia
              </h3>
              <div className="space-y-4 text-coffee-cream/90 leading-relaxed">
                <p>
                  Todo comenzó con una simple pasión: crear la taza perfecta. En 2014, 
                  abrimos nuestras puertas con el sueño de compartir el arte del café 
                  con nuestra comunidad.
                </p>
                <p>
                  Desde entonces, hemos formado a cientos de baristas profesionales, 
                  cada uno llevando consigo no solo técnicas perfeccionadas, sino también 
                  el amor por esta noble profesión.
                </p>
                <p>
                  Hoy, Cozy Cups es reconocida como una de las mejores academias de café 
                  de la región, donde la excelencia y la calidez van de la mano.
                </p>
              </div>
              <div className="pt-6">
                <Button variant="golden" size="lg">
                  Conoce a Nuestro Equipo
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-secondary/50 p-6 rounded-xl">
                <div className="font-dancing text-3xl font-bold coffee-gold">2014</div>
                <div className="text-coffee-cream">Fundación de Cozy Cups</div>
              </div>
              <div className="bg-secondary/50 p-6 rounded-xl">
                <div className="font-dancing text-3xl font-bold coffee-gold">500+</div>
                <div className="text-coffee-cream">Baristas Certificados</div>
              </div>
              <div className="bg-secondary/50 p-6 rounded-xl">
                <div className="font-dancing text-3xl font-bold coffee-gold">15+</div>
                <div className="text-coffee-cream">Cursos Especializados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;