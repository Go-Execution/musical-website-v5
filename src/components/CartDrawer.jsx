import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutComplete(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c8a97e', '#dfc299', '#f5f2eb', '#8c714e']
      });
    }, 1000);
  };

  const handleReset = () => {
    setCheckoutComplete(false);
    onClearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e0d0b] border-l border-[#c8a97e]/20 text-[#d6d1c7] shadow-2xl flex flex-col justify-between p-6 sm:p-8">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/5">
            <div className="flex items-center space-x-2.5">
              <ShoppingBag className="w-5 h-5 text-[#c8a97e]" />
              <h3 className="font-serif text-xl sm:text-2xl text-[#f5f2eb] font-normal">
                Your Bag
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#8f8a80] hover:text-[#f5f2eb] transition-colors focus:outline-none"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto py-6 space-y-4">
            {checkoutComplete ? (
              <div className="py-12 text-center flex flex-col items-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#c8a97e]/15 border border-[#c8a97e] flex items-center justify-center text-[#dfc299] shadow-gold-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl text-[#f5f2eb]">
                  Order Placed Successfully
                </h4>
                <p className="font-sans text-xs text-[#8f8a80] max-w-xs leading-relaxed">
                  Thank you for supporting Christie Kanska's artistic journey. A confirmation receipt has been sent to your email.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#c8a97e] text-[#080706] text-xs font-sans tracking-widest font-semibold uppercase"
                >
                  Continue Browsing
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="py-16 text-center text-[#8f8a80] space-y-3">
                <ShoppingBag className="w-10 h-10 mx-auto stroke-1 opacity-40 text-[#c8a97e]" />
                <p className="font-serif text-lg text-[#f5f2eb]">Your bag is currently empty</p>
                <p className="text-xs">Explore vinyl, publications and studio sessions.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-[#151310] border border-white/5 flex items-center justify-between space-x-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover bg-black flex-shrink-0 border border-[#c8a97e]/20"
                  />

                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif text-sm text-[#f5f2eb] truncate font-medium">
                      {item.name}
                    </h5>
                    <p className="font-sans text-xs text-[#dfc299] mt-0.5 font-medium">
                      ${item.price}
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded bg-[#25221d] flex items-center justify-center text-xs hover:bg-[#c8a97e] hover:text-[#080706] transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-sans font-medium px-1">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded bg-[#25221d] flex items-center justify-center text-xs hover:bg-[#c8a97e] hover:text-[#080706] transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-[#8f8a80] hover:text-red-400 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {!checkoutComplete && cartItems.length > 0 && (
            <div className="pt-6 border-t border-white/5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-sans text-xs tracking-wider uppercase text-[#8f8a80]">Subtotal</span>
                <span className="font-serif text-xl text-[#f5f2eb] font-semibold">${subtotal.toFixed(2)}</span>
              </div>

              <p className="text-[10px] font-sans text-[#8f8a80]">
                Taxes and shipping calculated at checkout. Worldwide delivery available.
              </p>

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#c8a97e] via-[#dfc299] to-[#c8a97e] text-[#080706] font-sans text-xs tracking-[0.2em] font-semibold uppercase shadow-gold-glow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
              >
                <span>{isProcessing ? 'PROCESSING...' : 'PROCEED TO CHECKOUT'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
