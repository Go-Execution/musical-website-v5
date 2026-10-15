import React from 'react';
import { ArrowUpRight, Bell, Sparkles } from 'lucide-react';
import { siteData } from '../data/content';

export default function WhatsComing({ onOpenUpdates }) {
  const { whatsComing } = siteData;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'COMING SOON':
        return 'bg-[#c8a97e]/15 text-[#dfc299] border-[#c8a97e]/40';
      case 'IN DEVELOPMENT':
        return 'bg-blue-950/40 text-blue-200 border-blue-400/30';
      case 'IN PRODUCTION':
        return 'bg-amber-950/40 text-amber-200 border-amber-400/30';
      default:
        return 'bg-[#151310] text-[#d6d1c7] border-white/10';
    }
  };

  return (
    <section id="whats-coming" className="relative py-24 sm:py-32 bg-[#080706]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Mission */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            
            <div className="flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-8 bg-[#c8a97e]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c8a97e] font-semibold">
                ON THE PROGRAMME
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f5f2eb] font-normal leading-tight mb-6">
              What’s<br />
              <span className="italic text-[#dfc299]">coming</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#d6d1c7]/80 leading-relaxed font-light mb-8 max-w-md">
              New music, a story for children and a musical for the stage — follow each project as it takes shape in the atelier.
            </p>

            <button
              onClick={onOpenUpdates}
              className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.22em] uppercase font-semibold text-[#c8a97e] hover:text-[#dfc299] transition-colors"
            >
              <span>GET UPDATES FIRST</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

          </div>

          {/* Right Column: Project Items with Status Badges */}
          <div className="lg:col-span-7 space-y-4">
            {whatsComing.map((item) => (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-2xl bg-[#0e0d0b] border border-[#c8a97e]/20 hover:border-[#c8a97e]/50 hover:bg-[#151310] transition-all duration-300 shadow-piano-depth flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] font-sans tracking-[0.2em] text-[#8f8a80] uppercase">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#f5f2eb] group-hover:text-[#dfc299] transition-colors font-medium">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#8f8a80] leading-relaxed">
                    {item.note}
                  </p>
                </div>

                <div className="flex sm:flex-col sm:items-end justify-between items-center pt-2 sm:pt-0">
                  <span
                    className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase border ${getStatusBadge(
                      item.status
                    )}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    <span>{item.status}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
