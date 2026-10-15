import React from 'react';
import { X, MapPin } from 'lucide-react';

export default function LightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
      {/* Dark Blur Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#080706]/95 backdrop-blur-xl transition-opacity cursor-pointer"
      />

      {/* Modal Card */}
      <div className="relative z-10 max-w-4xl w-full bg-[#0e0d0b] border border-[#c8a97e]/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#080706]/80 border border-[#c8a97e]/40 text-[#dfc299] hover:bg-[#c8a97e] hover:text-[#080706] flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close photo preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* High-Res Photo Display */}
        <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-black overflow-hidden flex items-center justify-center">
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-contain filter contrast-[1.05]"
          />
        </div>

        {/* Caption Bar */}
        <div className="p-6 sm:p-8 bg-[#0e0d0b] border-t border-[#c8a97e]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[10px] font-sans tracking-[0.25em] uppercase text-[#c8a97e] mb-1">
              <span>{item.category}</span>
              <span>·</span>
              <span className="flex items-center">
                <MapPin className="w-3 h-3 mr-0.5 inline" />
                {item.location}
              </span>
            </div>
            <h3 className="font-serif text-2xl text-[#f5f2eb] font-normal">
              {item.title}
            </h3>
          </div>

          <span className="text-xs font-sans text-[#8f8a80] tracking-wider">
            Christie Kanska Archives
          </span>
        </div>

      </div>
    </div>
  );
}
