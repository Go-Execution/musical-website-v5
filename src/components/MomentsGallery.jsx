import React, { useState } from 'react';
import { Maximize2, Camera, ArrowRight } from 'lucide-react';
import { siteData } from '../data/content';

export default function MomentsGallery({ onOpenLightbox }) {
  const { moments } = siteData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Performance', 'Studio', 'Education'];

  const filteredMoments = filter === 'All'
    ? moments
    : moments.filter(m => m.category.toLowerCase() === filter.toLowerCase() || (filter === 'Performance' && m.category === 'Live') || (filter === 'Education' && m.category === 'Piano'));

  return (
    <section id="moments" className="relative py-24 sm:py-32 bg-[#0b0a09] border-t border-[#c8a97e]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#c8a97e]/15">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="h-[1px] w-8 bg-[#c8a97e]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c8a97e] font-semibold">
                IN PERFORMANCE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f5f2eb] font-normal tracking-tight">
              Moments
            </h2>
          </div>

          <div className="flex items-center space-x-6 mt-6 md:mt-0 w-full md:w-auto overflow-x-auto">
            {/* Category Pills */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 bg-[#151310] p-1 rounded-full border border-white/5 overflow-x-auto scrollbar-none flex-nowrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 sm:px-3.5 py-1 text-[11px] sm:text-xs font-sans tracking-[0.14em] sm:tracking-[0.16em] uppercase rounded-full transition-all duration-300 flex-shrink-0 ${
                    filter === cat
                      ? 'bg-[#c8a97e] text-[#080706] font-semibold shadow-gold-glow-subtle'
                      : 'text-[#8f8a80] hover:text-[#f5f2eb]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <a
              href="#on-stage"
              className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-sans tracking-[0.2em] uppercase text-[#c8a97e] hover:text-[#dfc299] transition-colors"
            >
              <span>WATCH VIDEOS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6-Photo Masonry / Curated Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMoments.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#151310] border border-[#c8a97e]/20 cursor-pointer shadow-piano-depth aspect-[4/3] sm:aspect-[4/3.2]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center filter contrast-[1.05] group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/90 via-[#080706]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* View Fullscreen Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#080706]/70 backdrop-blur-md border border-[#c8a97e]/30 flex items-center justify-center text-[#dfc299] opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-sans tracking-[0.22em] uppercase text-[#c8a97e] font-medium block mb-1">
                  {item.category} · {item.location}
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-[#f5f2eb] font-normal leading-snug group-hover:text-[#dfc299] transition-colors">
                  {item.title}
                </h4>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
