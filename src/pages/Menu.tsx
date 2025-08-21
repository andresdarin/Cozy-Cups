import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Coffee, Clock, Leaf, Heart, Star } from "lucide-react";
import { useState } from "react";
import cafeMenuImage from "@/assets/cafe-menu.jpg";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", name: "Todo el Menú" },
    { id: "cafes", name: "Cafés" },
    { id: "bebidas", name: "Otras Bebidas" },
    { id: "desayunos", name: "Desayunos" },
    { id: "almuerzo", name: "Almuerzo" },
    { id: "postres", name: "Postres" }
  ];

  const menuItems = [
    // Cafés
    {
      id: 1,
      name: "Espresso Signature",
      category: "cafes",
      description: "Nuestro blend exclusivo, notas a chocolate negro y nueces",
      price: 3.50,
      image: cafeMenuImage,
      popular: true,
      time: "2 min",
      tags: ["Intenso", "Aromático"],
      rating: 4.9
    },
    {
      id: 2,
      name: "Cappuccino Clásico",
      category: "cafes",
      description: "Espresso perfecto con espuma de leche aterciopelada",
      price: 4.25,
      image: cafeMenuImage,
      popular: false,
      time: "3 min",
      tags: ["Cremoso", "Equilibrado"],
      rating: 4.8
    },
    {
      id: 3,
      name: "Latte Art Especial",
      category: "cafes",
      description: "Latte con diseño personalizado, preparado por nuestros mejores baristas",
      price: 5.50,
      image: cafeMenuImage,
      popular: true,
      time: "5 min",
      tags: ["Artístico", "Premium"],
      rating: 4.9
    },
    {
      id: 4,
      name: "Cold Brew Nitro",
      category: "cafes",
      description: "Café frío infusionado con nitrógeno, textura cremosa única",
      price: 5.00,
      image: cafeMenuImage,
      popular: false,
      time: "1 min",
      tags: ["Frío", "Innovador"],
      rating: 4.7
    },
    
    // Otras Bebidas
    {
      id: 5,
      name: "Chocolate Artesanal",
      category: "bebidas",
      description: "Chocolate belga premium con crema batida y canela",
      price: 4.50,
      image: cafeMenuImage,
      popular: false,
      time: "4 min",
      tags: ["Dulce", "Reconfortante"],
      rating: 4.6
    },
    {
      id: 6,
      name: "Té Chai Latte",
      category: "bebidas",
      description: "Mezcla de especias aromáticas con leche vaporizada",
      price: 4.00,
      image: cafeMenuImage,
      popular: false,
      time: "3 min",
      tags: ["Especiado", "Aromático"],
      rating: 4.5
    },

    // Desayunos
    {
      id: 7,
      name: "Tostadas de Aguacate",
      category: "desayunos",
      description: "Pan artesanal con aguacate, tomate cherry, queso feta y aceite de oliva",
      price: 8.50,
      image: cafeMenuImage,
      popular: true,
      time: "8 min",
      tags: ["Saludable", "Vegetariano"],
      rating: 4.8
    },
    {
      id: 8,
      name: "Croissant de Almendras",
      category: "desayunos",
      description: "Croissant recién horneado relleno de crema de almendras",
      price: 4.75,
      image: cafeMenuImage,
      popular: false,
      time: "2 min",
      tags: ["Dulce", "Recién Horneado"],
      rating: 4.7
    },
    {
      id: 9,
      name: "Bowl de Acai",
      category: "desayunos",
      description: "Acai con granola casera, frutas frescas, miel y coco",
      price: 9.50,
      image: cafeMenuImage,
      popular: true,
      time: "5 min",
      tags: ["Saludable", "Vegano"],
      rating: 4.9
    },

    // Almuerzo
    {
      id: 10,
      name: "Sandwich de Pollo Gourmet",
      category: "almuerzo",
      description: "Pollo a la parrilla, aguacate, rúcula, tomate y mayonesa de chipotle",
      price: 12.50,
      image: cafeMenuImage,
      popular: true,
      time: "12 min",
      tags: ["Proteína", "Gourmet"],
      rating: 4.8
    },
    {
      id: 11,
      name: "Ensalada César Moderna",
      category: "almuerzo",
      description: "Lechuga romana, crutones caseros, parmesano, pollo y aderezo césar",
      price: 11.00,
      image: cafeMenuImage,
      popular: false,
      time: "8 min",
      tags: ["Fresco", "Ligero"],
      rating: 4.6
    },

    // Postres
    {
      id: 12,
      name: "Tiramisú de Café",
      category: "postres",
      description: "Clásico italiano con nuestro espresso signature y mascarpone",
      price: 6.50,
      image: cafeMenuImage,
      popular: true,
      time: "2 min",
      tags: ["Clásico", "Con Café"],
      rating: 4.9
    },
    {
      id: 13,
      name: "Cheesecake de Frutos Rojos",
      category: "postres",
      description: "Cheesecake cremoso con compota de frutos rojos de temporada",
      price: 5.75,
      image: cafeMenuImage,
      popular: false,
      time: "2 min",
      tags: ["Cremoso", "Frutal"],
      rating: 4.7
    }
  ];

  const filteredItems = menuItems.filter(item => 
    selectedCategory === "todos" || item.category === selectedCategory
  );

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      "Intenso": "bg-red-500/20 text-red-400",
      "Aromático": "bg-yellow-500/20 text-yellow-400",
      "Cremoso": "bg-blue-500/20 text-blue-400",
      "Equilibrado": "bg-green-500/20 text-green-400",
      "Artístico": "bg-purple-500/20 text-purple-400",
      "Premium": "bg-coffee-gold/20 text-coffee-gold",
      "Frío": "bg-cyan-500/20 text-cyan-400",
      "Innovador": "bg-pink-500/20 text-pink-400",
      "Dulce": "bg-orange-500/20 text-orange-400",
      "Reconfortante": "bg-amber-500/20 text-amber-400",
      "Especiado": "bg-red-600/20 text-red-300",
      "Saludable": "bg-green-600/20 text-green-300",
      "Vegetariano": "bg-emerald-500/20 text-emerald-400",
      "Vegano": "bg-lime-500/20 text-lime-400",
      "Recién Horneado": "bg-yellow-600/20 text-yellow-300",
      "Proteína": "bg-red-700/20 text-red-300",
      "Gourmet": "bg-purple-600/20 text-purple-300",
      "Fresco": "bg-teal-500/20 text-teal-400",
      "Ligero": "bg-sky-500/20 text-sky-400",
      "Clásico": "bg-amber-600/20 text-amber-300",
      "Con Café": "bg-coffee-bean/20 text-coffee-cream",
      "Frutal": "bg-rose-500/20 text-rose-400"
    };
    return colors[tag] || "bg-coffee-gold/20 text-coffee-gold";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={cafeMenuImage}
            alt="Cafe menu background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-dancing text-6xl md:text-8xl font-bold coffee-gold mb-8">
              Nuestro Menú
            </h1>
            <p className="text-xl md:text-2xl text-coffee-cream max-w-4xl mx-auto leading-relaxed">
              Cada plato y bebida está cuidadosamente preparado con ingredientes de la más alta calidad. 
              Disfruta de una experiencia gastronómica que complementa perfectamente nuestros cafés de especialidad.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "golden" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-coffee-cream/80">
              {filteredItems.length} elementos en 
              {selectedCategory === "todos" ? " todo el menú" : ` ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:shadow-warm transition-smooth hover:scale-[1.02] group"
              >
                <div className="flex gap-6 p-6">
                  {/* Item Image */}
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-smooth"
                    />
                    {item.popular && (
                      <div className="absolute -top-2 -right-2">
                        <div className="bg-coffee-gold text-coffee-dark p-1 rounded-full">
                          <Heart className="h-4 w-4 fill-current" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Item Info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-dancing text-2xl font-bold coffee-gold mb-1">
                          {item.name}
                        </h3>
                        <p className="text-coffee-cream/90 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl coffee-gold">${item.price}</div>
                        <div className="flex items-center gap-1 text-sm text-coffee-cream/60">
                          <Clock className="h-3 w-3" />
                          {item.time}
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Rating & Order Button */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-coffee-gold text-coffee-gold" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                        {item.popular && (
                          <span className="text-xs bg-coffee-gold/20 text-coffee-gold px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <Button variant="golden" size="sm">
                        Ordenar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-5xl font-bold coffee-gold mb-6">
              Ofertas Especiales
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-warm">
              <Coffee className="h-12 w-12 coffee-gold mb-4" />
              <h3 className="font-dancing text-3xl font-bold coffee-gold mb-3">
                Happy Hour
              </h3>
              <p className="text-coffee-cream/90 mb-4">
                De 3:00 PM a 5:00 PM - 20% de descuento en todos los cafés
              </p>
              <Button variant="golden">
                Aprovechar Oferta
              </Button>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-warm">
              <Leaf className="h-12 w-12 coffee-gold mb-4" />
              <h3 className="font-dancing text-3xl font-bold coffee-gold mb-3">
                Menú Estudiante
              </h3>
              <p className="text-coffee-cream/90 mb-4">
                Descuento especial para estudiantes de nuestra academia
              </p>
              <Button variant="golden">
                Ver Beneficios
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;