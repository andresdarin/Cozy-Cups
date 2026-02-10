export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  // BEANS
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    price: 24.00,
    description: "Floral notes with hints of jasmine and citrus. Light roast.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Beans"
  },
  {
    id: 2,
    name: "Colombia Huila",
    price: 22.00,
    description: "Balanced body with caramel sweetness and nutty undertones. Medium roast.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Beans"
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    price: 25.00,
    description: "Full body with earthy, herbal flavors and low acidity. Dark roast.",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Beans"
  },
  {
    id: 4,
    name: "Early Birds Blend",
    price: 20.00,
    description: "Our signature house blend. Smooth, chocolatey, and perfect for daily brewing.",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Beans"
  },

  // EQUIPMENT
  {
    id: 5,
    name: "Ceramic V60 Dripper",
    price: 28.00,
    description: "Classic ceramic dripper for pour-over coffee. Size 02.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Equipment"
  },
  {
    id: 6,
    name: "Precision Scale",
    price: 45.00,
    description: "Digital scale with timer for precise brewing measurements.",
    image: "https://images.unsplash.com/photo-1517080315816-62734f664539?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Equipment"
  },
  {
    id: 7,
    name: "Chemex Classic",
    price: 48.00,
    description: "6-Cup pour-over glass coffeemaker. Elegant design for clear brews.",
    image: "https://images.unsplash.com/photo-1563242044-640a35e80d46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Equipment"
  },
  {
    id: 8,
    name: "Gooseneck Kettle",
    price: 75.00,
    description: "Variable temperature electric kettle for precise pouring.",
    image: "https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Equipment"
  },

  // MERCH
  {
    id: 9,
    name: "Early Birds Tote",
    price: 15.00,
    description: "Heavyweight canvas tote bag with our classic logo.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Merch"
  },
  {
    id: 10,
    name: "Barista Apron",
    price: 35.00,
    description: "Durable denim apron with leather straps and multiple pockets.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Merch"
  },
  {
    id: 11,
    name: "Enamel Mug",
    price: 12.00,
    description: "Classic camp-style enamel mug for your outdoor brews.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Merch"
  }
];
