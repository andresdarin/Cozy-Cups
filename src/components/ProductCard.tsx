import React from 'react';
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

const ProductCard = ({ image, title, price, description }: ProductCardProps) => {
  return (
    <div className="group border border-black/10 bg-soft-cream p-6 flex flex-col justify-between h-full hover:border-black transition-colors duration-300">
      <div className="relative mb-6 overflow-hidden aspect-square border-b border-black/5">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 border border-black/5">
            <span className="font-mono text-[10px] uppercase tracking-widest">{price}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Single Origin</span>
        <h3 className="font-sans-condensed text-3xl font-bold uppercase tracking-tight leading-none mb-2">
          {title}
        </h3>
        <p className="font-sans text-sm text-gray-600 line-clamp-2 mb-6">
          {description}
        </p>

        <Button
          variant="outline"
          className="w-full rounded-none border-black hover:bg-black hover:text-white transition-colors font-mono text-xs uppercase tracking-widest h-10"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
