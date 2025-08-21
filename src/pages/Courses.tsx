import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowRight, Award, BookOpen, Trophy } from "lucide-react";
import latteArtImage from "@/assets/latte-art.jpg";
import extractionImage from "@/assets/coffee-extraction.jpg";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Barismo Básico",
      subtitle: "Fundamentos del Café",
      description: "Aprende los conceptos básicos del café: desde la selección del grano hasta la preparación perfecta. Ideal para principiantes que quieren iniciar en el mundo del café profesional.",
      image: extractionImage,
      duration: "20 horas",
      students: "150+",
      rating: "4.9",
      price: "$299",
      originalPrice: "$399",
      level: "Principiante",
      featured: false,
      highlights: [
        "Historia y origen del café",
        "Técnicas básicas de preparación",
        "Reconocimiento de sabores y aromas",
        "Uso de equipos profesionales",
        "Práctica con diferentes métodos de preparación",
        "Certificado oficial de finalización"
      ]
    },
    {
      id: 2,
      title: "Arte Latte",
      subtitle: "Creatividad en Cada Taza",
      description: "Domina el arte de crear hermosos diseños en el café. Desde corazones básicos hasta rosettas profesionales que impresionarán a tus clientes.",
      image: latteArtImage,
      duration: "15 horas",
      students: "120+",
      rating: "4.8",
      price: "$249",
      originalPrice: "$329",
      level: "Intermedio",
      featured: true,
      highlights: [
        "Técnicas de espumado perfecto",
        "Diseños básicos: corazón, hoja, tulipán",
        "Diseños avanzados: rosetta, cisne",
        "Presentación profesional",
        "Práctica intensiva con feedback personalizado",
        "Portfolio de diseños creados"
      ]
    },
    {
      id: 3,
      title: "Extracción Avanzada",
      subtitle: "Ciencia del Café",
      description: "Profundiza en las técnicas de extracción profesional y comprende la ciencia detrás del café perfecto. Para baristas que buscan la excelencia.",
      image: extractionImage,
      duration: "25 horas",
      students: "80+",
      rating: "4.9",
      price: "$399",
      originalPrice: "$499",
      level: "Avanzado",
      featured: false,
      highlights: [
        "Métodos de extracción avanzados",
        "Control de variables: tiempo, temperatura, presión",
        "Calibración de equipos profesionales",
        "Análisis sensorial y catación",
        "Solución de problemas en la extracción",
        "Certificación profesional avanzada"
      ]
    },
    {
      id: 4,
      title: "Barista Profesional",
      subtitle: "Certificación Completa",
      description: "Curso integral que combina todos los aspectos del barismo profesional. Incluye prácticas reales en nuestra cafetería y garantía de empleo.",
      image: latteArtImage,
      duration: "60 horas",
      students: "45+",
      rating: "5.0",
      price: "$899",
      originalPrice: "$1199",
      level: "Completo",
      featured: true,
      highlights: [
        "Programa completo de 8 semanas",
        "Todos los cursos incluidos",
        "Prácticas reales con clientes",
        "Garantía de empleo",
        "Mentoría personalizada",
        "Certificación internacional"
      ]
    },
    {
      id: 5,
      title: "Café de Especialidad",
      subtitle: "Third Wave Coffee",
      description: "Explora el mundo del café de tercera ola. Aprende sobre origen, procesamiento, tostado y las últimas tendencias en café especializado.",
      image: extractionImage,
      duration: "18 horas",
      students: "65+",
      rating: "4.7",
      price: "$349",
      originalPrice: "$449",
      level: "Intermedio",
      featured: false,
      highlights: [
        "Orígenes y terroir del café",
        "Métodos de procesamiento",
        "Técnicas de tostado",
        "Catación profesional",
        "Tendencias del mercado",
        "Conexión con productores"
      ]
    },
    {
      id: 6,
      title: "Emprendimiento Cafetero",
      subtitle: "Tu Propia Cafetería",
      description: "Aprende todo lo necesario para abrir y gestionar tu propia cafetería. Desde el plan de negocio hasta la operación diaria.",
      image: latteArtImage,
      duration: "30 horas",
      students: "35+",
      rating: "4.8",
      price: "$549",
      originalPrice: "$699",
      level: "Empresarial",
      featured: false,
      highlights: [
        "Plan de negocio para cafeterías",
        "Selección de equipos y proveedores",
        "Gestión de costos y precios",
        "Marketing y fidelización",
        "Operación y administración",
        "Asesoría post-curso"
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Certificación Oficial",
      description: "Certificados reconocidos por la industria cafetera"
    },
    {
      icon: Users,
      title: "Grupos Reducidos",
      description: "Máximo 8 estudiantes por clase para atención personalizada"
    },
    {
      icon: BookOpen,
      title: "Material Incluido",
      description: "Todo el material de estudio y práctica está incluido"
    },
    {
      icon: Trophy,
      title: "Garantía de Calidad",
      description: "100% de satisfacción o te devolvemos tu dinero"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-dancing text-6xl md:text-8xl font-bold coffee-gold mb-8">
            Nuestros Cursos
          </h1>
          <p className="text-xl md:text-2xl text-coffee-cream max-w-4xl mx-auto leading-relaxed mb-12">
            Desde principiante hasta experto, tenemos el programa perfecto para tu nivel. 
            Aprende con los mejores instructores y equipos profesionales de última generación.
          </p>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card/50 p-6 rounded-xl border border-border">
                <benefit.icon className="h-8 w-8 coffee-gold mx-auto mb-3" />
                <h3 className="font-semibold coffee-gold mb-2">{benefit.title}</h3>
                <p className="text-coffee-cream/80 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {courses.map((course) => (
              <div 
                key={course.id}
                className={`bg-card rounded-2xl overflow-hidden border hover:shadow-elegant transition-smooth hover:scale-105 group relative ${
                  course.featured ? 'border-coffee-gold shadow-glow' : 'border-border'
                }`}
              >
                {/* Featured Badge */}
                {course.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-coffee-gold text-coffee-dark px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ Más Popular
                    </span>
                  </div>
                )}

                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className="bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1">
                    {course.originalPrice && (
                      <span className="text-coffee-cream/60 line-through text-sm bg-background/80 px-2 py-1 rounded">
                        {course.originalPrice}
                      </span>
                    )}
                    <span className="bg-coffee-gold text-coffee-dark px-3 py-1 rounded-full text-lg font-bold">
                      {course.price}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-dancing text-3xl font-bold coffee-gold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-coffee-gold/80 font-medium mb-3">
                      {course.subtitle}
                    </p>
                    <p className="text-coffee-cream/90 leading-relaxed text-sm">
                      {course.description}
                    </p>
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center gap-4 text-sm text-coffee-cream/80">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-coffee-gold text-coffee-gold" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Course Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-coffee-gold">Incluye:</h4>
                    <ul className="space-y-1">
                      {course.highlights.slice(0, 4).map((highlight, index) => (
                        <li key={index} className="text-sm text-coffee-cream/90 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-coffee-gold rounded-full flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                      {course.highlights.length > 4 && (
                        <li className="text-sm text-coffee-gold/80">
                          +{course.highlights.length - 4} beneficios más...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2 pt-2">
                    <Button 
                      variant={course.featured ? "golden" : "warm"} 
                      className="w-full transition-smooth"
                    >
                      Inscribirse Ahora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-warm">
              <h3 className="font-dancing text-4xl font-bold coffee-gold mb-4">
                ¿No sabes cuál elegir?
              </h3>
              <p className="text-coffee-cream/90 mb-6 max-w-2xl mx-auto">
                Nuestros asesores educativos te ayudarán a encontrar el curso perfecto 
                según tu nivel, objetivos profesionales y disponibilidad de tiempo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="golden" size="lg">
                  Hablar con un Asesor
                </Button>
                <Button variant="outline" size="lg">
                  Agendar Visita Guiada
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;