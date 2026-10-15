import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Volume2, Sparkles } from 'lucide-react';
import { siteData } from '../data/content';

export default function Timeline({ isPlaying, onTogglePlay }) {
  const { timeline } = siteData;
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="timeline" className="relative py-24 sm:py-32 bg-[#0b0a09] border-t border-[#c8a97e]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Audio Pill & Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#c8a97e]/15">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="h-[1px] w-8 bg-[#c8a97e]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c8a97e] font-semibold">
                HER STORY
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f5f2eb] font-normal tracking-tight">
              A life in music
            </h2>
          </div>

          <div className="flex items-center space-x-4 mt-6 md:mt-0">
            {/* Audio Dock Status Pill */}
            <button
              onClick={onTogglePlay}
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#151310] border border-[#c8a97e]/30 text-xs font-sans tracking-wider text-[#dfc299] hover:border-[#c8a97e] transition-colors"
            >
              <Volume2 className="w-3.5 h-3.5 text-[#c8a97e]" />
              <span className="truncate max-w-[170px]">
                {isPlaying ? "Playing: Le Rêve" : "Le Rêve – The Dream"}
              </span>
            </button>

            {/* Slider Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-[#c8a97e]/30 bg-[#151310] text-[#c8a97e] hover:border-[#c8a97e] hover:bg-[#c8a97e] hover:text-[#080706] flex items-center justify-center transition-all duration-300 focus:outline-none"
                aria-label="Scroll timeline back"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border border-[#c8a97e]/30 bg-[#151310] text-[#c8a97e] hover:border-[#c8a97e] hover:bg-[#c8a97e] hover:text-[#080706] flex items-center justify-center transition-all duration-300 focus:outline-none"
                aria-label="Scroll timeline forward"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Timeline Track */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 sm:space-x-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {timeline.map((item, idx) => (
            <div
              key={item.year + idx}
              className="min-w-[280px] sm:min-w-[320px] max-w-[340px] flex-shrink-0 snap-start rounded-2xl bg-[#0e0d0b] border border-[#c8a97e]/20 p-6 sm:p-7 relative group hover:border-[#c8a97e]/50 hover:bg-[#151310] transition-all duration-300 shadow-piano-depth"
            >
              {/* Year / Location Node */}
              <div className="flex items-baseline justify-between mb-4 border-b border-white/5 pb-3">
                <span className="font-serif text-3xl sm:text-4xl text-[#dfc299] font-normal group-hover:text-[#f5f2eb] transition-colors">
                  {item.year}
                </span>
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#c8a97e] font-semibold bg-[#c8a97e]/10 px-2 py-0.5 rounded-full border border-[#c8a97e]/20">
                  {item.period}
                </span>
              </div>

              {/* Title */}
              <h4 className="font-serif text-lg sm:text-xl text-[#f5f2eb] font-medium mb-3">
                {item.title}
              </h4>

              {/* Story Copy */}
              <p className="font-sans text-xs sm:text-sm text-[#d6d1c7]/80 leading-relaxed font-light">
                {item.text}
              </p>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-sans text-[#8f8a80]">
                <span>Milestone {idx + 1} of {timeline.length}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]/50 group-hover:bg-[#c8a97e]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
