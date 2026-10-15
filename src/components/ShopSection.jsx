import React from 'react';
import { ShoppingBag, Check, Sparkles } from 'lucide-react';
import { siteData } from '../data/content';

export default function ShopSection({ onAddToCart, addedItemId }) {
  const { shop } = siteData;

  return (
    <section id="shop" className="relative py-24 sm:py-32 bg-[#0b0a09] border-t border-[#c8a97e]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#c8a97e]/15">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="h-[1px] w-8 bg-[#c8a97e]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c8a97e] font-semibold">
                ATELIER &amp; EDITIONS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f5f2eb] font-normal tracking-tight">
              Christie Kanska Shop
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#8f8a80] mt-4 md:mt-0 max-w-sm">
            Official recordings, limited edition vinyl pressings, children’s publications and studio sessions.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {shop.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#0e0d0b] border border-[#c8a97e]/20 hover:border-[#c8a97e]/50 transition-all duration-300 p-5 flex flex-col justify-between shadow-piano-depth group"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-[#151310] border border-white/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#080706]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-sans tracking-widest text-[#dfc299] uppercase font-semibold border border-[#c8a97e]/20">
                    {item.category}
                  </span>
                </div>

                {/* Details */}
                <h3 className="font-serif text-lg sm:text-xl text-[#f5f2eb] font-normal group-hover:text-[#dfc299] transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="font-sans text-xs text-[#8f8a80] leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Price & Add to Cart Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-serif text-xl text-[#dfc299] font-medium">
                  ${item.price}
                </span>

                <button
                  onClick={() => onAddToCart(item)}
                  className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase font-semibold transition-all flex items-center space-x-1.5 ${
                    addedItemId === item.id
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-[#c8a97e] text-[#080706] hover:bg-[#dfc299] active:scale-95 shadow-gold-glow-subtle'
                  }`}
                >
                  {addedItemId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
