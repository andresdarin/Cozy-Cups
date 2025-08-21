import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import latteArtImage from "@/assets/latte-art.jpg";
import extractionImage from "@/assets/coffee-extraction.jpg";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Barismo Básico",
      subtitle: "Fundamentos del Café",
      description: "Aprende los conceptos básicos del café: desde la selección del grano hasta la preparación perfecta.",
      image: extractionImage,
      duration: "20 horas",
      students: "150+",
      rating: "4.9",
      price: "$299",
      level: "Principiante",
      highlights: [
        "Historia y origen del café",
        "Técnicas básicas de preparación",
        "Reconocimiento de sabores",
        "Uso de equipos profesionales"
      ]
    },
    {
      id: 2,
      title: "Arte Latte",
      subtitle: "Creatividad en Cada Taza",
      description: "Domina el arte de crear hermosos diseños en el café. Desde corazones hasta rosettas profesionales.",
      image: latteArtImage,
      duration: "15 horas",
      students: "120+",
      rating: "4.8",
      price: "$249",
      level: "Intermedio",
      highlights: [
        "Técnicas de espumado perfecto",
        "Diseños básicos y avanzados",
        "Presentación profesional",
        "Práctica intensiva"
      ]
    },
    {
      id: 3,
      title: "Extracción Avanzada",
      subtitle: "Ciencia del Café",
      description: "Profundiza en las técnicas de extracción profesional y comprende la ciencia detrás del café perfecto.",
      image: extractionImage,
      duration: "25 horas",
      students: "80+",
      rating: "4.9",
      price: "$399",
      level: "Avanzado",
      highlights: [
        "Métodos de extracción avanzados",
        "Control de variables",
        "Calibración de equipos",
        "Análisis sensorial"
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl font-bold coffee-gold mb-6">
            Nuestros Cursos
          </h2>
          <p className="text-xl text-coffee-cream max-w-3xl mx-auto leading-relaxed">
            Desde principiante hasta experto, tenemos el curso perfecto para tu nivel. 
            Aprende con los mejores instructores y equipos profesionales.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant transition-smooth hover:scale-105 group"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-coffee-gold text-coffee-dark px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-bold">
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
                  <p className="text-coffee-cream/90 leading-relaxed">
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
                  <h4 className="font-semibold text-coffee-gold">Lo que aprenderás:</h4>
                  <ul className="space-y-1">
                    {course.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-coffee-cream/90 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-coffee-gold rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="golden" 
                  className="w-full group-hover:shadow-glow transition-smooth"
                >
                  Inscribirse Ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
              según tu nivel y objetivos profesionales.
            </p>
            <Button variant="warm" size="lg">
              Hablar con un Asesor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;