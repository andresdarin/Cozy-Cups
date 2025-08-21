import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";
import contactBgImage from "@/assets/contact-bg.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: [
        "Av. Principal 123",
        "Centro Histórico",
        "Ciudad, País 12345"
      ]
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 987-6543",
        "WhatsApp: +1 (555) 111-2222"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@cozycups.com",
        "cursos@cozycups.com",
        "tienda@cozycups.com"
      ]
    },
    {
      icon: Clock,
      title: "Horarios",
      details: [
        "Lun - Vie: 7:00 AM - 8:00 PM",
        "Sábados: 8:00 AM - 9:00 PM",
        "Domingos: 8:00 AM - 6:00 PM"
      ]
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@cozycups",
      url: "#",
      color: "hover:text-pink-400"
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Cozy Cups Academia",
      url: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@cozycups_cafe",
      url: "#",
      color: "hover:text-sky-400"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={contactBgImage}
            alt="Contact background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-dancing text-6xl md:text-8xl font-bold coffee-gold mb-8">
              Contacto
            </h1>
            <p className="text-xl md:text-2xl text-coffee-cream max-w-4xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte. Ya sea que tengas preguntas sobre nuestros cursos, 
              quieras reservar una mesa o simplemente conversar sobre café, ¡nos encantaría escucharte!
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border hover:shadow-warm transition-smooth text-center group hover:scale-105"
              >
                <div className="mb-4">
                  <info.icon className="h-10 w-10 coffee-gold mx-auto group-hover:scale-110 transition-smooth" />
                </div>
                <h3 className="font-dancing text-2xl font-semibold coffee-gold mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-coffee-cream/90 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-elegant">
              <div className="mb-8">
                <h2 className="font-dancing text-4xl font-bold coffee-gold mb-4">
                  Envíanos un Mensaje
                </h2>
                <p className="text-coffee-cream/90">
                  Completa el formulario y te responderemos en menos de 24 horas
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium coffee-gold mb-2">
                      Nombre *
                    </label>
                    <Input 
                      placeholder="Tu nombre completo"
                      className="bg-secondary border-border focus:ring-coffee-gold focus:border-coffee-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium coffee-gold mb-2">
                      Teléfono
                    </label>
                    <Input 
                      placeholder="Tu número de teléfono"
                      className="bg-secondary border-border focus:ring-coffee-gold focus:border-coffee-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium coffee-gold mb-2">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-secondary border-border focus:ring-coffee-gold focus:border-coffee-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium coffee-gold mb-2">
                    Asunto
                  </label>
                  <select className="w-full px-3 py-2 bg-secondary border border-border rounded-md text-foreground focus:ring-2 focus:ring-coffee-gold focus:border-coffee-gold">
                    <option>Selecciona un tema</option>
                    <option>Información sobre cursos</option>
                    <option>Reserva de mesa</option>
                    <option>Consulta sobre productos</option>
                    <option>Propuesta de colaboración</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium coffee-gold mb-2">
                    Mensaje *
                  </label>
                  <Textarea 
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    className="bg-secondary border-border focus:ring-coffee-gold focus:border-coffee-gold resize-none"
                  />
                </div>

                <Button variant="golden" size="lg" className="w-full shadow-glow">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>

                <p className="text-coffee-cream/60 text-sm">
                  * Campos obligatorios. Respetamos tu privacidad y nunca compartiremos tu información.
                </p>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-elegant">
                <h3 className="font-dancing text-3xl font-bold coffee-gold mb-6">
                  Encuéntranos
                </h3>
                
                {/* Map placeholder - in a real app, you'd integrate Google Maps or similar */}
                <div className="w-full h-64 bg-secondary rounded-xl border border-border flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 coffee-gold mx-auto mb-3" />
                    <p className="text-coffee-cream/80">Mapa Interactivo</p>
                    <p className="text-coffee-cream/60 text-sm">Av. Principal 123, Centro Histórico</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 coffee-gold flex-shrink-0" />
                    <span className="text-coffee-cream/90">
                      A 2 cuadras del metro Centro Histórico
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-coffee-gold rounded-full flex-shrink-0"></div>
                    <span className="text-coffee-cream/90">
                      Estacionamiento gratuito disponible
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-coffee-gold rounded-full flex-shrink-0"></div>
                    <span className="text-coffee-cream/90">
                      Acceso para personas con discapacidad
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-elegant">
                <h3 className="font-dancing text-3xl font-bold coffee-gold mb-6">
                  Síguenos
                </h3>
                <p className="text-coffee-cream/90 mb-6">
                  Mantente conectado y descubre las últimas novedades, tips de café y promociones especiales
                </p>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      className={`flex items-center gap-4 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-smooth ${social.color} group`}
                    >
                      <social.icon className="h-6 w-6 group-hover:scale-110 transition-smooth" />
                      <div>
                        <div className="font-medium">{social.name}</div>
                        <div className="text-sm text-coffee-cream/70">{social.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-5xl font-bold coffee-gold mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-coffee-cream/90 max-w-2xl mx-auto">
              Aquí encontrarás respuestas a las consultas más comunes. Si no encuentras lo que buscas, no dudes en contactarnos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border">
                <h4 className="font-dancing text-xl font-semibold coffee-gold mb-3">
                  ¿Necesito experiencia previa para los cursos?
                </h4>
                <p className="text-coffee-cream/90 text-sm">
                  No, nuestros cursos están diseñados para todos los niveles. Tenemos programas desde principiante hasta avanzado.
                </p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border">
                <h4 className="font-dancing text-xl font-semibold coffee-gold mb-3">
                  ¿Ofrecen certificaciones?
                </h4>
                <p className="text-coffee-cream/90 text-sm">
                  Sí, todos nuestros cursos incluyen certificación oficial reconocida por la industria cafetera.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border">
                <h4 className="font-dancing text-xl font-semibold coffee-gold mb-3">
                  ¿Tienen horarios flexibles?
                </h4>
                <p className="text-coffee-cream/90 text-sm">
                  Ofrecemos cursos en diferentes horarios, incluyendo fines de semana y modalidad online para mayor flexibilidad.
                </p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border">
                <h4 className="font-dancing text-xl font-semibold coffee-gold mb-3">
                  ¿Puedo visitar la academia antes de inscribirme?
                </h4>
                <p className="text-coffee-cream/90 text-sm">
                  ¡Por supuesto! Ofrecemos tours gratuitos todos los días. Solo agenda tu visita con anticipación.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="golden" size="lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Ver Más Preguntas
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;