import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const CartSidebar = () => {
  const { cartOpen, setCartOpen, items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="w-full sm:max-w-md bg-white border-l border-black/10 p-0 flex flex-col h-full z-[100]">
        <SheetHeader className="px-6 py-4 border-b border-black/10 flex flex-row items-center justify-between">
          <SheetTitle className="font-sans-condensed text-3xl uppercase tracking-tighter">Your Cart</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Your cart is empty</p>
              <Button
                onClick={() => setCartOpen(false)}
                variant="outline"
                className="font-mono text-xs uppercase tracking-widest rounded-none border-black hover:bg-black hover:text-white transition-colors"
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="w-20 h-20 bg-soft-cream flex-shrink-0 border border-black/5 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-sans-condensed text-lg uppercase tracking-tight leading-none">{item.name}</h4>
                        <span className="font-mono text-xs font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">{item.category}</p>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border border-black/10">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-black/5 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 font-mono text-xs w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-black/5 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {items.length > 0 && (
          <div className="p-6 bg-soft-cream border-t border-black/10">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-xs uppercase tracking-widest">Subtotal</span>
              <span className="font-sans-condensed text-2xl font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-mono text-[10px] text-gray-500 mb-6 text-center">Shipping & taxes calculated at checkout</p>
            <Button
              className="w-full rounded-none bg-black text-white hover:bg-gray-800 transition-colors h-12 font-mono text-sm uppercase tracking-widest"
            >
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
