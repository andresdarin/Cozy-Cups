import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";

const CartSidebar = () => {
  const { cartOpen, setCartOpen, items, removeItem, updateQuantity, subtotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setCartOpen(false);
    navigate("/checkout");
  };

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md bg-off-white border-l border-black/10 p-0 flex flex-col h-full z-[100] outline-none">
        <SheetHeader className="px-6 py-6 border-b border-black/10 flex flex-row items-center justify-between bg-white sticky top-0 z-10">
          <SheetTitle className="font-sans-condensed text-4xl uppercase tracking-tighter m-0">Your Bag</SheetTitle>
          {/* Close button is handled by Sheet primitive usually but adding custom if needed or relying on default */}
        </SheetHeader>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <span className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-6 block">Your cart is empty</span>
              <Button
                onClick={() => {
                    setCartOpen(false);
                    navigate("/shop");
                }}
                variant="outline"
                className="font-mono text-[10px] uppercase tracking-widest rounded-none border-black hover:bg-black hover:text-white transition-all px-8 h-10"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-8 p-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-24 h-24 bg-gray-100 flex-shrink-0 border border-black/5 overflow-hidden relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start gap-4">
                        <div>
                            <h4 className="font-sans-condensed text-xl uppercase tracking-tight leading-none mb-1">{item.name}</h4>
                            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">{item.category}</p>
                        </div>
                        <span className="font-mono text-sm font-bold">€{(item.price * item.quantity).toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-black/10 bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-black hover:text-white transition-colors disabled:opacity-30"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-mono text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-black hover:text-white transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2 border border-transparent hover:border-red-200"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-black/10 sticky bottom-0 z-10 shadow-[0_-5px_20px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Subtotal</span>
              <span className="font-sans-condensed text-3xl font-bold uppercase tracking-tight">€{subtotal.toFixed(2)}</span>
            </div>
            <p className="font-mono text-[9px] text-gray-400 mb-6 text-center uppercase tracking-widest">Shipping & taxes calculated at checkout</p>
            <Button
              onClick={handleCheckout}
              className="w-full rounded-none bg-black text-white hover:bg-gray-800 transition-colors h-14 font-mono text-xs uppercase tracking-[0.2em]"
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
