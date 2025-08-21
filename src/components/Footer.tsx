import { Coffee, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Academia",
      links: [
        { name: "Nuestros Cursos", href: "/courses" },
        { name: "Certificaciones", href: "/certifications" },
        { name: "Instructores", href: "/instructors" },
        { name: "Testimonios", href: "/testimonials" }
      ]
    },
    {
      title: "Cafetería",
      links: [
        { name: "Menú", href: "/menu" },
        { name: "Tienda Online", href: "/shop" },
        { name: "Productos", href: "/products" },
        { name: "Reservas", href: "/reservations" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nosotros", href: "/about" },
        { name: "Nuestro Equipo", href: "/team" },
        { name: "Valores", href: "/values" },
        { name: "Carreras", href: "/careers" }
      ]
    },
    {
      title: "Soporte",
      links: [
        { name: "Contacto", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Políticas", href: "/policies" },
        { name: "Términos", href: "/terms" }
      ]
    }
  ];

  return (
    <footer className="bg-coffee-dark border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-2">
                <Coffee className="h-8 w-8 coffee-gold" />
                <span className="font-dancing text-3xl font-bold coffee-gold">
                  Cozy Cups
                </span>
              </div>
              <p className="text-coffee-cream/80 leading-relaxed">
                Donde cada taza cuenta una historia y cada estudiante descubre su pasión por el café.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-coffee-gold hover:text-coffee-dark transition-smooth">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-coffee-gold hover:text-coffee-dark transition-smooth">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-coffee-gold hover:text-coffee-dark transition-smooth">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-dancing text-xl font-semibold coffee-gold">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-coffee-cream/80 hover:text-coffee-gold transition-smooth"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 coffee-gold flex-shrink-0" />
                <span className="text-coffee-cream/80">
                  Av. Principal 123, Centro Histórico, Ciudad
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 coffee-gold flex-shrink-0" />
                <span className="text-coffee-cream/80">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 coffee-gold flex-shrink-0" />
                <span className="text-coffee-cream/80">
                  info@cozycups.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-coffee-cream/60 text-sm">
              © 2024 Cozy Cups. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-coffee-cream/60 hover:text-coffee-gold transition-smooth">
                Privacidad
              </a>
              <a href="/terms" className="text-coffee-cream/60 hover:text-coffee-gold transition-smooth">
                Términos
              </a>
              <a href="/cookies" className="text-coffee-cream/60 hover:text-coffee-gold transition-smooth">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;