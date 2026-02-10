import React from 'react';
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  category: string;
}

const ProductCard = ({ id, image, title, price, description, category }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id,
      name: title,
      price,
      description,
      image,
      category
    });
    toast(`${title} added to cart`, {
        description: "Check your cart to checkout",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
  };

  return (
    <div className="group border border-black/10 bg-soft-cream p-6 flex flex-col justify-between h-full hover:border-black transition-colors duration-300">
      <div className="relative mb-6 overflow-hidden aspect-square border-b border-black/5 bg-white">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 border border-black/5">
            <span className="font-mono text-[10px] uppercase tracking-widest">${price.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">{category}</span>
        <h3 className="font-sans-condensed text-3xl font-bold uppercase tracking-tight leading-none mb-2">
          {title}
        </h3>
        <p className="font-sans text-sm text-gray-600 line-clamp-2 mb-6">
          {description}
        </p>

        <Button
          onClick={handleAddToCart}
          variant="outline"
          className="w-full rounded-none border-black hover:bg-black hover:text-white transition-all duration-300 font-mono text-xs uppercase tracking-widest h-10"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
