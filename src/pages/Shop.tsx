import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Filter, Search, Package, Award } from "lucide-react";
import { useState } from "react";
import coffeeProductsImage from "@/assets/coffee-products.jpg";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "todos", name: "Todos los Productos" },
    { id: "cafe", name: "Café en Grano" },
    { id: "equipos", name: "Equipos" },
    { id: "accesorios", name: "Accesorios" },
    { id: "cursos", name: "Cursos Online" }
  ];

  const products = [
    {
      id: 1,
      name: "Café Premium Origen Único",
      category: "cafe",
      description: "Café de especialidad de Colombia, notas a chocolate y caramelo",
      price: 24.99,
      originalPrice: 29.99,
      image: coffeeProductsImage,
      rating: 4.9,
      reviews: 127,
      badge: "Bestseller",
      weight: "250g"
    },
    {
      id: 2,
      name: "Espresso Blend Signature",
      category: "cafe",
      description: "Mezcla perfecta para espresso, cuerpo intenso y crema persistente",
      price: 22.99,
      originalPrice: null,
      image: coffeeProductsImage,
      rating: 4.8,
      reviews: 94,
      badge: null,
      weight: "500g"
    },
    {
      id: 3,
      name: "Máquina Espresso Profesional",
      category: "equipos",
      description: "Máquina espresso semi-automática, ideal para café de especialidad",
      price: 599.99,
      originalPrice: 699.99,
      image: coffeeProductsImage,
      rating: 4.7,
      reviews: 45,
      badge: "Oferta",
      weight: null
    },
    {
      id: 4,
      name: "Molinillo de Café Premium",
      category: "equipos",
      description: "Molinillo de muelas cónicas, molienda uniforme garantizada",
      price: 189.99,
      originalPrice: 219.99,
      image: coffeeProductsImage,
      rating: 4.8,
      reviews: 78,
      badge: "Nuevo",
      weight: null
    },
    {
      id: 5,
      name: "Set de Catación Profesional",
      category: "accesorios",
      description: "Kit completo para catación: cucharas, tazas y guía de cata",
      price: 79.99,
      originalPrice: null,
      image: coffeeProductsImage,
      rating: 4.6,
      reviews: 32,
      badge: null,
      weight: null
    },
    {
      id: 6,
      name: "Tamper de Aluminio 58mm",
      category: "accesorios",
      description: "Tamper profesional de aluminio anodizado, perfecto para portafiltros de 58mm",
      price: 45.99,
      originalPrice: null,
      image: coffeeProductsImage,
      rating: 4.9,
      reviews: 156,
      badge: "Premium",
      weight: null
    },
    {
      id: 7,
      name: "Curso Online: Barismo Básico",
      category: "cursos",
      description: "Aprende desde casa con nuestro curso online completo de barismo",
      price: 149.99,
      originalPrice: 199.99,
      image: coffeeProductsImage,
      rating: 4.9,
      reviews: 234,
      badge: "Popular",
      weight: null
    },
    {
      id: 8,
      name: "Café Descafeinado Suave",
      category: "cafe",
      description: "Descafeinado por proceso natural, mantiene todo el sabor",
      price: 19.99,
      originalPrice: null,
      image: coffeeProductsImage,
      rating: 4.5,
      reviews: 67,
      badge: null,
      weight: "250g"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case "Bestseller": return "bg-coffee-gold text-coffee-dark";
      case "Oferta": return "bg-red-500 text-white";
      case "Nuevo": return "bg-green-500 text-white";
      case "Popular": return "bg-blue-500 text-white";
      case "Premium": return "bg-purple-500 text-white";
      default: return "bg-coffee-gold text-coffee-dark";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-dancing text-6xl md:text-8xl font-bold coffee-gold mb-8">
              Tienda
            </h1>
            <p className="text-xl md:text-2xl text-coffee-cream max-w-4xl mx-auto leading-relaxed">
              Descubre nuestra selección premium de cafés de especialidad, equipos profesionales 
              y accesorios cuidadosamente seleccionados para los amantes del café.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border mb-12">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-coffee-cream/60" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-coffee-cream/60 focus:ring-2 focus:ring-coffee-gold focus:border-transparent"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "golden" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="whitespace-nowrap"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-coffee-cream/80">
              Mostrando {filteredProducts.length} productos
              {selectedCategory !== "todos" && ` en ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant transition-smooth hover:scale-105 group"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${getBadgeColor(product.badge)}`}>
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="absolute bottom-3 right-3 flex flex-col items-end gap-1">
                    {product.originalPrice && (
                      <span className="text-coffee-cream/60 line-through text-sm bg-background/80 px-2 py-1 rounded">
                        ${product.originalPrice}
                      </span>
                    )}
                    <span className="bg-coffee-gold text-coffee-dark px-3 py-1 rounded-full text-lg font-bold">
                      ${product.price}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg coffee-gold mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    {product.weight && (
                      <span className="text-coffee-cream/60 text-sm mb-2 block">
                        {product.weight}
                      </span>
                    )}
                    <p className="text-coffee-cream/90 text-sm leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-coffee-gold text-coffee-gold" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-coffee-cream/60 text-sm">
                      ({product.reviews} reseñas)
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <Button 
                    variant="golden" 
                    className="w-full group-hover:shadow-glow transition-smooth"
                    size="sm"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Agregar al Carrito
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Package className="h-16 w-16 coffee-cream/40 mx-auto mb-4" />
              <h3 className="font-dancing text-2xl coffee-gold mb-2">
                No se encontraron productos
              </h3>
              <p className="text-coffee-cream/80 mb-6">
                Intenta con otros términos de búsqueda o categorías
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("todos");
                }}
              >
                Limpiar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Package className="h-12 w-12 coffee-gold mx-auto mb-4" />
              <h3 className="font-dancing text-2xl coffee-gold mb-2">Envío Gratis</h3>
              <p className="text-coffee-cream/80">En compras mayores a $50</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 coffee-gold mx-auto mb-4" />
              <h3 className="font-dancing text-2xl coffee-gold mb-2">Calidad Premium</h3>
              <p className="text-coffee-cream/80">Productos seleccionados por expertos</p>
            </div>
            <div className="text-center">
              <ShoppingCart className="h-12 w-12 coffee-gold mx-auto mb-4" />
              <h3 className="font-dancing text-2xl coffee-gold mb-2">Devoluciones</h3>
              <p className="text-coffee-cream/80">30 días para devoluciones</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;