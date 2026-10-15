import React, { useState, useRef } from 'react';
import { ArrowUpRight, Disc3, Sparkles } from 'lucide-react';
import { siteData } from '../data/content';

export default function Chapters() {
  const { chapters } = siteData;
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section
      id="work"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 sm:py-32 bg-[#0b0a09] border-t border-[#c8a97e]/15 overflow-hidden"
    >
      {/* Floating Pop-Out Thumbnail following cursor or active row */}
      {hoveredIdx !== null && chapters[hoveredIdx] && (
        <div
          className="hidden lg:pointer-events-none lg:block fixed z-40 transition-transform duration-200 ease-out"
          style={{
            left: `${mousePos.x ? 0 : 0}px`,
            top: `${mousePos.y ? 0 : 0}px`,
            transform: `translate3d(${mousePos.x + 35}px, ${mousePos.y - 120}px, 0)`,
            position: 'absolute',
          }}
        >
          <div className="relative group/thumb animate-in fade-in zoom-in-95 duration-300">
            {/* Pop-Out Album Thumbnail Card */}
            <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-2 border-[#c8a97e]/60 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.9),0_0_35px_rgba(200,169,126,0.3)] bg-[#151310] transform rotate-2">
              <img
                src={chapters[hoveredIdx].image}
                alt={chapters[hoveredIdx].title}
                className="w-full h-full object-cover filter contrast-[1.08] brightness-[1.02]"
              />

              {/* Gloss & Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/10" />

              {/* Vinyl Disc Peeking out from Album on Music hover */}
              {chapters[hoveredIdx].id === 'music' && (
                <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-[#111] border border-[#c8a97e]/50 flex items-center justify-center shadow-lg animate-spin" style={{ animationDuration: '8s' }}>
                  <Disc3 className="w-8 h-8 text-[#dfc299]" />
                </div>
              )}

              {/* Subtitle Badge */}
              <div className="absolute bottom-2.5 left-3 right-3">
                <span className="font-cinzel text-[9px] tracking-[0.25em] text-[#dfc299] uppercase font-bold block truncate drop-shadow">
                  {chapters[hoveredIdx].subtitle}
                </span>
                <span className="font-sans text-[10px] text-[#f5f2eb] font-medium truncate block">
                  {chapters[hoveredIdx].title} Collection
                </span>
              </div>
            </div>

            {/* Glowing Aura Accent */}
            <div className="absolute -inset-2 bg-[#c8a97e]/20 rounded-3xl blur-xl -z-10" />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-[#c8a97e]/15">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-8 bg-[#c8a97e]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c8a97e] font-semibold">
                THE WORK
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f5f2eb] font-normal leading-[1.12]">
              One artist, <span className="italic text-[#dfc299]">five chapters</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="font-sans text-sm sm:text-base text-[#d6d1c7]/80 leading-relaxed font-light">
              Performer, recording artist, teacher, creator and producer — hover to reveal each chapter’s editions and archives.
            </p>
          </div>
        </div>

        {/* Chapters Accordion / List Rows */}
        <div className="divide-y divide-[#c8a97e]/15">
          {chapters.map((ch, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <a
                key={ch.id}
                href={ch.target}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 relative px-4 sm:px-6 rounded-2xl ${
                  isHovered ? 'bg-[#151310]/80 shadow-piano-depth' : 'hover:bg-[#151310]/40'
                }`}
              >
                {/* Left Title with Roman Index */}
                <div className="flex items-center space-x-6 sm:space-x-8 mb-3 md:mb-0">
                  <span className={`font-cinzel text-xs tracking-[0.2em] transition-colors ${
                    isHovered ? 'text-[#dfc299] font-bold' : 'text-[#8f8a80]'
                  }`}>
                    {ch.number}
                  </span>

                  <h3 className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-300 ${
                    isHovered ? 'text-[#dfc299] translate-x-2' : 'text-[#f5f2eb]'
                  }`}>
                    {ch.title}
                  </h3>

                  {/* Pop-Out Album Thumbnail Pill on Hover (Visible on Mobile & Tablet, and inline reinforcement on Desktop) */}
                  <div
                    className={`transition-all duration-500 ease-out overflow-hidden flex items-center space-x-3 ${
                      isHovered
                        ? 'opacity-100 max-w-xs scale-100 ml-4'
                        : 'opacity-0 max-w-0 scale-75 pointer-events-none'
                    }`}
                  >
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-[#c8a97e] shadow-gold-glow flex-shrink-0 bg-[#0e0d0b]">
                      <img
                        src={ch.image}
                        alt={ch.title}
                        className="w-full h-full object-cover"
                      />
                      {ch.id === 'music' && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Disc3 className="w-5 h-5 text-[#dfc299] animate-spin" style={{ animationDuration: '6s' }} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Description & Arrow */}
                <div className="flex items-center justify-between md:justify-end space-x-6 lg:space-x-12 pl-12 md:pl-0">
                  <p className={`font-sans text-xs sm:text-sm transition-colors max-w-sm ${
                    isHovered ? 'text-[#f5f2eb]' : 'text-[#8f8a80]'
                  }`}>
                    {ch.desc}
                  </p>

                  <div className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isHovered
                      ? 'border-[#c8a97e] bg-[#c8a97e] text-[#080706] scale-110 shadow-gold-glow-subtle'
                      : 'border-[#c8a97e]/25 text-[#c8a97e] group-hover:border-[#c8a97e]/60'
                  }`}>
                    <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
