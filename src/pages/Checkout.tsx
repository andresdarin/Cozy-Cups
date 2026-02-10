import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const shippingCost = subtotal > 50 ? 0 : 15;
  const total = subtotal + shippingCost;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast({
        title: "Order Confirmed",
        description: "Thank you for your purchase! We'll start roasting soon.",
      });
      navigate("/");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-off-white font-sans text-black flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center pt-48 px-6 text-center">
            <h1 className="font-sans-condensed text-6xl uppercase mb-6 tracking-tight">Cart is Empty</h1>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-8">
                Your bag is empty. Start shopping to add items.
            </p>
            <Link to="/shop">
                <Button className="rounded-none border border-black bg-transparent text-black hover:bg-black hover:text-white px-8 h-12 font-mono text-xs uppercase tracking-widest transition-all">
                    Return to Shop
                </Button>
            </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off-white font-sans text-black selection:bg-black selection:text-white flex flex-col">
      <Navbar />

      <div className="flex-grow pt-48 pb-32 px-6 max-w-[1400px] mx-auto w-full">
        <h1 className="font-sans-condensed text-7xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-16 border-b border-black/10 pb-8">
            Checkout
        </h1>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Left Column: Form */}
            <div className="lg:col-span-7">
                <form onSubmit={handleCheckout} className="space-y-12">
                    {/* Contact Information */}
                    <section>
                        <h2 className="font-sans-condensed text-3xl uppercase tracking-tight mb-6">Contact Information</h2>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-gray-500">Email Address</Label>
                                <Input id="email" type="email" required placeholder="you@example.com" className="rounded-none border-black/20 focus-visible:ring-black h-12 bg-transparent" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="newsletter" className="accent-black w-4 h-4" />
                                <label htmlFor="newsletter" className="text-sm font-sans text-gray-600 cursor-pointer select-none">Email me with news and offers</label>
                            </div>
                        </div>
                    </section>

                    <Separator className="bg-black/10" />

                    {/* Shipping Address */}
                    <section>
                        <h2 className="font-sans-condensed text-3xl uppercase tracking-tight mb-6">Shipping Address</h2>
                        <div className="grid gap-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="firstName" className="font-mono text-xs uppercase tracking-widest text-gray-500">First Name</Label>
                                    <Input id="firstName" required className="rounded-none border-black/20 focus-visible:ring-black h-12 bg-transparent" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="lastName" className="font-mono text-xs uppercase tracking-widest text-gray-500">Last Name</Label>
                                    <Input id="lastName" required className="rounded-none border-black/20 focus-visible:ring-black h-12 bg-transparent" />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="address" className="font-mono text-xs uppercase tracking-widest text-gray-500">Address</Label>
                                <Input id="address" required className="rounded-none border-black/20 focus-visible:ring-black h-12 bg-transparent" />
                            </div>
                            <div className="grid grid-cols-3 gap-6">
                                <div className="grid gap-2 col-span-1">
                                    <Label htmlFor="zip" className="font-mono text-xs uppercase tracking-widest text-gray-500">Postal Code</Label>
                                    <Input id="zip" required className="rounded-none border-black/20 focus-visible:ring-black h-12 bg-transparent" />
                                </div>
                                <div className="grid gap-2 col-span-2">
                                    <Label htmlFor="city" className="font-mono text-xs uppercase tracking-widest text-gray-500">City</Label>
                                    <Input id="city" required className="rounded-none border-black/20 focus-visible:ring-black h-12 bg-transparent" />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone" className="font-mono text-xs uppercase tracking-widest text-gray-500">Phone</Label>
                                <Input id="phone" type="tel" className="rounded-none border-black/20 focus-visible:ring-black h-12 bg-transparent" />
                            </div>
                        </div>
                    </section>

                    <Separator className="bg-black/10" />

                     {/* Payment Method (Mock) */}
                     <section>
                        <h2 className="font-sans-condensed text-3xl uppercase tracking-tight mb-6">Payment</h2>
                        <div className="p-6 border border-black/10 bg-gray-50">
                            <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2">Secure Payment Gateway</p>
                            <p className="font-sans text-sm text-gray-600">All transactions are secure and encrypted. Redirecting to payment provider upon completion.</p>
                        </div>
                    </section>

                    <Button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full h-16 rounded-none bg-black text-white hover:bg-gray-900 font-mono text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                    >
                        {isProcessing ? (
                            <>
                                <Loader2 className="animate-spin" /> Processing
                            </>
                        ) : (
                            `Pay €${total.toFixed(2)}`
                        )}
                    </Button>
                </form>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-5">
                <div className="bg-white p-8 border border-black/5 sticky top-48">
                    <h2 className="font-sans-condensed text-3xl uppercase tracking-tight mb-8 pb-4 border-b border-black/10">Order Summary</h2>

                    <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {items.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                <div className="w-20 h-20 bg-gray-100 flex-shrink-0 border border-black/5 overflow-hidden">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-sans-condensed text-xl font-bold uppercase tracking-tight">{item.name}</h3>
                                    <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{item.category}</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="font-mono text-xs text-gray-600">Qty: {item.quantity}</span>
                                        <span className="font-mono text-sm">€{(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4 pt-6 border-t border-black/10 font-mono text-xs uppercase tracking-widest">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>€{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Shipping</span>
                            <span>{shippingCost === 0 ? "Free" : `€${shippingCost.toFixed(2)}`}</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center pt-6 mt-6 border-t border-black font-sans-condensed text-3xl font-bold uppercase tracking-tight">
                        <span>Total</span>
                        <span>€{total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
